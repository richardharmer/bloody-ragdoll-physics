import Link from "next/link";
import { PageIntro } from "@/components/Shell";
import Armory from "@/components/Armory";
import { KillCalculator } from "@/components/KillCalculator";
import { GuideLinks } from "@/components/GuideLinks";
import { weapons } from "@/lib/data";
import {
  buildMetadata,
  JsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  SITE_URL,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bloody Ragdoll Physics Weapons & Kill Unlocks (All 33 Items)",
  description:
    "Complete Bloody Ragdoll Physics weapons & tools list (all 33 items): interactive 0–650 kill unlock calculator, Robux skip prices, 7-day streak weapons, and Arsenal exclusives.",
  path: "/weapons/",
});

const weaponFaqs = [
  {
    question:
      "Why does the game say 23 weapons while this database lists 33 items?",
    answer:
      "The game description highlights 23 combat weapons, while your full in-game equipment spans starter hotbar gear & traps (Grab, Fists, Pistol, Bow, Landmine, Spike Trap, Rope, Slingshot, Thruster), login-streak melee rewards (Bat, Chainsaw, Sledgehammer), 15 kill-ladder unlocks (60 to 650 kills), and 6 Arsenal Pass exclusives—33 usable items in total.",
  },
  {
    question: "What is the full kill unlock order and Robux skip cost?",
    answer:
      "0 Kills: Grab, Fists, Pistol, Bow, Landmine, Spike Trap, Rope, Slingshot, Thruster. 60: Balloon (earn-only, no skip). 100: SMG (19 R$ skip). 130: Nail Gun (19 R$ skip). 160: Shotgun (29 R$ skip). 180: Fireworks (29 R$ skip). 200: Katana (39 R$ skip) & Throwing Knives. 250: Axe & Grenade. 300: Freeze (29 R$ skip). 350: Harpoon (29 R$ skip). 400: Rifle (29 R$ skip). 500: Sticky Bomb. 600: Sniper (39 R$ skip). 650: Power Thruster (39 R$ skip).",
  },
  {
    question: "How do you unlock Chainsaw, Sledgehammer, and Bat?",
    answer:
      "Open the Rewards menu (press H on PC): Bat unlocks for free as a join/favorite bonus, Chainsaw unlocks on Day 2 of the login streak, and Sledgehammer unlocks on Day 7.",
  },
  {
    question: "Can Gravity Gun, Black Hole, or Lightning Staff be unlocked by kills?",
    answer:
      "No. Flamethrower, Minigun, Rocket Launcher, Gravity Gun, Lightning Staff, and Black Hole are the six heavy exclusives bundled in the Arsenal Game Pass (249 Robux) or Everything Pass (499 Robux).",
  },
];

export default function Page() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "All 33 Bloody Ragdoll Physics Weapons & Tools",
    numberOfItems: weapons.length,
    itemListElement: weapons.map((w, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${w.name} (${w.unlockLabel})`,
      url: `${SITE_URL}/weapons/${w.slug}/`,
    })),
  };

  return (
    <div className="page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Weapons & Tools", path: "/weapons/" },
        ])}
      />
      <JsonLd data={itemListSchema} />
      <JsonLd data={faqJsonLd(weaponFaqs)} />

      <PageIntro
        tag="Weapons & Tools (32)"
        title="Bloody Ragdoll Physics Weapons & Kill Unlock List"
      >
        Every weapon, physics attachment, starter item, and{" "}
        <Link href="/codes/#free-rewards">daily streak reward</Link> in{" "}
        <strong>Bloody Ragdoll Physics</strong>—complete with our interactive{" "}
        <strong>0 → 650 kill calculator</strong>,{" "}
        <Link href="/passes/">Arsenal Pass</Link> tags, and{" "}
        <Link href="/badges/">badge unlock</Link> pairings.
      </PageIntro>

      <div className="summary-strip" aria-label="Arsenal breakdown">
        <div>
          <strong>33</strong>
          <span>Total Weapons, Tools & Traps</span>
        </div>
        <div>
          <strong>12</strong>
          <span>0-Kill Starter & Free Streak</span>
        </div>
        <div>
          <strong>15</strong>
          <span>Kill-Ladder Unlocks (60–650)</span>
        </div>
        <div>
          <strong>6</strong>
          <span>Arsenal Pass Exclusives</span>
        </div>
      </div>

      <section id="kill-calculator" className="calc-section">
        <KillCalculator />
      </section>

      <Armory />

      <section className="page-section">
        <h2>Weapons & Kill Ladder FAQ</h2>
        <div className="faq-list">
          {weaponFaqs.map((f) => (
            <details key={f.question} className="faq-item">
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <GuideLinks exclude="/weapons/" />
    </div>
  );
}
