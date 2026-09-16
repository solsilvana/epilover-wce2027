"""EpiLover WCE 2027 survey and dashboard.

Dependency-free Python web application using the standard library and SQLite.
"""

from __future__ import annotations

import argparse
import base64
import csv
import hashlib
import hmac
import io
import json
import os
import re
import secrets
import sqlite3
import sys
import time
import urllib.parse
import webbrowser
from collections import Counter
from contextlib import closing
from datetime import datetime, timezone
from http import HTTPStatus
from http.cookies import SimpleCookie
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any


BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = BASE_DIR / "static"
DATA_DIR = BASE_DIR / "data"
DEFAULT_DB = DATA_DIR / "responses.db"
MAX_BODY = 32_000

CATEGORIES = {
    "communicable", "ncd", "maternal_child", "mental_health", "injuries_violence",
    "environment_climate", "food_nutrition", "occupational", "health_systems",
    "social_determinants", "one_health", "emergencies", "amr", "methods_data",
}
ROLES = {"research", "epidemiology", "clinical", "government", "community", "student", "ngo", "other"}
SCOPES = {"local", "subnational", "national", "regional", "global"}
STAGES = {"define", "data", "analysis", "implementation", "evaluation", "communication"}
LANGUAGES = {"es", "en", "pt", "fr"}
EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def connect(db_path: Path) -> sqlite3.Connection:
    connection = sqlite3.connect(db_path, timeout=10)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON").close()
    connection.execute("PRAGMA journal_mode = WAL").close()
    return connection


def init_db(db_path: Path) -> None:
    db_path.parent.mkdir(parents=True, exist_ok=True)
    with closing(connect(db_path)) as db:
        db.executescript(
            """
            CREATE TABLE IF NOT EXISTS responses (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                respondent_id TEXT NOT NULL UNIQUE,
                submitted_at TEXT NOT NULL,
                email TEXT NOT NULL,
                email_normalized TEXT NOT NULL UNIQUE,
                country TEXT NOT NULL,
                admin1 TEXT NOT NULL,
                city TEXT NOT NULL,
                role TEXT NOT NULL,
                organization TEXT NOT NULL DEFAULT '',
                work_scope TEXT NOT NULL,
                categories_json TEXT NOT NULL,
                priority_topic TEXT NOT NULL,
                affected_population TEXT NOT NULL DEFAULT '',
                challenge_stage TEXT NOT NULL,
                collaboration TEXT NOT NULL DEFAULT '',
                language TEXT NOT NULL,
                consent INTEGER NOT NULL CHECK (consent = 1)
            );
            CREATE INDEX IF NOT EXISTS idx_responses_country ON responses(country);
            CREATE INDEX IF NOT EXISTS idx_responses_submitted ON responses(submitted_at);
            """
        )
        db.commit()


def clean_text(value: Any, maximum: int, required: bool = False) -> str:
    text = " ".join(str(value or "").strip().split())
    if required and not text:
        raise ValueError("required")
    if len(text) > maximum:
        raise ValueError("too_long")
    return text


def validate_response(payload: dict[str, Any]) -> dict[str, Any]:
    email = clean_text(payload.get("email"), 254, True).lower()
    if not EMAIL_RE.match(email):
        raise ValueError("invalid_email")
    country = clean_text(payload.get("country"), 2, True).upper()
    if not re.fullmatch(r"[A-Z]{2}", country):
        raise ValueError("invalid_country")
    categories = payload.get("categories")
    if not isinstance(categories, list) or not 1 <= len(categories) <= 3:
        raise ValueError("invalid_categories")
    categories = list(dict.fromkeys(str(item) for item in categories))
    if any(item not in CATEGORIES for item in categories):
        raise ValueError("invalid_categories")
    role = clean_text(payload.get("role"), 40, True)
    scope = clean_text(payload.get("work_scope"), 40, True)
    stage = clean_text(payload.get("challenge_stage"), 40, True)
    language = clean_text(payload.get("language"), 2, True)
    if role not in ROLES or scope not in SCOPES or stage not in STAGES or language not in LANGUAGES:
        raise ValueError("invalid_choice")
    if payload.get("consent") is not True:
        raise ValueError("consent_required")
    return {
        "email": email,
        "email_normalized": email,
        "country": country,
        "admin1": clean_text(payload.get("admin1"), 100, True),
        "city": clean_text(payload.get("city"), 100, True),
        "role": role,
        "organization": clean_text(payload.get("organization"), 150),
        "work_scope": scope,
        "categories_json": json.dumps(categories, ensure_ascii=False),
        "priority_topic": clean_text(payload.get("priority_topic"), 500, True),
        "affected_population": clean_text(payload.get("affected_population"), 250),
        "challenge_stage": stage,
        "collaboration": clean_text(payload.get("collaboration"), 500),
        "language": language,
        "consent": 1,
    }


def insert_response(db_path: Path, payload: dict[str, Any]) -> str:
    item = validate_response(payload)
    respondent_id = "EPI-" + secrets.token_hex(4).upper()
    fields = ["respondent_id", "submitted_at", *item.keys()]
    values = [respondent_id, utc_now(), *item.values()]
    placeholders = ",".join("?" for _ in fields)
    with closing(connect(db_path)) as db:
        db.execute(
            f"INSERT INTO responses ({','.join(fields)}) VALUES ({placeholders})",
            values,
        )
        db.commit()
    return respondent_id


def load_real_rows(db_path: Path) -> list[dict[str, Any]]:
    with closing(connect(db_path)) as db:
        rows = [dict(row) for row in db.execute("SELECT * FROM responses ORDER BY submitted_at DESC")]
    for row in rows:
        row["categories"] = json.loads(row.pop("categories_json"))
    return rows


def demo_rows() -> list[dict[str, Any]]:
    countries = ["CO", "BR", "MX", "CA", "FR", "ZA", "KE", "IN", "PT", "CL", "GB", "AU"]
    categories = [
        ["communicable", "amr"], ["ncd", "food_nutrition"], ["environment_climate", "one_health"],
        ["mental_health", "social_determinants"], ["maternal_child", "health_systems"],
        ["methods_data", "emergencies"], ["occupational"], ["injuries_violence"],
    ]
    topics = [
        "Early warning for dengue and climate-sensitive outbreaks",
        "Equitable access to hypertension diagnosis and care",
        "Antimicrobial resistance surveillance across human and animal health",
        "Youth mental health after displacement and emergencies",
        "Maternal mortality inequities in rural territories",
        "Interoperable, timely and ethical epidemiological data",
        "Heat exposure and informal workers",
        "Urban violence prevention using local data",
    ]
    rows: list[dict[str, Any]] = []
    for index in range(32):
        rows.append({
            "respondent_id": f"DEMO-{index + 1:03}",
            "submitted_at": f"2026-09-{(index % 14) + 1:02}T{8 + index % 10:02}:00:00+00:00",
            "country": countries[index % len(countries)],
            "admin1": "Demo region",
            "city": "Demo city",
            "role": list(ROLES)[index % len(ROLES)],
            "organization": "Demo organization",
            "work_scope": list(SCOPES)[index % len(SCOPES)],
            "categories": categories[index % len(categories)],
            "priority_topic": topics[index % len(topics)],
            "affected_population": "Priority populations",
            "challenge_stage": list(STAGES)[index % len(STAGES)],
            "collaboration": "Open to cross-country collaboration",
            "language": list(LANGUAGES)[index % len(LANGUAGES)],
        })
    return rows


def aggregate(rows: list[dict[str, Any]], demo: bool) -> dict[str, Any]:
    category_counts: Counter[str] = Counter()
    for row in rows:
        category_counts.update(row["categories"])
    country_counts = Counter(row["country"] for row in rows)
    role_counts = Counter(row["role"] for row in rows)
    scope_counts = Counter(row["work_scope"] for row in rows)
    stage_counts = Counter(row["challenge_stage"] for row in rows)
    language_counts = Counter(row["language"] for row in rows)
    recent = [
        {
            "id": row["respondent_id"], "date": row["submitted_at"][:10], "country": row["country"],
            "categories": row["categories"], "topic": row["priority_topic"],
        }
        for row in rows[:8]
    ]
    return {
        "demo": demo,
        "total": len(rows),
        "countries": len(country_counts),
        "top_category": category_counts.most_common(1)[0][0] if category_counts else None,
        "categories": dict(category_counts.most_common()),
        "country_counts": dict(country_counts.most_common()),
        "roles": dict(role_counts.most_common()),
        "scopes": dict(scope_counts.most_common()),
        "stages": dict(stage_counts.most_common()),
        "languages": dict(language_counts.most_common()),
        "recent": recent,
    }


def csv_bytes(rows: list[dict[str, Any]]) -> bytes:
    output = io.StringIO(newline="")
    fields = [
        "respondent_id", "submitted_at", "email", "country", "admin1", "city", "role",
        "organization", "work_scope", "categories", "priority_topic", "affected_population",
        "challenge_stage", "collaboration", "language",
    ]
    writer = csv.DictWriter(output, fieldnames=fields, extrasaction="ignore")
    writer.writeheader()
    for row in rows:
        item = dict(row)
        item["categories"] = " | ".join(item.get("categories", []))
        writer.writerow(item)
    return output.getvalue().encode("utf-8-sig")


class AppHandler(BaseHTTPRequestHandler):
    server_version = "EpiLover/1.0"

    @property
    def app(self) -> "AppServer":
        return self.server  # type: ignore[return-value]

    def log_message(self, format: str, *args: Any) -> None:
        sys.stdout.write("%s - %s\n" % (self.log_date_time_string(), format % args))

    def end_headers(self) -> None:
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("X-Frame-Options", "DENY")
        self.send_header("Referrer-Policy", "same-origin")
        self.send_header("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
        self.send_header("Content-Security-Policy", "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; base-uri 'none'; frame-ancestors 'none'")
        super().end_headers()

    def send_json(self, data: Any, status: int = 200, headers: dict[str, str] | None = None) -> None:
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        for key, value in (headers or {}).items():
            self.send_header(key, value)
        self.end_headers()
        self.wfile.write(body)

    def read_json(self) -> dict[str, Any]:
        length = int(self.headers.get("Content-Length", "0"))
        if length <= 0 or length > MAX_BODY:
            raise ValueError("invalid_body")
        data = json.loads(self.rfile.read(length).decode("utf-8"))
        if not isinstance(data, dict):
            raise ValueError("invalid_body")
        return data

    def same_origin(self) -> bool:
        origin = self.headers.get("Origin")
        if not origin:
            return True
        parsed = urllib.parse.urlparse(origin)
        return parsed.netloc == self.headers.get("Host") and parsed.scheme in {"http", "https"}

    def authorized(self) -> bool:
        cookie = SimpleCookie(self.headers.get("Cookie", ""))
        token = cookie.get("epilover_admin")
        return bool(token and self.app.verify_token(token.value))

    def serve_file(self, path: Path, content_type: str) -> None:
        if not path.is_file() or STATIC_DIR not in path.resolve().parents:
            self.send_error(HTTPStatus.NOT_FOUND)
            return
        body = path.read_bytes()
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "public, max-age=3600")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        query = urllib.parse.parse_qs(parsed.query)
        if path == "/":
            return self.serve_file(STATIC_DIR / "index.html", "text/html; charset=utf-8")
        if path.startswith("/static/"):
            relative = Path(path.removeprefix("/static/"))
            suffixes = {".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".png": "image/png", ".svg": "image/svg+xml"}
            return self.serve_file(STATIC_DIR / relative, suffixes.get(relative.suffix.lower(), "application/octet-stream"))
        if path == "/api/health":
            return self.send_json({"ok": True, "time": utc_now()})
        if path == "/api/dashboard":
            if not self.authorized():
                return self.send_json({"error": "unauthorized"}, 401)
            rows = load_real_rows(self.app.db_path)
            use_demo = query.get("demo", ["0"])[0] == "1"
            if use_demo:
                return self.send_json(aggregate(demo_rows(), True))
            result = aggregate(rows, False)
            result["suggest_demo"] = not rows
            return self.send_json(result)
        if path == "/api/export.csv":
            if not self.authorized():
                return self.send_json({"error": "unauthorized"}, 401)
            body = csv_bytes(load_real_rows(self.app.db_path))
            self.send_response(200)
            self.send_header("Content-Type", "text/csv; charset=utf-8")
            self.send_header("Content-Disposition", f'attachment; filename="epilover-responses-{datetime.now():%Y%m%d}.csv"')
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(body)
            return
        self.send_error(HTTPStatus.NOT_FOUND)

    def do_POST(self) -> None:
        if not self.same_origin():
            return self.send_json({"error": "invalid_origin"}, 403)
        parsed = urllib.parse.urlparse(self.path)
        try:
            payload = self.read_json()
        except (ValueError, json.JSONDecodeError):
            return self.send_json({"error": "invalid_body"}, 400)
        if parsed.path == "/api/responses":
            try:
                respondent_id = insert_response(self.app.db_path, payload)
            except sqlite3.IntegrityError:
                return self.send_json({"error": "duplicate_email"}, 409)
            except ValueError as error:
                return self.send_json({"error": str(error)}, 400)
            return self.send_json({"ok": True, "respondent_id": respondent_id}, 201)
        if parsed.path == "/api/admin/login":
            pin = str(payload.get("pin", ""))
            if not hmac.compare_digest(pin, self.app.admin_pin):
                return self.send_json({"error": "invalid_pin"}, 401)
            token = self.app.issue_token()
            cookie = f"epilover_admin={token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=28800"
            return self.send_json({"ok": True}, headers={"Set-Cookie": cookie})
        if parsed.path == "/api/admin/logout":
            return self.send_json({"ok": True}, headers={"Set-Cookie": "epilover_admin=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0"})
        self.send_error(HTTPStatus.NOT_FOUND)


class AppServer(ThreadingHTTPServer):
    daemon_threads = True

    def __init__(self, address: tuple[str, int], db_path: Path, admin_pin: str):
        super().__init__(address, AppHandler)
        self.db_path = db_path
        self.admin_pin = admin_pin
        self.secret = os.environ.get("EPILOVER_SESSION_SECRET", secrets.token_urlsafe(32)).encode()

    def issue_token(self) -> str:
        expiry = str(int(time.time()) + 28_800)
        signature = hmac.new(self.secret, expiry.encode(), hashlib.sha256).hexdigest()
        return base64.urlsafe_b64encode(f"{expiry}.{signature}".encode()).decode()

    def verify_token(self, token: str) -> bool:
        try:
            decoded = base64.urlsafe_b64decode(token.encode()).decode()
            expiry, signature = decoded.split(".", 1)
            expected = hmac.new(self.secret, expiry.encode(), hashlib.sha256).hexdigest()
            return int(expiry) > int(time.time()) and hmac.compare_digest(signature, expected)
        except (ValueError, TypeError):
            return False


def main() -> None:
    parser = argparse.ArgumentParser(description="Run the EpiLover survey locally")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8000)
    parser.add_argument("--db", type=Path, default=DEFAULT_DB)
    parser.add_argument("--no-browser", action="store_true")
    args = parser.parse_args()
    init_db(args.db)
    admin_pin = os.environ.get("EPILOVER_ADMIN_PIN")
    generated_pin = False
    if not admin_pin:
        if args.host not in {"127.0.0.1", "localhost", "::1"}:
            parser.error("EPILOVER_ADMIN_PIN is required when the server is not local")
        admin_pin = secrets.token_urlsafe(9)
        generated_pin = True
    server = AppServer((args.host, args.port), args.db, admin_pin)
    url = f"http://{args.host}:{args.port}"
    print(f"\nEpiLover is ready at {url}")
    if generated_pin:
        print(f"Temporary dashboard key: {admin_pin}")
    print("Press Ctrl+C to stop it.\n")
    if not args.no_browser:
        webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping EpiLover…")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
