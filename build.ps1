$ErrorActionPreference = 'Stop'
$ROOT = $PSScriptRoot

Write-Host "Building site to docs/..."

# Clean and create output structure
if (Test-Path "$ROOT\docs") { Remove-Item "$ROOT\docs" -Recurse -Force }
New-Item -ItemType Directory -Path "$ROOT\docs\images", "$ROOT\docs\manual", "$ROOT\docs\setup" -Force | Out-Null

# Static files
Copy-Item "$ROOT\CNAME"       "$ROOT\docs\"
Copy-Item "$ROOT\favicon.png" "$ROOT\docs\"
Copy-Item "$ROOT\style.css"   "$ROOT\docs\"
Copy-Item "$ROOT\index.html"  "$ROOT\docs\"
Copy-Item "$ROOT\images\*"    "$ROOT\docs\images\"
Copy-Item "$ROOT\setup\index.html" "$ROOT\docs\setup\"

# Manual index page
Copy-Item "$ROOT\manual\index.html" "$ROOT\docs\manual\"

# Generate manual HTML from Markdown
Write-Host "Rendering manual..."
node "$ROOT\scripts\build-manual.js"

Write-Host "Done. Output in docs/"
