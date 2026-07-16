# Mayur Pashte — Portfolio

A modern, responsive, single-page portfolio website built with **React + Vite + Tailwind CSS + Framer Motion**. It showcases Mayur Pashte's profile, skills, and five projects, with dark/light mode, smooth-scroll navigation, scroll-triggered animations, lazy-loaded sections, and SEO metadata.

---

## ✨ Features

- ⚛️ **React 18 + Vite** — fast dev server and optimized production builds
- 🎨 **Tailwind CSS** — utility-first styling with a custom brand palette
- 🌗 **Dark / Light mode** — toggle persisted to `localStorage`, respects OS preference
- 🎬 **Framer Motion** — page/section reveal animations, hover effects, animated modals
- 📱 **Fully responsive** — mobile, tablet, and desktop layouts
- 🧭 **Smooth-scroll navigation** with an active-link highlight (IntersectionObserver)
- 🗂️ **Data-driven** — all content lives in `src/data/*` (edit once, updates everywhere)
- 🚀 **Lazy loading** — below-the-fold sections are code-split via `React.lazy`
- 🔍 **SEO-friendly** — meta tags & Open Graph in `index.html`
- ♻️ **Reusable components** and a clean, documented folder structure

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── README-ASSETS.md        # what to drop in /public (resume.pdf, og-image)
│   └── resume.pdf              # ← YOU add this (your resume PDF)
├── src/
│   ├── assets/                 # images / screenshots (see assets/projects/)
│   ├── components/             # reusable UI (Navbar, ProjectCard, SkillCard, Button, …)
│   ├── sections/               # page sections (Hero, About, Skills, Projects, …)
│   ├── layouts/                # MainLayout (navbar + content + footer)
│   ├── hooks/                  # useTheme, useActiveSection, useScrollPosition
│   ├── data/                   # personal, skills, projects, experience, education, …
│   ├── utils/                  # animations, scroll helpers, icon registry
│   ├── pages/                  # Home (composes all sections)
│   ├── styles/                 # index.css (Tailwind + base styles)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js 18+** and npm

### 1. Install dependencies
```bash
cd portfolio
npm install
```

### 2. Run the dev server
```bash
npm run dev
```
Open the URL Vite prints (default **http://localhost:5173**).

### 3. Build for production
```bash
npm run build
```
The optimized static site is generated in **`dist/`**.

### 4. Preview the production build locally
```bash
npm run preview
```

---

## ✅ Before You Deploy — Replace These Placeholders

| What | Where | Notes |
|------|-------|-------|
| **Resume PDF** | `public/resume.pdf` | Required for the Resume preview & download. Export your LaTeX resume to PDF. |
| **GitHub / demo links** | `src/data/projects.js` | Replace `github: '#'` and `demo: null` with real URLs (or leave to hide the button). |
| **Certifications & achievements** | `src/data/certifications.js` | Replace the `placeholder: true` entries with real ones (e.g., AWS Certified Developer – Associate). |
| **Project screenshots** | `src/assets/projects/` + `image:` field in `projects.js` | Optional — gradient placeholders are used until you add images. |
| **Portfolio URL** | `src/data/personal.js` → `socials.portfolio` | Verify the link works (the original had an unusual spelling). |
| **Social preview + site URL** | `index.html` (`og:url`, `og:image`) | Optional, for nicer link previews. |
| **Skill proficiency %** | `src/data/skills.js` | The `level` values are a self-assessment — adjust to taste. |

---

## 🎨 Customization

- **Colors / fonts:** `tailwind.config.js` (`brand`, `accent` palettes) and `index.html` (Google Fonts).
- **Content:** everything is in `src/data/` — no need to touch components to update text.
- **Sections order / nav:** `src/pages/Home.jsx` and `src/data/navLinks.js` (keep the `id`s in sync).
- **Contact form:** currently uses a `mailto:` handoff (no backend). To use a real service, wire **Formspree** or **EmailJS** in `src/sections/Contact.jsx` (`handleSubmit`).

---

## 🚀 Deployment

This is a static site — deploy `dist/` anywhere:

- **Vercel / Netlify:** import the repo, build command `npm run build`, output dir `dist`.
- **GitHub Pages:** build, then publish `dist/` (set Vite `base` in `vite.config.js` if hosting under a sub-path, e.g. `base: '/portfolio/'`).

---

## 📝 Notes

- **Skills categories** were adapted to a Python-backend skillset (Programming Languages, Backend & APIs, Cloud & DevOps, Databases, AI & GenAI, Tools, Soft Skills) rather than a generic frontend/backend split — matching the actual resume.
- All five projects are included (Axis AUEA, LAAS, ACC Voice Ops, Tata Power OCR, Auxilo), even though two were trimmed from the one-page resume.
- The `ACC Voice Ops` project is a Node.js/TypeScript platform; it's framed around the backend + AI-integration work.

---

Built with React, Tailwind CSS, and Framer Motion.
