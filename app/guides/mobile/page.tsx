import Link from "next/link";
import { PageIntro } from "@/components/Shell";
import { GuideLinks } from "@/components/GuideLinks";
import {
  buildMetadata,
  JsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bloody Ragdoll Physics Mobile Controls & Touch HUD Guide",
  description:
    "Bloody Ragdoll Physics mobile controls guide for iPhone, iPad, and Android: Grab, Place, Take Back, Fire, Reload, Ragdoll buttons, and performance tips.",
  path: "/guides/mobile/",
});

const mobileFaqs = [
  {
    question:
      "Why does the right-side button change between PLACE and FIRE on mobile?",
    answer:
      "The touch HUD is context-sensitive: selecting a deployable trap like Landmine displays PLACE (plus TAKE BACK once traps are down), while equipping a gun like Pistol or SMG switches the right side to FIRE, RELOAD, and an ammo counter.",
  },
  {
    question: "How do you grab and throw dummies on mobile?",
    answer:
      "Tap Slot 1 (Grab) in the bottom hotbar, aim your center crosshair at a dummy limb or torso, and use the right-side touch action to drag or toss them into hazards like the Blender or Spike Wall.",
  },
  {
    question: "How can I reduce lag on mobile during big explosions?",
    answer:
      "Open the in-game Settings menu and lower the blood amount slider and Roblox graphics quality before triggering Nuke, Fire Storm, or large barrel chain reactions.",
  },
];

export default function Page() {
  return (
    <div className="page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Controls & NPC Wars", path: "/guides/" },
          { name: "Mobile Controls", path: "/guides/mobile/" },
        ])}
      />
      <JsonLd data={faqJsonLd(mobileFaqs)} />

      <PageIntro
        tag="Mobile Touch HUD"
        parentHref="/guides/"
        parentLabel="Controls & Guides"
        title="Bloody Ragdoll Physics Mobile Controls & Touch HUD"
      >
        Playing on iPhone, iPad, or Android? Here is how the landscape touch
        interface maps movement, hotbar switching, context-sensitive weapon
        buttons, and ragdoll toggles—compared side by side with{" "}
        <Link href="/guides/#pc-controls">PC keyboard controls</Link>.
      </PageIntro>

      <section className="page-section">
        <h2>Landscape Touch HUD Layout</h2>
        <div className="comparison-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">Screen Position</th>
                <th scope="col">On-Screen Control</th>
                <th scope="col">Function & Context</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Bottom-Left</th>
                <td>
                  <strong>Thumb Joystick</strong>
                </td>
                <td>
                  Move and strafe around the lab arena; drag right-half open
                  space to aim camera.
                </td>
              </tr>
              <tr>
                <th scope="row">Bottom-Center</th>
                <td>
                  <strong>5-Slot Equipment Bar</strong>
                </td>
                <td>
                  Tap to equip <Link href="/weapons/grab/">Grab</Link>,{" "}
                  <Link href="/weapons/fists/">Fists</Link>,{" "}
                  <Link href="/weapons/pistol/">Pistol</Link>,{" "}
                  <Link href="/weapons/bow/">Bow</Link>,{" "}
                  <Link href="/weapons/landmine/">Landmine</Link>, or unlocked
                  weapons.
                </td>
              </tr>
              <tr>
                <th scope="row">Bottom-Right (Edge)</th>
                <td>
                  <strong>Jump (↑)</strong>
                </td>
                <td>
                  Dedicated jump button positioned to the right of the primary
                  weapon/tool button.
                </td>
              </tr>
              <tr>
                <th scope="row">Lower-Right (Trap Mode)</th>
                <td>
                  <strong>PLACE &amp; TAKE BACK</strong>
                </td>
                <td>
                  Shown when deployables like{" "}
                  <Link href="/weapons/landmine/">Landmine</Link> are selected;{" "}
                  <code>TAKE BACK</code> appears above <code>PLACE</code> once
                  mines are on the floor.
                </td>
              </tr>
              <tr>
                <th scope="row">Lower-Right (Gun Mode)</th>
                <td>
                  <strong>FIRE, RELOAD &amp; Ammo</strong>
                </td>
                <td>
                  Shown when firearms like{" "}
                  <Link href="/weapons/smg/">SMG</Link> or{" "}
                  <Link href="/weapons/shotgun/">Shotgun</Link> are active, with
                  magazine count (e.g. <code>25 / 32</code>) above.
                </td>
              </tr>
              <tr>
                <th scope="row">Upper-Right Stack</th>
                <td>
                  <strong>MORE &amp; RAGDOLL</strong>
                </td>
                <td>
                  Open extra sandbox/menu options (<code>MORE</code>) or toggle
                  your own character into ragdoll physics (<code>RAGDOLL</code>).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>Practical Mobile Tips for Badges & Kill Farming</h2>
        <div className="hub-grid">
          <article className="info-card">
            <h3>Easy Mobile Badge Unlocks</h3>
            <p>
              Equip <Link href="/weapons/grab/">Grab</Link> (Slot 1) to carry
              dummies straight into the Blender (<em>Smoothie</em>), Cannon (
              <em>Blast Off</em>), or off the Tower (<em>Drop Test</em>) without
              needing precision aim.
            </p>
          </article>

          <article className="info-card">
            <h3>Best Touch-Friendly Guns</h3>
            <p>
              Unlock <Link href="/weapons/smg/">SMG</Link> (100 kills) and{" "}
              <Link href="/weapons/shotgun/">Shotgun</Link> (160 kills) early—wide
              spread and sustained fire are much easier on touchscreens than
              single-shot rifles.
            </p>
          </article>

          <article className="info-card">
            <h3>Midair Freeze Trick on Touch</h3>
            <p>
              For the <em>Hold Still</em> badge, clip a{" "}
              <Link href="/weapons/balloon/">Balloon</Link> (60 kills) onto a
              dummy first so it floats slowly upward, giving you plenty of time
              to tap <Link href="/weapons/freeze/">Freeze</Link> (300 kills).
            </p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <h2>Mobile Controls FAQ</h2>
        <div className="faq-list">
          {mobileFaqs.map((f) => (
            <details key={f.question} className="faq-item">
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <GuideLinks exclude="/guides/mobile/" />
    </div>
  );
}
