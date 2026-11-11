import { equipmentEvidence } from "@/lib/equipment";
import { GuideLinks } from "@/components/GuideLinks";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Crosshair,
  FlaskConical,
  Swords,
  Orbit,
  Zap,
} from "lucide-react";
import { LabArt } from "@/components/Art";
import { EquipmentArt } from "@/components/EquipmentArt";
import { weapons } from "@/lib/data";
export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-art">
          <LabArt />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="live-dot" /> UNOFFICIAL WIKI + INTERACTIVE GUIDE
          </p>
          <h1>
            BREAK THINGS.
            <br />
            UNDERSTAND
            <br />
            <em>EVERYTHING.</em>
          </h1>
          <p>
            Your field guide to Bloody Ragdoll Physics.
            <br />
            Explore the arsenal. Set up an experiment.
            <br />
            Find out what happens next.
          </p>
          <div className="hero-actions">
            <Link href="/guides/" className="button primary">
              Enter the field guide <ArrowRight size={18} />
            </Link>
            <Link href="/sandbox/" className="button outline">
              <FlaskConical size={18} /> Open the lab
            </Link>
          </div>
          <span className="hero-caption">
            ORIGINAL CONCEPT ART / NOT A GAMEPLAY CAPTURE
          </span>
        </div>
        <div className="hero-tag">
          <span className="live-dot" /> TEST CHAMBER 001{" "}
          <b>PHYSICS: UNPREDICTABLE</b>
        </div>
      </section>
      <div className="stats">
        <Link href="/weapons/">
          <b>23</b>
          <span>
            WEAPONS ADVERTISED
            <small>{weapons.length} weapon & tool records</small>
          </span>
          <ArrowUpRight />
        </Link>
        <Link href="/syringes/">
          <b>14</b>
          <span>
            SYRINGES<small>Effects under investigation</small>
          </span>
          <ArrowUpRight />
        </Link>
        <Link href="/sandbox/">
          <b>05</b>
          <span>
            WORLD EVENTS<small>Explore visual concepts</small>
          </span>
          <ArrowUpRight />
        </Link>
        <Link href="/guides/">
          <b>∞</b>
          <span>
            POSSIBILITIES<small>Build your own experiments</small>
          </span>
          <ArrowUpRight />
        </Link>
      </div>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / CHOOSE YOUR EXPERIMENT</p>
            <h2>Less reading. More discovering.</h2>
          </div>
          <span className="muted">Pick a system. See how it works.</span>
        </div>
        <div className="destinations">
          {[
            {
              icon: Crosshair,
              title: "The armory",
              text: "Browse confirmed weapons. Separate facts from unknowns.",
              href: "/weapons/",
              number: "01",
              color: "orange",
            },
            {
              icon: FlaskConical,
              title: "Syringe lab",
              text: "What’s confirmed, what’s mysterious, and what to test.",
              href: "/syringes/",
              number: "02",
              color: "green",
            },
            {
              icon: Swords,
              title: "NPC Wars",
              text: "Plan teams, choose equipment, and track the result.",
              href: "/guides/",
              number: "03",
              color: "blue",
            },
            {
              icon: Orbit,
              title: "World events",
              text: "Five events. Interactive visual concepts. Total curiosity.",
              href: "/sandbox/",
              number: "04",
              color: "purple",
            },
          ].map((x) => (
            <Link
              href={x.href}
              className={`destination ${x.color}`}
              key={x.title}
            >
              <div className="destination-top">
                <x.icon size={33} />
                <small>{x.number}</small>
              </div>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
              <span className="text-link">
                Explore system <ArrowUpRight size={17} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / KNOW YOUR TOOLS</p>
            <h2>Meet the heavy hitters.</h2>
          </div>
          <Link href="/weapons/" className="text-link">
            Browse the armory <ArrowRight size={18} />
          </Link>
        </div>
        <div className="weapon-grid featured">
          {[weapons[6], weapons[2], weapons[7]].map((w) => (
            <Link
              href={`/weapons/${w.slug}/`}
              className="weapon-card"
              key={w.slug}
            >
              <div className="card-label">
                <span>{w.category}</span>
                <ArrowUpRight size={18} />
              </div>
              <EquipmentArt {...w} />
              <div className="weapon-bottom">
                <h3>{w.name}</h3>
                <small>
                  {equipmentEvidence[w.slug]
                    ? "OFFICIAL PRODUCT ICON"
                    : "NAME CONFIRMED · CONCEPT ART"}
                </small>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="lab-banner">
        <div>
          <p className="eyebrow">
            <Zap size={16} /> INTERACTIVE / NO ROBLOX LOGIN NEEDED
          </p>
          <h2>
            A little chaos.
            <br />A better understanding.
          </h2>
          <p>
            Change the impulse. Slow down time. Watch a simplified physics model
            react.
          </p>
          <Link href="/sandbox/" className="button primary">
            Run an experiment <ArrowRight size={18} />
          </Link>
        </div>
        <div className="orbit-diagram" aria-hidden="true">
          <span />
          <span />
          <span />
          <b>F = ma</b>
          <i>ILLUSTRATIVE MODEL</i>
        </div>
      </section>
      <div className="source-strip">
        <span className="live-dot" />
        <p>
          <b>Facts first. Always.</b> Official counts and names are sourced.
          Unknown stats stay unknown.
        </p>
        <Link href="/sources/">
          Read our source notes <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="page">
        <GuideLinks />
      </div>
    </>
  );
}
