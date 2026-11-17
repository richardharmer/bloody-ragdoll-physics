export const researchDate = "2026-11-12";
export const arsenalSource =
  "https://www.roblox.com/game-pass/2058843165/Arsenal";
export const mobileSource = "https://www.youtube.com/watch?v=OiE_DfxaXJE";

export const passes = [
  {
    id: "2057360139",
    name: "Sandbox",
    price: 99,
    summary:
      "Spawn bodies, barrels, cannons and mines; adjust knockback, attack speed, damage and gravity; create NPC battles.",
    limit:
      "Important buyer note: the official description states Sandbox works in singleplayer only.",
    bestFor: "Custom physics tuning, spawning props, and setting up solo NPC battles.",
    includes: ["Sandbox"],
  },
  {
    id: "2058843165",
    name: "Arsenal",
    price: 249,
    summary:
      "Unlocks Flamethrower, Minigun, Rocket Launcher, Black Hole, Lightning Staff and Gravity Gun, plus every weapon currently on the progression ladder.",
    limit:
      "The description calls those six heavy weapons exclusive to Arsenal access and does not promise every future weapon.",
    bestFor: "Skipping the kill grind and unlocking all 6 exclusive heavy weapons immediately.",
    includes: ["Arsenal"],
  },
  {
    id: "2061925867",
    name: "Injections",
    price: 199,
    summary:
      "Unlocks every syringe currently in the game plus future syringes, according to the official store description.",
    limit:
      "Individual syringe names, color-to-effect mappings and durations are not listed on the store page.",
    bestFor: "Testing zombie, explosive, balloon-inflation, and mystery syringe reactions.",
    includes: ["Injections"],
  },
  {
    id: "2062740357",
    name: "VIP",
    price: 199,
    summary:
      "Each kill counts twice toward your kill total, plus a gold chat/name tag and placement on the VIP boards.",
    limit:
      "2× kill counting speeds up kill-ladder milestones and leaderboards; it does not state double weapon damage.",
    bestFor: "Climbing the weapon kill ladder twice as fast without buying Arsenal outright.",
    includes: ["VIP"],
  },
  {
    id: "2062243631",
    name: "Everything",
    price: 499,
    summary:
      "Bundles Sandbox, Injections, Arsenal and VIP together, plus future passes according to the official description.",
    limit:
      "Saves 247 Robux compared with buying all four passes separately (746 Robux total). Sandbox’s singleplayer-only rule still applies.",
    bestFor: "Full access to all passes at ~33% off individual prices.",
    includes: ["Sandbox", "Arsenal", "Injections", "VIP"],
  },
];

export const badges = [
  {
    id: "4202675783068303",
    slug: "Welcome-to-the-Lab",
    name: "Welcome to the Lab",
    task: "Enter the game for testing.",
    tip: "Join Bloody Ragdoll Physics on Roblox; awards automatically on entry.",
    group: "First steps",
    icon: "door",
  },
  {
    id: "660229651421755",
    slug: "First-Specimen",
    name: "First Specimen",
    task: "Record your first in-game kill.",
    tip: "Eliminate any dummy with your starter firearm, melee attack, or a lab hazard.",
    group: "First steps",
    icon: "target",
  },
  {
    id: "433222810799074",
    slug: "Blast-Off",
    name: "Blast Off",
    task: "Launch a dummy from the cannon.",
    tip: "Bring or spawn a dummy at the lab cannon and trigger the launch.",
    group: "Lab equipment",
    icon: "cannon",
  },
  {
    id: "1210428843216027",
    slug: "Chain-Reaction",
    name: "Chain Reaction",
    task: "Detonate an explosive barrel.",
    tip: "Shoot or blow up an explosive barrel on the map (or spawn one with Sandbox).",
    toolSlug: "grenade",
    toolLabel: "Grenade",
    group: "Lab equipment",
    icon: "barrel",
  },
  {
    id: "4329768368234546",
    slug: "Swing-Test",
    name: "Swing Test",
    task: "Strike a dummy with the wrecking ball.",
    tip: "Place or lure a dummy into the wrecking ball’s swing arc.",
    group: "Lab equipment",
    icon: "ball",
  },
  {
    id: "2823499681739719",
    slug: "Bounce-Test",
    name: "Bounce Test",
    task: "Bounce a dummy using the trampoline.",
    tip: "Drop or toss a dummy onto the trampoline pad so it rebounds.",
    group: "Lab equipment",
    icon: "bounce",
  },
  {
    id: "2166093752893548",
    slug: "Smoothie",
    name: "Smoothie",
    task: "Put a dummy into the blender.",
    tip: "Use Grab (0 kills) or Gravity Gun to drop a dummy directly into the spinning blender.",
    toolSlug: "grab",
    toolLabel: "Grab",
    group: "Lab equipment",
    icon: "blender",
  },
  {
    id: "2953585815204715",
    slug: "Pin-Cushion",
    name: "Pin Cushion",
    task: "Throw a dummy onto the spike wall.",
    tip: "Grab and throw—or launch with Gravity Gun / Shotgun—a dummy onto the wall spikes.",
    toolSlug: "gravity-gun",
    toolLabel: "Gravity Gun",
    group: "Lab equipment",
    icon: "spikes",
  },
  {
    id: "330032276289051",
    slug: "Drop-Test",
    name: "Drop Test",
    task: "Drop a dummy from the tower.",
    tip: "Take a dummy up the lab tower and push or release it off the edge.",
    group: "Lab equipment",
    icon: "tower",
  },
  {
    id: "1140373494075694",
    slug: "Run-It-Back",
    name: "Run It Back",
    task: "Rewind, then try again.",
    tip: "Use the in-game Rewind time feature after a test action, then repeat.",
    guideHref: "/guides/#time-controls",
    guideLabel: "Time controls guide",
    group: "Manipulation",
    icon: "rewind",
  },
  {
    id: "2731702103173057",
    slug: "Pinned",
    name: "Pinned",
    task: "Pin a dummy against a wall.",
    tip: "Back a dummy up near a wall and shoot with the Nail Gun to pin them.",
    toolSlug: "nail-gun",
    toolLabel: "Nail Gun",
    group: "Manipulation",
    icon: "pin",
  },
  {
    id: "455525171216085",
    slug: "Up-Up-and-Away",
    name: "Up, Up and Away",
    task: "Attach a balloon to a dummy.",
    tip: "Equip the Balloon tool and attach it to any ragdoll dummy.",
    toolSlug: "balloon",
    toolLabel: "Balloon",
    group: "Manipulation",
    icon: "balloon",
  },
  {
    id: "1179048628695939",
    slug: "Hold-Still",
    name: "Hold Still",
    task: "Freeze a dummy while it is in midair.",
    tip: "Lift a dummy with Balloon, Trampoline, or Tower drop, then use Freeze before landing.",
    toolSlug: "freeze",
    toolLabel: "Freeze",
    group: "Manipulation",
    icon: "freeze",
  },
];

export const badgeUrl = (b: (typeof badges)[number]) =>
  `https://www.roblox.com/badges/${b.id}/${b.slug}`;
export const passUrl = (p: (typeof passes)[number]) =>
  `https://www.roblox.com/game-pass/${p.id}/${p.name}`;
