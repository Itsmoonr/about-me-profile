<div align="center">

```
██████╗   ██████╗   ██████╗   ██████╗
██╔══██╗ ██╔═══██╗ ██╔════╝  ██╔════╝
██████╔╝ ██║   ██║ ╚█████╗   ╚█████╗
██╔══██╗ ██║   ██║  ╚═══██╗   ╚═══██╗
██║  ██║ ╚██████╔╝ ██████╔╝ ██████╔╝
╚═╝  ╚═╝  ╚═════╝  ╚═════╝  ╚═════╝
```

### *A life, rendered in vanilla HTML, CSS, and JavaScript.*

[![Live Demo](https://img.shields.io/badge/▶_live_demo-online-f4a261?style=for-the-badge)](https://itsmoonr.github.io/about-me-profile/)
[![License: MIT](https://img.shields.io/github/license/Itsmoonr/about-me-profile?style=for-the-badge&color=66c0f4)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-success?style=for-the-badge)](#)

<br>

*"Grateful for those who left, cherishing those who stayed.*
*Thank you, past, present, and future.*
*And I hope this moment lasts forever."*

<br>

**[✦ View Live](https://itsmoonr.github.io/about-me-profile/) · [Chapter I](#-chapter-i—-the-vision) · [Getting Started](#-chapter-v—-loading-the-save) · [Contact](#-end-credits)**

</div>

<br>

> ⚠️ **Before you press start:** this site comes with ambient music, particle effects (rain/snow), a glowing cursor, and continuous scroll-driven motion. Best experienced on desktop, at a comfortable volume, with a cup of tea nearby.

---

## 📖 Table of Contents — *Save Slots*

| # | Chapter | Contents |
|---|--------|----------|
| 0 | [Chapter 0 — Boot Sequence](#-chapter-0—-boot-sequence) | What this is, and why it exists |
| I | [Chapter I — The Vision](#-chapter-i—-the-vision) | The idea behind the design |
| II | [Chapter II — Abilities Unlocked](#-chapter-ii—-abilities-unlocked-features) | Every feature, no exaggeration |
| III | [Chapter III — The Toolkit](#-chapter-iii—-the-toolkit-tech-stack) | The technology behind the scenes |
| IV | [Chapter IV — The Archive](#-chapter-iv—-the-archive-project-structure) | Project structure |
| V | [Chapter V — Loading the Save](#-chapter-v—-loading-the-save-getting-started) | Running it on your machine |
| VI | [Chapter VI — Multiverse](#-chapter-vi—-multiverse-internationalization) | The EN / VI / JA language system |
| VII | [Chapter VII — Hidden Passages](#-chapter-vii—-hidden-passages-easter-eggs) | Secrets buried in the code |
| VIII | [Chapter VIII — Accessibility](#-chapter-viii—-accessibility--performance) | Accessibility & performance |
| IX | [Chapter IX — Horizon](#-chapter-ix—-horizon-whats-next) | What's coming next |
| X | [Chapter X — Contributing](#-chapter-x—-contributing) | Want to help out? |
| — | [License](#-license) | MIT |
| — | [End Credits](#-end-credits) | Thanks & contact |

---

## 🎬 Chapter 0 — Boot Sequence

Not every portfolio needs an opening cutscene. This one does.

This isn't a typical "About Me" page with a few bio lines and an attached résumé. It's a **save file** — where one real life, from the unpredictable rain of Ho Chi Minh City to the cold, unfamiliar streets of Tokyo, is told in the language of an RPG: there's a Profile, there are Chapters, there are Abilities, a Journal, and even a **scroll progress bar** so you always know how far into the story you are.

No frameworks. No external libraries. Not a single `npm install`. Just plain HTML, CSS, and JavaScript — and a lot of small details, all handcrafted.

---

## 🌌 Chapter I — The Vision

> *"I write code to make things that feel a little alive. I design because I've learned that how something looks is its own kind of kindness to whoever's looking."*

This site tells six chapters of **Ross Nguyen's** life — a university student, designer, and occasional writer — spanning Vietnam to Japan:

`Homeland` → `The Leap to Japan` → `High School Years` → `Anti-Fraud Volunteering` → `University` → `What's Next`

The core design idea: **a life isn't a static résumé — it's a save file still being written.** Every section — Profile, Chapters, Portfolio, Abilities, Journal, Contact — is built like consecutive game levels: an opening cutscene (the Hero section), a world map (the Chapters timeline), an inventory (Abilities), and a "Save Point" standing in for the usual footer.

---

## ⚡ Chapter II — Abilities Unlocked *(Features)*

Everything listed below **actually exists in the code** — this is not a marketing description.

### 🎭 Cinematic experience
- **Real-time Day/Night Lighting** — the site reads the visitor's own system clock (`new Date().getHours()`) to switch between a day and night color palette. Visit at 2am and the lighting is different from 2pm. No manual toggle, no asking — it simply *lives in your timezone*.
- **Dynamic Atmosphere System** — a Canvas-based particle system simulates rain falling through the early chapters (Vietnam), then **transitions into snow** the exact moment you scroll into Chapter III (the arrival in Japan). The weather changes with the story, not by chance.
- **Glowing Mouse Light** that follows the cursor with smooth linear interpolation (lerp), fading near screen edges.
- **Parallax Orbs** — floating light orbs that react to scroll velocity, adding depth.
- **Cinematic Vignette & Film Grain** — a darkened edge overlay and film-grain texture, closer to a movie frame than a landing page.
- **Scroll Progress Bar** at the top — because you deserve to know how far you've come in the story.

### 🕹️ Game-inspired structure
- **Chapters Timeline** — an animated SVG path connecting all 6 life chapters, drawn in sync with scroll position.
- **Profile Stat Block** — personal info displayed like a character stat sheet: Name, Location, Origin, Path, Essence, Specialization...
- **Journal / Cinematic Gallery** — a photo diary in lightbox-modal form, navigable by arrow keys or Prev/Next buttons, each frame with its own caption.
- **"Save Point" Footer** — instead of a plain footer, a save-game screen with a "↑ Top" button to "Continue?" the journey.

### 🎵 A hand-built music player
The background music player is written entirely from scratch — no embedded Spotify or YouTube player. It includes: play/pause, a draggable seek bar, volume control, and a **real-time Canvas visualizer** that reacts to actual audio signal via the Web Audio API — not a simulated animation.

### 🌐 Real multilingual support, not machine translation
Three languages — **English, Vietnamese, and 日本語** — are hand-written line by line, stored in a single `T` object, switch instantly with no page reload, and **remember your choice** via `localStorage` for your next visit.

### ♿ Nobody left behind
A skip-to-content link, `aria-live`, `aria-expanded`, full semantic `role` attributes, meaningful alt text on every image, respect for `prefers-reduced-motion` for motion-sensitive users, and a graceful `<noscript>` fallback for anyone with JavaScript disabled.

### 🔍 Built-in health check
Type `verifySite()` in the browser console to run a quick diagnostic: are all critical DOM elements present, is translation data complete across all 3 languages, are there exactly 4 project cards... A small but genuinely useful health check, hidden right inside the product itself.

---

## 🧰 Chapter III — The Toolkit *(Tech Stack)*

Not a stat block to show off — just an honest statement: **there's no magic here, only patience.**

| Category | Technology | Notes |
|---|---|---|
| Structure | Semantic HTML5 | Full `<header>`, `<main>`, `<section>`, `<footer>` |
| Styling | Vanilla CSS3 | CSS custom properties (design tokens), no Sass/Tailwind |
| Interactivity | JavaScript (Vanilla, ES5+) | No jQuery, no React, no build step |
| Motion graphics | Canvas API | Weather particle system, audio visualizer |
| Audio | Web Audio API | Real-time frequency analysis |
| Scroll observation | Intersection Observer API | Triggers reveal animations |
| Typography | Google Fonts | `Instrument Serif`, `Inter`, `JetBrains Mono` |
| SEO | Open Graph, Twitter Card, JSON-LD (`schema.org/Person`) | Clean social sharing, machine-readable identity |
| Local storage | `localStorage` | Remembers the selected language |
| Deployment | GitHub Pages | 100% static, no server required |

**External dependencies:** zero. Not a single `<script src="cdn...">` beyond Google Fonts. This was a deliberate choice — light, fast, and not dependent on anyone else's infrastructure to keep working.

---

## 🗂️ Chapter IV — The Archive *(Project Structure)*

```
about-me-profile/
├── index.html              # The entire structure — one file, six chapters
├── css/
│   └── style.css           # Design system: colors, spacing, easing, breakpoints
├── js/
│   └── script.js           # Translations, effects, interaction logic
├── images/
│   ├── favicon.png
│   ├── ross-portrait.jpg
│   └── gallery/
│       ├── gallery-1.jpg   # Tokyo · 2022 · First snowfall
│       ├── gallery-2.jpg   # University · 2024 · A late-night design session
│       ├── gallery-3.jpg   # Osaka · 2023 · Neon rain
│       ├── gallery-4.jpg   # Studio · 2024 · A quiet hour
│       ├── gallery-5.jpg   # People · 2023 · A stranger's smile
│       └── gallery-6.jpg   # Kyoto · 2022 · A temple lit up at night
├── audio/
│   └── ambient.mp3          # Lo-fi / ambient background music
└── LICENSE                  # MIT
```

---

## 🕹️ Chapter V — Loading the Save *(Getting Started)*

No `npm install` needed. No build tool required. This is a static site — clone it, and it just runs.

```bash
# 1. Clone the project
git clone https://github.com/Itsmoonr/about-me-profile.git
cd about-me-profile

# 2. Open it directly in your browser
open index.html          # macOS
# or just double-click index.html on Windows/Linux
```

For a smoother experience (especially proper font and image preloading), a lightweight local server is recommended over opening the file directly:

```bash
# Using Python (usually pre-installed)
python3 -m http.server 8000
# then open http://localhost:8000

# Or use VS Code + the "Live Server" extension
```

That's it. No config, no `.env`, no dependencies to install. **Save loaded.**

---

## 🌏 Chapter VI — Multiverse *(Internationalization)*

Three parallel universes, one character:

| Code | Language | Status |
|---|---|---|
| `en` | English | ✅ Complete |
| `vi` | Vietnamese | ✅ Complete |
| `ja` | 日本語 | ✅ Complete |

Want to add a fourth language? Every string lives inside the `T` object at the top of `js/script.js`. Just:

1. Add a new language key (e.g. `de` for German) following the same structure as the existing ones.
2. Add `<option value="de">🇩🇪 DE</option>` to the language selector in `index.html`.
3. No logic changes needed — `applyLanguage()` handles the rest automatically.

---

## 🗝️ Chapter VII — Hidden Passages *(Easter Eggs)*

A game-inspired product needs secrets. Try these keys while not focused on any input field:

| Key | What happens |
|---|---|
| `E` | ✦ Secret found — confirmed curious explorer |
| `N` | 💀 Game Over — scrolls straight down to the "Save Point" at the bottom |
| `Y` | ✦ Respawn — scrolls back to the top, ready to continue |

---

## ♿ Chapter VIII — Accessibility & Performance

- Full keyboard navigation, with a **skip link** straight to the main content.
- Respects `prefers-reduced-motion`: motion-sensitive users get reduced animation.
- Images use `loading="lazy"` (except the hero image, which uses `fetchpriority="high"`), with explicit `width`/`height` to prevent **Cumulative Layout Shift (CLS)**.
- The main animation loop (`requestAnimationFrame`) automatically pauses when the tab is hidden (`visibilitychange`), saving battery and CPU.
- A graceful `<noscript>` fallback is provided for visitors with JavaScript disabled.

---

## 🔭 Chapter IX — Horizon *(What's Next)*

Just like the site's own "Chapter VI" puts it: *not as an expert, but as someone who still believes curiosity is the most useful skill there is.* A few directions worth exploring next:

- [ ] Add real screenshots / a demo GIF to the top of this README
- [ ] Turn it into a Progressive Web App (PWA) — offline support
- [ ] Add a fourth language (German is currently being learned 👀)
- [ ] Manual dark/light toggle, alongside the automatic time-based mode

---

## 🤝 Chapter X — Contributing

This is a personal, narrative-driven project, but feedback on code quality, accessibility, or performance is always welcome.

```bash
1. Fork the repo
2. Create a new branch:   git checkout -b feature/your-feature-name
3. Commit your changes:   git commit -m "Add: short description"
4. Push the branch:       git push origin feature/your-feature-name
5. Open a Pull Request
```

---

## 📜 License

Released under the **[MIT License](LICENSE)** — free to use, copy, and modify. Just keep the attribution.

---

## 🎞️ End Credits

<div align="center">

**Thanks for reading all the way to here.**
If you saw a bit of your own journey somewhere in this, I'd genuinely love to hear about it.

📬 **[moonsicson@gmail.com](mailto:moonsicson@gmail.com)**
&nbsp;·&nbsp;
🐙 **[GitHub](https://github.com/Itsmoonr)**
&nbsp;·&nbsp;
📸 **[Instagram](https://www.instagram.com/muunst_a/)**
&nbsp;·&nbsp;
🎮 **[Steam](https://steamcommunity.com/id/moondareal/)**

<br>

*"The story's still going."*

**— Ross**

</div>
