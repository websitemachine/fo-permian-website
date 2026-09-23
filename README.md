# FO Permian Website

Marketing site for FO Permian Partners — powered land, power purchase agreements, and white space for neoclouds and AI infrastructure operators in West Texas.

## Tech Stack

- SvelteKit 2 + Svelte 5
- Tailwind CSS v4
- mdsvex for markdown-driven news posts
- `@sveltejs/adapter-static` (full static prerender)
- Deployed to Cloudflare Workers (static assets) via GitHub Actions

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

Produces a static site in `./build/`.

## Deployment

Hosted on the Website Machine Cloudflare account as the Worker `fo-permian-website` (static assets only, no server code).

- Push to `main` → `.github/workflows/deploy.yml` builds and runs `wrangler deploy` (production, `fopermian.com`).
- Push to any other branch → `wrangler versions upload`, which prints a preview URL in the workflow summary.
- Secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` are repository secrets.
- The custom domain is attached to the Worker in the Cloudflare dashboard (Workers → fo-permian-website → Settings → Domains & Routes).

Manual deploy from a machine with wrangler and the token: `npm run build && npx wrangler deploy`.

## Content

News posts live as markdown in `src/content/news/`. Filename format: `YYYY-MM-DD-slug.md`. Frontmatter:

```yaml
---
title: 'Headline'
date: '2025-09-04'
summary: 'One-line summary.'
cover: '/img/news/cover.png'
---
```

Add a file, push to main, the post appears on `/news`.
