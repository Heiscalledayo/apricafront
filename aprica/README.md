# 🌍 APRICA — African AI Language Platform

> **Transforming African Voices** | Speech-to-Text · Text-to-Speech · Translation

APRICA is an AI-powered language platform focused on 4 major African languages:
🇳🇬 **Nigerian Pidgin** · 🇳🇬 **Yoruba** · 🇳🇬 **Hausa** · 🇰🇪 **Swahili**

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| 🔤 **Text Translation** | Translate English/French into any of the 4 African languages |
| 🌐 **Website Translation** | Paste a URL — get the whole site translated |
| 📄 **Document Translation** | PDF, Word, TXT — translate + summarize |
| 💬 **AI Chatbot** | Chat in any African language with GPT-4o |
| 🔊 **Text to Voice** | 8 voice profiles (Nigerian, Kenyan, British, American accents) |
| 🎙️ **Voice to Text** | Record or upload audio → transcription + translation |
| 🎬 **Video Translation** | Upload video → translated audio + merged video |
| 📚 **Book Translator** | Translate + summarize entire books |

---

## 📋 Setup Instructions

### Step 1: Clone / Download
```bash
cd aprica
```

### Step 2: Create Virtual Environment
```bash
python -m venv venv
source venv/bin/activate        # Mac/Linux
venv\Scripts\activate           # Windows
```

### Step 3: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 4: Configure API Keys
```bash
cp .env.example .env
# Now edit .env with your actual API keys
```

**Required API Keys:**
- **OpenAI** → https://platform.openai.com/api-keys (for GPT-4o, Whisper, TTS)
- **ElevenLabs** → https://elevenlabs.io (for African voice synthesis)
- **Google Cloud** → https://console.cloud.google.com (for Translate API, optional)

### Step 5: Run APRICA
```bash
python app.py
```

Then open: **http://localhost:5000**

---

## 🔑 API Keys Guide

### OpenAI Setup
1. Go to https://platform.openai.com/api-keys
2. Create a new key → copy into `.env` as `OPENAI_API_KEY`
3. Ensure your account has GPT-4o access

### ElevenLabs Setup
1. Go to https://elevenlabs.io → Sign up (free tier available)
2. Get API key from Profile Settings
3. For African voices: Browse Voice Library → search "African", "Nigerian", "Kenyan"
4. Copy Voice IDs into `.env`

### Google Cloud Translate (Optional)
1. Create project at https://console.cloud.google.com
2. Enable "Cloud Translation API"
3. Create Service Account → download JSON → save as `google_key.json`
4. Set `GOOGLE_APPLICATION_CREDENTIALS=google_key.json`

*Note: Without Google Cloud, APRICA uses GPT-4o for all translations (still works great!)*

---

## 🏗️ Project Structure

```
aprica/
├── app.py                 # Main Flask application (all 8 features)
├── requirements.txt       # Python dependencies
├── .env.example           # API key template
├── .env                   # Your actual keys (never commit this!)
├── README.md              # This file
├── templates/
│   └── index.html         # Full frontend (single-file, no build step)
├── uploads/               # Temporary audio/video storage (auto-created)
└── google_key.json        # Google service account (if using Google Translate)
```

---

## 🛠️ Tech Stack

- **Backend**: Flask (Python)
- **AI Engine**: OpenAI GPT-4o
- **Transcription**: OpenAI Whisper
- **Text-to-Speech**: ElevenLabs + OpenAI TTS fallback
- **Translation**: Google Cloud Translate + GPT-4o
- **Video Processing**: MoviePy + FFmpeg
- **Frontend**: Vanilla HTML/CSS/JS (no framework needed)

---

## 🌍 Supported Languages

| Code | Language | Notes |
|------|----------|-------|
| `yo` | Yoruba | ~45M speakers, Nigeria |
| `ha` | Hausa | ~70M speakers, West Africa |
| `sw` | Swahili | ~200M speakers, East Africa |
| `pcm` | Nigerian Pidgin | ~75M speakers, Nigeria |

---

## 📞 Support

For issues or questions, check the OpenAI and ElevenLabs documentation.
