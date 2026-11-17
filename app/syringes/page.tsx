import Link from "next/link";
import { ExternalLink, Skull, Bomb, Wind, HelpCircle } from "lucide-react";
import { official } from "@/lib/data";
import { PageIntro } from "@/components/Shell";
import { GuideLinks } from "@/components/GuideLinks";
import {
  buildMetadata,
  JsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bloody Ragdoll Physics Syringes — Known Effects & Pink Syringe",
  description:
    "Guide to all 14 advertised Bloody Ragdoll Physics syringes: zombie biting, exploding ragdolls, balloon inflation, the Pink Syringe mystery, and Injections Pass access.",
  path: "/syringes/",
});

const syringeFaqs = [
  {
    question: "How many syringes are in Bloody Ragdoll Physics?",
    answer:
      "The official Roblox game description advertises 14 syringes in total. Unlike individual developer-product weapons, the developer does not publish an item-by-item table of all 14 syringe names or color codes in public store metadata.",
  },
  {
    question: "What does the Pink Syringe do in Bloody Ragdoll Physics?",
    answer:
      "The official game description specifically highlights a pink syringe (“one nobody understands”) without spoiling its exact behavior—framing it as an erratic/mystery chemical meant to be tested directly on ragdolls.",
  },
  {
    question: "How do you unlock all 14 syringes?",
    answer:
      "The official Injections Game Pass (199 Robux)—also bundled inside the Everything Pass (499 Robux)—grants immediate access to all current syringes plus future syringes.",
  },
  {
    question: "Is the Balloon tool the same thing as the balloon syringe?",
    answer:
      "No. Balloon (unlocked at 60 kills) is a physical clip-on tool that floats a body upward and awards the Up, Up and Away badge, whereas the syringe description separately mentions ragdolls inflating and expanding like balloons.",
  },
];

export default function Page() {
  const reactions = [
    {
      title: "Zombie Virus Syringe (Biting Zombies)",
      tag: "Confirmed Official Effect",
      color: "#a2d46b",
      Icon: Skull,
      text: "Mutates injected dummies into aggressive zombies that bite nearby ragdolls—ideal for testing chain infections across grouped NPCs.",
    },
    {
      title: "Boom Virus / Explosive Syringe",
      tag: "Confirmed Official Effect",
      color: "#fa9364",
      Icon: Bomb,
      text: "Primes injected ragdolls for violent detonation, blasting limbs and nearby loose props across the arena.",
    },
    {
      title: "Balloon Virus / Inflation Syringe",
      tag: "Confirmed Official Effect",
      color: "#8bdbe8",
      Icon: Wind,
      text: "Causes a dummy’s body to swell, inflate, and float away like a balloon. Distinct from the 60-kill Balloon attachment tool.",
    },
    {
      title: "The Pink Mystery Syringe",
      id: "pink-syringe",
      tag: "Official Mystery Variant",
      color: "#ee9ed2",
      Icon: HelpCircle,
      text: "Found in the Injections tab of the Weapons menu (B) and teased on the official page as the pink syringe “nobody understands.”",
    },
  ];

  return (
    <div className="page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Syringes", path: "/syringes/" },
        ])}
      />
      <JsonLd data={faqJsonLd(syringeFaqs)} />

      <PageIntro
        tag="Syringes (14)"
        title="Bloody Ragdoll Physics Syringes & Known Effects"
      >
        The game features <strong>14 chemical syringes</strong> designed to
        mutate or alter ragdoll physics. Here are the reaction types confirmed
        on the official Roblox page, what we know about the{" "}
        <strong>Pink Syringe</strong>, and how{" "}
        <Link href="/passes/#pass-2061925867">Injections Pass (199 R$)</Link>{" "}
        unlocks work.
      </PageIntro>

      <div className="summary-strip" aria-label="Syringe facts">
        <div>
          <strong>14</strong>
          <span>Total Syringes in Game</span>
        </div>
        <div>
          <strong>3</strong>
          <span>Named Reaction Archetypes</span>
        </div>
        <div>
          <strong>Pink</strong>
          <span>Teased Mystery Syringe</span>
        </div>
        <div>
          <strong>199 R$</strong>
          <span>Injections Pass Access</span>
        </div>
      </div>

      <section className="page-section">
        <h2>Confirmed Syringe Reactions & Pink Syringe</h2>
        <p className="section-sub">
          Official store descriptions highlight four core syringe behaviors out
          of the 14-syringe pool:
        </p>

        <div className="syringe-grid">
          {reactions.map((s) => (
            <article className="syringe-card" key={s.title} id={s.id}>
              <div className="syringe-card-head">
                <span
                  className="syringe-dot-icon"
                  style={{ color: s.color, borderColor: `${s.color}55` }}
                >
                  <s.Icon size={20} aria-hidden="true" />
                </span>
                <span className="cat-pill">{s.tag}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="detail-columns">
          <div className="info-card">
            <h2>Injections Pass vs. Everything Bundle</h2>
            <p>
              Buying the{" "}
              <Link href="/passes/#pass-2061925867">
                Injections Game Pass (199 Robux)
              </Link>{" "}
              unlocks every current syringe plus future syringes added in
              updates. If you also plan to buy{" "}
              <Link href="/passes/#pass-2058843165">Arsenal (249 R$)</Link> and{" "}
              <Link href="/passes/#pass-2057360139">Sandbox (99 R$)</Link>, use
              our <Link href="/passes/#calculator">Pass Value Calculator</Link>—
              the 499 R$ Everything bundle includes Injections while saving up
              to 247 Robux.
            </p>
            <div className="badge-links">
              <a
                href="https://www.roblox.com/game-pass/2061925867/Injections"
                target="_blank"
                rel="noreferrer"
                className="ext-subtle"
              >
                Official Injections Pass{" "}
                <ExternalLink size={13} aria-hidden="true" />
              </a>
              <a
                href={official}
                target="_blank"
                rel="noreferrer"
                className="ext-subtle"
              >
                Official Game Page <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="info-card">
            <h2>Testing Unlabeled Syringes Cleanly</h2>
            <ul className="clean-list">
              <li>
                <strong>Isolate one dummy first:</strong> Inject a single fresh
                dummy away from barrels or zombies so you can tell instant
                effects apart from delayed ones.
              </li>
              <li>
                <strong>Check physical modifiers:</strong> Beyond zombie,
                explosive, and balloon reactions, remaining syringes modify
                ragdoll properties such as buoyancy, limpness, or status states.
              </li>
              <li>
                <strong>Use Rewind to re-test:</strong> Trigger Rewind right
                after an injection to compare different syringes on the exact
                same scene.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>Syringes FAQ</h2>
        <div className="faq-list">
          {syringeFaqs.map((f) => (
            <details key={f.question} className="faq-item">
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <GuideLinks exclude="/syringes/" />
    </div>
  );
}
