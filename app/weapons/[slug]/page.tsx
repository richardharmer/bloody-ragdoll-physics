import { notFound } from "next/navigation";
import Link from "next/link";
import { weapons, official, weaponSource, weaponChecked } from "@/lib/data";
import { EquipmentArt } from "@/components/EquipmentArt";
import { equipmentEvidence, equipmentSnapshot } from "@/lib/equipment";
import { EffectDiagram } from "@/components/EffectDiagram";
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
  const w = weapons.find((w) => w.slug === slug);
  return {
    alternates: { canonical: `/weapons/${slug}/` },
    description: `Confirmed facts about ${w?.name ?? "this weapon"} in Bloody Ragdoll Physics, with unknown stats clearly marked and an observation checklist.`,
    title: `${w?.name ?? "Weapon"} — verified facts & test checklist`,
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = weapons.find((w) => w.slug === slug);
  if (!w) notFound();
  const evidence = equipmentEvidence[w.slug];
  return (
    <div className="page">
      <Link href="/weapons/" className="back">
        ← All weapons
      </Link>
      <div className="detail-hero">
        <div>
          <p className="eyebrow">ARMORY / {w.category.toUpperCase()}</p>
          <h1>{w.name}</h1>
          <p className="confirmed">
            ✓ Name confirmed in{" "}
            {evidence
              ? "the official Roblox product catalog"
              : "the official game description"}
          </p>
          <p>
            {evidence
              ? evidence.effect
              : "The name is confirmed; a specific effect has not been verified."}
          </p>
          <a
            className="button primary"
            href={official}
            target="_blank"
            rel="noreferrer"
          >
            Open the game ↗
          </a>
        </div>
        <div className="detail-art">
          <EquipmentArt {...w} />
          <small>
            {evidence
              ? "OFFICIAL ROBLOX PRODUCT ICON / NOT A GAMEPLAY CAPTURE"
              : "ORIGINAL CONCEPT / NOT THE IN-GAME MODEL"}
          </small>
        </div>
      </div>
      {evidence && (
        <div className="notice">
          Effect summarized from the developer’s product description, not
          independently measured. Product ID {evidence.productId}.{" "}
          <a href={equipmentSnapshot}>Read the dated source snapshot ↗</a>
        </div>
      )}
      {evidence?.diagram && <EffectDiagram kind={evidence.diagram} />}
      <div className="detail-columns">
        <section>
          <h2>What we know</h2>
          <dl className="facts">
            <div>
              <dt>Name</dt>
              <dd>{w.name}</dd>
            </div>
            <div>
              <dt>Source</dt>
              <dd>
                <a href={weaponSource(w.slug)}>
                  {evidence
                    ? "Official Roblox product catalog"
                    : "Official game description"}{" "}
                  ↗
                </a>
              </dd>
            </div>
            <div>
              <dt>Damage / cooldown</dt>
              <dd>Not verified</dd>
            </div>
            <div>
              <dt>Access / menu location</dt>
              <dd>
                {w.slug === "lightning-staff" ? (
                  <>
                    Listed in Arsenal; Everything includes Arsenal. Menu
                    location not verified.{" "}
                    <Link href="/passes/">Compare passes →</Link>
                  </>
                ) : evidence ? (
                  "Official product record exists. Current in-game purchase route, entitlement duration and menu location are not verified."
                ) : (
                  "Not verified in this entry"
                )}
              </dd>
            </div>
            <div>
              <dt>Last checked</dt>
              <dd>{weaponChecked(w.slug)}</dd>
            </div>
          </dl>
        </section>
        <section>
          <p className="eyebrow">
            EDITORIAL EXPERIMENT / NOT A VERIFIED WALKTHROUGH
          </p>
          <h2>Test one thing at a time.</h2>
          <ol className="steps">
            <li>
              <b>Find the matching item</b>
              <p>
                Read the actual in-game inventory label. An icon or concept
                drawing alone does not establish the current model or menu
                position.
              </p>
            </li>
            <li>
              <b>Keep a baseline scene</b>
              <p>
                Use the same target and position. Note the scene before using
                the item.
              </p>
            </li>
            <li>
              <b>Observe and repeat</b>
              <p>
                Record motion, visible changes and elapsed time. Repeat before
                treating a result as consistent.
              </p>
            </li>
          </ol>
          <Link href="/guides/" className="text-link">
            Build an experiment checklist →
          </Link>
        </section>
      </div>
    </div>
  );
}
