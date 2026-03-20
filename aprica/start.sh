#!/bin/bash
# ════════════════════════════════════════════════
# APRICA Platform – Launch Script
# ════════════════════════════════════════════════

echo ""
echo "  🌍  APRICA – African Language AI Platform"
echo "  ============================================"
echo ""

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "  ❌ Python3 not found. Please install Python 3.9+"
    exit 1
fi

# Install dependencies
echo "  📦  Installing dependencies..."
pip install -r requirements.txt --quiet

# Check .env file
if [ ! -f ".env" ]; then
    echo ""
    echo "  ⚠️  .env file not found!"
    echo "  Creating from template..."
    cp .env.example .env
    echo ""
    echo "  ─────────────────────────────────────────────"
    echo "  📝 ACTION REQUIRED:"
    echo "     Open .env and add your API keys:"
    echo ""
    echo "     OPENAI_API_KEY=sk-your-key-here"
    echo "     ELEVENLABS_API_KEY=your-key-here"
    echo "  ─────────────────────────────────────────────"
    echo ""
    echo "  Platform will run in DEMO MODE without API keys"
    echo "  (Translation UI works, AI features need keys)"
    echo ""
fi

# Create uploads directory
mkdir -p uploads

echo "  ✅  Starting APRICA on http://localhost:5000"
echo "  ✅  Press Ctrl+C to stop"
echo ""
echo "  ════════════════════════════════════════════"
echo ""

# Start Flask
python3 app.py
