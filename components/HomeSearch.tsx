"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { weapons, weaponSummary, events, pcControls } from "@/lib/data";
import { badges, passes } from "@/lib/research";

type SearchEntry = {
  title: string;
  type: string;
  detail: string;
  href: string;
  keywords: string;
};

const index: SearchEntry[] = [
  ...weapons.map((w) => ({
    title: `${w.name} (${w.unlockLabel})`,
    type: w.category,
    detail: weaponSummary(w.slug),
    href: `/weapons/${w.slug}/`,
    keywords: `${w.name} ${w.category} ${w.unlockLabel} weapon tool ${weaponSummary(w.slug)}`,
  })),
  ...badges.map((b) => ({
    title: `${b.name} (Badge)`,
    type: "Badge",
    detail: `${b.task} — ${b.tip}`,
    href: "/badges/",
    keywords: `${b.name} ${b.task} ${b.tip} badge achievement`,
  })),
  ...passes.map((p) => ({
    title: `${p.name} Pass (${p.price} Robux)`,
    type: "Game Pass",
    detail: p.summary,
    href: `/passes/#pass-${p.id}`,
    keywords: `${p.name} gamepass pass robux ${p.summary}`,
  })),
  ...events.map((e) => ({
    title: `${e.name} (World Event)`,
    type: "World Event",
    detail: e.summary,
    href: "/sandbox/#world-events",
    keywords: `${e.name} world event ${e.summary}`,
  })),
  {
    title: "Kill-Gate Unlock Calculator (0 → 650 Kills)",
    type: "Calculator",
    detail: "Enter your current kills (press B in-game) to see unlocked gear and exact kills left.",
    href: "/weapons/#kill-calculator",
    keywords: "calculator kills unlock progress ladder 60 100 650 press b",
  },
  {
    title: "PC Keyboard Controls & Shortcuts (B, H, F, Alt)",
    type: "Controls",
    detail: `Keybinds: ${pcControls.map((c) => `${c.keys} (${c.action})`).join(", ")}`,
    href: "/guides/#pc-controls",
    keywords: "pc keyboard controls keybinds hotkeys b h f alt wasd slow motion rewind",
  },
  {
    title: "7-Day Login Streak & Free Weapons (Bat, Chainsaw, Sledgehammer)",
    type: "Free Rewards",
    detail: "How to claim free Bat, Day 2 Chainsaw, and Day 7 Sledgehammer in the Rewards menu (H).",
    href: "/codes/#free-rewards",
    keywords: "codes streak daily rewards gift free bat chainsaw sledgehammer press h",
  },
  {
    title: "Pink Syringe & All 14 Syringes",
    type: "Syringes",
    detail: "Zombie biting, exploding dummies, balloon inflation, and the pink syringe mystery.",
    href: "/syringes/",
    keywords: "syringe syringes pink zombie balloon explode injections",
  },
  {
    title: "Mobile Controls & Touch HUD",
    type: "Mobile",
    detail: "Phone and tablet button positions: Grab, Place, Take Back, Fire, Reload, Ragdoll.",
    href: "/guides/mobile/",
    keywords: "mobile phone tablet controls touch grab place fire reload",
  },
];

export function HomeSearch() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const matches = q
    ? index
        .filter((item) => item.keywords.toLowerCase().includes(q))
        .slice(0, 7)
    : [];

  return (
    <div className="home-search">
      <label className="home-search-box">
        <Search size={18} aria-hidden="true" />
        <span className="sr-only">
          Search 32 weapons, kill milestones, badges, passes, controls, or rewards
        </span>
        <input
          type="text"
          inputMode="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search 32 weapons, kill unlocks (e.g. 60, 650), badges, keybinds, or passes…"
        />
        {query && (
          <button
            type="button"
            className="clear-btn"
            onClick={() => setQuery("")}
          >
            Clear
          </button>
        )}
      </label>

      {q ? (
        <div className="search-results" role="region" aria-label="Search matches">
          {matches.length > 0 ? (
            matches.map((m) => (
              <Link
                href={m.href}
                key={`${m.href}-${m.title}`}
                className="search-hit"
              >
                <div>
                  <span className="hit-badge">{m.type}</span>
                  <strong>{m.title}</strong>
                  <p>{m.detail}</p>
                </div>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            ))
          ) : (
            <p className="search-empty">
              No exact match for “{query}”. Browse{" "}
              <Link href="/weapons/">all 32 weapons & tools</Link> or{" "}
              <Link href="/badges/">all 13 badges</Link>.
            </p>
          )}
        </div>
      ) : (
        <div className="quick-pills" aria-label="Popular lookups">
          <span>Popular:</span>
          <Link href="/weapons/#kill-calculator">Kill Calculator</Link>
          <Link href="/weapons/gravity-gun/">Gravity Gun</Link>
          <Link href="/weapons/power-thruster/">Power Thruster (650)</Link>
          <Link href="/guides/#pc-controls">PC Keybinds</Link>
          <Link href="/codes/#free-rewards">7-Day Streak</Link>
          <Link href="/syringes/#pink-syringe">Pink Syringe</Link>
        </div>
      )}
    </div>
  );
}
