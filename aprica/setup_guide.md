# APRICA Platform — Complete Setup Guide

## 🌍 Overview
APRICA is an African Language AI Platform that transforms voices and text across 
Nigerian Pidgin, Yoruba, Hausa, and Swahili.

---

## 📋 Prerequisites

- Python 3.10+ 
- pip (Python package manager)
- Node.js 16+ (for PowerPoint generation only)
- ffmpeg (for video processing)

### Install ffmpeg:
- **Mac**: `brew install ffmpeg`
- **Ubuntu/Debian**: `sudo apt install ffmpeg`
- **Windows**: Download from https://ffmpeg.org/download.html

---

## 🔑 API Keys Required

### 1. OpenAI API Key (REQUIRED)
- Go to: https://platform.openai.com/api-keys
- Click "Create new secret key"
- Costs: ~$0.01-0.05 per translation, ~$0.015/1000 chars for TTS

### 2. ElevenLabs API Key (RECOMMENDED for authentic voices)
- Go to: https://elevenlabs.io
- Sign up for free tier (10,000 chars/month free)
- Find key at: Profile → API Keys

### 3. Google Cloud Translation (OPTIONAL alternative)
- Go to: https://console.cloud.google.com
- Enable "Cloud Translation API"
- Create API key or service account

---

## 🚀 Quick Start

### Step 1: Clone/Download the project
```bash
# Extract the downloaded ZIP file
unzip aprica.zip
cd aprica
```

### Step 2: Create virtual environment
```bash
python -m venv venv
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate
```

### Step 3: Install dependencies
```bash
pip install -r requirements.txt
```

### Step 4: Configure API Keys
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your actual API keys
nano .env   # or use any text editor
```

### Step 5: Run the platform
```bash
python app.py
```

### Step 6: Open in browser
Go to: **http://localhost:5000**

---

## 🎯 Features Guide

| Feature | Endpoint | Description |
|---------|----------|-------------|
| Text Translation | `/api/translate/text` | Translate any text |
| Website Translation | `/api/translate/url` | Translate a full webpage |
| Document Translation | `/api/translate/document` | PDF, DOCX, TXT |
| Book Summary | `/api/translate/book` | Books with AI summary |
| Text-to-Speech | `/api/tts` | 6 African/international voices |
| Speech-to-Text | `/api/stt` | Whisper-powered transcription |
| Voice Translation | `/api/translate/with-voice` | Translate + hear it |
| Video Translation | `/api/translate/video` | Video dubbing pipeline |
| AI Chatbot | `/api/chat` | Multilingual AI assistant |

---

## 🎬 Video Translation (Standalone)

```bash
# Basic usage
python video_translator.py my_video.mp4 yo

# With options
python video_translator.py my_video.mp4 ha --voice male --output hausa_video.mp4

# Languages: yo (Yoruba), ha (Hausa), sw (Swahili), pcm (Nigerian Pidgin)
# Voices: male, female
```

---

## 🔧 Troubleshooting

### "API key not found"
→ Check your `.env` file has the correct key names and values

### "Module not found"
→ Run `pip install -r requirements.txt` again inside your virtual environment

### "ffmpeg not found"
→ Install ffmpeg (see Prerequisites above)

### TTS audio not playing
→ Check browser allows audio autoplay; try clicking play manually

### Port 5000 in use
→ Run: `python app.py` with `--port 5001` or change port in app.py

---

## 📁 Project Structure

```
aprica/
├── app.py                 ← Main Flask application
├── video_translator.py    ← Standalone video translation module
├── templates/
│   └── index.html         ← Frontend interface
├── static/                ← Static assets (CSS, JS)
├── uploads/               ← Temporary upload storage
├── outputs/               ← Generated audio/video files
├── requirements.txt       ← Python dependencies
├── .env.example           ← Environment template
└── setup_guide.md         ← This file
```
