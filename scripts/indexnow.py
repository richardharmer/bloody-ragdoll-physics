#!/usr/bin/env python3
"""Submit the production sitemap to Bing IndexNow after verifying the live key."""
import argparse
import json
from pathlib import Path
import subprocess
import sys
import urllib.parse
import xml.etree.ElementTree as ET

ORIGIN = "https://bloodyragdollphysics.com"
KEY_FILE = "94310c8b05f7447bb99140ef110496dc.txt"
ENDPOINT = "https://www.bing.com/indexnow"


def get(url):
    return subprocess.check_output([
        "curl", "--fail", "--silent", "--show-error", "--max-time", "45", url
    ]).decode("utf-8")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--submit", action="store_true", help="Send the verified batch; otherwise preview only")
    args = parser.parse_args()
    key = (Path(__file__).resolve().parents[1] / "public" / KEY_FILE).read_text().strip()
    if not 8 <= len(key) <= 128 or not all(c.isascii() and (c.isalnum() or c == "-") for c in key):
        raise ValueError("Invalid key format")
    key_location = f"{ORIGIN}/{KEY_FILE}"
    if get(key_location).strip() != key:
        raise ValueError("Published key file does not match the local file; deploy first")
    root = ET.fromstring(get(f"{ORIGIN}/sitemap.xml"))
    ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    if root.tag != "{http://www.sitemaps.org/schemas/sitemap/0.9}urlset":
        raise ValueError("Expected a URL sitemap, not a sitemap index")
    urls = list(dict.fromkeys(node.text.strip() for node in root.findall("s:url/s:loc", ns) if node.text))
    if not 1 <= len(urls) <= 10000:
        raise ValueError("Batch must contain 1–10,000 URLs")
    for url in urls:
        parsed = urllib.parse.urlsplit(url)
        if parsed.scheme != "https" or parsed.netloc != "bloodyragdollphysics.com" or parsed.fragment or parsed.query:
            raise ValueError(f"Unexpected sitemap URL: {url}")
    payload = {"host": "bloodyragdollphysics.com", "key": key, "keyLocation": key_location, "urlList": urls}
    print(f"Verified live key and {len(urls)} unique production URLs.")
    if not args.submit:
        print("Preview only. Use --submit to notify Bing IndexNow.")
        print("\n".join(urls))
        return
    response = subprocess.run([
        "curl", "--silent", "--show-error", "--max-time", "60",
        "--request", "POST", "--header", "Content-Type: application/json; charset=utf-8",
        "--data-binary", "@-", "--write-out", "\n%{http_code}", ENDPOINT
    ], input=json.dumps(payload), text=True, capture_output=True, check=True)
    body, status = response.stdout.rsplit("\n", 1)
    print(f"Bing IndexNow HTTP {status}; submitted {len(urls)} URLs.")
    if body.strip():
        print(body.strip())
    if status == "202":
        print("Received; key validation is pending. This does not confirm indexing.")
    elif status == "200":
        print("Submission received successfully. This does not confirm indexing.")
    else:
        raise RuntimeError(f"Submission failed with HTTP {status}; do not retry repeatedly")


if __name__ == "__main__":
    try:
        main()
    except (ValueError, RuntimeError, subprocess.CalledProcessError, ET.ParseError) as exc:
        print(f"IndexNow error: {exc}", file=sys.stderr)
        sys.exit(1)
