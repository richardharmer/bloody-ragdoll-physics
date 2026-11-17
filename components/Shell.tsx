import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { official } from "@/lib/data";

export function Header() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="header">
        <Link href="/" className="brand">
          <img src="/icon.svg" width="36" height="36" alt="" />
          <span>
            Bloody Ragdoll Physics
            <span className="brand-sub">Unofficial Wiki & Guide</span>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/weapons/">Weapons</Link>
          <Link href="/badges/">Badges</Link>
          <Link href="/passes/">Passes</Link>
          <Link href="/syringes/">Syringes</Link>
          <Link href="/guides/">Guides</Link>
          <Link href="/codes/">Codes</Link>
        </nav>
        <a href={official} className="play" target="_blank" rel="noreferrer">
          Play on Roblox <ArrowUpRight size={15} />
        </a>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-about">
          <strong>Bloody Ragdoll Physics Wiki & Guide</strong>
          <p>
            Independent, source-checked player reference for Roblox’s Bloody
            Ragdoll Physics. Not affiliated with Roblox Corporation or creator{" "}
            <span>blablablablabla123123</span>. Official store icons are
            credited on item entries; unknown numeric stats are never guessed.
          </p>
          <small>Last verified against official Roblox records · Nov 2026</small>
        </div>
        <div className="footer-col">
          <strong>Database</strong>
          <Link href="/weapons/">Weapons &amp; Tools (33)</Link>
          <Link href="/weapons/#kill-calculator">Kill Unlock Calculator</Link>
          <Link href="/badges/">All 13 Badges</Link>
          <Link href="/passes/">Game Passes & Calculator</Link>
          <Link href="/syringes/">Syringes & Pink Syringe</Link>
        </div>
        <div className="footer-col">
          <strong>Controls, Rewards & Policy</strong>
          <Link href="/guides/">PC Controls & NPC Wars</Link>
          <Link href="/guides/mobile/">Mobile Touch HUD</Link>
          <Link href="/sandbox/">World Events & Sandbox</Link>
          <Link href="/codes/">Codes & 7-Day Streak</Link>
          <Link href="/sources/">Sources & Verification</Link>
          <Link href="/sources/#privacy">Privacy Notice</Link>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({
  tag,
  title,
  parentHref = "/",
  parentLabel = "Home",
  children,
}: {
  tag?: string;
  title: string;
  parentHref?: string;
  parentLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="page-intro">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        {parentHref !== "/" && (
          <>
            <span aria-hidden="true">/</span>
            <Link href={parentHref}>{parentLabel}</Link>
          </>
        )}
        <span aria-hidden="true">/</span>
        <span className="crumb-current">{tag || title}</span>
      </nav>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}
