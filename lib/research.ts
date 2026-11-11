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
      "The official description says this pass works in singleplayer only.",
    includes: ["Sandbox"],
  },
  {
    id: "2058843165",
    name: "Arsenal",
    price: 249,
    summary:
      "Includes Flamethrower, Minigun, Rocket Launcher, Black Hole, Lightning Staff and Gravity Gun, plus every weapon currently on the ladder.",
    limit:
      "The description calls the six named weapons exclusive to this access. It does not specify numeric stats or promise every future weapon.",
    includes: ["Arsenal"],
  },
  {
    id: "2061925867",
    name: "Injections",
    price: 199,
    summary:
      "Includes every syringe in the game and future syringes, according to the official description.",
    limit:
      "Individual syringe names, color mappings and durations are not listed.",
    includes: ["Injections"],
  },
  {
    id: "2062740357",
    name: "VIP",
    price: 199,
    summary:
      "Each kill counts twice, with a gold tag and a place on the VIP boards.",
    limit:
      "Double kill counting is not a statement of double damage, double currency or double XP.",
    includes: ["VIP"],
  },
  {
    id: "2062243631",
    name: "Everything",
    price: 499,
    summary:
      "Bundles Sandbox, Injections, Arsenal and VIP, plus future passes according to the official description.",
    limit:
      "The bundle includes the Sandbox entitlement; its stated singleplayer restriction still matters. Future inclusions are the developer’s promise, not independently tested.",
    includes: ["Sandbox", "Arsenal", "Injections", "VIP"],
  },
];
export const badges = [
  {
    id: "4202675783068303",
    slug: "Welcome-to-the-Lab",
    name: "Welcome to the Lab",
    task: "Enter the game for testing.",
    group: "First steps",
    icon: "door",
  },
  {
    id: "660229651421755",
    slug: "First-Specimen",
    name: "First Specimen",
    task: "Record your first in-game kill.",
    group: "First steps",
    icon: "target",
  },
  {
    id: "433222810799074",
    slug: "Blast-Off",
    name: "Blast Off",
    task: "Launch a dummy from the cannon.",
    group: "Lab equipment",
    icon: "cannon",
  },
  {
    id: "1210428843216027",
    slug: "Chain-Reaction",
    name: "Chain Reaction",
    task: "Detonate an explosive barrel.",
    group: "Lab equipment",
    icon: "barrel",
  },
  {
    id: "4329768368234546",
    slug: "Swing-Test",
    name: "Swing Test",
    task: "Strike a dummy with the wrecking ball.",
    group: "Lab equipment",
    icon: "ball",
  },
  {
    id: "2823499681739719",
    slug: "Bounce-Test",
    name: "Bounce Test",
    task: "Bounce a dummy using the trampoline.",
    group: "Lab equipment",
    icon: "bounce",
  },
  {
    id: "2166093752893548",
    slug: "Smoothie",
    name: "Smoothie",
    task: "Put a dummy into the blender.",
    group: "Lab equipment",
    icon: "blender",
  },
  {
    id: "2953585815204715",
    slug: "Pin-Cushion",
    name: "Pin Cushion",
    task: "Throw a dummy onto the spike wall.",
    group: "Lab equipment",
    icon: "spikes",
  },
  {
    id: "330032276289051",
    slug: "Drop-Test",
    name: "Drop Test",
    task: "Drop a dummy from the tower.",
    group: "Lab equipment",
    icon: "tower",
  },
  {
    id: "1140373494075694",
    slug: "Run-It-Back",
    name: "Run It Back",
    task: "Rewind, then try again.",
    group: "Manipulation",
    icon: "rewind",
  },
  {
    id: "2731702103173057",
    slug: "Pinned",
    name: "Pinned",
    task: "Pin a dummy against a wall.",
    group: "Manipulation",
    icon: "pin",
  },
  {
    id: "455525171216085",
    slug: "Up-Up-and-Away",
    name: "Up, Up and Away",
    task: "Attach a balloon to a dummy.",
    group: "Manipulation",
    icon: "balloon",
  },
  {
    id: "1179048628695939",
    slug: "Hold-Still",
    name: "Hold Still",
    task: "Freeze a dummy while it is in midair.",
    group: "Manipulation",
    icon: "freeze",
  },
];
export const badgeUrl = (b: (typeof badges)[number]) =>
  `https://www.roblox.com/badges/${b.id}/${b.slug}`;
export const passUrl = (p: (typeof passes)[number]) =>
  `https://www.roblox.com/game-pass/${p.id}/${p.name}`;
