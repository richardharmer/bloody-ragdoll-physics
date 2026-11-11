import { PageIntro } from "@/components/Shell";
import Armory from "@/components/Armory";
export const metadata = {
  alternates: { canonical: "/weapons/" },
  title: "Weapon & tool database — sourced effects",
  description:
    "Browse 25 sourced weapons and tools, with 20 official product icons and published effect descriptions. Explore visual explanations without invented stats.",
};
export default function Page() {
  return (
    <div className="page">
      <PageIntro tag="DATABASE / THE ARMORY" title="Choose your instrument.">
        Browse 25 names across weapons and tools. Twenty entries have official
        product icons and published effect descriptions. The game advertises 23
        weapons, but does not explain how tools count toward that total; this
        combined catalog is not a complete 23-weapon checklist.
      </PageIntro>
      <Armory />
    </div>
  );
}
