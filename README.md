![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
# ROSS NGUYEN · ABOUT ME

<p align="center">
  <strong>A personal website built like a film, not a résumé.</strong>
</p>

<p align="center">
  <a href="https://itsmoonr.github.io/about-me-profile/">Live Experience</a>
  ·
  <a href="https://github.com/Itsmoonr/about-me-profile">Repository</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-Static%20Site-e34f26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-Cinematic%20UI-1572b6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-Vanilla-f7df1e?style=for-the-badge&logo=javascript&logoColor=111" alt="JavaScript">
  <img src="https://img.shields.io/badge/Languages-EN%20%7C%20VI%20%7C%20JA-66c0f4?style=for-the-badge" alt="English Vietnamese Japanese">
</p>

> *Every line of code, every frame, every story here is a piece of my journey.*

---

## THE IDEA

Most personal websites try to **tell you who someone is**.

This one asks you to **walk through the story first**.

**Ross Nguyen · Designer · Developer · Storyteller** is a cinematic personal website designed around one simple idea:

> A portfolio should not only show what a person can make.
> It should give you a feeling for **why they make it**.

The experience follows a journey from **Vietnam to Japan**, moving through memory, migration, creativity, technology, university life, work, language, and whatever comes next.

Instead of presenting a résumé as a list of facts, the site turns a profile into a sequence of **chapters, frames, atmosphere, sound, and interaction**.

It is part portfolio.
Part digital journal.
Part interactive short film.
Part personal archive.

And, ultimately, a small attempt to make a website feel **alive**.

---

# 🎬 THE EXPERIENCE

The page is structured like a film.

### ACT I — THE OPENING SHOT

The story begins in the **Hero** scene.

A large cinematic name treatment introduces Ross alongside the identity:

`Designer · Developer · Storyteller`

A portrait anchors the composition while animated environmental effects establish the atmosphere before the visitor even starts reading.

The opening is intentionally slow.

The website does not immediately throw information at you.

It asks you to **enter the story**.

---

### ACT II — WHO IS ROSS?

The **Profile** section moves from visual identity into character.

It introduces Ross through personal philosophy, origin, creative identity, current direction, interests, and compact personal “stats”.

The design deliberately mixes editorial typography with interface-like metadata, creating a visual language somewhere between a **magazine spread** and a **game profile screen**.

---

### ACT III — THE CHAPTERS

The **Story Mode** section is the narrative spine of the site.

Six chapters trace the journey from **Homeland · Vietnam** through **The Leap · Arrival in Japan**, **Prime Time · High School Years**, **A Clean Slate · Cybersecurity Volunteer**, **Scholar · University**, and finally **Horizon · What's Next**.

The chapter timeline is rendered dynamically with SVG and revealed progressively as the user scrolls.

The environment changes with the story too:

**rain → snow**

When the experience reaches the high-school chapter, the atmospheric particle system shifts from falling rain to drifting snow.

The effect is small.

The meaning is not.

---

# ✦ THE PORTFOLIO

The portfolio intentionally avoids the standard:

`Project → Screenshot → Technology → Done`

Instead, each project behaves like a small narrative object.

### Think Fraud

**Impact**

A community-focused anti-fraud initiative presented as a story about understanding the mechanisms of online scams in order to help people avoid them.

`Anti-Fraud · Community · Education`

### Restaurant Cashier

**Craft**

An experience centered around responsibility, financial accuracy, trust, and the discipline of handling a real register and daily records.

`Finance · Trust · Hospitality`

### Global Elite

**Obsession**

A competitive gaming chapter about talent, repetition, tactics, reflexes, and the less glamorous side of mastery: doing the same difficult thing until it becomes instinct.

`Tactics · CS2 · Faceit Lvl 10`

### Polyglot

**Bridge**

Language as more than vocabulary: a way of crossing into another person's world.

`Vietnamese · Japanese · English · German`

Project cards are expandable, keyboard-accessible, and animated rather than behaving like passive tiles.

---

# 🧠 ABILITIES

The **Abilities** section treats skills as things that have been *unlocked* rather than simply listed.

### The Craft

* Creative Thinking
* Storytelling
* UI/UX Design
* Photography
* Video Editing

### The Tools

* Web Development
* Research
* Cybersecurity Basics

### Languages

* Vietnamese — Native
* English — Fluent
* Japanese — Fluent

The vocabulary is intentionally playful:

**not “skills on a résumé” → “abilities in a character.”**

---

# 📷 CINEMATIC JOURNAL

The **Journal** section shifts the website from portfolio to memory.

Six photographs represent small moments across Tokyo, Osaka, Kyoto, university life, and ordinary human interaction.

Each frame can be opened into a modal with enlarged imagery, contextual text, previous / next navigation, keyboard navigation, Escape-to-close, and focus restoration.

The visual language is deliberately closer to a **photo archive** than a conventional gallery.

The images are treated as scenes.

Not assets.

---

# 📡 OPEN CHANNEL

The Contact section is framed as an **open communication channel** rather than a generic contact form.

It provides direct email access, a validated contact form, GitHub, Steam, and Instagram.

The form is intentionally backend-free.

After validation, it builds a prefilled `mailto:` message so the visitor's own mail client can handle the transmission.

That keeps the website static and removes the need for a server-side form service.

---

# 🎧 SOUND IS PART OF THE UI

This website does not treat sound as an afterthought.

There are two distinct audio layers.

### Ambient soundtrack

A compact music player provides play / pause, progress tracking, seeking, volume control, mute / unmute, and a live visualizer.

The player is backed by:

`audio/ambient.mp3`

### Cinematic interaction sounds

The site also creates lightweight sound effects through the browser's **Web Audio API**.

Hovering and clicking interactive elements can produce subtle tones, while opening a journal image triggers a camera-like shutter effect.

Sound is unlocked only after an actual user gesture to respect modern browser autoplay restrictions.

---

# 🌌 ATMOSPHERE ENGINE

The visual atmosphere is generated rather than baked into a video.

The experience combines:

* HTML5 Canvas particles
* animated rain
* animated snow
* parallax orbs
* cursor-following light
* dynamic background lighting
* cinematic vignette
* film grain
* animated scroll progress
* camera-shutter transitions
* 3D tilt interaction

The result is closer to an **interactive visual composition** than a traditional webpage.

The page does not simply scroll.

It changes state while you scroll.

---

# ⚙️ TECHNICAL ARCHITECTURE

No framework.

No bundler.

No application server.

No component library.

Just the browser.

```text
HTML
 ├── semantic page structure
 ├── metadata / Open Graph
 ├── Schema.org Person data
 ├── navigation
 ├── story sections
 ├── journal modal
 ├── contact form
 └── audio player

CSS
 ├── design tokens
 ├── cinematic effects
 ├── responsive layout
 ├── typography system
 ├── motion
 ├── accessibility states
 ├── mobile optimization
 └── print rules

JavaScript
 ├── multilingual content system
 ├── navigation state
 ├── IntersectionObserver reveals
 ├── Canvas atmosphere engine
 ├── SVG chapter timeline
 ├── parallax / cursor lighting
 ├── 3D tilt
 ├── Web Audio SFX
 ├── music player
 ├── portfolio interactions
 ├── journal modal
 ├── contact validation
 ├── keyboard easter eggs
 └── runtime site verification
```

---

# 🌍 MULTILINGUAL BY DESIGN

The interface supports three languages:

```text
🇬🇧 English
🇻🇳 Vietnamese
🇯🇵 Japanese
```

Translations are stored in a centralized JavaScript dictionary and applied dynamically through `data-i18n` attributes.

The selected language is persisted with `localStorage`, so returning visitors keep their preference.

This is deliberately lightweight:

**no translation framework, no server, no build step.**

---

# ♿ ACCESSIBILITY & RESILIENCE

Cinematic does not have to mean inaccessible.

The implementation includes several defensive layers:

* semantic landmarks
* skip-to-content link
* visible keyboard focus states
* ARIA labels and live regions
* keyboard activation for interactive cards
* focus restoration after modal interaction
* mobile navigation
* coarse-pointer detection
* reduced-motion support
* `<noscript>` fallback messaging
* audio failure handling
* responsive layouts

Users who enable `prefers-reduced-motion` receive a significantly calmer version of the experience, with decorative motion disabled or minimized.

---

# ⌨️ HIDDEN CONTROLS

There are a few things the website does not tell you.

Because exploration should occasionally be rewarded.

| Key       | Action                            |
| --------- | --------------------------------- |
| `Space`   | Play / pause ambient music        |
| `E`       | Reveal a secret                   |
| `N`       | Trigger the “Game Over” state     |
| `Y`       | Respawn / return to the beginning |
| `Esc`     | Close navigation or journal modal |
| `←` / `→` | Navigate journal images           |

The site even exposes a small runtime verification system through:

```js
window.verifySite()
```

It checks critical DOM elements, translation data, navigation structure, project cards, and journal modal elements.

---

# 📱 RESPONSIVE BY DEFAULT

The experience is designed to collapse gracefully from desktop cinematic composition into a focused mobile layout.

On smaller screens:

* the two-column hero becomes a single-column composition
* the navigation transforms into a mobile drawer
* cursor lighting is disabled
* particle density is reduced
* typography scales fluidly
* chapter content becomes single-column
* touch interaction replaces hover-dependent effects

The goal is not to create a “mobile version”.

It is to preserve the **same story** on a smaller screen.

---

# 🎨 DESIGN SYSTEM

The visual system is built around a dark cinematic palette.

### Core atmosphere

```text
Deep background   #0b1118
Surface           #111b27
Card              #182230
Card hover        #1f2f42
```

### Accent language

```text
Cool blue         #66c0f4
Warm amber        #f4a261
Coral             #d87c6a
```

### Typography

* **Instrument Serif** — memory, emotion, editorial character
* **Inter** — readability and interface clarity
* **JetBrains Mono** — technical / cinematic UI language

The intended feeling is:

> **a film title card + an editorial magazine + a game interface**

---

# 🚀 RUN LOCALLY

There is no build pipeline.

```bash
git clone https://github.com/Itsmoonr/about-me-profile.git
cd about-me-profile
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

The project can be deployed to any static hosting platform capable of serving HTML, CSS, JavaScript, images, and audio.

---

# 📁 EXPECTED PROJECT STRUCTURE

```text
about-me-profile/
│
├── index.html
├── LICENSE
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── favicon.png
│   ├── ross-portrait.jpg
│   └── gallery/
│       ├── gallery-1.jpg
│       ├── gallery-2.jpg
│       ├── gallery-3.jpg
│       ├── gallery-4.jpg
│       ├── gallery-5.jpg
│       └── gallery-6.jpg
│
└── audio/
    └── ambient.mp3
```

Some portfolio preview images are currently sourced from `picsum.photos`, while the personal portrait and journal gallery use local assets.

---

# 🔍 SEO & SHARING

The page includes a small but intentional metadata layer:

* descriptive `<title>`
* meta description
* theme color
* Open Graph title / description / image / URL
* Twitter card metadata
* Schema.org `Person` structured data
* public identity links through `sameAs`

The project is built not only to be experienced directly, but also to survive the moment when somebody shares the URL.

---

# 🧩 WHY VANILLA JAVASCRIPT?

Because the experience did not need a framework.

The interactions here are deliberately close to the browser:

```text
DOM
Canvas
SVG
CSS
Web Audio API
IntersectionObserver
localStorage
requestAnimationFrame
```

Keeping the implementation framework-free makes the project portable, lightweight, easy to deploy, easy to inspect, and free from dependency management for this scope.

The complexity lives in the **experience**, not in the toolchain.

---

# 🛠️ DEVELOPMENT PHILOSOPHY

### 01 — Make the interface feel intentional

A button should feel like a button.

A transition should have a reason.

A visual effect should support the mood rather than compete with the content.

### 02 — Motion should communicate

Rain establishes place.

Snow marks a chapter transition.

The progress line tells you where you are.

The shutter flash makes an image feel photographed rather than merely opened.

Animation is treated as part of the narrative language.

### 03 — Personality beats generic polish

A personal site should contain things that only **this person** could have written.

That is why the site contains memories, work, ambition, games, languages, photographs, and unfinished chapters.

### 04 — The website should leave a trace

The goal is not simply:

> “Here is my portfolio.”

The goal is:

> “You were here. You experienced something. Now you know a little more about the person behind the screen.”

---

# 🗺️ THE STORY IS NOT FINISHED

There is deliberately no final “THE END”.

The footer is called:

> **Save Point**

And the final message says:

> **The story's still going.**

Because this website is not meant to be a frozen résumé.

It is a snapshot of one point in a much longer trajectory.

The chapters can change.

The photographs can change.

The projects can change.

The person can change.

The website is built to leave room for that.

---

# 📜 LICENSE

This project is released under the **MIT License**.

See [`LICENSE`](./LICENSE) for the full license text.

---

<p align="center">
  <strong>Ross Nguyen</strong><br>
  Designer · Developer · Storyteller
</p>

<p align="center">
  <em>From Vietnam to Japan — building bridges between worlds.</em>
</p>

<p align="center">
  <a href="https://itsmoonr.github.io/about-me-profile/">Enter the story →</a>
</p>
