import { PageIntro } from "@/components/Shell";
import { passes, passUrl, mobileSource } from "@/lib/research";
import { official } from "@/lib/data";
export const metadata = {
  alternates: { canonical: "/sources/" },
  title: "Sources, verification & editorial policy",
};
export default function Page() {
  return (
    <div className="page prose">
      <PageIntro
        tag="EDITORIAL / SOURCE REGISTER"
        title="Know what’s confirmed."
      >
        A useful wiki should make uncertainty visible. We publish what we can
        support and keep unknowns out of the stats.
      </PageIntro>
      <h2>Primary source</h2>
      <p>
        <a href={official} target="_blank" rel="noreferrer">
          Bloody Ragdoll Physics — official Roblox game page ↗
        </a>
        <br />
        Description checked on 11 November 2026. The game can change after this
        date.
      </p>
      <h2>Confirmed by that description</h2>
      <ul>
        <li>Advertised totals: 23 weapons and 14 syringes.</li>
        <li>
          Nine weapon names: sniper, shotgun, chainsaw, sledgehammer,
          flamethrower, minigun, rocket launcher, gravity gun and black hole.
        </li>
        <li>
          NPC Wars supports choosing teams, assigning weapons and starting the
          battle.
        </li>
        <li>
          Five named world events: Nuke, Black Hole, Fire Storm, Zero-G and
          Flash Freeze.
        </li>
        <li>
          Sandbox spawning, changing rules, slowing time and rewinding are
          mentioned, along with cars and PC, phone and console support.
        </li>
      </ul>
      <h2>Official passes and badges · 12 November 2026</h2>
      <p>
        The Arsenal description confirms Lightning Staff, bringing the sourced
        roster to ten names. Five pass descriptions establish the benefits,
        restrictions and displayed prices in our{" "}
        <a href="/passes/">comparison</a>.
      </p>
      <ul>
        {passes.map((p) => (
          <li key={p.id}>
            <a href={passUrl(p)}>{p.name} — official pass record ↗</a>
          </li>
        ))}
      </ul>
      <p>
        All 13 names and objectives in the{" "}
        <a href="/badges/">badge checklist</a> come from the official Roblox
        badge list. Each task links its own badge record. Locations and detailed
        award triggers remain unverified.
      </p>
      <h2>Gameplay video · limited evidence</h2>
      <p>
        <a href={mobileSource}>B2E FF — creator-labeled gameplay ↗</a> supports
        the visible labels and relative positions shown in our{" "}
        <a href="/guides/mobile/">mobile field notes</a>, at approximately 00:14
        and 00:30. The video description does not identify the exact Roblox
        place ID. We do not use it to confirm the official weapon roster or
        unobserved button effects.
      </p>
      <h2>Not yet verified</h2>
      <p>
        The complete weapon roster; individual syringe names and effect
        mappings; damage, ranges, cooldowns, unlocks beyond the listed passes,
        current menu positions and key bindings. No tier rankings or winners are
        inferred from unknown stats.
      </p>
      <h2>How to read the illustrations</h2>
      <p>
        All artwork is original, stylized concept art. It does not reproduce
        official weapon models. The mobile schematic reconstructs only the
        observed video layout. Event visuals are artistic interpretations of the
        names. The physics demo uses an independent mathematical animation and
        does not model Roblox physics or game-specific mechanics. Weapon
        categories are editorial navigation labels.
      </p>
      <h2>Verification standard for future additions</h2>
      <p>
        Capture the current item label, platform, date and before/after
        behavior. Repeat observations under the same conditions, record
        exceptions, and attach a primary source or reproducible gameplay
        evidence before publishing a specific mechanic.
      </p>
      <h2>Privacy & independence</h2>
      <p>
        No accounts, ads or analytics are implemented. The badge checklist and
        battle notebook store only the progress, notes and choices you save in
        your browser’s local storage. The hosting provider may process normal
        request logs. External Roblox links take you to a separate service. This
        is an independent fan resource, not an official Roblox or developer
        website.
      </p>
    </div>
  );
}
