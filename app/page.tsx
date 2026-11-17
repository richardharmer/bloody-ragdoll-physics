import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { EquipmentArt } from "@/components/EquipmentArt";
import { HomeSearch } from "@/components/HomeSearch";
import {
  official,
  weapons,
  weaponSummary,
  mapFeatures,
  freeRewardUnlocks,
} from "@/lib/data";
import { badges } from "@/lib/research";
import { buildMetadata, JsonLd, faqJsonLd, SITE_URL } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bloody Ragdoll Physics Wiki & Guide — Weapons, Unlocks, Badges",
  description:
    "Complete Bloody Ragdoll Physics wiki for Roblox: all 33 weapons, tools & traps, 0–650 kill unlock calculator, 13 PC hotkeys, 7-day streak rewards, badges, and passes.",
  path: "/",
});

const homeFaqs = [
  {
    question: "How many weapons and tools are in Bloody Ragdoll Physics?",
    answer:
      "The official Roblox page advertises 23 combat weapons, and when combined with starter gear, traps, and physics attachment tools, there are 33 usable items across 4 tiers: 9 starter/0-kill items, 3 free bonus/login-streak melee weapons (Bat, Chainsaw, Sledgehammer), 15 kill-ladder unlocks (60 to 650 kills), and 6 Arsenal Game Pass exclusives.",
  },
  {
    question: "How does the weapon kill progression ladder work?",
    answer:
      "Press B on PC to open the Weapons panel and check your current kills. Milestones start at 60 kills (Balloon), 100 kills (SMG), 130 kills (Nail Gun), 160 kills (Shotgun), 200 kills (Katana & Throwing Knives), 250 kills (Axe & Grenade), 300 kills (Freeze), up to 650 kills (Power Thruster).",
  },
  {
    question: "Are there working Bloody Ragdoll Physics promo codes?",
    answer:
      "No—the game does not use text promo codes. Instead, press H to open the Rewards menu where you can claim a free Bat (join & favorite bonus), Day 2 Chainsaw, Day 7 Sledgehammer, and daily playtime gifts.",
  },
  {
    question: "Which weapons require the Arsenal Game Pass?",
    answer:
      "Six heavy items—Flamethrower, Minigun, Rocket Launcher, Gravity Gun, Lightning Staff, and Black Hole—are exclusive to the Arsenal Game Pass (249 Robux) or Everything Bundle (499 Robux) rather than standard kill grinding.",
  },
  {
    question: "Does the Sandbox Game Pass work in multiplayer servers?",
    answer:
      "No. According to the official Roblox store description, Sandbox (99 Robux) works in singleplayer mode only.",
  },
  {
    question: "What does the Pink Syringe do in Bloody Ragdoll Physics?",
    answer:
      "Out of 14 advertised syringes, the official description names zombie biting, exploding ragdolls, and balloon-like inflation, while leaving the Pink Syringe’s effect unexplained as an in-game mystery.",
  },
];

const featuredSlugs = [
  "balloon",
  "smg",
  "nail-gun",
  "freeze",
  "power-thruster",
  "gravity-gun",
];

const badgeByTool = new Map(
  badges
    .filter((b): b is typeof b & { toolSlug: string } => Boolean(b.toolSlug))
    .map((b) => [b.toolSlug, b.name]),
);

export default function Home() {
  const featuredWeapons = featuredSlugs
    .map((s) => weapons.find((w) => w.slug === s))
    .filter((w): w is (typeof weapons)[number] => Boolean(w));

  const siteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bloody Ragdoll Physics Wiki & Guide",
    url: `${SITE_URL}/`,
    about: {
      "@type": "VideoGame",
      name: "Bloody Ragdoll Physics",
      gamePlatform: ["PC", "Mobile", "Console"],
      applicationCategory: "Game",
      url: official,
    },
  };

  return (
    <>
      <JsonLd data={siteSchema} />
      <JsonLd data={faqJsonLd(homeFaqs)} />

      <section className="wiki-hero">
        <div className="wiki-hero-inner">
          <div className="wiki-hero-main">
            <p className="kicker">Roblox Physics Sandbox Reference</p>
            <h1>Bloody Ragdoll Physics Wiki & Player Guide</h1>
            <p className="hero-lead">
              Practical, no-filler database for{" "}
              <strong>Bloody Ragdoll Physics</strong> on Roblox: all{" "}
              <strong>33 weapons, tools &amp; traps</strong>, exact{" "}
              <strong>0 → 650 kill unlock milestones</strong>, all 13 PC
              hotkeys, free 7-day streak weapons, 13 badge walkthroughs, and
              pass value calculator.
            </p>

            <HomeSearch />

            <div className="hero-actions">
              <Link href="/weapons/" className="button primary">
                All 33 Weapons &amp; Kill Calculator <ArrowRight size={17} />
              </Link>
              <Link href="/badges/" className="button outline">
                All 13 Badges Guide
              </Link>
              <Link href="/passes/" className="button outline">
                Pass Value Calculator
              </Link>
            </div>
          </div>

          <aside className="infobox" aria-label="Game quick facts">
            <div className="infobox-head">
              <strong>Game Overview</strong>
              <span>Updated Nov 2026</span>
            </div>
            <dl className="infobox-list">
              <div>
                <dt>Creator</dt>
                <dd>blablablablabla123123</dd>
              </div>
              <div>
                <dt>Platforms</dt>
                <dd>PC, Mobile, Console</dd>
              </div>
              <div>
                <dt>Complete Arsenal</dt>
                <dd>
                  <Link href="/weapons/">33 Weapons &amp; Tools</Link>
                </dd>
              </div>
              <div>
                <dt>Kill Ladder</dt>
                <dd>
                  <Link href="/weapons/#kill-calculator">0 → 650 Kills</Link>
                </dd>
              </div>
              <div>
                <dt>Free Rewards</dt>
                <dd>
                  <Link href="/codes/#free-rewards">7-Day Streak (Press H)</Link>
                </dd>
              </div>
              <div>
                <dt>Syringes</dt>
                <dd>
                  <Link href="/syringes/">14 Advertised</Link>
                </dd>
              </div>
              <div>
                <dt>Badges</dt>
                <dd>
                  <Link href="/badges/">13 Challenges</Link>
                </dd>
              </div>
              <div>
                <dt>World Events</dt>
                <dd>
                  <Link href="/sandbox/">5 Arena Events</Link>
                </dd>
              </div>
            </dl>
            <a
              href={official}
              target="_blank"
              rel="noreferrer"
              className="button outline full-btn"
            >
              Play on Roblox <ArrowUpRight size={16} />
            </a>
          </aside>
        </div>
      </section>

      <div className="page home-body">
        <section className="home-section">
          <div className="section-heading">
            <div>
              <h2>Core Wiki & Interactive Calculators</h2>
              <p className="section-sub">
                Direct tools and tables built around what players actually look
                up mid-session.
              </p>
            </div>
          </div>

          <div className="hub-grid">
            {[
              {
                title: "33 Weapons & Kill Calculator",
                desc: "Enter your kill count (press B) to check unlocked gear from Balloon (60) to Power Thruster (650).",
                meta: "9 starter · 3 streak · 15 kill ladder · 6 pass",
                href: "/weapons/",
              },
              {
                title: "All 13 Badges Checklist",
                desc: "Exact map traps and tools for Smoothie, Pinned, Hold Still, Blast Off, and Run It Back.",
                meta: "Interactive browser-saved tracker",
                href: "/badges/",
              },
              {
                title: "Game Pass Value Calculator",
                desc: "Tick the perks you want to compare individual Robux totals against the 499 R$ Everything bundle.",
                meta: "Save up to 247 R$ · Sandbox solo note",
                href: "/passes/",
              },
              {
                title: "PC Keybinds, NPC Wars & Time",
                desc: "Full keyboard shortcut table (B, H, F, Alt), Slow Motion & Rewind tips, and NPC Wars setup.",
                meta: "PC + Mobile HUD reference",
                href: "/guides/",
              },
              {
                title: "Codes Status & 7-Day Streak",
                desc: "Why promo codes don’t exist—and how to claim free Bat, Day 2 Chainsaw, and Day 7 Sledgehammer.",
                meta: "Rewards menu (H) breakdown",
                href: "/codes/",
              },
              {
                title: "Syringes & 5 World Events",
                desc: "Zombie, explosive, balloon, and Pink Syringe details—plus Nuke, Black Hole, Fire Storm, Zero-G, Flash Freeze.",
                meta: "14 syringes · 5 arena events",
                href: "/syringes/",
              },
            ].map((card) => (
              <Link href={card.href} key={card.href} className="hub-card">
                <div className="hub-card-top">
                  <h3>{card.title}</h3>
                  <ArrowRight size={17} aria-hidden="true" />
                </div>
                <p>{card.desc}</p>
                <span className="hub-meta">{card.meta}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="home-section">
          <div className="section-heading">
            <div>
              <h2>Key Progression & Badge Weapons</h2>
              <p className="section-sub">
                From your first 60-kill Balloon unlock up to the 650-kill
                car-lifting Power Thruster and Arsenal exclusives.
              </p>
            </div>
            <Link href="/weapons/" className="text-link">
              View all 32 items <ArrowRight size={16} />
            </Link>
          </div>

          <div className="weapon-grid">
            {featuredWeapons.map((w) => {
              const badgeName = badgeByTool.get(w.slug);
              return (
                <Link
                  href={`/weapons/${w.slug}/`}
                  className="weapon-card"
                  key={w.slug}
                >
                  <div className="card-label">
                    <span className="cat-pill">{w.category}</span>
                    <div className="tag-row">
                      <span
                        className={`pill ${
                          w.unlockType === "pass" ? "pass" : "kills"
                        }`}
                      >
                        {w.unlockLabel}
                      </span>
                      {badgeName && (
                        <span className="pill badge">{badgeName}</span>
                      )}
                    </div>
                  </div>
                  <EquipmentArt {...w} />
                  <div className="weapon-bottom">
                    <h3>{w.name}</h3>
                    <p className="card-effect">{weaponSummary(w.slug)}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="home-section">
          <div className="section-heading">
            <div>
              <h2>Free Bonus Weapons & Arena Hazards</h2>
              <p className="section-sub">
                Claim free melee weapons in the Rewards tab (<kbd>H</kbd>) and
                use map traps to farm kills fast.
              </p>
            </div>
            <Link href="/codes/#free-rewards" className="text-link">
              Free unlock guide <ArrowRight size={16} />
            </Link>
          </div>

          <div className="comparison-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col">Free Reward</th>
                  <th scope="col">Requirement</th>
                  <th scope="col">How to Claim in Game</th>
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
                    <td>{r.requirement}</td>
                    <td>{r.howToClaim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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

        <section className="home-section" id="faq">
          <div className="section-heading">
            <div>
              <h2>Frequently Asked Questions</h2>
              <p className="section-sub">
                Quick answers on weapon counts, kill milestones, streaks, and
                passes.
              </p>
            </div>
            <Link href="/sources/" className="text-link">
              Sources & verification <ArrowRight size={16} />
            </Link>
          </div>

          <div className="faq-list">
            {homeFaqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
