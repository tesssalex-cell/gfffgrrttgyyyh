# Meme Coin Portfolio

Vite + React + Tailwind. Deploys automatically to **GitHub Pages** with the included workflow.
The Vite `base` is set dynamically from `GITHUB_REPOSITORY` so it works for project pages (`https://user.github.io/repo/`).

## Dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to GitHub Pages
1. Push to `main`.
2. GitHub Action builds `dist/` and publishes to Pages.
3. Open the URL from the **Deploy** job output.
