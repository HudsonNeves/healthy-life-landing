<!-- Auto-generated guidance for AI coding agents. Update as you learn project specifics. -->
# Copilot / AI Agent Instructions — Healthy Life Landing

This file contains concise, actionable information to help an AI agent be productive in this repository.

**Big Picture**
- **Project type:** Single-page React app scaffolded with Vite located in `healthy-life-landing/`.
- **Entry points:** `healthy-life-landing/index.html` and `healthy-life-landing/src/main.jsx`.
- **UI structure:** Presentational components live in `healthy-life-landing/src/components/` with paired CSS files (e.g., `Header.jsx` + `Header.css`). Use those files as canonical examples for new components.

**Build & Dev Workflow**
- **Primary workspace:** `healthy-life-landing/` — run commands from this directory.
- **Install & run (example):**
  - `cd healthy-life-landing`
  - `npm install`
  - `npm run dev` (starts Vite dev server, HMR on default port 5173)
- **Build/preview:**
  - `npm run build` (Vite production build)
  - `npm run preview` (serve the production build locally)
- **Linting:** `npm run lint` (ESLint is configured; run from `healthy-life-landing/`).

**Project Conventions & Patterns**
- **Component + CSS pair:** Each component has its CSS file next to the JSX (e.g., `Hero.jsx` / `Hero.css`). Follow this structure for new UI code.
- **Assets & static content:** Put static images in `healthy-life-landing/public/` and import assets from `healthy-life-landing/src/assets/` for bundling.
- **Minimal routing / single page:** No router files present — treat this as a small landing page app unless a routing needs to be introduced.
- **React Compiler note:** The template enables the React Compiler (see `healthy-life-landing/README.md`). This affects dev/build performance — avoid unnecessary full rebuilds when prototyping.

**Key Files to Inspect When Making Changes**
- `healthy-life-landing/src/main.jsx` — app bootstrap and root render.
- `healthy-life-landing/index.html` — Vite HTML entry, meta and base tags.
- `healthy-life-landing/vite.config.js` — plugin config (React plugin, etc.).
- `healthy-life-landing/package.json` — scripts and dependencies (dev/build/lint commands).
- Example component: `healthy-life-landing/src/components/Header.jsx` and `Header.css` — follow patterns used here.

**Integration Points & External Dependencies**
- Uses Vite + `@vitejs/plugin-react` and React 19. Styling uses plain CSS (component-scoped files) and Tailwind/PostCSS dev deps appear in repo.
- No backend or API clients are present in the current code — if adding integration, keep network code isolated (e.g., `src/api/` folder) and mock during UI dev.

**What the agent should do first when asked to make changes**
1. Open `healthy-life-landing/src/main.jsx` and the component(s) involved.
2. Run `npm run lint` locally to catch style issues before editing.
3. Run the dev server (`npm run dev`) to verify visual changes and HMR behavior.

**Examples / Quick fixes**
- To add a new presentational component `Foo`: create `healthy-life-landing/src/components/Foo.jsx` and `Foo.css`, export default, and import in `App.jsx`.
- To change layout styles: prefer editing `App.css` or the component-specific CSS file rather than global resets.

If anything here is unclear or you want more detailed conventions (naming, commit messages, testing strategy), ask and I will iterate.
