$sitePath = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 4173

Write-Host "Serving Consentext AI Gateway Prototype from $sitePath"
Write-Host "Open: http://127.0.0.1:$port/"

Set-Location $sitePath
python -m http.server $port
