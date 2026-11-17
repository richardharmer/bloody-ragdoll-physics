import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  weapons,
  official,
  weaponSource,
  weaponChecked,
  weaponSummary,
  isArsenalExclusive,
} from "@/lib/data";
import { EquipmentArt } from "@/components/EquipmentArt";
import {
  equipmentEvidence,
  equipmentSnapshot,
  weaponPracticalTips,
} from "@/lib/equipment";
import { badges } from "@/lib/research";
import { buildMetadata, JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return weapons.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = weapons.find((item) => item.slug === slug);
  if (!w) {
    return buildMetadata({
      title: "Weapon Guide | Bloody Ragdoll Physics",
      description: "Weapon and tool details in Bloody Ragdoll Physics.",
      path: `/weapons/${slug}/`,
    });
  }
  const summary = weaponSummary(w.slug);
  const shortUnlock =
    w.unlockType === "pass"
      ? "Arsenal Pass"
      : w.unlockLabel.replace(" · ", " ");
  return buildMetadata({
    title: `${w.name} in Bloody Ragdoll Physics — ${shortUnlock} Unlock & Tips`,
    description: `How to get ${w.name} (${w.unlockLabel}) in Bloody Ragdoll Physics: ${summary} See badge synergies, unlock options, and peer comparisons.`,
    path: `/weapons/${w.slug}/`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = weapons.find((item) => item.slug === slug);
  if (!w) notFound();

  const evidence = equipmentEvidence[w.slug];
  const isArsenal = isArsenalExclusive(w.slug);
  const relatedBadges = badges.filter((b) => b.toolSlug === w.slug);
  const peers = weapons
    .filter((item) => item.category === w.category && item.slug !== w.slug)
    .slice(0, 4);
  const tips = weaponPracticalTips[w.slug] ?? [
    "Available in Bloody Ragdoll Physics across sandbox play and NPC Wars setups.",
  ];

  const ladderOrdered = weapons
    .filter(
      (item): item is typeof item & { killsRequired: number } =>
        item.unlockType === "kills" && typeof item.killsRequired === "number",
    )
    .sort((a, b) => a.killsRequired - b.killsRequired);
  const ladderIdx = ladderOrdered.findIndex((item) => item.slug === w.slug);
  const prevLadder = ladderIdx > 0 ? ladderOrdered[ladderIdx - 1] : null;
  const nextLadder =
    ladderIdx >= 0 && ladderIdx < ladderOrdered.length - 1
      ? ladderOrdered[ladderIdx + 1]
      : null;

  return (
    <div className="page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Weapons & Tools", path: "/weapons/" },
          { name: w.name, path: `/weapons/${w.slug}/` },
        ])}
      />

      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/weapons/">Weapons & Tools (33)</Link>
        <span aria-hidden="true">/</span>
        <span className="crumb-current">{w.name}</span>
      </nav>

      <div className="detail-hero">
        <div>
          <div className="tag-row detail-tags">
            <span className="cat-pill">{w.category}</span>
            <span
              className={`pill ${
                w.unlockType === "pass"
                  ? "pass"
                  : w.unlockType === "kills"
                    ? "kills"
                    : "free"
              }`}
            >
              {w.unlockLabel}
            </span>
            {relatedBadges.map((b) => (
              <span className="pill badge" key={b.id}>
                Unlocks: {b.name}
              </span>
            ))}
          </div>

          <h1>{w.name} — Bloody Ragdoll Physics</h1>
          <p className="detail-lead">{weaponSummary(w.slug)}</p>

          {evidence?.storeQuote && (
            <blockquote className="store-quote">
              “{evidence.storeQuote}”
              <footer>— Official Roblox developer-product description</footer>
            </blockquote>
          )}

          <div className="hero-actions">
            <a
              className="button primary"
              href={official}
              target="_blank"
              rel="noreferrer"
            >
              Play on Roblox <ExternalLink size={15} />
            </a>
            <Link href="/weapons/#kill-calculator" className="button outline">
              Kill Unlock Calculator
            </Link>
            <Link href="/weapons/" className="button outline">
              All 33 Items
            </Link>
          </div>
        </div>

        <div className="detail-art">
          <EquipmentArt {...w} />
          <small>
            {evidence
              ? `Official Roblox product icon (Product ID ${evidence.productId})`
              : `In-game slot badge (${w.unlockLabel})`}
          </small>
        </div>
      </div>

      <div className="detail-columns">
        <section className="info-card">
          <h2>Unlock & Item Quick Facts</h2>
          <dl className="facts">
            <div>
              <dt>Item Name</dt>
              <dd>{w.name}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{w.category}</dd>
            </div>
            <div>
              <dt>How to Unlock</dt>
              <dd>
                {isArsenal ? (
                  <>
                    <Link href="/passes/#pass-2058843165">
                      Arsenal Pass (249 R$)
                    </Link>{" "}
                    or{" "}
                    <Link href="/passes/#pass-2062243631">
                      Everything (499 R$)
                    </Link>
                  </>
                ) : w.unlockType === "kills" ? (
                  <>
                    <strong>{w.killsRequired} Kills</strong> on Weapons Panel (
                    <code>B</code>)
                    {w.skipRobux === "earn-only"
                      ? " · Earn-only (no single Robux skip)"
                      : typeof w.skipRobux === "number"
                        ? ` · or ${w.skipRobux} R$ single skip`
                        : " · or Robux skip"}
                  </>
                ) : w.unlockType === "reward" ? (
                  <>
                    <strong>{w.unlockLabel}</strong> via Rewards Menu (
                    <Link href="/codes/#free-rewards">Press H →</Link>)
                  </>
                ) : (
                  <strong>Available immediately at 0 Kills</strong>
                )}
              </dd>
            </div>
            {evidence && (
              <div>
                <dt>Roblox Product ID</dt>
                <dd>
                  <code>{evidence.productId}</code> (
                  <a href={equipmentSnapshot}>JSON snapshot</a>)
                </dd>
              </div>
            )}
            <div>
              <dt>Source Reference</dt>
              <dd>
                <a
                  href={weaponSource(w.slug)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {evidence
                    ? "Roblox Developer Products API ↗"
                    : isArsenal
                      ? "Official Arsenal Pass ↗"
                      : "Official Roblox Game Page ↗"}
                </a>
              </dd>
            </div>
            <div>
              <dt>Verified</dt>
              <dd>{weaponChecked()}</dd>
            </div>
          </dl>
        </section>

        <section className="info-card">
          <h2>Practical Usage & Tips</h2>
          <ul className="clean-list">
            {tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>

          {relatedBadges.length > 0 ? (
            <div className="related-callout">
              <strong>Badge Unlock Synergy:</strong>
              {relatedBadges.map((b) => (
                <p key={b.id}>
                  <strong>{b.name}:</strong> {b.task} — {b.tip}{" "}
                  <Link href="/badges/">Open Badge Checklist →</Link>
                </p>
              ))}
            </div>
          ) : w.unlockType === "kills" ? (
            <div className="related-callout">
              <strong>Ladder Progression:</strong>
              <p>
                {prevLadder ? (
                  <>
                    Unlocks after{" "}
                    <Link href={`/weapons/${prevLadder.slug}/`}>
                      {prevLadder.name} ({prevLadder.killsRequired} kills)
                    </Link>
                    .{" "}
                  </>
                ) : (
                  "First milestone on the kill progression ladder. "
                )}
                {nextLadder ? (
                  <>
                    Next up:{" "}
                    <Link href={`/weapons/${nextLadder.slug}/`}>
                      {nextLadder.name} ({nextLadder.killsRequired} kills)
                    </Link>
                    .
                  </>
                ) : (
                  "This is the highest item (650 kills) on the free kill ladder!"
                )}
              </p>
            </div>
          ) : isArsenal ? (
            <div className="related-callout">
              <strong>Pass Bundle Note:</strong>
              <p>
                {w.name} cannot be unlocked through standard kill grinding.
                Compare{" "}
                <Link href="/passes/">Arsenal (249 R$) vs. Everything (499 R$)</Link>{" "}
                before purchasing.
              </p>
            </div>
          ) : null}
        </section>
      </div>

      {peers.length > 0 && (
        <section className="page-section">
          <div className="section-heading">
            <div>
              <h2>More {w.category} Items</h2>
              <p className="section-sub">
                Compare {w.name} with other {w.category.toLowerCase()} options
                in Bloody Ragdoll Physics.
              </p>
            </div>
            <Link href="/weapons/" className="text-link">
              All 32 weapons & tools <ArrowRight size={16} />
            </Link>
          </div>

          <div className="peer-grid">
            {peers.map((p) => (
              <Link
                href={`/weapons/${p.slug}/`}
                key={p.slug}
                className="hub-card"
              >
                <div className="hub-card-top">
                  <h3>{p.name}</h3>
                  <ArrowRight size={16} aria-hidden="true" />
                </div>
                <p>{weaponSummary(p.slug)}</p>
                <span className="hub-meta">
                  {p.category} · {p.unlockLabel}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
