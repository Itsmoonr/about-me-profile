![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
<div align="center">

# Ross Nguyen — Personal Portfolio

**Designer · Developer · Storyteller**

A cinematic, multilingual personal website that tells the story of a journey
from Vietnam to Japan — one chapter, one line of code, one frame at a time.

[🌐 Live Site](https://nguyen-is.living-the.life/) · [📧 Contact](mailto:moonsicson@gmail.com)

</div>

---

## ✨ About This Project

This isn't just a portfolio — it's a **story**. Built from scratch to reflect
who I am: a designer, a developer, and someone who believes that how
something looks is its own kind of kindness to whoever's looking.

The site is organized as **six chapters**, each one a milestone in the journey
from Ho Chi Minh City to Tokyo. Every animation, every frame, every line of
code here is a piece of that journey.

---

## 🌟 Features

### 🎬 Cinematic Experience
- **Dynamic atmosphere** — rain that turns to snow as you scroll through chapters
- **Parallax orbs** — layered background depth that responds to scroll
- **Mouse light** — soft glow that follows the cursor (desktop only)
- **Film grain + vignette** — subtle cinematic overlays for mood
- **Scroll progress bar** — subtle indicator at the top

### 🌏 Multilingual
- **3 languages** — English, Tiếng Việt, 日本語
- **Instant switching** — no page reload, all text updates live
- **Persistent choice** — remembers your language via `localStorage`

### 📖 Storytelling Sections
- **Hero** — animated word-by-word intro
- **Profile** — personal quote, bio, and stat cards
- **Chapters** — 6 milestones with animated timeline
- **Portfolio** — interactive project cards that expand on click
- **Abilities** — categorized skill tags with icons
- **Journal** — photo gallery with lightbox modal
- **Contact** — form + social links

### 🎵 Ambient Music Player
- Play/pause lo-fi ambient track
- Draggable progress bar + volume control
- Live audio visualizer (24-bar gradient animation)
- Space bar shortcut to play/pause

### ♿ Accessibility
- Respects `prefers-reduced-motion` — auto-disables animations
- Keyboard navigable — full tab/enter/ESC support
- ARIA labels on all interactive elements
- Skip-to-content link
- Semantic HTML structure
- High contrast focus indicators

### 📱 Responsive
- **Desktop** — full cinematic experience
- **Mobile** — optimized (lighter particles, disabled effects, larger touch targets)
- **Tablet** — balanced middle ground
- **Print** — clean black-on-white version

---

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| **Structure** | Semantic HTML5 |
| **Styling** | Vanilla CSS3 (custom properties, no framework) |
| **Behavior** | Vanilla JavaScript (ES6+) |
| **Graphics** | HTML5 Canvas API |
| **Audio** | Web Audio API + HTML5 Audio |
| **Fonts** | Google Fonts (Instrument Serif, Inter, JetBrains Mono) |
| **Hosting** | GitHub Pages |

**Zero dependencies. Zero build tools. Zero frameworks.** Just hand-written
code that runs directly in the browser.

---

## 📁 Project Structure
about-me-profile/
├── index.html # Single-page structure
├── css/
│ └── style.css # All styles + animations
├── js/
│ └── script.js # All behavior + i18n
├── audio/
│ └── ambient.mp3 # Background music
├── images/
│ ├── favicon.png
│ ├── ross-portrait.jpg # Hero portrait
│ ├── gallery/ # Journal photos (6)
│ │ ├── gallery-1.jpg
│ │ └── ... gallery-6.jpg
│ └── projects/ # (optional) Project images
└── README.md

text

---

## 🚀 Run Locally

No build step needed. Just serve the folder:

```bash
# Option 1 — Python
python -m http.server 8000

# Option 2 — Node.js
npx serve .

# Option 3 — VS Code
# Install "Live Server" extension → right-click index.html → "Open with Live Server"
Then open http://localhost:8000 in your browser.

Why do I need a server?
Some features (audio, fetch, ES modules) don't work with file://. Serving
through a local server ensures everything runs correctly.

🌐 Deployment
Deployed via GitHub Pages on a custom domain:

Push code to main branch

GitHub → Settings → Pages → Source: main / root

Custom domain: nguyen-is.living-the.life

DNS configured with A/CNAME records

HTTPS enforced via GitHub

🎨 Customization Guide
Change colors
All colors live in :root at the top of css/style.css:

css
:root {
    --accent-warm: #66c0f4;    /* primary blue */
    --accent-teal: #f4a261;    /* secondary orange */
    --bg-deep: #0b1118;        /* background */
    /* ... */
}
Add a new language
Open js/script.js

Find the T object (translations)

Copy en block → rename to your locale code (e.g. fr)

Translate all strings

Add <option value="fr"> in index.html language selector

Add a new project card
Copy any .project-card block in index.html

Update data-i18n keys

Add translations in js/script.js under portfolio

Swap music
Replace audio/ambient.mp3 — keep the same filename. Any MP3 works.

⚡ Performance Highlights
Built with performance in mind:

Zero external JavaScript libraries — no React, Vue, jQuery, etc.

defer script loading — page renders before JS executes

content-visibility: auto — off-screen sections skip rendering

Passive event listeners — scroll doesn't block

requestAnimationFrame throttling — no wasted frames

IntersectionObserver — reveal animations don't use scroll events

Single cached gradient in audio visualizer — no allocation in loop

Mobile particle reduction — 55% fewer canvas particles

prefers-reduced-motion — respects user choice

preconnect for fonts — faster DNS + TLS

Lighthouse score: ~92–96 Desktop / ~80–88 Mobile

📜 License
This project is licensed under the MIT License — see the LICENSE file.

You're free to:

✅ Use it as inspiration

✅ Learn from the code

✅ Fork and build your own

Please don't:

❌ Copy my personal content (bio, photos, story) verbatim

❌ Claim the design as your own

📬 Contact
Email: moonsicson@gmail.com

GitHub: @Itsmoonr

Instagram: @muunst_a

Steam: moondareal

<div align="center">
"Grateful for those who left, cherishing those who stayed."

Thanks for stopping by. The story's still going.
</div> ```
