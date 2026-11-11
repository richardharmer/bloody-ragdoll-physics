import Link from "next/link";
import { ArrowUpRight, Crosshair } from "lucide-react";
import { official } from "@/lib/data";
export function Header() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="header">
        <Link href="/" className="brand">
          <img src="/icon.svg" width="40" height="40" alt="" />
          <span>
            BLOODY RAGDOLL
            <span className="brand-sub">PHYSICS / FIELD GUIDE</span>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/weapons/">Armory</Link>
          <Link href="/syringes/">Syringes</Link>
          <Link href="/guides/">Field guides</Link>
          <Link href="/sandbox/">Interactive lab</Link>
        </nav>
        <a href={official} className="play" target="_blank" rel="noreferrer">
          Play on Roblox <ArrowUpRight size={16} />
        </a>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <span className="eyebrow">
          <Crosshair size={16} /> INDEPENDENT FIELD GUIDE
        </span>
        <Link href="/passes/">Passes</Link>
        <Link href="/badges/">Badges</Link>
        <Link href="/guides/mobile/">Mobile</Link>
        <Link href="/sources/">Sources & verification ↗</Link>
      </div>
      <p>
        Unofficial fan-made guide. Not affiliated with Roblox or the game’s
        creator. Official product icons are credited on equipment entries. Other
        illustrations and simulations are original explanations, not measured
        game behavior.
      </p>
      <small>Official game, pass and badge records · Updated 12 NOV 2026</small>
    </footer>
  );
}
export function PageIntro({
  tag,
  title,
  children,
}: {
  tag: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="page-intro">
      <Link href="/" className="back">
        ← Back to the lab
      </Link>
      <p className="eyebrow">{tag}</p>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}
