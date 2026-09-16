@echo off
setlocal
cd /d "%~dp0"
py -3 server.py
if errorlevel 1 (
  echo.
  echo Python 3 was not found. Install it from https://www.python.org/downloads/
  pause
)
