import {
  arsenalExclusiveSlugs,
  equipmentEvidence,
  equipmentSource,
  fallbackWeaponSummary,
} from "./equipment";
import { arsenalSource } from "./research";

export const official =
  "https://www.roblox.com/games/140431845542654/Bloody-Ragdoll-Physics";
export const verifiedDate = "2026-11-18";

export type WeaponEntry = {
  slug: string;
  name: string;
  category: "Ranged" | "Melee" | "Physics" | "Explosives" | "Tools";
  unlockType: "starter" | "reward" | "kills" | "pass";
  killsRequired: number | null;
  skipRobux?: number | "earn-only";
  unlockLabel: string;
};

// Ordered with the 20 official Roblox store-icon items first so the Armory opens with genuine in-game icons,
// followed by the 13 additional starter, streak-reward, and pass-exclusive items.
export const weapons: WeaponEntry[] = [
  // --- 20 Official Roblox Store Icon Items ---
  {
    slug: "rope",
    name: "Rope",
    category: "Tools",
    unlockType: "starter",
    killsRequired: 0,
    unlockLabel: "0 Kills · Free Tool",
  },
  {
    slug: "slingshot",
    name: "Slingshot",
    category: "Ranged",
    unlockType: "starter",
    killsRequired: 0,
    unlockLabel: "0 Kills · Free",
  },
  {
    slug: "thruster",
    name: "Thruster",
    category: "Tools",
    unlockType: "starter",
    killsRequired: 0,
    unlockLabel: "0 Kills · Free Tool",
  },
  {
    slug: "balloon",
    name: "Balloon",
    category: "Tools",
    unlockType: "kills",
    killsRequired: 60,
    skipRobux: "earn-only",
    unlockLabel: "60 Kills",
  },
  {
    slug: "smg",
    name: "SMG",
    category: "Ranged",
    unlockType: "kills",
    killsRequired: 100,
    skipRobux: 19,
    unlockLabel: "100 Kills",
  },
  {
    slug: "nail-gun",
    name: "Nail Gun",
    category: "Ranged",
    unlockType: "kills",
    killsRequired: 130,
    skipRobux: 19,
    unlockLabel: "130 Kills",
  },
  {
    slug: "shotgun",
    name: "Shotgun",
    category: "Ranged",
    unlockType: "kills",
    killsRequired: 160,
    skipRobux: 29,
    unlockLabel: "160 Kills",
  },
  {
    slug: "fireworks",
    name: "Fireworks",
    category: "Tools",
    unlockType: "kills",
    killsRequired: 180,
    skipRobux: 29,
    unlockLabel: "180 Kills",
  },
  {
    slug: "katana",
    name: "Katana",
    category: "Melee",
    unlockType: "kills",
    killsRequired: 200,
    skipRobux: 39,
    unlockLabel: "200 Kills",
  },
  {
    slug: "throwing-knives",
    name: "Throwing Knives",
    category: "Ranged",
    unlockType: "kills",
    killsRequired: 200,
    unlockLabel: "200 Kills",
  },
  {
    slug: "grenade",
    name: "Grenade",
    category: "Explosives",
    unlockType: "kills",
    killsRequired: 250,
    unlockLabel: "250 Kills",
  },
  {
    slug: "freeze",
    name: "Freeze",
    category: "Tools",
    unlockType: "kills",
    killsRequired: 300,
    skipRobux: 29,
    unlockLabel: "300 Kills",
  },
  {
    slug: "harpoon",
    name: "Harpoon",
    category: "Ranged",
    unlockType: "kills",
    killsRequired: 350,
    skipRobux: 29,
    unlockLabel: "350 Kills",
  },
  {
    slug: "rifle",
    name: "Rifle",
    category: "Ranged",
    unlockType: "kills",
    killsRequired: 400,
    skipRobux: 29,
    unlockLabel: "400 Kills",
  },
  {
    slug: "sticky-bomb",
    name: "Sticky Bomb",
    category: "Explosives",
    unlockType: "kills",
    killsRequired: 500,
    unlockLabel: "500 Kills",
  },
  {
    slug: "sniper",
    name: "Sniper",
    category: "Ranged",
    unlockType: "kills",
    killsRequired: 600,
    skipRobux: 39,
    unlockLabel: "600 Kills",
  },
  {
    slug: "power-thruster",
    name: "Power Thruster",
    category: "Tools",
    unlockType: "kills",
    killsRequired: 650,
    skipRobux: 39,
    unlockLabel: "650 Kills",
  },
  {
    slug: "gravity-gun",
    name: "Gravity Gun",
    category: "Physics",
    unlockType: "pass",
    killsRequired: null,
    unlockLabel: "Arsenal Pass (249 R$)",
  },
  {
    slug: "lightning-staff",
    name: "Lightning Staff",
    category: "Physics",
    unlockType: "pass",
    killsRequired: null,
    unlockLabel: "Arsenal Pass (249 R$)",
  },
  {
    slug: "black-hole",
    name: "Black Hole",
    category: "Physics",
    unlockType: "pass",
    killsRequired: null,
    unlockLabel: "Arsenal Pass (249 R$)",
  },

  // --- 13 Additional Starter, Login-Streak, Ladder & Arsenal Items ---
  {
    slug: "flamethrower",
    name: "Flamethrower",
    category: "Ranged",
    unlockType: "pass",
    killsRequired: null,
    unlockLabel: "Arsenal Pass (249 R$)",
  },
  {
    slug: "minigun",
    name: "Minigun",
    category: "Ranged",
    unlockType: "pass",
    killsRequired: null,
    unlockLabel: "Arsenal Pass (249 R$)",
  },
  {
    slug: "rocket-launcher",
    name: "Rocket Launcher",
    category: "Explosives",
    unlockType: "pass",
    killsRequired: null,
    unlockLabel: "Arsenal Pass (249 R$)",
  },
  {
    slug: "chainsaw",
    name: "Chainsaw",
    category: "Melee",
    unlockType: "reward",
    killsRequired: null,
    unlockLabel: "Free · Day 2 Streak",
  },
  {
    slug: "sledgehammer",
    name: "Sledgehammer",
    category: "Melee",
    unlockType: "reward",
    killsRequired: null,
    unlockLabel: "Free · Day 7 Streak",
  },
  {
    slug: "bat",
    name: "Bat",
    category: "Melee",
    unlockType: "reward",
    killsRequired: null,
    unlockLabel: "Free · Join & Favorite",
  },
  {
    slug: "axe",
    name: "Axe",
    category: "Melee",
    unlockType: "kills",
    killsRequired: 250,
    unlockLabel: "250 Kills",
  },
  {
    slug: "grab",
    name: "Grab",
    category: "Tools",
    unlockType: "starter",
    killsRequired: 0,
    unlockLabel: "0 Kills · Starter",
  },
  {
    slug: "pistol",
    name: "Pistol",
    category: "Ranged",
    unlockType: "starter",
    killsRequired: 0,
    unlockLabel: "0 Kills · Starter",
  },
  {
    slug: "bow",
    name: "Bow",
    category: "Ranged",
    unlockType: "starter",
    killsRequired: 0,
    unlockLabel: "0 Kills · Starter",
  },
  {
    slug: "fists",
    name: "Fists",
    category: "Melee",
    unlockType: "starter",
    killsRequired: 0,
    unlockLabel: "0 Kills · Starter",
  },
  {
    slug: "landmine",
    name: "Landmine",
    category: "Explosives",
    unlockType: "starter",
    killsRequired: 0,
    unlockLabel: "0 Kills · Starter",
  },
  {
    slug: "spike",
    name: "Spike Trap",
    category: "Explosives",
    unlockType: "starter",
    killsRequired: 0,
    unlockLabel: "0 Kills · Starter",
  },
];

export const weaponSummary = (slug: string) =>
  equipmentEvidence[slug]?.effect ??
  fallbackWeaponSummary[slug] ??
  "Available in Bloody Ragdoll Physics.";

export const isArsenalExclusive = (slug: string) =>
  arsenalExclusiveSlugs.has(slug);

export const events = [
  {
    name: "Nuke",
    slug: "nuke",
    color: "#ff6337",
    hint: "Map-wide blast wave",
    summary:
      "Detonates an arena-wide shockwave that blasts ragdolls, vehicles, and loose props across the map.",
    combo:
      "Press Z (Slow Motion) right before detonation to watch shockwave trajectories frame by frame.",
  },
  {
    name: "Black Hole",
    slug: "blackhole",
    color: "#b69aff",
    hint: "Server gravitational vortex",
    summary:
      "Spawns a massive world-level gravity well that pulls everything toward its core.",
    combo:
      "Distinct from the personal Black Hole weapon included in the Arsenal Game Pass (249 R$).",
  },
  {
    name: "Fire Storm",
    slug: "fire",
    color: "#ffb54f",
    hint: "Arena-wide fire hazard",
    summary:
      "Rains fire hazards across the open arena, turning the test floor into a chaotic burn zone.",
    combo: "Combine with NPC Wars squads to test survival in hazardous terrain.",
  },
  {
    name: "Zero-G",
    slug: "zero",
    color: "#72e4ed",
    hint: "Weightless physics mode",
    summary:
      "Removes normal downward gravity so ragdolls, cars, and debris float freely after every hit.",
    combo:
      "Makes Hold Still (freeze a dummy in midair) effortless and turns Shotgun/Sniper hits into orbital launches.",
  },
  {
    name: "Flash Freeze",
    slug: "freeze",
    color: "#a6d9ff",
    hint: "Arena freeze event",
    summary:
      "Locks active scene motion in an icy state across the map—separate from the 300-kill Freeze tool.",
    combo:
      "Press Q (Rewind) afterward to replay the exact moment before the freeze hit.",
  },
];

export const mapFeatures = [
  {
    name: "Blender, Cannon & Wrecking Ball",
    badge: "Smoothie · Blast Off · Swing Test",
    detail:
      "Built-in lab hazards that shred, launch, or smash ragdolls—each awards its own official badge and racks up free kills.",
  },
  {
    name: "Spike Wall, Trampoline & Drop Tower",
    badge: "Pin Cushion · Bounce Test · Drop Test",
    detail:
      "Vertical and impact stations around the arena used for fall damage, rebound combos, and midair Freeze setups.",
  },
  {
    name: "Explosive Barrels, Landmines & Spikes",
    badge: "Chain Reaction",
    detail:
      "Shoot red barrels or deploy starter Landmines and Spike Traps, then press R (Revive All) to farm kills fast.",
  },
  {
    name: "Drivable Cars",
    badge: "Vehicles & Power Thruster",
    detail:
      "Ram dummies through windshields for fast kills, or attach the 650-kill Power Thruster to launch cars skyward.",
  },
];

export const leftMenuHotkeys = [
  {
    keys: "B",
    action: "Weapons Panel",
    detail:
      "View your 0 → 650 kill progress bar, equip unlocked weapons, or check single-item Robux skips (19–39 R$).",
  },
  {
    keys: "N",
    action: "Shop",
    detail:
      "Browse Game Passes (Sandbox, Arsenal, Injections, VIP, Everything) and triggerable World Events.",
  },
  {
    keys: "H",
    action: "Rewards & Streaks",
    detail:
      "Claim daily playtime gifts, free Bat (join/favorite), Day 2 Chainsaw, and Day 7 Sledgehammer.",
  },
  {
    keys: "M",
    action: "Maps",
    detail: "Switch between available testing environments and arena spaces.",
  },
  {
    keys: "J",
    action: "Sandbox Menu",
    detail:
      "Spawn dummies, barrels, cannons, and mines or adjust gravity/knockback sliders (solo Sandbox Pass).",
  },
  {
    keys: "P",
    action: "Settings",
    detail:
      "Adjust the Blood slider, visual effects, audio volume, and performance options.",
  },
];

export const rightActionHotkeys = [
  {
    keys: "F",
    action: "Ragdoll / Stand Up",
    detail:
      "Drop your own character into ragdoll state or recover back onto your feet.",
  },
  {
    keys: "V",
    action: "Camera Toggle",
    detail: "Switch camera perspective for closer impact observation.",
  },
  {
    keys: "Z",
    action: "Slow Motion",
    detail:
      "Toggle slow-motion physics to inspect knockback arcs, dismemberment, and explosions.",
  },
  {
    keys: "Q",
    action: "Rewind Time",
    detail:
      "Roll back recent physics action and replay—also unlocks the Run It Back badge.",
  },
  {
    keys: "L",
    action: "Injuries Overlay",
    detail: "Toggle body damage / injury readout on test subjects.",
  },
  {
    keys: "R",
    action: "Revive All",
    detail:
      "Instantly revive eliminated dummies around you—the #1 shortcut for fast kill farming!",
  },
  {
    keys: "C",
    action: "Reset",
    detail: "Reset active test state and clear the immediate setup.",
  },
];

export const pcControls = [
  ...leftMenuHotkeys,
  ...rightActionHotkeys,
  {
    keys: "Hold Alt",
    action: "Unlock Mouse Cursor",
    detail: "Free your cursor from camera lock to click on-screen UI panels.",
  },
  {
    keys: "W A S D / Shift / Space",
    action: "Move, Sprint & Jump",
    detail: "Standard movement, sprint, and jump controls across the arena.",
  },
];

export const freeRewardUnlocks = [
  {
    item: "Bat",
    slug: "bat",
    requirement: "Join & Favorite Bonus",
    howToClaim:
      "Join the Roblox group & favorite the game, then claim inside Rewards (press H).",
  },
  {
    item: "Chainsaw",
    slug: "chainsaw",
    requirement: "Day 2 Login Streak",
    howToClaim:
      "Log in for 2 consecutive days and claim from the 7-day streak tab (press H).",
  },
  {
    item: "Sledgehammer",
    slug: "sledgehammer",
    requirement: "Day 7 Login Streak",
    howToClaim:
      "Complete the 7-day login streak in Rewards (press H) to unlock permanently.",
  },
  {
    item: "Daily Gifts & Dares",
    slug: "",
    requirement: "Session Playtime & Tasks",
    howToClaim:
      "Open Rewards (H) during matches to collect timed gifts and rotating challenges.",
  },
];

export const weaponTotal = 23;
export const weaponSource = (slug: string) => {
  if (equipmentEvidence[slug]) return equipmentSource;
  if (arsenalExclusiveSlugs.has(slug)) return arsenalSource;
  return official;
};
export const weaponChecked = () => "November 2026";
