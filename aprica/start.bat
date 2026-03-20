@echo off
echo.
echo   APRICA - African Language AI Platform
echo   ============================================
echo.

REM Install dependencies
echo   Installing dependencies...
pip install -r requirements.txt

REM Check for .env file
IF NOT EXIST ".env" (
    echo.
    echo   WARNING: .env file not found!
    copy .env.example .env
    echo   Created .env from template.
    echo.
    echo   ACTION REQUIRED:
    echo   Open .env and add your API keys:
    echo     OPENAI_API_KEY=sk-your-key-here
    echo     ELEVENLABS_API_KEY=your-key-here
    echo.
)

REM Create uploads directory
IF NOT EXIST "uploads" mkdir uploads

echo.
echo   Starting APRICA on http://localhost:5000
echo   Press Ctrl+C to stop
echo.
python app.py
pause
