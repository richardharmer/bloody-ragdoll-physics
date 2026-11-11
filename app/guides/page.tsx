import { GuideLinks } from "@/components/GuideLinks";
import { PageIntro } from "@/components/Shell";
import { WarPlanner } from "@/components/Experiments";
export const metadata = {
  alternates: { canonical: "/guides/" },
  title: "NPC Wars visual guide & battle planner",
  description:
    "Follow the confirmed NPC Wars flow: select teams, assign weapons and start. Use a visual battle planner and save your own observations locally.",
};
export default function Page() {
  return (
    <div className="page">
      <PageIntro
        tag="FIELD GUIDE / NPC WARS"
        title="Set the teams. Start the chaos."
      >
        The official flow is simple: choose teams, assign weapons, then start.
        Follow the visual sequence and prepare your test below.
      </PageIntro>
      <div className="notice">
        Exact button positions and PC, mobile or console bindings have not been
        verified. These diagrams explain the flow; they do not reproduce the
        game UI.
      </div>
      <WarPlanner />
      <GuideLinks />
    </div>
  );
}
