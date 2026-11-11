import { PageIntro } from "@/components/Shell";
import { BadgeChecklist } from "@/components/BadgeChecklist";
import { GuideLinks } from "@/components/GuideLinks";
export const metadata = {
  title: "All 13 badges: task checklist",
  description:
    "Track 13 official Bloody Ragdoll Physics badge objectives with a checklist saved on your device.",
  alternates: { canonical: "/badges/" },
};
export default function Page() {
  return (
    <div className="page">
      <PageIntro
        tag="MISSION BOARD / 13 OFFICIAL OBJECTIVES"
        title="Leave no experiment unfinished."
      >
        All 13 badge names and objectives, checked on 12 November 2026. Choose a
        task, try it in the lab, then record your progress.
      </PageIntro>
      <div className="notice">
        Objectives are paraphrased from official badge descriptions. Exact
        equipment locations, required controls and award conditions beyond those
        descriptions have not been verified.
      </div>
      <BadgeChecklist />
      <GuideLinks />
    </div>
  );
}
