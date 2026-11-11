import { PageIntro } from "@/components/Shell";
import Armory from "@/components/Armory";
export const metadata = {
  alternates: { canonical: "/weapons/" },
  title: "Weapon database — confirmed names",
  description:
    "Browse 10 weapon names confirmed by the official game description and Arsenal pass, including Lightning Staff. Numeric stats remain unverified.",
};
export default function Page() {
  return (
    <div className="page">
      <PageIntro tag="DATABASE / THE ARMORY" title="Choose your instrument.">
        23 weapons are advertised. These 10 names are confirmed by the official
        game description and Arsenal pass. Artwork is conceptual; damage,
        unlocks and exact models are not verified.
      </PageIntro>
      <Armory />
    </div>
  );
}
