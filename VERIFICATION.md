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


## Content release — 12 November 2026

- Official Arsenal pass adds Lightning Staff: 10 sourced names / 23 advertised weapons.
- Five official pass records, dated Robux prices, entitlement matrix and restrictions.
- All 13 official badge objectives have per-record source links. Checklist saves locally and supports category / unfinished filters.
- B2E FF video OiE_DfxaXJE: inspected approximately 00:14 and 00:30. Original interactive schematic shows visible labels and relative positions only. Exact Roblox place identity, touch sequence and button effects remain unconfirmed; footage labels are not imported into the official weapon roster.
- Browser QA: 390px passes and mobile pages have document width 390px; annotation switch updates detail and timestamp. Badge completion survives reload; First steps + unfinished filter excludes the completed task.
- Browser extension adds an immersive-translate attribute to HTML, generating a development hydration attribute warning; no application interaction failure observed.
- Production build, TypeScript and static export audit passed: 19 sitemap routes, one H1 and matching canonical per route, all local page links resolve. Mobile badge page also fits 390px.

## Equipment expansion — 12 November 2026

- Primary evidence: `https://apis.roblox.com/developer-products/v2/universes/10773926254/developerproducts?limit=100`; 31 records, null next cursor. Twenty selected equipment records have correct universe IDs and unique product IDs. Snapshot and all 20 valid PNG icons are shipped locally.
- Added 15 names; 25 combined weapon/tool entries. Kept advertised 23-weapon count separate. Excluded Starter Pack, color and event products; specifically distinguished Black Hole equipment from BLACKHOLE event.
- Inspected developer community 91569202, owner profile 9499434211 and official game page: no Discord link visible. Old Toy Tools pass 2059508042 names rope/balloon/freeze but is off sale, so not added to active pass comparison. Other inspected old pass descriptions did not identify individual equipment.
- GD Trace DdwGd37TWIs at 03:51: SMG, FIRE, RELOAD, 25 / 32 visible. Chirisye_24 qAPOJWuteq4 at 06:27: Katana, Throwing Knives, Bat visible. These video descriptions lack game-ID links; Bat remains excluded from the official roster. B2E FF sampled at 05:09, 09:02 and 11:35 did not show a readable syringe inventory. No claim of full-frame or full-video exhaustive review.
- No verified individual syringe names/effects added. Broad official outcomes remain separately labeled.
- Production build and typecheck pass. Static audit: all 34 sitemap pages have one H1, matching canonical, resolving internal links and local image assets.
- Browser QA against static production output: Tools filter yields six cards; thruster search yields two; empty results and reset restore 25. Lightning stage switch renders body-to-body arcs. Mobile FIRE/RELOAD annotation updates correctly. Armory and detail fit 390px without page overflow; mobile diagram inspected at 390px.

## Production domain — 12 November 2026

- User configured bloodyragdollphysics.com and www redirect in Cloudflare. HTTPS www equipment detail request returns 301 to the same path on apex, followed by 200.
- metadataBase, 34 static canonical URLs, sitemap and robots sitemap reference now use https://bloodyragdollphysics.com. Production build and TypeScript pass.
