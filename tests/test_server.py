import tempfile
import unittest
from pathlib import Path

import server


def valid_payload():
    return {
        "email": "person@example.org",
        "country": "CO",
        "admin1": "Antioquia",
        "city": "Medellín",
        "role": "epidemiology",
        "organization": "Epidemiology institute",
        "work_scope": "subnational",
        "thematic_axis": "health_topics",
        "categories": ["infectious_diseases", "climate_health"],
        "priority_topic": "Climate-informed dengue surveillance",
        "affected_population": "Urban communities",
        "challenge_stage": "data",
        "collaboration": "Comparable climate and surveillance data",
        "data_availability": "open_public",
        "data_reference_type": "data_catalog",
        "data_source_name": "National open data portal",
        "data_source_url": "https://example.org/data",
        "data_source_notes": "Annual data with municipal coverage",
        "language": "es",
        "consent": True,
    }


class SurveyTests(unittest.TestCase):
    def setUp(self):
        self.tempdir = tempfile.TemporaryDirectory()
        self.db_path = Path(self.tempdir.name) / "responses.db"
        server.init_db(self.db_path)

    def tearDown(self):
        self.tempdir.cleanup()

    def test_insert_and_load_response(self):
        response_id = server.insert_response(self.db_path, valid_payload())
        self.assertTrue(response_id.startswith("EPI-"))
        rows = server.load_real_rows(self.db_path)
        self.assertEqual(len(rows), 1)
        self.assertEqual(rows[0]["country"], "CO")
        self.assertEqual(rows[0]["categories"], ["infectious_diseases", "climate_health"])
        self.assertEqual(rows[0]["data_availability"], "open_public")

    def test_duplicate_email_is_rejected(self):
        payload = valid_payload()
        server.insert_response(self.db_path, payload)
        with self.assertRaises(server.sqlite3.IntegrityError):
            server.insert_response(self.db_path, payload)

    def test_rejects_too_many_categories(self):
        payload = valid_payload()
        payload["categories"] = ["infectious_diseases", "chronic_diseases", "cancer", "climate_health"]
        with self.assertRaisesRegex(ValueError, "invalid_categories"):
            server.validate_response(payload)

    def test_aggregate_counts_categories_and_countries(self):
        rows = server.demo_rows()
        result = server.aggregate(rows, True)
        self.assertEqual(result["total"], 32)
        self.assertGreaterEqual(result["countries"], 10)
        self.assertTrue(result["top_category"])
        self.assertGreater(result["data_identified"], 0)

    def test_csv_has_utf8_bom_and_expected_columns(self):
        server.insert_response(self.db_path, valid_payload())
        export = server.csv_bytes(server.load_real_rows(self.db_path))
        self.assertTrue(export.startswith(b"\xef\xbb\xbf"))
        self.assertIn(b"respondent_id", export)
        self.assertIn(b"data_availability", export)
        self.assertIn("Medellín".encode("utf-8"), export)

    def test_rejects_topic_outside_selected_axis(self):
        payload = valid_payload()
        payload["categories"] = ["ai_data_science"]
        with self.assertRaisesRegex(ValueError, "invalid_thematic_axis"):
            server.validate_response(payload)

    def test_rejects_invalid_source_url(self):
        payload = valid_payload()
        payload["data_source_url"] = "example.org/data"
        with self.assertRaisesRegex(ValueError, "invalid_url"):
            server.validate_response(payload)


if __name__ == "__main__":
    unittest.main()
