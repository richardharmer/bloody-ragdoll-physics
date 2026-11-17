import Link from "next/link";
import { PageIntro } from "@/components/Shell";
import { BadgeChecklist } from "@/components/BadgeChecklist";
import { GuideLinks } from "@/components/GuideLinks";
import { badges, badgeUrl } from "@/lib/research";
import {
  buildMetadata,
  JsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "All 13 Bloody Ragdoll Physics Badges & How to Get Them",
  description:
    "Unlock all 13 Bloody Ragdoll Physics badges on Roblox: interactive checklist, map hazard tips (Smoothie, Blast Off, Pin Cushion), and required tools (Pinned, Hold Still).",
  path: "/badges/",
});

const badgeFaqs = [
  {
    question: "How do you get the Hold Still badge in Bloody Ragdoll Physics?",
    answer:
      "Get a dummy airborne first—for example by attaching a Balloon, bouncing it on the Trampoline, or dropping it off the Tower—then activate Freeze while the dummy is still in midair.",
  },
  {
    question: "Which tool unlocks the Pinned badge?",
    answer:
      "Use the Nail Gun on a dummy standing close to a wall. Its official product description specifically states that it pins targets to walls.",
  },
  {
    question: "How do you unlock the Run It Back badge?",
    answer:
      "Trigger an action on a dummy, activate the game’s Rewind time feature to roll the scene back, and then repeat the test.",
  },
  {
    question: "Do badges require Game Passes to complete?",
    answer:
      "Entry and map-hazard badges (Welcome to the Lab, First Specimen, Blast Off, Chain Reaction, Swing Test, Bounce Test, Smoothie, Pin Cushion, Drop Test, Run It Back) rely on arena features and core controls. Tool-based badges (Pinned, Up, Up and Away, Hold Still) require access to Nail Gun, Balloon, and Freeze.",
  },
];

export default function Page() {
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "All 13 Bloody Ragdoll Physics Badges",
    numberOfItems: badges.length,
    itemListElement: badges.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      description: b.task,
      url: badgeUrl(b),
    })),
  };

  return (
    <div className="page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Badges", path: "/badges/" },
        ])}
      />
      <JsonLd data={listSchema} />
      <JsonLd data={faqJsonLd(badgeFaqs)} />

      <PageIntro
        tag="Badges (13)"
        title="All 13 Bloody Ragdoll Physics Badges & Unlock Guide"
      >
        Every official Roblox badge in <strong>Bloody Ragdoll Physics</strong>,
        grouped into starter milestones, arena hazards, and tool challenges—with
        recommended <Link href="/weapons/">tools</Link> and a browser-saved
        progress tracker.
      </PageIntro>

      <BadgeChecklist />

      <section className="page-section">
        <h2>Badge Unlock FAQ</h2>
        <div className="faq-list">
          {badgeFaqs.map((f) => (
            <details key={f.question} className="faq-item">
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <GuideLinks exclude="/badges/" />
    </div>
  );
}
