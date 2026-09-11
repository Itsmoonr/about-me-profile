<div align="center">

```text
██████╗   ██████╗   ██████╗   ██████╗
██╔══██╗ ██╔═══██╗ ██╔════╝  ██╔════╝
██████╔╝ ██║   ██║ ╚█████╗   ╚█████╗
██╔══██╗ ██║   ██║  ╚═══██╗   ╚═══██╗
██║  ██║ ╚██████╔╝ ██████╔╝ ██████╔╝
╚═╝  ╚═╝  ╚═════╝  ╚═════╝  ╚═════╝
```

### *A life, rendered in vanilla HTML, CSS, and JavaScript.*

[![Live Demo](https://img.shields.io/badge/▶_Live_Demo-online-f4a261?style=for-the-badge)](https://itsmoonr.github.io/about-me-profile/)
[![License](https://img.shields.io/github/license/Itsmoonr/about-me-profile?style=for-the-badge&color=66c0f4)](./LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Zero Runtime Dependencies](https://img.shields.io/badge/runtime%20dependencies-0-success?style=for-the-badge)](#-chapter-iii--the-toolkit-tech-stack)

<br>

*"Grateful for those who left, cherishing those who stayed.*  
*Thank you, past, present, and future.*  
*And I hope this moment lasts forever."*

<br>

**[✦ View Live](https://itsmoonr.github.io/about-me-profile/)** ·
**[Chapter I](#-chapter-i--the-vision)** ·
**[Getting Started](#-chapter-v--loading-the-save-getting-started)** ·
**[End Credits](#-end-credits)**

</div>

> ⚠️ **Before you press start:** this site comes with ambient music, particle effects (rain/snow), a glowing cursor, and continuous scroll-driven motion. It is best experienced on a desktop with a comfortable volume.

---

## 📖 Table of Contents — *Save Slots*

| # | Chapter | Contents |
|---|---|---|
| 0 | [Chapter 0 — Boot Sequence](#-chapter-0--boot-sequence) | What this is, and why it exists |
| I | [Chapter I — The Vision](#-chapter-i--the-vision) | The idea behind the design |
| II | [Chapter II — Abilities Unlocked](#-chapter-ii--abilities-unlocked-features) | The features that actually exist |
| III | [Chapter III — The Toolkit](#-chapter-iii--the-toolkit-tech-stack) | The technology behind the scenes |
| IV | [Chapter IV — The Archive](#-chapter-iv--the-archive-project-structure) | Project structure |
| V | [Chapter V — Loading the Save](#-chapter-v--loading-the-save-getting-started) | Running it locally |
| VI | [Chapter VI — Multiverse](#-chapter-vi--multiverse-internationalization) | EN / VI / JA |
| VII | [Chapter VII — Hidden Passages](#-chapter-vii--hidden-passages-easter-eggs) | Secrets buried in the code |
| VIII | [Chapter VIII — Accessibility](#-chapter-viii--accessibility--performance) | Accessibility & performance |
| IX | [Chapter IX — Horizon](#-chapter-ix--horizon-whats-next) | What's coming next |
| X | [Chapter X — Contributing](#-chapter-x--contributing) | Want to help out? |
| — | [License](#-license) | MIT |
| — | [End Credits](#-end-credits) | Thanks & contact |

---

## 🎬 Chapter 0 — Boot Sequence

Not every portfolio needs an opening cutscene.

This one does.

This isn't a typical “About Me” page with a few biography lines and an attached résumé. It's a **save file** — one real life, from the unpredictable rain of Ho Chi Minh City to the unfamiliar streets of Tokyo, told through the language of an RPG: there's a Profile, there are Chapters, there are Abilities, a Journal, and even a scroll progress bar so you always know where you are in the story.

No frameworks. No JavaScript packages. No build pipeline.

Just plain HTML, CSS, and JavaScript — and a lot of small details, handcrafted one by one.

---

## 🌌 Chapter I — The Vision

> *“I write code to make things that feel a little alive. I design because I've learned that how something looks is its own kind of kindness to whoever's looking.”*

This site tells six chapters of **Ross Nguyen's** life — a university student, designer, and occasional writer — spanning Vietnam to Japan:

`Homeland` → `The Leap to Japan` → `High School Years` → `Anti-Fraud Volunteering` → `University` → `What's Next`

The core design idea is simple:

> **A life isn't a static résumé — it's a save file still being written.**

Every section is built around that idea:

| Website | Story equivalent |
|---|---|
| Hero | Opening cutscene |
| Profile | Character sheet |
| Chapters | Story progression / world map |
| Abilities | Inventory / unlocked skills |
| Journal | Memory archive |
| Contact | Open communication channel |
| Save Point | Ending screen |

The website is not trying to make a résumé more decorative.

It is trying to make a personal identity **feel lived-in**.

---

## ⚡ Chapter II — Abilities Unlocked *(Features)*

Everything below is intended to describe functionality that actually exists in the code — not marketing copy.

### 🎭 Cinematic Experience

- **Automatic time-based lighting** — the site reads the visitor's local system time with `new Date().getHours()` and adjusts the visual palette accordingly.
- **Dynamic atmosphere system** — a Canvas-based particle system creates rain and transitions into snow as the story progresses through the chapters.
- **Glowing mouse light** — a cursor-following radial light uses smooth interpolation for a softer, cinematic movement.
- **Parallax orbs** — floating background lights react to scroll movement to add depth.
- **Cinematic vignette & film grain** — subtle overlays create a film-frame texture instead of a conventional flat page.
- **Scroll progress bar** — a thin progress indicator tracks how far the visitor has travelled through the story.
- **Shutter transition** — visual interactions can trigger a brief camera-like flash.

### 🕹️ Game-Inspired Structure

- **Chapters Timeline** — an animated SVG path visually connects all six story chapters and reacts to scroll position.
- **Profile Stat Block** — personal information is presented like a character stat sheet.
- **Journal / Cinematic Gallery** — the photo diary opens in a lightbox-style modal with previous/next navigation and keyboard support.
- **Save Point Footer** — the usual footer becomes a final game-inspired checkpoint with a `↑ Top` action and a “Continue?” prompt.
- **Interactive project cards** — portfolio entries expand to reveal their longer story, tags, and status.

### 🎵 A Hand-Built Music Player

The background music player is built directly with browser APIs rather than an embedded Spotify or YouTube widget.

It includes:

- play / pause
- seekable progress bar
- current / total time
- volume control
- mute / unmute
- real-time visualizer

The visualizer analyzes the actual audio signal through the **Web Audio API** rather than playing a decorative animation unrelated to the music.

### 🌐 Multilingual by Design

Three languages are supported:

**English · Tiếng Việt · 日本語**

Translations are stored in a centralized `T` object and applied dynamically through the interface's `data-i18n` attributes.

The selected language is persisted with `localStorage`, so the choice survives the next visit.

No translation framework is required.

### ♿ Nobody Left Behind

Accessibility is treated as part of the build, not an afterthought.

The implementation includes:

- skip-to-content navigation
- semantic landmarks
- meaningful `alt` text
- ARIA labels / states
- keyboard-accessible interactions
- visible `:focus-visible` states
- reduced-motion support through `prefers-reduced-motion`
- mobile navigation
- `<noscript>` fallback content
- graceful audio failure handling

### 🔍 Built-In Health Check

Open the browser console and run:

```js
window.verifySite()
```

The site performs a small runtime diagnostic covering critical structure and interface data.

It is deliberately lightweight — but useful when making changes to a project where a broken selector can otherwise be surprisingly easy to miss.

---

## 🧰 Chapter III — The Toolkit *(Tech Stack)*

Not a stat block to show off.

Just an honest statement about how the experience is built.

| Category | Technology | Role |
|---|---|---|
| Structure | Semantic HTML5 | Page structure and accessible landmarks |
| Styling | Vanilla CSS3 | Design tokens, layout, responsive behavior, motion |
| Interactivity | Vanilla JavaScript | UI state and interaction logic |
| Motion graphics | Canvas API | Atmospheric particles and audio visualizer |
| Vector motion | SVG | Chapter timeline |
| Audio | Web Audio API | Audio analysis and interaction sounds |
| Scroll observation | Intersection Observer API | Reveal animations |
| Persistence | `localStorage` | Language preference |
| Typography | Google Fonts | Instrument Serif, Inter, JetBrains Mono |
| SEO | Open Graph, Twitter Card, JSON-LD | Sharing and structured identity |
| Deployment | GitHub Pages | Static hosting |

### Runtime Dependencies

**Zero JavaScript runtime dependencies.**

There is no React, Vue, jQuery, Bootstrap, Tailwind, npm package, or client-side framework required for the site to run.

Google Fonts is used as an external typography resource.

The project intentionally keeps the runtime small and browser-native.

---

## 🗂️ Chapter IV — The Archive *(Project Structure)*

```text
about-me-profile/
├── index.html              # Page structure, metadata, sections, and UI markup
├── css/
│   └── style.css           # Design system, effects, responsive layout, motion
├── js/
│   └── script.js           # Translations, atmosphere, interactions, audio, UI logic
├── images/
│   ├── favicon.png
│   ├── ross-portrait.jpg
│   └── gallery/
│       ├── gallery-1.jpg   # Tokyo · 2022 · First snowfall
│       ├── gallery-2.jpg   # University · 2024 · Late-night design work
│       ├── gallery-3.jpg   # Osaka · 2023 · Neon rain
│       ├── gallery-4.jpg   # Studio · 2024 · A quiet hour
│       ├── gallery-5.jpg   # People · 2023 · A stranger's smile
│       └── gallery-6.jpg   # Kyoto · 2022 · A temple lit at night
├── audio/
│   └── ambient.mp3         # Lo-fi / ambient background music
└── LICENSE                 # MIT License
```

Some portfolio preview imagery currently comes from `picsum.photos`, while the main portrait and cinematic journal use local assets.

---

## 🕹️ Chapter V — Loading the Save *(Getting Started)*

No `npm install`.

No build tool.

No `.env`.

No configuration file.

This is a static site.

### 1. Clone the repository

```bash
git clone https://github.com/Itsmoonr/about-me-profile.git
cd about-me-profile
```

### 2. Run it locally

A local HTTP server is recommended because it behaves more like the production environment than opening `index.html` directly.

Using Python:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Or use VS Code with the **Live Server** extension.

> Opening `index.html` directly may work for much of the interface, but a local server is the safer way to test the complete experience.

**Save loaded.**

---

## 🌏 Chapter VI — Multiverse *(Internationalization)*

Three parallel universes.

One character.

| Code | Language | Status |
|---|---|---|
| `en` | English | ✅ Complete |
| `vi` | Vietnamese | ✅ Complete |
| `ja` | 日本語 | ✅ Complete |

Want to add another language?

The translation system is centralized in `js/script.js`.

A new language generally requires:

1. adding a new language object following the existing `T` structure
2. adding an `<option>` to the selector in `index.html`

The existing language-application logic handles the rest.

---

## 🗝️ Chapter VII — Hidden Passages *(Easter Eggs)*

A game-inspired website should probably hide a few secrets.

Try these keys while focus is not inside a text input:

| Key | What happens |
|---|---|
| `E` | ✦ Secret found — confirmed curious explorer |
| `N` | 💀 Game Over — jumps to the Save Point |
| `Y` | ✦ Respawn — returns to the beginning |

There are also quieter interactions hidden throughout the interface.

Some things are more fun to discover than to document.

---

## ♿ Chapter VIII — Accessibility & Performance

The cinematic layer should never be allowed to become a usability problem.

The implementation includes several safeguards:

- full keyboard navigation with a skip link to main content
- `prefers-reduced-motion` support for users who prefer less animation
- explicit image `width` / `height` attributes to reduce layout shifts
- lazy loading for non-critical images
- high loading priority for the hero portrait
- animation-loop pausing when the document becomes hidden
- responsive navigation and touch-oriented behavior
- a `<noscript>` fallback
- audio error handling instead of failing silently

The goal is simple:

> **Keep the atmosphere. Remove the friction.**

---

## 🔭 Chapter IX — Horizon *(What's Next)*

The story is still being written.

A few possible next chapters:

- [ ] Add a real hero screenshot and short demo GIF to this README
- [ ] Explore Progressive Web App capabilities and offline support
- [ ] Add German (`de`) as a fourth language
- [ ] Add an optional manual light/dark override alongside automatic time-based lighting
- [ ] Expand selected projects into deeper case studies with screenshots and measurable outcomes

The project is intentionally unfinished in the best possible way.

There is still room for another chapter.

---

## 🤝 Chapter X — Contributing

This is a personal, narrative-driven project, but thoughtful feedback is welcome — especially around:

- code quality
- accessibility
- performance
- interaction design
- maintainability

A typical contribution flow:

```bash
git checkout -b feature/your-feature-name
git commit -m "Add: short description"
git push origin feature/your-feature-name
```

Then open a Pull Request.

For larger changes, please explain the reasoning behind the change, not only the implementation.

---

## 📜 License

Released under the [**MIT License**](./LICENSE).

You are free to use, copy, modify, and redistribute the project under the terms of the license.

---

## 🎞️ End Credits

<div align="center">

**Thanks for reading all the way to here.**

If you saw a bit of your own journey somewhere in this,  
I'd genuinely love to hear about it.

📬 [**moonsicson@gmail.com**](mailto:moonsicson@gmail.com)  
·  
🐙 [**GitHub**](https://github.com/Itsmoonr)  
·  
📸 [**Instagram**](https://www.instagram.com/muunst_a/)  
·  
🎮 [**Steam**](https://steamcommunity.com/id/moondareal/)

<br>

*“The story's still going.”*

**— Ross**

</div>
