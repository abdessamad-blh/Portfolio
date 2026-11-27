# Abdessamad Belahcen — Portfolio

One-page personal portfolio. Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · shadcn/ui · static export.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
npm start          # serve ./out locally
```

Checks: `npm run typecheck` and `npm run lint`.

## Edit content

All text lives in `src/data/`. You never need to touch components to change content.

| File | What it holds |
| --- | --- |
| `src/data/profile.ts` | Name, title, location, intro, photo, email, LinkedIn, GitHub, CV paths, SEO text, nav |
| `src/data/projects.ts` | The 6 featured project cards |
| `src/data/also-built.ts` | "Also built" list (with optional badge/link) |
| `src/data/skills.ts` | Skill groups and chips |
| `src/data/experience.ts` | Experience timeline |
| `src/data/types.ts` | Types for all of the above |

Search for `TODO` to find everything that still needs real content:

```bash
grep -rn TODO src/data
```

### Files in `public/`

- `public/photo.jpg`: your photo (square, 600×600).
- CVs (optional): add `public/cv-en.pdf` / `public/cv-fr.pdf` and uncomment `cvEn` / `cvFr` in `src/data/profile.ts`. The CV buttons stay hidden until then.

### Project images

Covers are WebP at 1200×750 (16:10), with a 640px copy for phones. To add or replace one:

1. Put the screenshot in `images-src/` (any name, e.g. `n8n-automation.png`).
2. Run `npm run images`. This writes `public/projects/n8n-automation.webp` and `-640.webp`.
3. Point the project's `image.src` in `src/data/projects.ts` to `/projects/n8n-automation.webp`.

## Deploy on GitHub Pages (free)

The workflow in `.github/workflows/deploy.yml` builds the site and publishes it on every push to `main`.

One-time setup:

1. On GitHub, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow from the **Actions** tab). The site goes live at `https://abdessamad-blh.github.io/Portfolio/`.

The workflow sets the base path (`/Portfolio`) and the site URL automatically from the Pages settings, so the same code also works on a custom domain or at a root URL.

Tips:

- **Shorter URL:** rename the repository to `abdessamad-blh.github.io`. The site then lives at `https://abdessamad-blh.github.io/` with no `/Portfolio`, and `robots.txt` is served at the domain root, where search engines look for it.
- **Custom domain:** add it under **Settings → Pages → Custom domain**. The next deploy picks it up automatically.
- **Analytics (optional):** under **Settings → Secrets and variables → Actions → Variables**, add `NEXT_PUBLIC_UMAMI_WEBSITE_ID` (and `NEXT_PUBLIC_UMAMI_SCRIPT_URL` for self-hosted Umami), then redeploy.

To build locally the way Pages does:

```bash
NEXT_PUBLIC_BASE_PATH=/Portfolio NEXT_PUBLIC_SITE_URL=https://abdessamad-blh.github.io/Portfolio npm run build
```

Vercel and Netlify also work with no extra config: leave `NEXT_PUBLIC_BASE_PATH` unset and set `NEXT_PUBLIC_SITE_URL` to your domain.

## What's included

- **SEO:** metadata, canonical URL, Open Graph and Twitter cards, a generated OG image (`/og.png`), `sitemap.xml`, `robots.txt`, and JSON-LD `Person` schema. TODO values are left out of the schema automatically.
- **Performance:** fully static, WebP covers with `srcset` (custom `next/image` loader for static export), self-hosted Inter font, and no animation libraries.
- **Accessibility:** semantic landmarks and headings, skip link, visible focus rings, alt text, external links announced to screen readers, and AA contrast.

Lighthouse on the production build, served with compression: desktop 100 in every category; mobile 93–99 performance (simulated, varies per run; the observed LCP equals first paint) and 100 for accessibility, best practices and SEO.
