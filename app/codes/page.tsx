import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/Shell";
import { GuideLinks } from "@/components/GuideLinks";
import { official, freeRewardUnlocks } from "@/lib/data";
import {
  buildMetadata,
  JsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bloody Ragdoll Physics Codes & 7-Day Streak Free Weapons",
  description:
    "Looking for Bloody Ragdoll Physics codes on Roblox? Check the verified Nov 2026 code status plus how to claim free Bat, Day 2 Chainsaw, and Day 7 Sledgehammer.",
  path: "/codes/",
});

const codeFaqs = [
  {
    question: "Are there any working Bloody Ragdoll Physics codes right now?",
    answer:
      "No. As of November 2026, Bloody Ragdoll Physics does not have a text promo code redemption box. Instead, free weapons and bonuses are claimed directly inside the in-game Rewards menu (press H on PC).",
  },
  {
    question: "How do you get the free Bat, Chainsaw, and Sledgehammer?",
    answer:
      "Press H to open the Rewards menu: Bat is awarded for joining/favoriting the game, Chainsaw unlocks on Day 2 of the daily login streak, and Sledgehammer unlocks on Day 7.",
  },
  {
    question: "What is the fastest way to farm 650 kills for free?",
    answer:
      "Start with Pistol, Slingshot, and arena hazards (explosive barrels, blender, spike wall, cars) to hit 100 kills for SMG and 160 kills for Shotgun, then chain multi-kills to reach Sniper (600) and Power Thruster (650).",
  },
];

export default function Page() {
  return (
    <div className="page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Codes & Free Rewards", path: "/codes/" },
        ])}
      />
      <JsonLd data={faqJsonLd(codeFaqs)} />

      <PageIntro
        tag="Codes & Free Rewards"
        title="Bloody Ragdoll Physics Codes & Free Weapon Rewards"
      >
        Searching for working <strong>Bloody Ragdoll Physics codes</strong>?
        While the game doesn’t use text promo codes, it has a built-in{" "}
        <strong>Rewards & 7-Day Streak menu</strong> (<kbd>H</kbd> on PC) that
        hands out free weapons—plus a full 0 → 650 kill progression ladder.
      </PageIntro>

      <div className="status-callout">
        <div className="status-badge">Verified Status · November 2026</div>
        <h2>0 Promo Codes — Use the In-Game Rewards Menu (Press H) Instead</h2>
        <p>
          <strong>Bloody Ragdoll Physics</strong> by{" "}
          <code>blablablablabla123123</code> has{" "}
          <strong>no redeemable text-code box</strong>. Any site listing promo
          codes is copying from other Roblox games like{" "}
          <em>Ragdoll Playground</em>. To claim genuine free items, open the{" "}
          <strong>Rewards tab</strong> in-game (<kbd>H</kbd>).
        </p>
        <div className="hero-actions">
          <a
            href={official}
            target="_blank"
            rel="noreferrer"
            className="button primary"
          >
            Play on Roblox <ArrowUpRight size={15} />
          </a>
          <Link href="/weapons/#kill-calculator" className="button outline">
            Open Kill Unlock Calculator
          </Link>
        </div>
      </div>

      <section className="page-section" id="free-rewards">
        <h2>All Free Bonus & 7-Day Streak Weapons (Press H)</h2>
        <p className="section-sub">
          You can claim three permanent melee weapons plus rotating session
          gifts without spending a single Robux:
        </p>

        <div className="comparison-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">Free Reward</th>
                <th scope="col">Unlock Requirement</th>
                <th scope="col">How to Claim</th>
              </tr>
            </thead>
            <tbody>
              {freeRewardUnlocks.map((r) => (
                <tr key={r.item}>
                  <th scope="row">
                    {r.slug ? (
                      <Link
                        href={`/weapons/${r.slug}/`}
                        className="table-item-link"
                      >
                        {r.item}
                      </Link>
                    ) : (
                      r.item
                    )}
                  </th>
                  <td>
                    <span className="pill free">{r.requirement}</span>
                  </td>
                  <td>{r.howToClaim}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>Fastest Free Progression Route (0 → 650 Kills)</h2>
        <div className="feature-grid">
          <article className="info-card">
            <h3>1. 0 → 100 Kills (Unlock Balloon & SMG)</h3>
            <p>
              Claim your free <Link href="/weapons/bat/">Bat</Link> (<kbd>H</kbd>
              ), shoot explosive barrels with{" "}
              <Link href="/weapons/pistol/">Pistol</Link>, and ram dummies with
              cars. You’ll hit <Link href="/weapons/balloon/">Balloon</Link> at
              60 kills and <Link href="/weapons/smg/">SMG</Link> at 100 kills.
            </p>
          </article>

          <article className="info-card">
            <h3>2. 100 → 300 Kills (Badge Tools Unlocked)</h3>
            <p>
              Use SMG and <Link href="/weapons/shotgun/">Shotgun</Link> (160
              kills) to speed-farm kills. Along the way you unlock{" "}
              <Link href="/weapons/nail-gun/">Nail Gun</Link> (130) for{" "}
              <em>Pinned</em> and <Link href="/weapons/freeze/">Freeze</Link>{" "}
              (300) for <em>Hold Still</em>.
            </p>
          </article>

          <article className="info-card">
            <h3>3. 300 → 650 Kills (Sniper & Power Thruster)</h3>
            <p>
              Combine <Link href="/weapons/grenade/">Grenade</Link> (250) and{" "}
              <Link href="/weapons/sticky-bomb/">Sticky Bomb</Link> (500) with
              hazard traps to reach <Link href="/weapons/sniper/">Sniper</Link>{" "}
              (600) and car-lifting{" "}
              <Link href="/weapons/power-thruster/">Power Thruster</Link> (650).
            </p>
          </article>

          <article className="info-card">
            <h3>4. Check Progress Anytime (Press B)</h3>
            <p>
              Press <kbd>B</kbd> in-game to open the Weapons panel (
              <code>Current / Required</code> kills), or plug your kill count
              into our{" "}
              <Link href="/weapons/#kill-calculator">
                Kill-Gate Unlock Calculator
              </Link>
              .
            </p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <h2>Codes & Free Rewards FAQ</h2>
        <div className="faq-list">
          {codeFaqs.map((f) => (
            <details key={f.question} className="faq-item">
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <GuideLinks exclude="/codes/" />
    </div>
  );
}
