#!/bin/bash
# ═══════════════════════════════════════════════════════
# APRICA Quick Setup Script
# Run: bash setup.sh
# ═══════════════════════════════════════════════════════

echo ""
echo "🌍 APRICA Platform - Setup"
echo "══════════════════════════════"
echo ""

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 not found. Install from https://python.org"
    exit 1
fi
echo "✅ Python 3 found: $(python3 --version)"

# Create virtual environment
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate
source venv/bin/activate 2>/dev/null || venv\Scripts\activate 2>/dev/null
echo "✅ Virtual environment activated"

# Install dependencies
echo "📦 Installing dependencies..."
pip install -r requirements.txt -q

# Create .env if not exists
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo ""
    echo "⚠️  Created .env file. IMPORTANT: Edit .env and add your API keys!"
    echo "   - OPENAI_API_KEY (required)"
    echo "   - ELEVENLABS_API_KEY (for African voices)"
    echo "   - GOOGLE_APPLICATION_CREDENTIALS (optional)"
fi

# Create uploads folder
mkdir -p uploads

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Edit .env with your API keys"
echo "  2. Run: python app.py"
echo "  3. Open: http://localhost:5000"
echo ""
