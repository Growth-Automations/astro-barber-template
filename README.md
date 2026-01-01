# Astro Local Business Base

Lightweight Astro + Tailwind starter for single-brand local business sites. Content lives in Markdown and data collections, styling is controlled through one brand config, and images ship from the local filesystem so deployments remain deterministic.

## Quick Start

```bash
npm install
npm run dev
```

- `npm run build` – generate a static production build in `dist/`
- `npm run preview` – preview the production build locally
- `npm run check` – run Astro type and integration checks

> **Node 18+** is required. If dependencies change, re-run `npm install` to refresh `package-lock.json`.

## Customize the Brand

All theming is sourced from `src/config/brand.json`:

- Update the `name`/`tagline` to change the headline copy used across the layout.
- Tweak the `colors` object (RGB values) to instantly change Tailwind color tokens.
- Swap font stacks in `typography` – e.g., `"'DM Sans', sans-serif"`.

`<BrandTheme />` loads these values into CSS variables so Tailwind utilities like `bg-primary` and `text-secondary` always reflect your palette.

## Edit Site Content

| Content type          | Location                                   | Format |
|-----------------------|--------------------------------------------|--------|
| Global settings       | `src/content/settings/site.json`           | JSON   |
| Homepage hero/intros  | `src/content/home/default.json`            | JSON   |
| Services              | `src/content/services/*.json`              | JSON   |
| Testimonials          | `src/content/testimonials/*.json`          | JSON   |
| FAQs                  | `src/content/faqs/*.json`                  | JSON   |
| Page copy (About/FAQ) | `src/content/pages/*.mdx`                  | MDX    |

Use Markdown body content for long-form copy. Because the MDX integration is enabled, you can opt into MDX features (components, JSX) on a per-file basis without imposing extra syntax on straightforward Markdown documents.

## Images & Unsplash Workflow

All sample imagery lives under `src/assets/images/library/` and is imported via `~/assets/...` paths inside the content files. To refresh imagery:

1. Run the existing Unsplash fetcher in the parent repo to download curated images into this directory.
2. Reference new files in your JSON/MDX content (Astro will optimize during build).
3. Remove any unused assets to keep the bundle small.

This approach keeps production deploys self-contained while still supporting automated ingestion.

## Deployment

Netlify configuration is provided in `netlify.toml` (builds with `npm run build`, publishes `dist`). For Vercel deployments, use the Astro static site preset via the dashboard—no additional repo files are required.

## Project Structure

```
src/
├── assets/                # Local image library
├── components/
│   ├── layout/            # Header, footer, brand theme injector
│   └── sections/          # Page-level sections (hero, services, CTA)
├── config/                # Brand config consumed by Tailwind + layout
├── content/               # Content collections (JSON + MDX)
├── layouts/               # Base layout
├── lib/                   # Content helpers & shared types
└── pages/                 # Route definitions (uses content collections)
```

## Next Steps

- Swap the sample brand colors/fonts in `src/config/brand.json`.
- Replace placeholder content in `src/content/**` with business-specific copy.
- Run the Unsplash fetch workflow to populate `src/assets/images/library/` with brand-appropriate imagery.
- Push to Netlify for production; optionally document Vercel steps in your README fork if needed.
