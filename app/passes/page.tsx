import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PageIntro } from "@/components/Shell";
import { PassCalculator } from "@/components/PassCalculator";
import { GuideLinks } from "@/components/GuideLinks";
import { passes, passUrl, researchDate } from "@/lib/research";
import { weapons, isArsenalExclusive } from "@/lib/data";
import {
  buildMetadata,
  JsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bloody Ragdoll Physics Game Passes — Prices & Value Calculator",
  description:
    "Compare all 5 Bloody Ragdoll Physics Game Passes (Sandbox, Arsenal, Injections, VIP, Everything): interactive Robux calculator, 247 R$ savings, and solo limits.",
  path: "/passes/",
});

const passFaqs = [
  {
    question: "How much Robux does the Everything Game Pass save?",
    answer:
      "Buying Sandbox (99 R$), Arsenal (249 R$), Injections (199 R$), and VIP (199 R$) individually costs 746 Robux. The Everything bundle costs 499 Robux, saving 247 Robux (~33%) while also promising future passes.",
  },
  {
    question: "Why doesn’t my Sandbox Game Pass work in public multiplayer?",
    answer:
      "The official Sandbox Game Pass description explicitly states that Sandbox works in singleplayer only. Custom spawning, physics sliders, and custom NPC battle tools apply to solo sessions.",
  },
  {
    question: "Does VIP double weapon damage or speed up the 650-kill ladder?",
    answer:
      "VIP makes each kill count twice toward your kill total (with a gold tag and VIP leaderboard slot). That cuts the 650-kill Power Thruster grind down to 325 actual dummy kills—it does not double per-hit weapon damage.",
  },
  {
    question: "Which 6 weapons are exclusive to the Arsenal Game Pass?",
    answer:
      "Flamethrower, Minigun, Rocket Launcher, Black Hole, Lightning Staff, and Gravity Gun cannot be earned on the free 0–650 kill ladder; Arsenal unlocks all six immediately plus every weapon currently on the ladder.",
  },
];

export default function Page() {
  const arsenalWeapons = weapons.filter((w) => isArsenalExclusive(w.slug));

  return (
    <div className="page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Game Passes", path: "/passes/" },
        ])}
      />
      <JsonLd data={faqJsonLd(passFaqs)} />

      <PageIntro
        tag="Game Passes"
        title="Bloody Ragdoll Physics Game Passes: Prices & Value Calculator"
      >
        Side-by-side breakdown of all five official Game Passes (checked{" "}
        {researchDate}), interactive Robux bundle calculator,{" "}
        <Link href="/weapons/">Arsenal exclusive weapons</Link>, and
        singleplayer restrictions. Always check live Robux prices on Roblox
        before purchasing.
      </PageIntro>

      <div className="summary-strip" aria-label="Game Pass value summary">
        <div>
          <strong>5</strong>
          <span>Official Game Passes</span>
        </div>
        <div>
          <strong>746 R$</strong>
          <span>4 Passes Bought Separately</span>
        </div>
        <div>
          <strong>499 R$</strong>
          <span>Everything Bundle (Save 247 R$)</span>
        </div>
        <div>
          <strong>Solo Only</strong>
          <span>Sandbox Pass Restriction</span>
        </div>
      </div>

      <section className="calc-section" id="calculator">
        <PassCalculator />
      </section>

      <div
        className="comparison-wrap"
        tabIndex={0}
        role="region"
        aria-label="Game Pass entitlement comparison table"
      >
        <table className="comparison">
          <caption>
            Included pass entitlements (snapshot checked {researchDate})
          </caption>
          <thead>
            <tr>
              <th scope="col">Game Pass / Price</th>
              {["Sandbox", "Arsenal", "Injections", "VIP"].map((x) => (
                <th scope="col" key={x}>
                  {x}
                </th>
              ))}
              <th scope="col">Best For</th>
            </tr>
          </thead>
          <tbody>
            {passes.map((p) => (
              <tr key={p.id}>
                <th scope="row">
                  <a href={`#pass-${p.id}`}>{p.name}</a>
                  <small>{p.price} R$</small>
                </th>
                {["Sandbox", "Arsenal", "Injections", "VIP"].map((x) => (
                  <td key={x}>
                    <span
                      aria-label={
                        p.includes.includes(x) ? "Included" : "Not included"
                      }
                    >
                      {p.includes.includes(x) ? "✓" : "—"}
                    </span>
                  </td>
                ))}
                <td className="best-for-cell">{p.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="research-grid">
        {passes.map((p) => (
          <article className="research-card" id={`pass-${p.id}`} key={p.id}>
            <div className="card-heading">
              <h2>{p.name}</h2>
              <strong>
                {p.price} <small>R$</small>
              </strong>
            </div>
            <p>{p.summary}</p>
            <div className="evidence-note">{p.limit}</div>

            {p.name === "Arsenal" && (
              <div className="inline-weapon-links">
                <span>6 Exclusive Heavy Weapons:</span>
                <div className="tag-row">
                  {arsenalWeapons.map((w) => (
                    <Link
                      href={`/weapons/${w.slug}/`}
                      key={w.slug}
                      className="pill-link"
                    >
                      {w.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <a
              href={passUrl(p)}
              target="_blank"
              rel="noreferrer"
              className="ext-subtle"
            >
              View on Roblox Store <ExternalLink size={13} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>

      <section className="page-section">
        <h2>Game Pass Buyer FAQ</h2>
        <div className="faq-list">
          {passFaqs.map((f) => (
            <details key={f.question} className="faq-item">
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <GuideLinks exclude="/passes/" />
    </div>
  );
}
