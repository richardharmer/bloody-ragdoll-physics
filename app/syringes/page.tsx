import { official } from "@/lib/data";
import { PageIntro } from "@/components/Shell";
import Link from "next/link";
export const metadata = {
  alternates: { canonical: "/syringes/" },
  title: "Syringe lab — confirmed effects & unknowns",
  description:
    "14 syringes are advertised, but individual names remain unverified. See official effect descriptions, source coverage and unresolved color mappings.",
};
export default function Page() {
  return (
    <div className="page">
      <PageIntro
        tag="DATABASE / SYRINGE LAB"
        title="Small dose. Big questions."
      >
        The official description advertises 14 syringes, but does not supply a
        full named list or a reliable color-to-effect mapping.
      </PageIntro>
      <div
        className="evidence-metrics"
        aria-label="Syringe verification coverage"
      >
        <div>
          <strong>14</strong>
          <span>advertised syringes</span>
        </div>
        <div>
          <strong>0</strong>
          <span>verified individual names</span>
        </div>
        <div>
          <strong>3</strong>
          <span>described outcomes</span>
        </div>
      </div>
      <div className="notice">
        Rechecked 12 November 2026. The official game description and Injections
        pass describe broad outcomes, not an item-by-item list. The public
        product catalog supplies no individual syringe names. The video frames
        inspected did not establish a readable syringe label paired with its
        effect.
      </div>
      <div className="syringe-grid">
        {[
          {
            title: "Biting zombies",
            color: "#a2d46b",
            text: "The description mentions zombies that bite. The associated syringe name, color, duration and exact mechanics are not provided.",
          },
          {
            title: "Exploding ragdolls",
            color: "#fa9364",
            text: "An explosive outcome is described. Trigger conditions, radius and damage are not specified.",
          },
          {
            title: "Balloon-like expansion",
            color: "#8bdbe8",
            text: "Ragdolls expanding like balloons are mentioned. Timing, reversibility and gameplay interactions remain unverified.",
          },
          {
            title: "The pink mystery",
            color: "#ee9ed2",
            text: "A pink syringe is mentioned without an explained effect. We do not assign it a speculative ability.",
          },
        ].map((s, i) => (
          <article className="syringe-card" key={s.title}>
            <span className="eyebrow">OBSERVATION 0{i + 1}</span>
            <svg
              viewBox="0 0 300 160"
              role="img"
              aria-label="Generic syringe illustration; illustration color does not identify an in-game effect"
            >
              <g
                transform="translate(55 105) rotate(-25)"
                stroke="#bbc8cb"
                strokeWidth="3"
              >
                <path d="M0-15h35v30H0M15-15v30" fill="none" />
                <path d="M35-22h110v44H35z" fill="#263a40" />
                <path d="M57-17h82v34H57z" fill={s.color} opacity=".75" />
                <path d="M145-8h20v16h-20zM165 0h45" fill="none" />
                {[70, 90, 110, 130].map((x) => (
                  <path key={x} d={`M${x}-20v12`} />
                ))}
              </g>
            </svg>
            <h2>{s.title}</h2>
            <p>{s.text}</p>
            <small>CONCEPT ART · COLORS ARE NOT AN EFFECT KEY</small>
          </article>
        ))}
      </div>
      <div className="notice">
        These are description-level observations, not four verified inventory
        entries. We will not fabricate the remaining names or effects to fill 14
        cards.
      </div>
      <section className="section">
        <h2>Source checks, without guessed names.</h2>
        <ul>
          <li>
            <a href={official}>Official game description ↗</a>: total of 14,
            three broad outcomes and a pink syringe with no explained effect.
          </li>
          <li>
            <a href="https://www.roblox.com/game-pass/2061925867/Injections">
              Official Injections pass ↗
            </a>
            : access to current and future syringes; no individual list.
          </li>
          <li>
            Developer community and owner profile: no Discord link found in the
            pages inspected. This does not prove that no server exists.
          </li>
        </ul>
        <p>
          A useful item entry needs a readable label and a before/after
          demonstration tied to that item. We have not filled the gaps with
          labels from other ragdoll games, blood-color products or the Freeze
          tool.
        </p>
      </section>
      <section className="section">
        <h2>Build a reliable observation.</h2>
        <ol className="steps">
          <li>
            <b>Record the actual label</b>
            <p>
              Write down the name shown in the current game and capture the
              inventory before use.
            </p>
          </li>
          <li>
            <b>Change one variable</b>
            <p>
              Use one syringe on a baseline subject. Watch before trying
              combinations.
            </p>
          </li>
          <li>
            <b>Repeat and compare</b>
            <p>
              Record visible changes and timing. Keep uncertain results separate
              from repeatable behavior.
            </p>
          </li>
        </ol>
        <Link href="/sources/" className="text-link">
          How this wiki verifies information →
        </Link>
      </section>
    </div>
  );
}
