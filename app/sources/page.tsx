import Link from "next/link";
import { equipmentSource, equipmentSnapshot } from "@/lib/equipment";
import { PageIntro } from "@/components/Shell";
import { passes, passUrl, mobileSource } from "@/lib/research";
import { official } from "@/lib/data";
import { buildMetadata, JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sources, Verification Policy & Privacy Notice",
  description:
    "How our independent Bloody Ragdoll Physics wiki verifies official Roblox weapons, game passes, badges, and promo code status—plus analytics and privacy details.",
  path: "/sources/",
});

export default function Page() {
  return (
    <div className="page prose">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Sources & Privacy", path: "/sources/" },
        ])}
      />

      <PageIntro
        tag="Sources & Privacy"
        title="Sources, Verification & Privacy Notice"
      >
        We publish only what can be verified from official Roblox records or
        timestamped gameplay observations—and clearly mark anything the developer
        has not published rather than inventing stats or fake promo codes.
      </PageIntro>

      <h2>Primary game source</h2>
      <p>
        <a href={official} target="_blank" rel="noreferrer">
          Bloody Ragdoll Physics — official Roblox game page ↗
        </a>
        <br />
        Created by <code>blablablablabla123123</code>. Checked in November 2026;
        in-game items, prices, and mechanics can change in future updates.
      </p>

      <h2>Confirmed by the official game description</h2>
      <ul>
        <li>Advertised totals: 23 weapons and 14 syringes.</li>
        <li>
          Nine weapon names in description text: Sniper, Shotgun, Chainsaw,
          Sledgehammer, Flamethrower, Minigun, Rocket Launcher, Gravity Gun, and
          Black Hole.
        </li>
        <li>
          NPC Wars flow: choose teams, assign weapons, and start the battle.
        </li>
        <li>
          Five named world events: Nuke, Black Hole, Fire Storm, Zero-G, and
          Flash Freeze.
        </li>
        <li>
          Sandbox spawning, rule sliders, slow motion, rewind, drivable cars,
          and PC, mobile, and console support.
        </li>
      </ul>

      <h2>Official Game Passes & Badges · 12 November 2026</h2>
      <p>
        The Arsenal Game Pass description confirms six exclusive heavy weapons
        (including Lightning Staff). Five pass store pages establish the
        entitlements, singleplayer Sandbox restriction, and displayed Robux
        prices in our <Link href="/passes/">Game Pass guide</Link>:
      </p>
      <ul>
        {passes.map((p) => (
          <li key={p.id}>
            <a href={passUrl(p)} target="_blank" rel="noreferrer">
              {p.name} ({p.price} R$) — official Roblox Game Pass ↗
            </a>
          </li>
        ))}
      </ul>
      <p>
        All 13 names and objectives in the{" "}
        <Link href="/badges/">badge checklist</Link> come directly from the
        official Roblox badge list for universe <code>10773926254</code>, with
        each card linking its official badge record.
      </p>

      <h2>Official Developer-Product Catalog & Complete 32-Item Roster</h2>
      <p>
        The{" "}
        <a href={equipmentSource} target="_blank" rel="noreferrer">
          Roblox public developer-product API ↗
        </a>{" "}
        for universe <code>10773926254</code> returned 31 records (no next page).
        Twenty equipment records include official PNG icons and developer
        descriptions (<a href={equipmentSnapshot}>dated JSON snapshot ↗</a>).
        Combined with starter hotbar items (<code>Grab</code>, <code>Fists</code>
        , <code>Pistol</code>, <code>Bow</code>, <code>Landmine</code>),
        login-streak / bonus melee rewards (<code>Bat</code>,{" "}
        <code>Chainsaw</code>, <code>Sledgehammer</code>), the 250-kill{" "}
        <code>Axe</code> milestone, and the remaining Arsenal Pass heavy weapons,
        our <Link href="/weapons/">Weapons &amp; Tools database</Link> covers all{" "}
        <strong>32 usable items</strong> alongside their 0 → 650 kill progression
        gates.
      </p>
      <p>
        Blood-color products, world-event triggers (such as{" "}
        <code>BLACKHOLE</code> event vs. handheld <code>Black Hole</code>{" "}
        equipment), and Starter Pack are kept distinct from the weapon/tool
        roster. Retired off-sale passes (such as old Toy Tools pass{" "}
        <code>2059508042</code>) are omitted from the active buyer table.
      </p>

      <h2>Promo codes & syringe verification</h2>
      <p>
        No promo code redemption feature or official Discord link was present on
        the official game page, creator group, or owner profile inspected—documented
        on our <Link href="/codes/">Codes status page</Link>. Individual syringe
        names are not listed in the developer-product API, so{" "}
        <Link href="/syringes/">Syringes</Link> reports the 14-count and the four
        officially described clues without fabricating names.
      </p>

      <h2>Gameplay video observations</h2>
      <p>
        <a href={mobileSource} target="_blank" rel="noreferrer">
          B2E FF — creator-labeled mobile gameplay ↗
        </a>{" "}
        (00:14 and 00:30) and{" "}
        <a
          href="https://www.youtube.com/watch?v=DdwGd37TWIs&t=231s"
          target="_blank"
          rel="noreferrer"
        >
          GD Trace at 03:51 ↗
        </a>{" "}
        support the mobile HUD button labels reconstructed on{" "}
        <Link href="/guides/mobile/">Mobile Controls</Link>. Video-only toolbar
        labels without official catalog records (such as Bat in{" "}
        <a
          href="https://www.youtube.com/watch?v=qAPOJWuteq4&t=387s"
          target="_blank"
          rel="noreferrer"
        >
          Chirisye_24 at 06:27 ↗
        </a>
        ) are kept separate from the confirmed 25-item database.
      </p>

      <h2 id="privacy">Privacy & Independence Notice</h2>
      <p>
        This website is an independent fan-made player guide and is not
        affiliated with, endorsed by, or sponsored by Roblox Corporation or the
        creator of Bloody Ragdoll Physics.
      </p>
      <p>
        We load Google Tag Manager (<code>GTM-TW44824G</code>) for site
        analytics measurement and Microsoft Clarity (<code>zc2um79ysp</code>)
        for aggregate usage heatmaps and session diagnostics. These services may
        process standard device/browser metadata and cookies. See the{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          Google Privacy Policy ↗
        </a>{" "}
        and{" "}
        <a
          href="https://privacy.microsoft.com/privacystatement"
          target="_blank"
          rel="noreferrer"
        >
          Microsoft Privacy Statement ↗
        </a>
        . Interactive checklists and matchup notes on this site save strictly in
        your own browser’s <code>localStorage</code> and are never uploaded to
        our servers.
      </p>
    </div>
  );
}
