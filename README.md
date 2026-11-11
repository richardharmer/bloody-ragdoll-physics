# Bloody Ragdoll Physics — Interactive Field Guide

Independent English-language visual wiki built with Next.js, React, TypeScript and Tailwind CSS. Static export for Cloudflare Pages. No server, paid service, analytics or account system is required.

## Local development

Use Node 22 and npm.

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run typecheck
```

The deployable site is `out/`. Cloudflare Pages: connect this GitHub repository, production branch `main`, build command `npm run build`, output directory `out`, Node version `22`. Use the assigned pages.dev URL first; add a custom domain later. Git integration rebuilds pushes automatically. The GitHub workflow independently checks and uploads the static export; it does not deploy to a second host.

Official deployment reference: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/

## Content & verification

Primary source: https://www.roblox.com/games/140431845542654/Bloody-Ragdoll-Physics — checked 2026-11-11.

Confirmed: advertised 23 weapons, 14 syringes, ten sourced weapon names, five event names, NPC Wars flow and broad sandbox features. Official pass descriptions and 13 badge objectives were checked on 12 November 2026. Full roster, numeric stats, exact controls and individual syringe mappings remain unknown. Do not replace unknown fields with guesses. `lib/data.ts` holds the confirmed-name registry; `/sources/` explains provenance.

All SVG art is original conceptual artwork. The physics demo is a ballistic visualization with decorative rotation and a floor clamp, not Roblox physics. World-event animations are interpretations, not gameplay recordings. Weapon categories are editorial. The notebook stores user-entered plans locally; it does not simulate battles.

## Routes / user tasks

- `/`: system overview and entry points
- `/weapons/`: search and category filters for ten confirmed names
- `/weapons/[slug]/`: sourced name, unknown fields and experiment checklist
- `/syringes/`: supported description-level observations, no invented roster
- `/guides/`: illustrated NPC Wars sequence and locally saved battle notebook
- `/sandbox/`: adjustable illustrative physics demo and five event concepts
- `/passes/`: five official pass descriptions, dated prices and entitlement matrix
- `/badges/`: 13 source-linked objectives, filters and browser-local progress
- `/guides/mobile/`: interactive schematic of video-observed labels; game identity and gestures remain unverified
- `/sources/`: evidence, limitations and privacy

Search demand and keyword volumes are not measured. These task mappings come from the project brief and source availability, not fabricated SEO data. Canonical URLs and sitemap use the assigned Cloudflare hostname: https://bloody-ragdoll-physics.pages.dev. Update metadataBase and the sitemap origin together when a custom domain is configured.

## Visual system

Dark industrial laboratory. Background `#0b1014`, panels `#111a20`, orange `#ff7847`, cyan `#76dbe0`, primary text `#eef1e9`, secondary text `#a1b0b6`. Condensed-feeling heavy headlines, monospaced instrument labels and restrained borders. A custom framed articulated-dummy icon is used in the header and favicon, with a matching 180px touch icon. Responsive layouts collapse at 1050px and 720px. Focus states, a skip link, labeled controls and reduced-motion styles are included.
