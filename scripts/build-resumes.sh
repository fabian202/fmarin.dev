#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SCRIPTS="$ROOT/scripts"
OUT="$ROOT/public"

print_pdf() {
  local src="$1"
  local dest="$2"
  local profile
  profile="$(mktemp -d /tmp/chrome-resume-XXXXXX)"
  timeout 120 google-chrome --headless=new --disable-gpu --no-sandbox \
    --user-data-dir="$profile" \
    --print-to-pdf="$dest" \
    --no-pdf-header-footer \
    "file://$src" >/dev/null 2>&1
  rm -rf "$profile"
  echo "wrote $dest ($(wc -c < "$dest") bytes)"
}

print_pdf "$SCRIPTS/resume.en.html" "$OUT/resume.pdf"
print_pdf "$SCRIPTS/resume.es.html" "$OUT/resume.es.pdf"
