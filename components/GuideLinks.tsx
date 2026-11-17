import Link from "next/link";

const allLinks = [
  {
    href: "/weapons/",
    title: "All 33 Weapons & Kill Unlocks",
    desc: "Full 0–650 kill progression ladder, starter gear, streak weapons, and Arsenal exclusives.",
  },
  {
    href: "/badges/",
    title: "All 13 Badges Checklist",
    desc: "Step-by-step lab challenges, map hazards, and required tools—saved locally.",
  },
  {
    href: "/passes/",
    title: "Game Pass Value Calculator",
    desc: "Compare Sandbox, Arsenal, Injections, VIP, and the 499 R$ Everything bundle.",
  },
  {
    href: "/guides/",
    title: "PC Controls & NPC Wars",
    desc: "Keyboard shortcuts (B, H, F, Alt), Slow Motion, Rewind, cars, and team battles.",
  },
  {
    href: "/codes/",
    title: "Codes & 7-Day Streak Rewards",
    desc: "Promo code status plus how to claim free Bat, Chainsaw (Day 2), and Sledgehammer (Day 7).",
  },
];

export function GuideLinks({ exclude }: { exclude?: string }) {
  const items = allLinks.filter((x) => x.href !== exclude).slice(0, 3);
  return (
    <nav className="guide-links" aria-label="Related guides">
      {items.map((item) => (
        <Link href={item.href} key={item.href}>
          <h2>{item.title} →</h2>
          <p>{item.desc}</p>
        </Link>
      ))}
    </nav>
  );
}
