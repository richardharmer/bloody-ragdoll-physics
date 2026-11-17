import Link from "next/link";
import { GuideLinks } from "@/components/GuideLinks";
import { PageIntro } from "@/components/Shell";
import {
  mapFeatures,
  leftMenuHotkeys,
  rightActionHotkeys,
} from "@/lib/data";
import {
  buildMetadata,
  JsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bloody Ragdoll Physics Controls, PC Keybinds & NPC Wars Guide",
  description:
    "Complete Bloody Ragdoll Physics PC keyboard controls: all 13 side-column hotkeys (B, N, H, M, J, P & F, V, Z, Q, L, R, C), Slow Motion, Rewind, Revive All, and NPC Wars.",
  path: "/guides/",
});

const guideFaqs = [
  {
    question:
      "What are the left and right hotkey columns in Bloody Ragdoll Physics?",
    answer:
      "The left menu column has 6 keys: B (Weapons), N (Shop), H (Rewards), M (Maps), J (Sandbox), and P (Settings). The right action column has 7 keys: F (Ragdoll / Get Up), V (Camera), Z (Slow Motion), Q (Rewind), L (Injuries), R (Revive All), and C (Reset).",
  },
  {
    question: "How do you revive dead dummies to farm kills faster?",
    answer:
      "Press R on PC (Revive All) to restore defeated dummies around the arena so you can immediately eliminate them again without waiting or resetting the whole map.",
  },
  {
    question: "Which keys trigger Slow Motion and Rewind?",
    answer:
      "Press Z to toggle Slow Motion and press Q to trigger Rewind (which also unlocks the official Run It Back badge when you rewind and try again).",
  },
  {
    question: "How do you free your mouse cursor to click UI buttons on PC?",
    answer:
      "Hold Alt on PC to unlock your mouse cursor from camera look so you can click any side-column button or slider.",
  },
];

export default function Page() {
  return (
    <div className="page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Controls & NPC Wars", path: "/guides/" },
        ])}
      />
      <JsonLd data={faqJsonLd(guideFaqs)} />

      <PageIntro
        tag="Controls & Gameplay"
        title="PC Keybinds (All 13 Hotkeys), NPC Wars & Mechanics"
      >
        Complete keyboard map for{" "}
        <strong>Bloody Ragdoll Physics</strong>—covering all{" "}
        <strong>6 Left Menu Keys</strong> (<kbd>B</kbd> <kbd>N</kbd>{" "}
        <kbd>H</kbd> <kbd>M</kbd> <kbd>J</kbd> <kbd>P</kbd>) and{" "}
        <strong>7 Right Physics Keys</strong> (<kbd>F</kbd> <kbd>V</kbd>{" "}
        <kbd>Z</kbd> <kbd>Q</kbd> <kbd>L</kbd> <kbd>R</kbd> <kbd>C</kbd>), plus{" "}
        <strong>NPC Wars</strong>, arena hazards, and cars. Playing on phone or
        tablet? See <Link href="/guides/mobile/">Mobile Touch HUD</Link>.
      </PageIntro>

      <section className="page-section" id="pc-controls">
        <h2>All 13 PC Side-Column Hotkeys</h2>
        <p className="section-sub">
          Hold <kbd>Alt</kbd> anytime to free your mouse cursor, or tap these
          direct keyboard shortcuts:
        </p>

        <div className="detail-columns">
          <div>
            <h3>Left Column — 6 Menu Keys</h3>
            <div className="comparison-wrap">
              <table className="data-table compact-table">
                <thead>
                  <tr>
                    <th scope="col">Key</th>
                    <th scope="col">Menu</th>
                    <th scope="col">What It Opens</th>
                  </tr>
                </thead>
                <tbody>
                  {leftMenuHotkeys.map((c) => (
                    <tr key={c.keys}>
                      <th scope="row">
                        <kbd>{c.keys}</kbd>
                      </th>
                      <td>
                        <strong>{c.action}</strong>
                      </td>
                      <td>{c.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3>Right Column — 7 Action &amp; Physics Keys</h3>
            <div className="comparison-wrap">
              <table className="data-table compact-table">
                <thead>
                  <tr>
                    <th scope="col">Key</th>
                    <th scope="col">Action</th>
                    <th scope="col">Gameplay Role</th>
                  </tr>
                </thead>
                <tbody>
                  {rightActionHotkeys.map((c) => (
                    <tr key={c.keys}>
                      <th scope="row">
                        <kbd>{c.keys}</kbd>
                      </th>
                      <td>
                        <strong>{c.action}</strong>
                      </td>
                      <td>{c.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="npc-wars">
        <h2>How to Set Up NPC Wars Battles</h2>
        <p className="section-sub">
          NPC Wars lets you pit AI ragdoll squads against each other using any
          weapons you have unlocked.
        </p>

        <div className="hub-grid">
          <article className="info-card">
            <span className="cat-pill">Step 1</span>
            <h3>Select Opposing Teams</h3>
            <p>
              Open the NPC Wars setup and pick opposing sides. In solo play with
              the{" "}
              <Link href="/passes/#pass-2057360139">
                Sandbox Pass (<kbd>J</kbd>)
              </Link>
              , you can also spawn custom dummy groups around arena traps.
            </p>
          </article>

          <article className="info-card">
            <span className="cat-pill">Step 2</span>
            <h3>Assign Unlocked Weapons</h3>
            <p>
              Hand out ranged guns (<Link href="/weapons/smg/">SMG</Link>,{" "}
              <Link href="/weapons/shotgun/">Shotgun</Link>,{" "}
              <Link href="/weapons/sniper/">Sniper</Link>) or melee blades (
              <Link href="/weapons/katana/">Katana</Link>,{" "}
              <Link href="/weapons/chainsaw/">Chainsaw</Link>,{" "}
              <Link href="/weapons/axe/">Axe</Link>) to test range vs. rushdown.
            </p>
          </article>

          <article className="info-card">
            <span className="cat-pill">Step 3</span>
            <h3>Slow-Mo (Z), Rewind (Q) &amp; Revive (R)</h3>
            <p>
              Toggle <kbd>Z</kbd> (Slow Motion) during clashes, press{" "}
              <kbd>Q</kbd> (Rewind) to replay an exchange, or hit <kbd>R</kbd>{" "}
              (Revive All) to instantly run another round.
            </p>
          </article>
        </div>
      </section>

      <section className="page-section" id="hazards-and-cars">
        <h2>Arena Traps &amp; Drivable Cars</h2>
        <div className="feature-grid">
          {mapFeatures.map((f) => (
            <article key={f.name} className="info-card">
              <span className="cat-pill">{f.badge}</span>
              <h3>{f.name}</h3>
              <p>{f.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <h2>Controls &amp; Gameplay FAQ</h2>
        <div className="faq-list">
          {guideFaqs.map((f) => (
            <details key={f.question} className="faq-item">
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <GuideLinks exclude="/guides/" />
    </div>
  );
}
