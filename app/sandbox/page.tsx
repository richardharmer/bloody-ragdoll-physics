import Link from "next/link";
import { PageIntro } from "@/components/Shell";
import { GuideLinks } from "@/components/GuideLinks";
import { events } from "@/lib/data";
import {
  buildMetadata,
  JsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bloody Ragdoll Physics World Events & Sandbox Rules Guide",
  description:
    "All 5 Bloody Ragdoll Physics World Events (Nuke, Black Hole, Fire Storm, Zero-G, Flash Freeze), how arena events differ from weapons, and Sandbox Pass sliders.",
  path: "/sandbox/",
});

const eventFaqs = [
  {
    question: "What are all 5 world events in Bloody Ragdoll Physics?",
    answer:
      "The five official world events are Nuke, Black Hole, Fire Storm, Zero-G, and Flash Freeze.",
  },
  {
    question:
      "What is the difference between the BLACKHOLE event and the Black Hole weapon?",
    answer:
      "BLACKHOLE is an arena-wide world-event trigger in the developer-product catalog, whereas Black Hole is a personal handheld weapon unlocked via the Arsenal Game Pass (249 Robux).",
  },
  {
    question: "Is Flash Freeze the same as the Freeze tool?",
    answer:
      "No. Flash Freeze is an arena-wide world event, while Freeze is a single-target tool unlocked at 300 kills on the weapon ladder (used to earn the Hold Still badge).",
  },
];

export default function Page() {
  return (
    <div className="page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "World Events & Sandbox", path: "/sandbox/" },
        ])}
      />
      <JsonLd data={faqJsonLd(eventFaqs)} />

      <PageIntro
        tag="World Events & Sandbox"
        title="World Events & Sandbox Physics Guide"
      >
        Complete breakdown of all{" "}
        <strong>5 arena-wide World Events</strong> in{" "}
        <strong>Bloody Ragdoll Physics</strong>, how server events differ from
        handheld <Link href="/weapons/">weapons & tools</Link>, and what you can
        customize with{" "}
        <Link href="/passes/#pass-2057360139">Sandbox Pass</Link> sliders.
      </PageIntro>

      <section className="page-section" id="world-events">
        <h2>All 5 Official World Events</h2>
        <p className="section-sub">
          Unlike standard firearms or attachment tools, World Events change
          gravity, temperature, or blast state across the entire map at once:
        </p>

        <div className="feature-grid">
          {events.map((e) => (
            <article key={e.slug} className="info-card event-card">
              <div className="event-card-head">
                <span
                  className="event-swatch"
                  style={{ background: e.color }}
                  aria-hidden="true"
                />
                <span className="cat-pill">{e.hint}</span>
              </div>
              <h3>{e.name}</h3>
              <p>{e.summary}</p>
              <p className="event-combo-tip">
                <strong>Combo tip:</strong> {e.combo}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <h2>World Events vs. Handheld Equipment (Don’t Mix Them Up)</h2>
        <p className="section-sub">
          Several World Events share similar names with personal equipment items
          in the store. Here is how they differ:
        </p>

        <div className="comparison-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">World Event Version</th>
                <th scope="col">Handheld Equipment Version</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Black Hole</th>
                <td>
                  <code>BLACKHOLE</code> server/map event affecting the arena at
                  large.
                </td>
                <td>
                  <Link
                    href="/weapons/black-hole/"
                    className="table-item-link"
                  >
                    Black Hole (Weapon)
                  </Link>{" "}
                  — equippable item bundled in{" "}
                  <Link href="/passes/#pass-2058843165">
                    Arsenal Pass (249 R$)
                  </Link>
                  .
                </td>
              </tr>
              <tr>
                <th scope="row">Freeze / Flash Freeze</th>
                <td>
                  <strong>Flash Freeze</strong> — arena-wide freeze event across
                  active props and ragdolls.
                </td>
                <td>
                  <Link href="/weapons/freeze/" className="table-item-link">
                    Freeze (Tool)
                  </Link>{" "}
                  — unlocks at <strong>300 kills</strong>; stops one airborne
                  body for the <em>Hold Still</em> badge.
                </td>
              </tr>
              <tr>
                <th scope="row">Zero-G vs. Lift Tools</th>
                <td>
                  <strong>Zero-G</strong> — turns off normal gravity across the
                  whole arena.
                </td>
                <td>
                  <Link href="/weapons/balloon/" className="table-item-link">
                    Balloon (60 kills)
                  </Link>
                  ,{" "}
                  <Link href="/weapons/thruster/" className="table-item-link">
                    Thruster (0 kills)
                  </Link>{" "}
                  &amp;{" "}
                  <Link
                    href="/weapons/power-thruster/"
                    className="table-item-link"
                  >
                    Power Thruster (650 kills)
                  </Link>{" "}
                  lift individual targets.
                </td>
              </tr>
              <tr>
                <th scope="row">Fire Storm vs. Flamethrower</th>
                <td>
                  <strong>Fire Storm</strong> — map-wide falling fire hazard.
                </td>
                <td>
                  <Link
                    href="/weapons/flamethrower/"
                    className="table-item-link"
                  >
                    Flamethrower
                  </Link>{" "}
                  — direct aimed fire weapon in the Arsenal Pass.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>Sandbox Mode Spawning & Physics Sliders</h2>
        <div className="detail-columns">
          <div className="info-card">
            <h3>What You Can Spawn (Solo Sandbox)</h3>
            <ul className="clean-list">
              <li>Ragdoll test dummies for custom setups and kill tests</li>
              <li>Explosive barrels and landmines for chain reactions</li>
              <li>Cannons and obstacle setups</li>
              <li>Custom opposing squads for solo NPC battles</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>Adjustable Physics Rules</h3>
            <ul className="clean-list">
              <li>
                <strong>Gravity:</strong> Float bodies low-gravity style or slam
                them down harder
              </li>
              <li>
                <strong>Knockback:</strong> Multiply how far punches, shotguns,
                and explosions launch dummies
              </li>
              <li>
                <strong>Attack Speed &amp; Damage:</strong> Tune combat pacing
                for custom experiments
              </li>
              <li>
                <strong>Note:</strong> Official{" "}
                <Link href="/passes/#pass-2057360139">
                  Sandbox Pass (99 R$)
                </Link>{" "}
                features apply to <strong>singleplayer only</strong>.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>World Events FAQ</h2>
        <div className="faq-list">
          {eventFaqs.map((f) => (
            <details key={f.question} className="faq-item">
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <GuideLinks exclude="/sandbox/" />
    </div>
  );
}
