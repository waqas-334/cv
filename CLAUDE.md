# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal CV/portfolio site (waqasyounis.com) built with Next.js 14 (App Router), React 18, TypeScript, shadcn/ui, and TailwindCSS. It also hosts app landing/privacy pages for mobile projects and a client-side browser-tester tool.

## Commands

```bash
yarn install          # Install dependencies
yarn dev              # Dev server (or ./scripts/dev.sh, which installs deps first if needed)
yarn build            # Production build (standalone output)
yarn lint             # ESLint (next lint)
npx tsc --noEmit      # Type-check
```

There is no test suite.

`next.config.js` sets `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors`, so `yarn build` succeeds even with lint/type errors. Run `yarn lint` and `npx tsc --noEmit` explicitly to catch them.

## Architecture

- **Content lives in one file:** `src/data/resume-data.tsx` exports `RESUME_DATA`, which `src/app/page.tsx` renders. Edit content there, not in the page.
- **Routes:** `src/app/page.tsx` is the CV. `seena-apps/` and `shiftedpixel/` hold static landing, privacy-policy, and support pages for mobile apps (external app listings likely link to these URLs). `browser-tester/` is a `"use client"` page that opens tabs in various ways and saves its config in `localStorage`.
- **Analytics:** `src/components/googleanalytics.tsx` loads GA4 with a hardcoded tracking ID and is mounted in the root layout. For custom events, render `src/components/google-analytics-event.tsx`, which calls `window.gtag` (typed in `src/app/global.d.ts`). `.env.prod`'s `NEXT_PUBLIC_GOOGLE_ANALYTICS` is not currently read by the code.
- **Print layout:** the CV page uses Tailwind `print:` variants for a print-friendly layout. Keep them when changing the page.
- shadcn/ui components live in `src/components/ui/` (config in `components.json`). Path alias `@/*` → `./src/*`.
- Prettier with `prettier-plugin-tailwindcss` (sorts class names).

## Deployment

The site is self-hosted with Docker behind nginx, not on Vercel:

1. **Locally:** `./scripts/build-and-push.sh [version]` builds a `linux/amd64` image from the multi-stage `Dockerfile` (Next.js standalone `server.js`) and pushes it to DockerHub as `$DOCKERHUB_USER/waqasyounis.com:<version>` (default user `waqas33412345`, default tag `latest`).
2. **On the server:** `./scripts/deploy.sh [version]` is self-contained. It pulls the image and replaces the `waqasyounis.com` container on host port 1234 → 3000.
3. nginx (`waqasyounis.com.conf`, TLS via Certbot) proxies the domain to `localhost:1234` and rewrites 404s to `/`.

`docker-compose.yml` (builds locally) and `docker-compose.prod.yml` are older alternatives. The prod compose file still uses the old `cv-web` image name.
