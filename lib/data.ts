export const official =
  "https://www.roblox.com/games/140431845542654/Bloody-Ragdoll-Physics";
export const verifiedDate = "2026-11-11";
export const weapons = [
  // Only official-name records belong here; video-only labels are kept separate.
  { slug: "sniper", name: "Sniper", category: "Ranged", kind: "rifle" },
  { slug: "shotgun", name: "Shotgun", category: "Ranged", kind: "shotgun" },
  { slug: "chainsaw", name: "Chainsaw", category: "Melee", kind: "chainsaw" },
  {
    slug: "sledgehammer",
    name: "Sledgehammer",
    category: "Melee",
    kind: "hammer",
  },
  {
    slug: "flamethrower",
    name: "Flamethrower",
    category: "Ranged",
    kind: "flame",
  },
  { slug: "minigun", name: "Minigun", category: "Ranged", kind: "minigun" },
  {
    slug: "rocket-launcher",
    name: "Rocket launcher",
    category: "Ranged",
    kind: "rocket",
  },
  {
    slug: "gravity-gun",
    name: "Gravity gun",
    category: "Physics",
    kind: "gravity",
  },
  {
    slug: "black-hole",
    name: "Black hole",
    category: "Physics",
    kind: "blackhole",
  },
  {
    slug: "lightning-staff",
    name: "Lightning Staff",
    category: "Physics",
    kind: "lightning",
  },
];
export const events = [
  {
    name: "Nuke",
    slug: "nuke",
    color: "#ff6337",
    hint: "An expanding shockwave",
    note: "Keep the same scene and compare its state before and after the event.",
  },
  {
    name: "Black Hole",
    slug: "blackhole",
    color: "#b69aff",
    hint: "A gravitational vortex",
    note: "Observe objects at several distances. Record which move and which stay put.",
  },
  {
    name: "Fire Storm",
    slug: "fire",
    color: "#ffb54f",
    hint: "A field of falling sparks",
    note: "Observe the scene over time. Do not assume a duration or damage value.",
  },
  {
    name: "Zero-G",
    slug: "zero",
    color: "#72e4ed",
    hint: "Objects suspended in space",
    note: "Compare object motion before and after activation. Record what changes.",
  },
  {
    name: "Flash Freeze",
    slug: "freeze",
    color: "#a6d9ff",
    hint: "A frozen scene",
    note: "Compare movement before and after activation; test recovery separately.",
  },
];

export const weaponTotal = 23;
export const weaponSource = (slug: string) =>
  slug === "lightning-staff"
    ? "https://www.roblox.com/game-pass/2058843165/Arsenal"
    : official;
export const weaponChecked = (slug: string) =>
  slug === "lightning-staff" ? "12 November 2026" : "11 November 2026";
