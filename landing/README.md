# SignalScope Landing

A polished, brand‑ready marketing landing site for SignalScope.

## Tech Stack
- Vite (React + TypeScript)
- Tailwind CSS
- ESLint + Prettier

## Getting Started

1. Install deps

```bash
cd landing
npm install
```

2. Set env

Create `.env`:

```
VITE_APP_URL=https://app.example.com/login
# if deploying to GitHub Pages project site, set base path
# VITE_BASE_PATH=/signal-scope-landing/
```

3. Run dev server

```bash
npm run dev
```

4. Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

- This repo includes a workflow at `landing/.github/workflows/pages.yml`.
- Ensure your default branch is `main` and GitHub Pages is set to "GitHub Actions".
- The workflow sets `VITE_BASE_PATH=/${{ github.event.repository.name }}/` automatically for project pages.

## Routes
- `/` Home
- `/privacy` Privacy
- `/terms` Terms

## Accessibility & SEO
- Skip link, semantic sections
- `robots.txt`, `sitemap.xml`
- OG tags in `index.html`

## Customize
- Replace placeholder screenshots in `Screenshots` section
- Adjust colors in `src/styles.css` CSS variables

## License
MIT