# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A minimalist CV/portfolio website built with Next.js 14, React 18, TypeScript, shadcn/ui, and TailwindCSS. Deployed on Vercel.

## Commands

```bash
yarn install          # Install dependencies
yarn dev              # Start development server
yarn build            # Build for production
yarn start            # Start production server
yarn lint             # Run ESLint
```

## Architecture

### Single Configuration Source
All CV/resume content is centralized in `/src/data/resume-data.tsx`. This is the primary file to edit when updating personal information, work history, education, skills, or projects.

### Directory Structure
- `/src/app/` - Next.js App Router pages
  - `page.tsx` - Main CV page
  - `layout.tsx` - Root layout with Google Analytics
  - `/seena-apps/`, `/shiftedpixel/` - App landing pages for mobile projects
- `/src/components/` - React components
  - `/ui/` - shadcn/ui components (avatar, badge, button, card, etc.)
  - `/icons/` - Custom SVG icon components
  - `command-menu.tsx` - Keyboard command menu (Cmd+J / Ctrl+J)
- `/src/lib/utils.ts` - Utility function (`cn` for className merging)

### Key Patterns
- Uses shadcn/ui components built on Radix UI primitives
- Mix of React Server Components and client components (marked with "use client")
- Print-optimized layout using Tailwind print classes
- Google Analytics 4 integration with custom event tracking
- Path alias: `@/*` maps to `./src/*`

### Deployment
- Primary: Vercel (optimized with `output: 'standalone'` in next.config.js)
- Docker: `docker-compose.yml` exposes port 1234 → 3000
- Deploy script: `pull_n_build.sh` pulls latest and rebuilds with Docker
