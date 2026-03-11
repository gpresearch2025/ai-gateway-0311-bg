$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$videoRoot = Split-Path -Parent $scriptDir
$voiceoverTextPath = Join-Path $scriptDir "voiceover.txt"
$publicDir = Join-Path $videoRoot "public"
$outputPath = Join-Path $publicDir "voiceover.wav"

if (-not (Test-Path $publicDir)) {
  New-Item -ItemType Directory -Path $publicDir | Out-Null
}

Add-Type -AssemblyName System.Speech
$text = Get-Content $voiceoverTextPath -Raw
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.Rate = 0
$synth.Volume = 100
$synth.SetOutputToWaveFile($outputPath)
$synth.Speak($text)
$synth.Dispose()

Write-Host "Generated $outputPath"
