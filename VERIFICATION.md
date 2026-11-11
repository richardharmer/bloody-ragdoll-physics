# Verification — 2026-11-11

- `npm run build`: successful Next.js static export. Webpack used because the local sandbox rejected Turbopack's internal port binding.
- `npm run typecheck`: passed.
- Export audit: 18 HTML files checked for one H1 and resolvable internal links. Every non-error content page has a self-referencing canonical; no errors.
- Chrome desktop: homepage, armory and interactive routes rendered; confirmed search for gravity, empty state, clear filters and Melee filter (2 results).
- Chrome at 390×844: homepage, armory and world-event layout visually inspected; homepage and sandbox document widths equal viewport width (390px), no horizontal overflow observed.
- NPC Wars: next-step control changes explanation; save feedback appears; entered test note survives reload. Test note cleared after verification.
- Physics tool: 0.25× speed selectable, Launch advances time, Pause stops, Reset returns to 0.00 seconds.
- Events: selecting Zero-G updates the description; preview toggles to an active state and can be stopped.
- Initial Cloudflare Git-integrated deployment succeeded. Public homepage loaded at https://bloody-ragdoll-physics.pages.dev/.

Limitations: no actual Roblox gameplay session was tested. UI button locations, precise mechanics, item models and full roster remain unverified. SVG art and event animations are concepts. No claim is made about measured Core Web Vitals, search rankings, or full accessibility conformance. Production smoke verification is separate from the deeper local interaction checks above.
