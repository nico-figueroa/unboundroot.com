# ============================================================
# Browser Simulation Script for unboundroot.com
# ============================================================

$site = "https://www.unboundroot.com/"
$root = "https://unboundroot.com/"

Write-Host "=== 1. DNS Resolution (curl.exe) ==="
curl.exe -v $site --resolve www.unboundroot.com:443:185.199.109.153

Write-Host "`n=== 2. Follow Redirects (curl.exe -L) ==="
curl.exe -v -L $site

Write-Host "`n=== 3. HEAD Request (curl.exe) ==="
curl.exe -I $site

Write-Host "`n=== 4. HEAD Request (Invoke-WebRequest) ==="
$rHead = Invoke-WebRequest -Uri $site -Method HEAD
$rHead.Headers

Write-Host "`n=== 5. GET Request (curl.exe) ==="
curl.exe -v $site

Write-Host "`n=== 6. GET Request (Invoke-WebRequest) ==="
$rGet = Invoke-WebRequest -Uri $site -Method GET
$rGet.StatusCode
$rGet.Headers

Write-Host "`n=== 7. Browser-like Headers (curl.exe) ==="
curl.exe -v $site `
  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36" `
  -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8" `
  -H "Accept-Language: en-US,en;q=0.9" `
  -H "Accept-Encoding: gzip, deflate, br"

Write-Host "`n=== 8. Compression Negotiation ==="
curl.exe -I $site -H "Accept-Encoding: gzip"
curl.exe -I $site -H "Accept-Encoding: br"

Write-Host "`n=== 9. Content Negotiation ==="
curl.exe -v $site -H "Accept: application/json"
curl.exe -v $site -H "Accept: text/plain"
curl.exe -v $site -H "Accept: */*"

Write-Host "`n=== 10. OPTIONS Request (curl.exe) ==="
curl.exe -X OPTIONS -v $site

Write-Host "`n=== 11. OPTIONS Request (Invoke-WebRequest) ==="
try {
    Invoke-WebRequest -Uri $site -Method OPTIONS
} catch {
    Write-Host "OPTIONS not allowed (405)."
}

Write-Host "`n=== 12. Fetch Static Assets (HEAD) ==="
$assets = @(
    "styles.css",
    "script.js",
    "logo.png",
    "favicon.ico"
)

foreach ($asset in $assets) {
    $url = "$site$asset"
    Write-Host "`n--- $url ---"
    try {
        curl.exe -I $url
    } catch {
        Write-Host "Asset not found."
    }
}

Write-Host "`n=== 13. HTML Parsing (Invoke-WebRequest) ==="
$rHtml = Invoke-WebRequest -Uri $site
Write-Host "`n--- Page Title ---"
$rHtml.ParsedHtml.title

Write-Host "`n--- Links Found ---"
$rHtml.Links | Select-Object href

Write-Host "`n--- Forms Found ---"
$rHtml.Forms | Select-Object Action, Method

Write-Host "`n=== Browser Simulation Complete ==="