import { FireControlNotes } from "@/components/FireControlNotes";
import { PageIntro } from "@/components/Shell";
import { GuideLinks } from "@/components/GuideLinks";
import { MobileFieldNotes } from "@/components/MobileFieldNotes";
import { mobileSource } from "@/lib/research";
export const metadata = {
  title: "Mobile interface: annotated video field notes",
  description:
    "Explore an annotated landscape layout from creator-labeled gameplay, with timestamped observations and clear verification limits.",
  alternates: { canonical: "/guides/mobile/" },
};
export default function Page() {
  return (
    <div className="page">
      <PageIntro
        tag="MOBILE / VIDEO OBSERVATIONS"
        title="Read the screen. Find the controls."
      >
        Explore the Landmine and SMG interface layouts from landscape mobile
        footage. Select a numbered annotation to see what the recording actually
        establishes.
      </PageIntro>
      <div className="notice">
        Video evidence only. B2E FF titles the recording “ROBLOX BLOODY RAGDOLL
        PHYSICS | FULL GAMEPLAY!”, but its description does not link the exact
        Roblox place ID. This is a video-layout reference, not an independently
        verified control guide for every device.
      </div>
      <MobileFieldNotes />
      <FireControlNotes />
      <div className="research-card">
        <h2>What remains unconfirmed</h2>
        <p>
          Touch gestures, camera movement, hold-versus-tap behavior, button
          effects, controller bindings and layouts on other screen sizes. We
          have not inferred these from labels alone.
        </p>
        <p>
          Source:{" "}
          <a href={mobileSource} target="_blank" rel="noreferrer">
            B2E FF gameplay recording ↗
          </a>
          , inspected 12 November 2026. The diagram is an original schematic of
          the observed layout, not an official screenshot.
        </p>
      </div>
      <GuideLinks />
    </div>
  );
}
