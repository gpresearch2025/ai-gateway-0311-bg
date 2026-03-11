@echo off
set SITE_PATH=%~dp0
set PORT=4173

echo Serving Consentext AI Gateway Prototype from %SITE_PATH%
echo Open: http://127.0.0.1:%PORT%/

pushd "%SITE_PATH%"
python -m http.server %PORT%
