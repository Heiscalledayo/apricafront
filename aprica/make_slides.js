const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = 'APRICA Team';
pres.title = 'APRICA - African Language AI Platform';

// COLOR PALETTE
const C = {
  dark:   '0D1B0F',  // deep forest
  green:  '006B3C',  // Nigerian green
  green2: '00A855',  // lighter green
  gold:   'FCD116',  // Nigerian gold
  red:    'CE1126',  // Nigerian red
  cream:  'F9F4EA',
  white:  'FFFFFF',
  gray:   '9DB89F',
  midGray:'4A6B4D',
  card:   '132215',
};

const makeShadow = () => ({ type:"outer", blur:8, offset:3, color:"000000", opacity:0.25, angle:135 });

// ══════════════════════════════════════════
// SLIDE 1 — TITLE
// ══════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.dark };

  // African geometric pattern (triangles)
  for(let i = 0; i < 8; i++) {
    s.addShape(pres.shapes.RECTANGLE, { x: i*1.4-0.5, y:0, w:0.7, h:0.12, fill:{color:i%3===0?C.green:i%3===1?C.gold:C.red} });
    s.addShape(pres.shapes.RECTANGLE, { x: i*1.4-0.5, y:5.505, w:0.7, h:0.12, fill:{color:i%3===0?C.red:i%3===1?C.green:C.gold} });
  }

  // Side accent
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:0.06, h:5.625, fill:{color:C.green} });

  // Big circle decoration
  s.addShape(pres.shapes.OVAL, { x:7.2, y:0.4, w:3.8, h:3.8, fill:{color:C.green, transparency:88}, line:{color:C.green,width:1} });
  s.addShape(pres.shapes.OVAL, { x:7.6, y:0.8, w:3.0, h:3.0, fill:{color:C.gold, transparency:92}, line:{color:C.gold,width:1} });

  // Globe emoji area
  s.addText("🌍", { x:8.2, y:1.2, w:2, h:2, fontSize:80, align:'center', valign:'middle' });

  // APRICA title
  s.addText("APRICA", { x:0.5, y:1.0, w:6.5, h:1.4, fontSize:72, fontFace:"Georgia", bold:true, color:C.gold, align:'left', margin:0 });

  // Tagline
  s.addText("African Language AI Platform", { x:0.5, y:2.35, w:6.5, h:0.5, fontSize:20, fontFace:"Calibri", color:C.white, align:'left', margin:0 });

  // Description
  s.addText("Transforming African Voices — Speech to Text · Text to Speech\nTranslation · Chatbot · Video Dubbing · Document Processing", {
    x:0.5, y:2.95, w:6.5, h:0.9, fontSize:12, fontFace:"Calibri", color:C.gray, align:'left', margin:0, italic:true
  });

  // Language badges
  const langs = ['Nigerian Pidgin','Yoruba','Hausa','Swahili'];
  langs.forEach((l,i) => {
    const colors = [C.green, C.gold, C.red, '006B3C'];
    const textColors = [C.white, C.dark, C.white, C.white];
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5 + i*2.25, y:4.2, w:2.1, h:0.44, fill:{color:colors[i]}, rectRadius:0.1, shadow:makeShadow() });
    s.addText(l, { x:0.5+i*2.25, y:4.2, w:2.1, h:0.44, fontSize:11, fontFace:"Calibri", color:textColors[i], align:'center', valign:'middle', bold:true, margin:0 });
  });

  // Footer
  s.addText("Bridging Digital Language Divide Across Africa", {
    x:0.5, y:5.1, w:9, h:0.3, fontSize:10, fontFace:"Calibri", color:C.midGray, align:'left', italic:true
  });
}

// ══════════════════════════════════════════
// SLIDE 2 — PROBLEM & MISSION
// ══════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.dark };
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:10, h:0.12, fill:{color:C.green} });
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:5.505, w:10, h:0.12, fill:{color:C.gold} });

  s.addText("The Problem & Our Mission", { x:0.5, y:0.3, w:9, h:0.6, fontSize:28, fontFace:"Georgia", bold:true, color:C.gold, margin:0 });

  // Left: problem box
  s.addShape(pres.shapes.RECTANGLE, { x:0.4, y:1.05, w:4.4, h:3.8, fill:{color:'0A1A0C'}, line:{color:C.red,width:2}, shadow:makeShadow() });
  s.addText("The Challenge", { x:0.4, y:1.05, w:4.4, h:0.45, fontSize:14, fontFace:"Georgia", bold:true, color:C.red, align:'center', valign:'middle', margin:0 });
  s.addShape(pres.shapes.RECTANGLE, { x:0.4, y:1.5, w:4.4, h:0.02, fill:{color:C.red} });

  const problems = [
    "🚫  Over 2,000 African languages largely absent from AI tools",
    "🚫  Digital content overwhelmingly in English & French",
    "🚫  African professionals lose business to language barriers",
    "🚫  Cultural nuance is lost in generic translation tools",
    "🚫  No authentic African voice options in TTS systems",
  ];
  s.addText(problems.map((p,i) => ({ text: p, options:{breakLine: i<problems.length-1, fontSize:11.5, color:C.white, fontFace:"Calibri"} })),
    { x:0.55, y:1.6, w:4.1, h:3.1 });

  // Right: mission box
  s.addShape(pres.shapes.RECTANGLE, { x:5.2, y:1.05, w:4.4, h:3.8, fill:{color:'0A1A0C'}, line:{color:C.green,width:2}, shadow:makeShadow() });
  s.addText("APRICA's Mission", { x:5.2, y:1.05, w:4.4, h:0.45, fontSize:14, fontFace:"Georgia", bold:true, color:C.green2, align:'center', valign:'middle', margin:0 });
  s.addShape(pres.shapes.RECTANGLE, { x:5.2, y:1.5, w:4.4, h:0.02, fill:{color:C.green} });

  const missions = [
    "✅  AI translation for 4 major African languages",
    "✅  Authentic African voice synthesis (male & female)",
    "✅  Nigerian, British, American accent options",
    "✅  End-to-end: text, documents, audio, video",
    "✅  Culturally-aware AI chatbot for African contexts",
  ];
  s.addText(missions.map((m,i) => ({ text: m, options:{breakLine: i<missions.length-1, fontSize:11.5, color:C.white, fontFace:"Calibri"} })),
    { x:5.35, y:1.6, w:4.1, h:3.1 });
}

// ══════════════════════════════════════════
// SLIDE 3 — PLATFORM FEATURES OVERVIEW
// ══════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.dark };
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:10, h:0.12, fill:{color:C.gold} });

  s.addText("Platform Features", { x:0.4, y:0.25, w:9, h:0.55, fontSize:28, fontFace:"Georgia", bold:true, color:C.gold, margin:0 });
  s.addText("9 powerful tools, one unified African language platform", {
    x:0.4, y:0.8, w:9, h:0.3, fontSize:13, fontFace:"Calibri", color:C.gray, italic:true
  });

  const features = [
    { icon:"🔤", title:"Text Translation",      desc:"Real-time translation with cultural nuance" },
    { icon:"🌐", title:"Website Translation",   desc:"Full URL/webpage translation" },
    { icon:"📄", title:"Document Translation",  desc:"PDF, DOCX, TXT files" },
    { icon:"📚", title:"Book Summary",          desc:"AI translation + chapter summaries" },
    { icon:"🔊", title:"Text to Speech",        desc:"6 African & international voices" },
    { icon:"🎤", title:"Speech to Text",        desc:"Whisper-powered transcription" },
    { icon:"🎙️", title:"Voice Translation",     desc:"Translate and hear instantly" },
    { icon:"🎬", title:"Video Translation",     desc:"Full video dubbing pipeline" },
    { icon:"🤖", title:"AI Chatbot",            desc:"Culturally-aware multilingual AI" },
  ];

  features.forEach((f, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.4 + col * 3.22;
    const y = 1.25 + row * 1.35;

    s.addShape(pres.shapes.RECTANGLE, { x, y, w:3.0, h:1.18, fill:{color:C.card}, line:{color:'2D4A2F',width:1}, shadow:makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w:3.0, h:0.04, fill:{color: i%3===0?C.green:i%3===1?C.gold:C.red} });
    s.addText(f.icon, { x, y:y+0.08, w:0.7, h:0.6, fontSize:24, align:'center', valign:'middle' });
    s.addText(f.title, { x:x+0.65, y:y+0.1, w:2.25, h:0.4, fontSize:11.5, fontFace:"Georgia", bold:true, color:C.white, valign:'middle', margin:0 });
    s.addText(f.desc, { x:x+0.65, y:y+0.5, w:2.25, h:0.56, fontSize:10, fontFace:"Calibri", color:C.gray, margin:0 });
  });
}

// ══════════════════════════════════════════
// SLIDE 4 — SUPPORTED LANGUAGES & VOICES
// ══════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.dark };
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:10, h:0.12, fill:{color:C.red} });

  s.addText("Languages & Voices", { x:0.4, y:0.25, w:9, h:0.55, fontSize:28, fontFace:"Georgia", bold:true, color:C.gold, margin:0 });

  // Language cards
  const langs = [
    { name:"Nigerian Pidgin", code:"pcm", flag:"🇳🇬", desc:"Naija Pidgin — West Africa's most widely spoken creole. Over 75M speakers.", color:C.green },
    { name:"Yoruba",          code:"yo",  flag:"🟡",  desc:"One of West Africa's major languages. 45M+ native speakers across Nigeria, Benin, Togo.", color:C.gold },
    { name:"Hausa",           code:"ha",  flag:"🔴",  desc:"Most spoken language in West Africa. 70M+ speakers across Nigeria, Niger, Ghana.", color:C.red },
    { name:"Swahili",         code:"sw",  flag:"🌍",  desc:"Lingua franca of East/Central Africa. 200M+ speakers across 14 countries.", color:C.green2 },
  ];

  langs.forEach((l, i) => {
    const x = 0.3 + i*2.4;
    s.addShape(pres.shapes.RECTANGLE, { x, y:1.0, w:2.2, h:2.2, fill:{color:C.card}, line:{color:'2D4A2F',width:1}, shadow:makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y:1.0, w:2.2, h:0.05, fill:{color:l.color} });
    s.addText(l.flag, { x, y:1.1, w:2.2, h:0.7, fontSize:36, align:'center' });
    s.addText(l.name, { x, y:1.8, w:2.2, h:0.35, fontSize:12, fontFace:"Georgia", bold:true, color:C.gold, align:'center', margin:0 });
    s.addText(l.code.toUpperCase(), { x, y:2.15, w:2.2, h:0.22, fontSize:9, fontFace:"Calibri", color:l.color, align:'center', bold:true, charSpacing:3 });
    s.addText(l.desc, { x:x+0.1, y:2.37, w:2.0, h:0.75, fontSize:9, fontFace:"Calibri", color:C.gray, align:'center' });
  });

  // Voices section
  s.addShape(pres.shapes.RECTANGLE, { x:0.3, y:3.35, w:9.4, h:0.04, fill:{color:'2D4A2F'} });
  s.addText("Available Voice Accents", { x:0.3, y:3.45, w:9, h:0.35, fontSize:14, fontFace:"Georgia", bold:true, color:C.white });

  const voices = [
    { name:"Amara",  accent:"East African Female", icon:"👩🏿" },
    { name:"Kwame",  accent:"West African Male",   icon:"👨🏿" },
    { name:"Chioma", accent:"Nigerian Female",      icon:"👩🏾" },
    { name:"Emeka",  accent:"Nigerian Male",        icon:"👨🏾" },
    { name:"James",  accent:"British Male",         icon:"🇬🇧" },
    { name:"Sarah",  accent:"American Female",      icon:"🇺🇸" },
  ];

  voices.forEach((v, i) => {
    const x = 0.3 + i*1.6;
    s.addShape(pres.shapes.RECTANGLE, { x, y:3.9, w:1.45, h:1.4, fill:{color:'0A1A0C'}, line:{color:'2D4A2F',width:1}, shadow:makeShadow() });
    s.addText(v.icon, { x, y:3.93, w:1.45, h:0.65, fontSize:28, align:'center' });
    s.addText(v.name, { x, y:4.58, w:1.45, h:0.28, fontSize:11, fontFace:"Georgia", bold:true, color:C.white, align:'center', margin:0 });
    s.addText(v.accent, { x, y:4.86, w:1.45, h:0.35, fontSize:8.5, fontFace:"Calibri", color:C.gray, align:'center', margin:0 });
  });
}

// ══════════════════════════════════════════
// SLIDE 5 — ADVANTAGES (PROS) — KEY SLIDE
// ══════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.dark };
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:10, h:0.12, fill:{color:C.green} });

  s.addText("Key Advantages", { x:0.4, y:0.25, w:9, h:0.55, fontSize:28, fontFace:"Georgia", bold:true, color:C.gold, margin:0 });
  s.addText("Why APRICA is transformative for African digital inclusion", {
    x:0.4, y:0.82, w:9, h:0.3, fontSize:12, fontFace:"Calibri", color:C.gray, italic:true
  });

  const pros = [
    { icon:"🌍", title:"Cultural Authenticity",   desc:"AI trained on African cultural contexts, idioms, and expressions — not generic translations",          num:"#1" },
    { icon:"🔊", title:"African Voice Synthesis",  desc:"Dedicated African voices (Amara, Kwame, Chioma, Emeka) with authentic accents rarely seen in AI",       num:"#2" },
    { icon:"⚡", title:"Real-Time Processing",     desc:"Instant text translation, TTS, and transcription powered by GPT-4o and Whisper APIs",                   num:"#3" },
    { icon:"📱", title:"All-in-One Platform",      desc:"9 integrated tools: text, web, docs, books, audio, video, chatbot — no need for multiple apps",         num:"#4" },
    { icon:"🎬", title:"Video Dubbing Pipeline",   desc:"Complete video translation: transcribe → translate → generate dubbed audio. Unique in African AI space", num:"#5" },
    { icon:"🤝", title:"Business Ready",           desc:"Document translation, book summaries, and professional-grade output for companies and professionals",    num:"#6" },
  ];

  pros.forEach((p, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.3 + col * 4.85;
    const y = 1.25 + row * 1.35;

    s.addShape(pres.shapes.RECTANGLE, { x, y, w:4.55, h:1.18, fill:{color:'081208'}, line:{color:C.green,width:1.5}, shadow:makeShadow() });

    // Accent left stripe
    s.addShape(pres.shapes.RECTANGLE, { x, y, w:0.06, h:1.18, fill:{color:C.green} });

    // Number badge
    s.addShape(pres.shapes.OVAL, { x:x+0.15, y:y+0.12, w:0.45, h:0.45, fill:{color:C.green} });
    s.addText(p.num, { x:x+0.15, y:y+0.12, w:0.45, h:0.45, fontSize:9, fontFace:"Georgia", bold:true, color:C.white, align:'center', valign:'middle', margin:0 });

    s.addText(p.icon + "  " + p.title, { x:x+0.7, y:y+0.08, w:3.7, h:0.38, fontSize:12.5, fontFace:"Georgia", bold:true, color:C.gold, valign:'middle', margin:0 });
    s.addText(p.desc, { x:x+0.7, y:y+0.46, w:3.7, h:0.62, fontSize:10, fontFace:"Calibri", color:C.white, margin:0 });
  });
}

// ══════════════════════════════════════════
// SLIDE 6 — CONSIDERATIONS & ROADMAP
// ══════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.dark };
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:10, h:0.12, fill:{color:C.gold} });

  s.addText("Considerations & Roadmap", { x:0.4, y:0.25, w:9, h:0.55, fontSize:28, fontFace:"Georgia", bold:true, color:C.gold, margin:0 });

  // Left: Considerations
  s.addShape(pres.shapes.RECTANGLE, { x:0.3, y:1.0, w:4.4, h:4.2, fill:{color:C.card}, line:{color:'2D4A2F',width:1}, shadow:makeShadow() });
  s.addShape(pres.shapes.RECTANGLE, { x:0.3, y:1.0, w:4.4, h:0.44, fill:{color:'1A0A0A'} });
  s.addText("⚠️  Current Considerations", { x:0.3, y:1.0, w:4.4, h:0.44, fontSize:13, fontFace:"Georgia", bold:true, color:C.red, align:'center', valign:'middle', margin:0 });

  const cons = [
    ["API Costs", "OpenAI & ElevenLabs APIs have usage costs. Budget planning required for scale."],
    ["Dialect Depth", "African languages have hundreds of dialects. Current scope covers major variants."],
    ["Audio Latency", "TTS generation takes 2-5 seconds depending on text length."],
    ["Video Size Limits", "Video files currently limited to 50MB. Large productions need chunking."],
    ["Connectivity", "Requires internet for all AI API calls. Offline mode not yet available."],
  ];

  cons.forEach(([title, desc], i) => {
    s.addText("⚡ " + title, { x:0.45, y:1.55 + i*0.52, w:4.1, h:0.24, fontSize:11, fontFace:"Georgia", bold:true, color:C.gold, margin:0 });
    s.addText(desc, { x:0.45, y:1.79 + i*0.52, w:4.1, h:0.2, fontSize:9.5, fontFace:"Calibri", color:C.gray, margin:0 });
  });

  // Right: Roadmap
  s.addShape(pres.shapes.RECTANGLE, { x:5.3, y:1.0, w:4.4, h:4.2, fill:{color:C.card}, line:{color:'2D4A2F',width:1}, shadow:makeShadow() });
  s.addShape(pres.shapes.RECTANGLE, { x:5.3, y:1.0, w:4.4, h:0.44, fill:{color:'081C10'} });
  s.addText("🚀  Product Roadmap", { x:5.3, y:1.0, w:4.4, h:0.44, fontSize:13, fontFace:"Georgia", bold:true, color:C.green2, align:'center', valign:'middle', margin:0 });

  const roadmap = [
    ["Q1 2025","20+ African languages (Igbo, Amharic, Zulu, Wolof...)"],
    ["Q2 2025","Mobile apps (iOS & Android) with offline mode"],
    ["Q3 2025","Real-time voice call translation & live captioning"],
    ["Q4 2025","Custom African voice cloning (train your own voice)"],
    ["2026","Enterprise API for businesses, NGOs, and governments"],
  ];

  roadmap.forEach(([when, what], i) => {
    s.addShape(pres.shapes.OVAL, { x:5.42, y:1.58+i*0.52, w:0.38, h:0.38, fill:{color:C.green} });
    s.addText(when, { x:5.42, y:1.58+i*0.52, w:0.38, h:0.38, fontSize:7.5, fontFace:"Calibri", color:C.white, align:'center', valign:'middle', bold:true, margin:0 });
    s.addShape(pres.shapes.RECTANGLE, { x:5.85, y:1.71+i*0.52, w:3.7, h:0.02, fill:{color:'2D4A2F'} });
    s.addText(what, { x:5.88, y:1.56+i*0.52, w:3.65, h:0.44, fontSize:10, fontFace:"Calibri", color:C.white, valign:'middle', margin:0 });
  });
}

// ══════════════════════════════════════════
// SLIDE 7 — TECHNICAL ARCHITECTURE
// ══════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.dark };
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:10, h:0.12, fill:{color:C.green} });

  s.addText("Technical Architecture", { x:0.4, y:0.25, w:9, h:0.55, fontSize:28, fontFace:"Georgia", bold:true, color:C.gold, margin:0 });

  // Flow diagram
  const nodes = [
    { x:0.3,  y:1.2, w:1.8, label:"User Input\n(Text/Audio/\nVideo/File)", color:C.green },
    { x:2.5,  y:1.2, w:1.8, label:"APRICA\nFlask Backend\n(Python)", color:'1A3A1F' },
    { x:4.7,  y:0.8, w:1.8, label:"OpenAI\nGPT-4o\n(Translation/Chat)", color:'1A1A3A' },
    { x:4.7,  y:2.2, w:1.8, label:"OpenAI\nWhisper\n(STT)", color:'1A1A3A' },
    { x:4.7,  y:3.6, w:1.8, label:"OpenAI TTS /\nElevenLabs\n(Voice)", color:'1A1A3A' },
    { x:7.0,  y:1.2, w:2.7, label:"African Language\nOutput\n(Translated Text / Audio / Video)", color:C.green },
  ];

  nodes.forEach(n => {
    s.addShape(pres.shapes.RECTANGLE, { x:n.x, y:n.y, w:n.w, h:1.0, fill:{color:n.color}, line:{color:'2D4A2F',width:1.5}, shadow:makeShadow() });
    s.addText(n.label, { x:n.x, y:n.y, w:n.w, h:1.0, fontSize:10, fontFace:"Calibri", color:C.white, align:'center', valign:'middle', bold:true, margin:0 });
  });

  // Arrows
  s.addShape(pres.shapes.LINE, { x:2.1, y:1.72, w:0.4, h:0, line:{color:C.gold,width:2} });
  s.addShape(pres.shapes.LINE, { x:4.3, y:1.3, w:0.4, h:0, line:{color:C.gold,width:2} });
  s.addShape(pres.shapes.LINE, { x:4.3, y:2.72, w:0.4, h:0, line:{color:C.gold,width:2} });
  s.addShape(pres.shapes.LINE, { x:4.3, y:4.12, w:0.4, h:0, line:{color:C.gold,width:2} });
  s.addShape(pres.shapes.LINE, { x:6.5, y:1.72, w:0.5, h:0, line:{color:C.gold,width:2} });

  // Tech stack pills
  s.addText("Technology Stack:", { x:0.3, y:4.75, w:2, h:0.35, fontSize:11, fontFace:"Georgia", bold:true, color:C.white });
  const techs = ["Flask (Python)", "OpenAI GPT-4o", "Whisper STT", "ElevenLabs TTS", "Google Translate", "ffmpeg", "moviepy"];
  techs.forEach((t, i) => {
    const x = 0.3 + (i % 4) * 2.42;
    const y = 5.1 + Math.floor(i/4) * 0.3;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w:2.25, h:0.27, fill:{color:C.green, transparency:80}, line:{color:C.green,width:1} });
    s.addText(t, { x, y, w:2.25, h:0.27, fontSize:9.5, fontFace:"Calibri", color:C.gold, align:'center', valign:'middle', bold:true, margin:0 });
  });
}

// ══════════════════════════════════════════
// SLIDE 8 — BUSINESS IMPACT
// ══════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.dark };
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:10, h:0.12, fill:{color:C.gold} });
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:5.505, w:10, h:0.12, fill:{color:C.green} });

  s.addText("Market Impact & Opportunity", { x:0.4, y:0.25, w:9, h:0.55, fontSize:28, fontFace:"Georgia", bold:true, color:C.gold, margin:0 });

  // Stats
  const stats = [
    { num:"2,000+", label:"African Languages", sub:"Only 4 well-served by AI today" },
    { num:"1.4B",   label:"Africans by 2025", sub:"Growing digital audience" },
    { num:"$180B",  label:"African Digital Economy", sub:"By 2025 (IFC projection)" },
    { num:"75M+",   label:"Pidgin Speakers", sub:"Our primary market" },
  ];

  stats.forEach((st, i) => {
    const x = 0.35 + i*2.42;
    s.addShape(pres.shapes.RECTANGLE, { x, y:1.0, w:2.2, h:1.55, fill:{color:C.card}, line:{color:'2D4A2F',width:1}, shadow:makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y:1.0, w:2.2, h:0.04, fill:{color:[C.green,C.gold,C.red,C.green2][i]} });
    s.addText(st.num, { x, y:1.1, w:2.2, h:0.7, fontSize:30, fontFace:"Georgia", bold:true, color:C.gold, align:'center', valign:'middle', margin:0 });
    s.addText(st.label, { x, y:1.8, w:2.2, h:0.3, fontSize:11, fontFace:"Calibri", bold:true, color:C.white, align:'center', margin:0 });
    s.addText(st.sub, { x, y:2.1, w:2.2, h:0.36, fontSize:9, fontFace:"Calibri", color:C.gray, align:'center', margin:0, italic:true });
  });

  // Use cases
  s.addText("Target Use Cases", { x:0.4, y:2.75, w:9, h:0.38, fontSize:15, fontFace:"Georgia", bold:true, color:C.white });

  const usecases = [
    { icon:"🏢", title:"Corporates", desc:"Translate business docs, emails, contracts to local languages" },
    { icon:"📰", title:"Media",      desc:"News articles and broadcasts in African languages" },
    { icon:"🏥", title:"Healthcare", desc:"Patient communication in mother tongue" },
    { icon:"🎓", title:"Education",  desc:"Learning materials in Yoruba, Hausa, Swahili" },
    { icon:"🏛️", title:"Government", desc:"Public service delivery in local languages" },
  ];

  usecases.forEach((u, i) => {
    const x = 0.35 + i*1.93;
    s.addShape(pres.shapes.RECTANGLE, { x, y:3.2, w:1.78, h:2.0, fill:{color:C.card}, line:{color:'2D4A2F',width:1}, shadow:makeShadow() });
    s.addText(u.icon, { x, y:3.25, w:1.78, h:0.65, fontSize:28, align:'center' });
    s.addText(u.title, { x, y:3.9, w:1.78, h:0.32, fontSize:11, fontFace:"Georgia", bold:true, color:C.gold, align:'center', margin:0 });
    s.addText(u.desc, { x:x+0.1, y:4.22, w:1.58, h:0.9, fontSize:9, fontFace:"Calibri", color:C.gray, align:'center', margin:0 });
  });
}

// ══════════════════════════════════════════
// SLIDE 9 — DEMO WALKTHROUGH
// ══════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.dark };
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:10, h:0.12, fill:{color:C.red} });

  s.addText("Live Demo Walkthrough", { x:0.4, y:0.25, w:9, h:0.55, fontSize:28, fontFace:"Georgia", bold:true, color:C.gold, margin:0 });
  s.addText("Step-by-step presentation guide for your team", {
    x:0.4, y:0.82, w:9, h:0.3, fontSize:12, fontFace:"Calibri", color:C.gray, italic:true
  });

  const steps = [
    { n:"01", title:"Open APRICA",             action:"Go to http://localhost:5000 — show the dashboard with all 9 features" },
    { n:"02", title:"Text Translation",        action:"Type 'Good morning, how are you?' → translate to Nigerian Pidgin" },
    { n:"03", title:"Website Translation",     action:"Enter bbc.com/news — show a live webpage translated to Yoruba" },
    { n:"04", title:"Text to Speech",          action:"Select Chioma (Nigerian Female) → generate speech from Pidgin text" },
    { n:"05", title:"Speech to Text",          action:"Record yourself speaking → show the live Whisper transcript" },
    { n:"06", title:"Voice Translation",       action:"Enter English text → hear it translated to Hausa in Kwame's voice" },
    { n:"07", title:"AI Chatbot",              action:"Switch to Swahili → ask 'Habari za Afrika?' → show cultural response" },
    { n:"08", title:"Document Upload",         action:"Upload a PDF → translate to Yoruba → show structured output" },
  ];

  steps.forEach((st, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.3 + col*4.9;
    const y = 1.2 + row*1.05;

    s.addShape(pres.shapes.RECTANGLE, { x, y, w:4.55, h:0.9, fill:{color:'081208'}, line:{color:'2D4A2F',width:1}, shadow:makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w:0.6, h:0.9, fill:{color:C.green} });
    s.addText(st.n, { x, y, w:0.6, h:0.9, fontSize:14, fontFace:"Georgia", bold:true, color:C.gold, align:'center', valign:'middle', margin:0 });
    s.addText(st.title, { x:x+0.7, y:y+0.06, w:3.72, h:0.3, fontSize:11.5, fontFace:"Georgia", bold:true, color:C.white, valign:'middle', margin:0 });
    s.addText("▶ " + st.action, { x:x+0.7, y:y+0.36, w:3.72, h:0.46, fontSize:9.5, fontFace:"Calibri", color:C.gray, margin:0 });
  });
}

// ══════════════════════════════════════════
// SLIDE 10 — CALL TO ACTION
// ══════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.dark };

  // Tri-color bars
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:0,    w:10, h:0.12, fill:{color:C.green} });
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:0.12, w:10, h:0.12, fill:{color:C.gold} });
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:0.24, w:10, h:0.12, fill:{color:C.red} });
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:5.38, w:10, h:0.08, fill:{color:C.green} });
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:5.46, w:10, h:0.08, fill:{color:C.gold} });
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:5.54, w:10, h:0.08, fill:{color:C.red} });

  // Large globe
  s.addText("🌍", { x:3.5, y:0.5, w:3, h:2.2, fontSize:100, align:'center' });

  s.addText("The Future of African\nLanguage Technology", {
    x:0.5, y:2.7, w:9, h:1.3, fontSize:38, fontFace:"Georgia", bold:true, color:C.gold, align:'center', margin:0
  });
  s.addText("is Here. It Speaks Your Language.", {
    x:0.5, y:3.9, w:9, h:0.5, fontSize:20, fontFace:"Calibri", color:C.white, align:'center', italic:true
  });
  s.addText("APRICA — African Language AI Platform  |  aprica.ai  |  Built with ❤️ for Africa", {
    x:0.5, y:4.6, w:9, h:0.5, fontSize:12, fontFace:"Calibri", color:C.gray, align:'center'
  });

  // CTA Button
  s.addShape(pres.shapes.RECTANGLE, { x:3.5, y:5.05, w:3, h:0.42, fill:{color:C.green}, shadow:makeShadow() });
  s.addText("🚀  Get Started Today", { x:3.5, y:5.05, w:3, h:0.42, fontSize:13, fontFace:"Georgia", bold:true, color:C.white, align:'center', valign:'middle', margin:0 });
}

// Save file
pres.writeFile({ fileName: "APRICA_Platform_Presentation.pptx" })
  .then(() => console.log("✅ Presentation saved: APRICA_Platform_Presentation.pptx"))
  .catch(e => console.error("Error:", e));
