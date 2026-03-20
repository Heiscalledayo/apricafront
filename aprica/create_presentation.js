const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "APRICA - African Language AI Platform";
pres.author = "APRICA Team";

// ─── COLOR PALETTE ───
const C = {
  bg:        "060C09",
  surface:   "0D1F14",
  green:     "00A651",
  greenDark: "007A3D",
  greenGlow: "00CC64",
  gold:      "FFCC00",
  goldDark:  "E6A800",
  red:       "CE1126",
  white:     "FFFFFF",
  light:     "D6EDE0",
  muted:     "6B9A7A",
  card:      "112018",
};

const makeShadow = () => ({ type: "outer", color: "000000", blur: 12, offset: 4, angle: 135, opacity: 0.35 });

// ════════════════════════════════════════
// SLIDE 1 — TITLE SLIDE
// ════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.bg };

  // Gradient overlay left panel
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 4.5, h: 5.625, fill: { color: C.greenDark, transparency: 30 }, line: { color: C.greenDark, transparency: 100 } });

  // Decorative circles
  s.addShape(pres.shapes.OVAL, { x: -0.8, y: -0.8, w: 3, h: 3, fill: { color: C.green, transparency: 80 }, line: { color: C.green, transparency: 100 } });
  s.addShape(pres.shapes.OVAL, { x: 8.5, y: 3.8, w: 2.5, h: 2.5, fill: { color: C.gold, transparency: 85 }, line: { color: C.gold, transparency: 100 } });
  s.addShape(pres.shapes.OVAL, { x: 7, y: -0.5, w: 1.8, h: 1.8, fill: { color: C.greenGlow, transparency: 80 }, line: { color: C.greenGlow, transparency: 100 } });

  // Logo mark
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 0.7, w: 0.8, h: 0.8, fill: { color: C.green }, line: { color: C.green }, rectRadius: 0.12 });
  s.addText("A", { x: 0.6, y: 0.7, w: 0.8, h: 0.8, fontSize: 26, bold: true, color: C.white, align: "center", valign: "middle" });

  // APRICA brand
  s.addText("APRICA", { x: 1.55, y: 0.72, w: 3.5, h: 0.42, fontSize: 24, bold: true, color: C.white, fontFace: "Trebuchet MS", charSpacing: 4, margin: 0 });
  s.addText("AFRICAN AI PLATFORM", { x: 1.55, y: 1.1, w: 3.5, h: 0.25, fontSize: 9, color: C.gold, fontFace: "Calibri", charSpacing: 3, margin: 0 });

  // Main headline
  s.addText("African Voices,", { x: 0.6, y: 1.7, w: 8.8, h: 0.85, fontSize: 52, bold: true, color: C.white, fontFace: "Trebuchet MS", margin: 0 });
  s.addText("Amplified by AI.", { x: 0.6, y: 2.45, w: 8.8, h: 0.85, fontSize: 52, bold: true, color: C.greenGlow, fontFace: "Trebuchet MS", margin: 0 });

  s.addText("Breaking language barriers across Africa through AI-powered\ntranslation, voice synthesis, and cultural intelligence.", {
    x: 0.6, y: 3.5, w: 6.2, h: 0.8, fontSize: 14, color: C.light, fontFace: "Calibri", lineSpacingMultiple: 1.3, margin: 0
  });

  // Language pills
  const langs = ["🇳🇬 Yoruba", "🇳🇬 Hausa", "🇰🇪 Swahili", "🇳🇬 Nigerian Pidgin"];
  langs.forEach((l, i) => {
    const x = 0.6 + i * 2.3;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 4.5, w: 2.1, h: 0.38, fill: { color: C.green, transparency: 25 }, line: { color: C.green }, rectRadius: 0.05 });
    s.addText(l, { x, y: 4.5, w: 2.1, h: 0.38, fontSize: 10, color: C.white, align: "center", valign: "middle", bold: true, fontFace: "Calibri" });
  });

  // Right side visual accent
  s.addShape(pres.shapes.RECTANGLE, { x: 9, y: 0, w: 1, h: 5.625, fill: { color: C.greenDark, transparency: 50 }, line: { color: C.greenDark, transparency: 100 } });
  s.addText("v1.0", { x: 9, y: 2.6, w: 1, h: 0.4, fontSize: 10, color: C.muted, align: "center", rotate: 270, fontFace: "Calibri" });
}

// ════════════════════════════════════════
// SLIDE 2 — THE PROBLEM / OPPORTUNITY
// ════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.bg };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.surface }, line: { color: C.surface } });
  s.addText("THE OPPORTUNITY", { x: 0.5, y: 0, w: 9, h: 0.8, fontSize: 11, color: C.green, bold: true, fontFace: "Calibri", charSpacing: 3, valign: "middle", margin: 0 });
  s.addText("Africa's Language Problem", { x: 0.5, y: 1.0, w: 9, h: 0.7, fontSize: 34, bold: true, color: C.white, fontFace: "Trebuchet MS", margin: 0 });

  const stats = [
    { num: "2,100+", label: "Languages\nSpoken in Africa", icon: "🌍" },
    { num: "1.4B",   label: "People with\nLimited AI Access", icon: "👥" },
    { num: "95%",    label: "AI Tools Built\nfor Non-African Languages", icon: "⚠️" },
    { num: "$400B",  label: "Lost Economic\nOpportunity by 2030", icon: "📈" },
  ];
  stats.forEach((st, i) => {
    const x = 0.4 + i * 2.35;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 2.0, w: 2.15, h: 2.6, fill: { color: C.card }, line: { color: C.green, transparency: 60 }, shadow: makeShadow() });
    s.addText(st.icon, { x, y: 2.05, w: 2.15, h: 0.55, fontSize: 26, align: "center", valign: "middle" });
    s.addText(st.num, { x, y: 2.55, w: 2.15, h: 0.7, fontSize: 28, bold: true, color: C.gold, fontFace: "Trebuchet MS", align: "center", valign: "middle", margin: 0 });
    s.addText(st.label, { x, y: 3.2, w: 2.15, h: 0.7, fontSize: 11, color: C.light, align: "center", fontFace: "Calibri", lineSpacingMultiple: 1.2, margin: 0 });
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 4.8, w: 9.2, h: 0.56, fill: { color: C.greenDark, transparency: 50 }, line: { color: C.greenDark, transparency: 100 } });
  s.addText("APRICA exists to solve this — bringing African languages into the AI age.", {
    x: 0.4, y: 4.8, w: 9.2, h: 0.56, fontSize: 13, color: C.greenGlow, bold: true, align: "center", valign: "middle", fontFace: "Calibri"
  });
}

// ════════════════════════════════════════
// SLIDE 3 — WHAT IS APRICA
// ════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.bg };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.surface }, line: { color: C.surface } });
  s.addText("PLATFORM OVERVIEW", { x: 0.5, y: 0, w: 9, h: 0.8, fontSize: 11, color: C.green, bold: true, fontFace: "Calibri", charSpacing: 3, valign: "middle", margin: 0 });
  s.addText("What is APRICA?", { x: 0.5, y: 1.0, w: 5, h: 0.65, fontSize: 32, bold: true, color: C.white, fontFace: "Trebuchet MS", margin: 0 });

  // Left: description
  s.addText([
    { text: "APRICA ", options: { bold: true, color: C.greenGlow } },
    { text: "(African Platform for Real-time Intelligent Communication and Accessibility) is an AI-powered language platform purpose-built for Africa.", options: { color: C.light } }
  ], { x: 0.5, y: 1.75, w: 4.5, h: 1.1, fontSize: 13, fontFace: "Calibri", lineSpacingMultiple: 1.4 });

  s.addText("APRICA connects over 1.4 billion Africans with AI tools in their native languages — supporting education, business, healthcare, and government communications.", {
    x: 0.5, y: 2.9, w: 4.5, h: 1.0, fontSize: 12, color: C.muted, fontFace: "Calibri", lineSpacingMultiple: 1.4
  });

  // Separator
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 0.9, w: 0.04, h: 4.4, fill: { color: C.green, transparency: 60 }, line: { color: C.green, transparency: 100 } });

  // Right: core languages
  s.addText("CORE LANGUAGES", { x: 5.5, y: 1.0, w: 4.2, h: 0.35, fontSize: 10, color: C.gold, bold: true, fontFace: "Calibri", charSpacing: 2, margin: 0 });
  const langs = [
    { flag: "🇳🇬", name: "Yoruba", speakers: "45M+ speakers" },
    { flag: "🇳🇬", name: "Hausa",  speakers: "60M+ speakers" },
    { flag: "🇰🇪", name: "Swahili",speakers: "200M+ speakers" },
    { flag: "🇳🇬", name: "Nigerian Pidgin", speakers: "80M+ speakers" },
  ];
  langs.forEach((l, i) => {
    const y = 1.5 + i * 0.82;
    s.addShape(pres.shapes.RECTANGLE, { x: 5.5, y, w: 4.0, h: 0.65, fill: { color: C.card }, line: { color: C.green, transparency: 70 } });
    s.addText(l.flag, { x: 5.55, y, w: 0.65, h: 0.65, fontSize: 22, align: "center", valign: "middle" });
    s.addText(l.name, { x: 6.25, y: y+0.06, w: 2.5, h: 0.3, fontSize: 14, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
    s.addText(l.speakers, { x: 6.25, y: y+0.33, w: 2.5, h: 0.25, fontSize: 10, color: C.muted, fontFace: "Calibri", margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.5, y, w: 0.06, h: 0.65, fill: { color: C.green }, line: { color: C.green } });
  });
}

// ════════════════════════════════════════
// SLIDE 4 — 8 FEATURES OVERVIEW
// ════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.bg };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.surface }, line: { color: C.surface } });
  s.addText("FEATURES", { x: 0.5, y: 0, w: 9, h: 0.8, fontSize: 11, color: C.green, bold: true, fontFace: "Calibri", charSpacing: 3, valign: "middle", margin: 0 });
  s.addText("8 Powerful AI Features", { x: 0.5, y: 0.95, w: 9, h: 0.55, fontSize: 30, bold: true, color: C.white, fontFace: "Trebuchet MS", margin: 0 });

  const features = [
    { icon: "🔤", title: "Text Translation",     desc: "Translate any text between African & world languages" },
    { icon: "🌐", title: "URL Translation",       desc: "Instantly translate entire websites and webpages" },
    { icon: "📄", title: "Document Translation",  desc: "PDF, DOCX, TXT — full document translation & summary" },
    { icon: "📚", title: "Book Summarizer",       desc: "AI-powered book analysis and translation in minutes" },
    { icon: "🔊", title: "Text to Speech",        desc: "6 voices with Nigerian, Kenyan, British, American accents" },
    { icon: "🎙️", title: "Speech to Text",        desc: "Transcribe African language audio with Whisper AI" },
    { icon: "🎬", title: "Video Translation",     desc: "Transcribe, translate & dub video in African languages" },
    { icon: "🤖", title: "AI Chatbot",            desc: "Conversational AI that speaks in your African language" },
  ];

  features.forEach((f, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const x = 0.35 + col * 2.35;
    const y = 1.75 + row * 1.7;
    
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.2, h: 1.5, fill: { color: C.card }, line: { color: C.green, transparency: 65 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.2, h: 0.06, fill: { color: C.green }, line: { color: C.green } });
    s.addText(f.icon, { x, y: y+0.1, w: 2.2, h: 0.45, fontSize: 22, align: "center" });
    s.addText(f.title, { x: x+0.08, y: y+0.52, w: 2.05, h: 0.35, fontSize: 11, bold: true, color: C.white, fontFace: "Calibri", align: "center", margin: 0 });
    s.addText(f.desc, { x: x+0.08, y: y+0.83, w: 2.05, h: 0.55, fontSize: 9, color: C.muted, fontFace: "Calibri", align: "center", lineSpacingMultiple: 1.2, margin: 0 });
  });
}

// ════════════════════════════════════════
// SLIDE 5 — VOICE & LANGUAGE DEEP DIVE
// ════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.bg };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.surface }, line: { color: C.surface } });
  s.addText("VOICES & LANGUAGES", { x: 0.5, y: 0, w: 9, h: 0.8, fontSize: 11, color: C.green, bold: true, fontFace: "Calibri", charSpacing: 3, valign: "middle", margin: 0 });
  s.addText("Authentic African Voices", { x: 0.5, y: 0.97, w: 9, h: 0.58, fontSize: 30, bold: true, color: C.white, fontFace: "Trebuchet MS", margin: 0 });

  const voices = [
    { icon: "👩🏿", name: "Adaeze",  tag: "Female · Nigerian", color: C.green },
    { icon: "👨🏿", name: "Emeka",   tag: "Male · Nigerian",   color: C.green },
    { icon: "👩🏾", name: "Amara",   tag: "Female · Kenyan",   color: C.gold },
    { icon: "👨🏾", name: "Jabari",  tag: "Male · Kenyan",     color: C.gold },
    { icon: "👩🏻", name: "Sophie",  tag: "Female · British",  color: C.muted },
    { icon: "👨🏽", name: "Marcus",  tag: "Male · American",   color: C.muted },
  ];
  voices.forEach((v, i) => {
    const x = 0.4 + i * 1.56;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.75, w: 1.42, h: 1.8, fill: { color: C.card }, line: { color: v.color, transparency: 50 }, shadow: makeShadow() });
    s.addText(v.icon, { x, y: 1.82, w: 1.42, h: 0.62, fontSize: 30, align: "center" });
    s.addText(v.name, { x, y: 2.42, w: 1.42, h: 0.35, fontSize: 13, bold: true, color: C.white, fontFace: "Calibri", align: "center", margin: 0 });
    s.addText(v.tag, { x, y: 2.75, w: 1.42, h: 0.5, fontSize: 9, color: v.color, fontFace: "Calibri", align: "center", lineSpacingMultiple: 1.15, margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 3.51, w: 1.42, h: 0.04, fill: { color: v.color }, line: { color: v.color } });
  });

  // Powered by section
  s.addText("POWERED BY", { x: 0.5, y: 3.85, w: 9, h: 0.3, fontSize: 9, color: C.muted, bold: true, fontFace: "Calibri", charSpacing: 2, margin: 0 });
  const engines = [
    { name: "ElevenLabs", note: "Best African accent quality" },
    { name: "OpenAI TTS", note: "Fallback voice engine" },
    { name: "Google STT", note: "Speech recognition" },
    { name: "Whisper AI", note: "Video transcription" },
  ];
  engines.forEach((e, i) => {
    const x = 0.4 + i * 2.35;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 4.2, w: 2.15, h: 0.7, fill: { color: C.surface }, line: { color: C.green, transparency: 70 } });
    s.addText(e.name, { x, y: 4.25, w: 2.15, h: 0.3, fontSize: 12, bold: true, color: C.greenGlow, align: "center", fontFace: "Calibri", margin: 0 });
    s.addText(e.note, { x, y: 4.52, w: 2.15, h: 0.3, fontSize: 9, color: C.muted, align: "center", fontFace: "Calibri", margin: 0 });
  });
}

// ════════════════════════════════════════
// SLIDE 6 — KEY ADVANTAGES
// ════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.bg };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.green }, line: { color: C.green } });
  s.addText("ADVANTAGES", { x: 0.5, y: 0, w: 9, h: 0.8, fontSize: 11, color: C.white, bold: true, fontFace: "Calibri", charSpacing: 3, valign: "middle", margin: 0 });
  s.addText("Why APRICA Wins", { x: 0.5, y: 0.97, w: 9, h: 0.58, fontSize: 30, bold: true, color: C.white, fontFace: "Trebuchet MS", margin: 0 });

  const pros = [
    { icon: "🌍", title: "Africa-First Design",      desc: "Built exclusively for African linguistic needs. Not an afterthought — African languages are the primary focus." },
    { icon: "🔊", title: "Authentic Accents",         desc: "6 voice profiles including Nigerian, Kenyan, British & American accents. Powered by ElevenLabs multilingual v2." },
    { icon: "⚡", title: "Multi-Engine Fallback",     desc: "Google Translate → OpenAI GPT-4o → Demo Mode. Always functional even if one API is unavailable." },
    { icon: "📁", title: "Full Document Pipeline",    desc: "PDF, DOCX, TXT — including full book summarization and translation in a single click." },
    { icon: "🎬", title: "Video Dubbing",             desc: "Complete video localization: transcribe, translate, generate African voiceover and merge into final video." },
    { icon: "🤖", title: "Culturally-Aware AI Chat",  desc: "GPT-4o trained to be culturally sensitive to African contexts, greetings, idioms, and customs." },
    { icon: "🔒", title: "Privacy-First",             desc: "Uploaded files are processed in memory and deleted immediately after translation. Zero data retention." },
    { icon: "🔌", title: "Open API Architecture",     desc: "REST API with 9 endpoints. Easy to integrate into existing applications, websites, and workflows." },
  ];

  pros.forEach((p, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.75;
    const y = 1.72 + row * 0.9;
    
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.5, h: 0.78, fill: { color: C.card }, line: { color: C.green, transparency: 65 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.06, h: 0.78, fill: { color: C.green }, line: { color: C.green } });
    s.addText(p.icon, { x: x+0.1, y, w: 0.65, h: 0.78, fontSize: 20, align: "center", valign: "middle" });
    s.addText(p.title, { x: x+0.78, y: y+0.08, w: 3.6, h: 0.28, fontSize: 12, bold: true, color: C.greenGlow, fontFace: "Calibri", margin: 0 });
    s.addText(p.desc, { x: x+0.78, y: y+0.34, w: 3.6, h: 0.38, fontSize: 9.5, color: C.light, fontFace: "Calibri", lineSpacingMultiple: 1.15, margin: 0 });
  });
}

// ════════════════════════════════════════
// SLIDE 7 — PROS & CONS
// ════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.bg };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.surface }, line: { color: C.surface } });
  s.addText("ANALYSIS", { x: 0.5, y: 0, w: 9, h: 0.8, fontSize: 11, color: C.green, bold: true, fontFace: "Calibri", charSpacing: 3, valign: "middle", margin: 0 });
  s.addText("Pros & Considerations", { x: 0.5, y: 0.97, w: 9, h: 0.55, fontSize: 30, bold: true, color: C.white, fontFace: "Trebuchet MS", margin: 0 });

  // PROS column
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.7, w: 5.5, h: 0.45, fill: { color: C.green }, line: { color: C.green } });
  s.addText("✅  STRENGTHS & ADVANTAGES (Focus)", { x: 0.4, y: 1.7, w: 5.5, h: 0.45, fontSize: 12, bold: true, color: C.white, fontFace: "Calibri", valign: "middle", margin: [0, 0, 0, 12] });

  const pros = [
    "First platform focused exclusively on African languages",
    "Supports 4 major African languages covering 350M+ speakers",
    "Multi-engine AI fallback ensures high availability",
    "Covers all use cases: text, voice, video, documents, chat",
    "Authentic African voice profiles via ElevenLabs",
    "Open REST API — integrates into any existing system",
    "Works in demo mode without API keys configured",
    "Privacy-first: files deleted immediately after processing",
  ];
  pros.forEach((p, i) => {
    const y = 2.28 + i * 0.35;
    s.addShape(pres.shapes.OVAL, { x: 0.48, y: y + 0.07, w: 0.2, h: 0.2, fill: { color: C.green }, line: { color: C.green } });
    s.addText(p, { x: 0.78, y, w: 4.95, h: 0.33, fontSize: 11, color: C.light, fontFace: "Calibri", valign: "middle", margin: 0 });
  });

  // CONS column
  s.addShape(pres.shapes.RECTANGLE, { x: 6.2, y: 1.7, w: 3.4, h: 0.45, fill: { color: C.surface }, line: { color: C.muted } });
  s.addText("⚠️  CONSIDERATIONS", { x: 6.2, y: 1.7, w: 3.4, h: 0.45, fontSize: 12, bold: true, color: C.light, fontFace: "Calibri", valign: "middle", margin: [0, 0, 0, 12] });

  const cons = [
    "API keys required for full\nfeature access",
    "African accent voices still\nimproving in accuracy",
    "Video dubbing requires\nffmpeg installation",
    "Internet connection needed\nfor all AI features",
    "Limited to 4 languages\n(expandable roadmap)",
  ];
  cons.forEach((c, i) => {
    const y = 2.28 + i * 0.61;
    s.addShape(pres.shapes.RECTANGLE, { x: 6.2, y: y-0.02, w: 3.4, h: 0.55, fill: { color: C.card }, line: { color: C.muted, transparency: 70 } });
    s.addText(c, { x: 6.35, y, w: 3.1, h: 0.5, fontSize: 10, color: C.muted, fontFace: "Calibri", lineSpacingMultiple: 1.15, margin: 0 });
  });
}

// ════════════════════════════════════════
// SLIDE 8 — TECHNOLOGY STACK
// ════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.bg };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.surface }, line: { color: C.surface } });
  s.addText("TECHNOLOGY", { x: 0.5, y: 0, w: 9, h: 0.8, fontSize: 11, color: C.green, bold: true, fontFace: "Calibri", charSpacing: 3, valign: "middle", margin: 0 });
  s.addText("Technology Stack", { x: 0.5, y: 0.97, w: 9, h: 0.55, fontSize: 30, bold: true, color: C.white, fontFace: "Trebuchet MS", margin: 0 });

  const layers = [
    {
      title: "🖥️  Frontend",
      items: ["HTML5 / CSS3 / Vanilla JavaScript", "Responsive design (mobile-first)", "Real-time audio recording (MediaRecorder API)", "File drag-and-drop upload"],
      color: C.gold,
    },
    {
      title: "⚙️  Backend",
      items: ["Python Flask 3.0", "Flask-CORS for API access", "Python-dotenv for config", "REST API architecture"],
      color: C.green,
    },
    {
      title: "🤖  AI / APIs",
      items: ["OpenAI GPT-4o (chat, translation)", "OpenAI Whisper (STT)", "OpenAI TTS (voice synthesis)", "Google Cloud Translate", "ElevenLabs (African voices)"],
      color: C.greenGlow,
    },
    {
      title: "📦  Processing",
      items: ["PyPDF2 (PDF parsing)", "python-docx (Word files)", "BeautifulSoup4 (web scraping)", "moviepy + ffmpeg (video)"],
      color: C.muted,
    },
  ];

  layers.forEach((l, i) => {
    const x = 0.35 + i * 2.35;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.72, w: 2.2, h: 3.5, fill: { color: C.card }, line: { color: l.color, transparency: 60 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.72, w: 2.2, h: 0.06, fill: { color: l.color }, line: { color: l.color } });
    s.addText(l.title, { x, y: 1.82, w: 2.2, h: 0.45, fontSize: 11, bold: true, color: l.color, align: "center", fontFace: "Calibri", margin: 0 });
    l.items.forEach((item, j) => {
      s.addText("• " + item, { x: x+0.1, y: 2.38 + j * 0.6, w: 2.0, h: 0.52, fontSize: 10, color: C.light, fontFace: "Calibri", lineSpacingMultiple: 1.15, margin: 0 });
    });
  });
}

// ════════════════════════════════════════
// SLIDE 9 — ROADMAP
// ════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.bg };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: C.surface }, line: { color: C.surface } });
  s.addText("ROADMAP", { x: 0.5, y: 0, w: 9, h: 0.8, fontSize: 11, color: C.green, bold: true, fontFace: "Calibri", charSpacing: 3, valign: "middle", margin: 0 });
  s.addText("What's Next for APRICA", { x: 0.5, y: 0.97, w: 9, h: 0.55, fontSize: 30, bold: true, color: C.white, fontFace: "Trebuchet MS", margin: 0 });

  const phases = [
    {
      phase: "PHASE 1", timeframe: "Now — Q3 2025", color: C.green,
      items: ["✅ Core translation (text, URL, doc)", "✅ 4 African languages", "✅ 6 voice profiles", "✅ AI chatbot", "✅ Video translation"]
    },
    {
      phase: "PHASE 2", timeframe: "Q4 2025 — Q1 2026", color: C.gold,
      items: ["🔜 10 more African languages", "🔜 Real-time video dubbing", "🔜 Browser extension", "🔜 Mobile app (iOS & Android)", "🔜 Offline mode"]
    },
    {
      phase: "PHASE 3", timeframe: "Q2 2026+", color: C.muted,
      items: ["🚀 Government API partnerships", "🚀 Healthcare translation suite", "🚀 Education platform integration", "🚀 100+ African languages", "🚀 Custom voice cloning"]
    },
  ];

  phases.forEach((ph, i) => {
    const x = 0.4 + i * 3.1;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.72, w: 2.9, h: 3.5, fill: { color: C.card }, line: { color: ph.color, transparency: 50 }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.72, w: 2.9, h: 0.08, fill: { color: ph.color }, line: { color: ph.color } });
    s.addText(ph.phase, { x, y: 1.85, w: 2.9, h: 0.35, fontSize: 14, bold: true, color: ph.color, align: "center", fontFace: "Trebuchet MS", margin: 0 });
    s.addText(ph.timeframe, { x, y: 2.15, w: 2.9, h: 0.28, fontSize: 9, color: C.muted, align: "center", fontFace: "Calibri", margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x: x+0.3, y: 2.45, w: 2.3, h: 0.02, fill: { color: ph.color, transparency: 60 }, line: { color: ph.color, transparency: 100 } });
    ph.items.forEach((item, j) => {
      s.addText(item, { x: x+0.18, y: 2.58 + j * 0.52, w: 2.55, h: 0.45, fontSize: 10, color: C.light, fontFace: "Calibri", lineSpacingMultiple: 1.1, margin: 0 });
    });
  });
}

// ════════════════════════════════════════
// SLIDE 10 — CTA / CLOSING
// ════════════════════════════════════════
{
  let s = pres.addSlide();
  s.background = { color: C.bg };

  // Full green bottom panel
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 3.2, w: 10, h: 2.425, fill: { color: C.greenDark }, line: { color: C.greenDark } });

  // Decorative
  s.addShape(pres.shapes.OVAL, { x: -1, y: -1, w: 4, h: 4, fill: { color: C.green, transparency: 88 }, line: { color: C.green, transparency: 100 } });
  s.addShape(pres.shapes.OVAL, { x: 7.5, y: 1, w: 3, h: 3, fill: { color: C.gold, transparency: 90 }, line: { color: C.gold, transparency: 100 } });

  s.addText("Ready to Break Language Barriers?", { x: 0.5, y: 0.7, w: 9, h: 0.8, fontSize: 36, bold: true, color: C.white, fontFace: "Trebuchet MS", align: "center", margin: 0 });
  s.addText("APRICA is live and ready for testing.", { x: 0.5, y: 1.5, w: 9, h: 0.45, fontSize: 18, color: C.greenGlow, align: "center", fontFace: "Calibri", margin: 0 });
  s.addText("One platform. Four African languages. Millions of voices.", { x: 0.5, y: 1.98, w: 9, h: 0.38, fontSize: 13, color: C.light, align: "center", fontFace: "Calibri", margin: 0 });

  // CTA buttons
  s.addShape(pres.shapes.RECTANGLE, { x: 2.5, y: 3.5, w: 2.2, h: 0.7, fill: { color: C.gold }, line: { color: C.gold } });
  s.addText("🚀  Launch App", { x: 2.5, y: 3.5, w: 2.2, h: 0.7, fontSize: 13, bold: true, color: C.bg, align: "center", valign: "middle", fontFace: "Calibri" });

  s.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 3.5, w: 2.3, h: 0.7, fill: { color: C.surface }, line: { color: C.light } });
  s.addText("📁  View Code", { x: 5.2, y: 3.5, w: 2.3, h: 0.7, fontSize: 13, bold: true, color: C.white, align: "center", valign: "middle", fontFace: "Calibri" });

  s.addText("localhost:5000  |  python app.py  |  MIT License", { x: 0.5, y: 4.55, w: 9, h: 0.35, fontSize: 10, color: C.muted, align: "center", fontFace: "Calibri", margin: 0 });

  // Logo footer
  s.addShape(pres.shapes.RECTANGLE, { x: 4.4, y: 5.1, w: 1.2, h: 0.35, fill: { color: C.green, transparency: 60 }, line: { color: C.green, transparency: 100 } });
  s.addText("APRICA", { x: 4.4, y: 5.1, w: 1.2, h: 0.35, fontSize: 11, bold: true, color: C.white, align: "center", fontFace: "Trebuchet MS", charSpacing: 2, margin: 0 });
}

// Save
pres.writeFile({ fileName: "/mnt/user-data/outputs/APRICA_Presentation.pptx" }).then(() => {
  console.log("✅ APRICA_Presentation.pptx saved successfully!");
}).catch(err => {
  console.error("Error:", err);
});
