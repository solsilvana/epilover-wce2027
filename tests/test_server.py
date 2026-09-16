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
        "categories": ["communicable", "environment_climate"],
        "priority_topic": "Climate-informed dengue surveillance",
        "affected_population": "Urban communities",
        "challenge_stage": "data",
        "collaboration": "Comparable climate and surveillance data",
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
        self.assertEqual(rows[0]["categories"], ["communicable", "environment_climate"])

    def test_duplicate_email_is_rejected(self):
        payload = valid_payload()
        server.insert_response(self.db_path, payload)
        with self.assertRaises(server.sqlite3.IntegrityError):
            server.insert_response(self.db_path, payload)

    def test_rejects_too_many_categories(self):
        payload = valid_payload()
        payload["categories"] = ["communicable", "ncd", "amr", "one_health"]
        with self.assertRaisesRegex(ValueError, "invalid_categories"):
            server.validate_response(payload)

    def test_aggregate_counts_categories_and_countries(self):
        rows = server.demo_rows()
        result = server.aggregate(rows, True)
        self.assertEqual(result["total"], 32)
        self.assertGreaterEqual(result["countries"], 10)
        self.assertTrue(result["top_category"])

    def test_csv_has_utf8_bom_and_expected_columns(self):
        server.insert_response(self.db_path, valid_payload())
        export = server.csv_bytes(server.load_real_rows(self.db_path))
        self.assertTrue(export.startswith(b"\xef\xbb\xbf"))
        self.assertIn(b"respondent_id", export)
        self.assertIn("Medellín".encode("utf-8"), export)


if __name__ == "__main__":
    unittest.main()
