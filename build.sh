#!/bin/bash
set -e

ROOT="$(cd "$(dirname "$0")" && pwd)"

echo "Building site to docs/..."

# Clean and create output structure
rm -rf "$ROOT/docs"
mkdir -p "$ROOT/docs/images" "$ROOT/docs/manual" "$ROOT/docs/setup"

# Static files
cp "$ROOT/CNAME"      "$ROOT/docs/"
cp "$ROOT/favicon.png" "$ROOT/docs/"
cp "$ROOT/style.css"  "$ROOT/docs/"
cp "$ROOT/index.html" "$ROOT/docs/"
cp "$ROOT/images/"*   "$ROOT/docs/images/"
cp "$ROOT/setup/"*.html "$ROOT/docs/setup/"

# Manual index page and downloadable assets
cp "$ROOT/manual/index.html" "$ROOT/docs/manual/"
cp "$ROOT/manual/"*.pdf "$ROOT/manual/"*.svg "$ROOT/docs/manual/"

# Generate manual HTML from Markdown
echo "Rendering manual..."
node "$ROOT/scripts/build-manual.js"

echo "Done. Output in docs/"
