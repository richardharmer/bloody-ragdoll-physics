export const equipmentSource =
  "https://apis.roblox.com/developer-products/v2/universes/10773926254/developerproducts?limit=100";
export const equipmentSnapshot = "/evidence/equipment-2026-11-12.json";

export const arsenalExclusiveSlugs = new Set([
  "flamethrower",
  "minigun",
  "rocket-launcher",
  "black-hole",
  "lightning-staff",
  "gravity-gun",
]);

export const equipmentEvidence: Record<
  string,
  {
    productId: number;
    effect: string;
    storeQuote: string;
  }
> = {
  rope: {
    productId: 3724638495,
    effect: "Tethers a ragdoll limb to walls, props, vehicles, or other dummies.",
    storeQuote: "Tie a limb to anything.",
  },
  slingshot: {
    productId: 3724638505,
    effect: "Fires a high-impulse rock projectile for ranged knockback right from 0 kills.",
    storeQuote: "A rock with a lot of feeling behind it.",
  },
  balloon: {
    productId: 3724638628,
    effect: "Clips onto a dummy and floats the body upward into midair (60 kills, earn-only).",
    storeQuote: "Clip it to a body and watch it float off.",
  },
  smg: {
    productId: 3724638649,
    effect: "Automatic firearm built for rapid sustained fire and fast kill farming (100 kills).",
    storeQuote: "Holds down fast.",
  },
  "nail-gun": {
    productId: 3724638659,
    effect: "Fires nails that pin a ragdoll directly against a wall surface (130 kills).",
    storeQuote: "Pins them to the wall.",
  },
  shotgun: {
    productId: 3724638668,
    effect: "Close-range blast that shoves dummies backward with heavy impact (160 kills).",
    storeQuote: "One shove with a lot of holes in it.",
  },
  "throwing-knives": {
    productId: 3724638674,
    effect: "Holds three throwing blades that embed into the target on impact (200 kills).",
    storeQuote: "Three in the hand. They stick.",
  },
  grenade: {
    productId: 3724638686,
    effect: "Cookable frag explosive that bounces off surfaces before detonation (250 kills).",
    storeQuote: "Cook it, throw it, enjoy the bounce.",
  },
  freeze: {
    productId: 3724638690,
    effect: "Locks an airborne ragdoll motionless in midair for combos and badges (300 kills).",
    storeQuote: "Stops a body in mid air.",
  },
  harpoon: {
    productId: 3724638702,
    effect: "Impales a target at range and reels the body back toward you (350 kills).",
    storeQuote: "Goes through, drags them back.",
  },
  rifle: {
    productId: 3724638717,
    effect: "Controlled ranged firearm offering steadier aim and heavier hits than SMG (400 kills).",
    storeQuote: "Holds steady, hits harder.",
  },
  katana: {
    productId: 3724638728,
    effect: "Extended-reach melee blade built for deep slicing strikes (200 kills).",
    storeQuote: "Long reach, deep cuts.",
  },
  "sticky-bomb": {
    productId: 3724638742,
    effect: "Timed charge (C4-style) that sticks directly onto a dummy before detonating (500 kills).",
    storeQuote: "Stick it on a dummy. Wait.",
  },
  sniper: {
    productId: 3724638753,
    effect: "High-force precision rifle capable of knocking a dummy clean off its feet (600 kills).",
    storeQuote: "Lifts a body off its feet.",
  },
  "gravity-gun": {
    productId: 3724638768,
    effect: "Physics launcher that grabs and blasts ragdolls violently into walls and traps.",
    storeQuote: "Blast them into a wall. Splat.",
  },
  "lightning-staff": {
    productId: 3724638779,
    effect: "Channels chain-lightning arcs that jump from one body to nearby dummies.",
    storeQuote: "Arcs from body to body.",
  },
  "black-hole": {
    productId: 3724638795,
    effect: "Creates a localized gravity vortex that pulls nearby bodies and props inward.",
    storeQuote: "Everything goes in the middle.",
  },
  thruster: {
    productId: 3725420118,
    effect: "Starter propulsion unit that launches itself off the floor or lifts attached bodies.",
    storeQuote: "On the floor it takes off. On anything else, that takes off.",
  },
  fireworks: {
    productId: 3725420151,
    effect: "Attaches to a dummy or prop and rockets straight skyward before bursting (180 kills).",
    storeQuote: "Stick one on anything. Up it goes, and the sky goes with it.",
  },
  "power-thruster": {
    productId: 3725420185,
    effect: "Top kill-ladder propulsion tool (650 kills) strong enough to launch full-sized cars.",
    storeQuote: "The Thruster with no sense of proportion. Cars leave the ground.",
  },
};

export const fallbackWeaponSummary: Record<string, string> = {
  grab: "Default physics hand tool used to pick up, drag, aim, and throw ragdoll dummies into lab traps.",
  fists:
    "Default unarmed melee slot equipped on spawn for close-range punches and shoves.",
  pistol:
    "Starter semi-automatic sidearm available at 0 kills for early dummy eliminations and barrel shots.",
  bow: "Starter projectile weapon in the default hotbar for arc-based ranged shots.",
  spike:
    "Free starter floor spike trap for impaling ragdolls and farming early kills.",
  landmine:
    "Deployable proximity explosive trap with dedicated PLACE and TAKE BACK controls.",
  bat: "Free blunt melee weapon claimed in the Rewards menu (H) after joining the group and favoriting.",
  axe: "Mid-tier chopping melee weapon unlocked at the shared 250-kill gate alongside Grenade.",
  chainsaw:
    "Continuous close-quarters melee saw—claimable for free via the Day 2 login streak reward.",
  sledgehammer:
    "Heavy two-handed smash hammer—claimable for free via the Day 7 login streak reward.",
  flamethrower:
    "Continuous fire stream weapon engulfing dummies in flames—exclusive to the Arsenal Pass (249 R$).",
  minigun:
    "High-volume rotary firearm shredding crowds—exclusive to the Arsenal Pass (249 R$).",
  "rocket-launcher":
    "Long-range explosive launcher sending bodies flying—exclusive to the Arsenal Pass (249 R$).",
};

export const weaponPracticalTips: Record<string, string[]> = {
  grab: [
    "Available immediately at 0 kills in your starting hotbar—no unlocks needed.",
    "Fastest way to complete Smoothie (drag a dummy into the blender), Pin Cushion (throw onto the spike wall), Drop Test (drop from the tower), and Bounce Test (toss onto the trampoline).",
  ],
  fists: [
    "Equipped by default in Slot 2 at 0 kills alongside Grab and Pistol.",
    "Switch to Pistol, Slingshot, or floor traps right away to farm your first 60–100 kills much faster.",
  ],
  pistol: [
    "Available at 0 kills in Slot 3—earn First Specimen in seconds and shoot red explosive barrels for Chain Reaction.",
    "Tip: Press R on PC (Revive All) after wiping out dummies to immediately re-farm kills toward SMG (100 kills).",
  ],
  bow: [
    "Free starter projectile weapon available at 0 kills alongside Pistol and Slingshot.",
    "Useful for arc shots and limb hits before unlocking Nail Gun (130 kills) and Harpoon (350 kills).",
  ],
  spike: [
    "Free starter floor trap available at 0 kills alongside Landmine.",
    "Place spikes beneath drop zones or in front of dummy spawns, then press R (Revive All) to repeat kills rapidly.",
  ],
  landmine: [
    "Free starter proximity explosive; on mobile, dedicated PLACE and TAKE BACK buttons appear on the right.",
    "Line Landmines along NPC Wars paths or cluster them under dummies for fast multi-kills.",
  ],
  bat: [
    "Free social bonus melee weapon: join the creator group and favorite the game, then claim it inside Rewards (press H).",
    "Gives new players heavy blunt knockback at 0 kills before unlocking Katana (200) or Axe (250).",
  ],
  axe: [
    "Unlocks at 250 kills on the weapon ladder—sharing the 250-kill gate tier with Grenade.",
    "Delivers sharp limb-detaching melee strikes in close-range tests and NPC Wars.",
  ],
  chainsaw: [
    "Claimable for free on Day 2 of the 7-day login streak inside the Rewards tab (press H).",
    "Shreds cornered or pinned dummies with continuous melee contact.",
  ],
  sledgehammer: [
    "Claimable for free on Day 7 of the daily login streak inside the Rewards tab (press H).",
    "High blunt-force trauma ideal for launching dummies into pits, walls, or spike traps.",
  ],
  "nail-gun": [
    "Unlocks at 130 kills on the weapon ladder (or 19 Robux single-item skip).",
    "Directly unlocks the Pinned badge when you back a dummy near a wall and nail them in place.",
  ],
  balloon: [
    "First kill-ladder unlock at 60 kills (earn-only milestone—no single-item Robux skip).",
    "Unlocks Up, Up and Away immediately, and sets up Hold Still when combined with Freeze (300 kills).",
  ],
  freeze: [
    "Unlocks at 300 kills on the progression ladder (or 29 Robux skip).",
    "Required tool for Hold Still (freeze a dummy in midair—pair with Balloon, Zero-G, or Tower drop).",
  ],
  rope: [
    "Available right at 0 kills with an official Roblox store icon.",
    "Tether a ragdoll limb to a drivable car, wrecking ball, or Thruster-rigged prop for physics drag tests.",
  ],
  slingshot: [
    "Available at 0 kills alongside Rope and Thruster.",
    "Delivers punchy rock knockback while you grind your first 60 kills for Balloon.",
  ],
  thruster: [
    "Available at 0 kills—launches itself off the floor or propels any dummy/prop you attach it to.",
    "Upgrades to the car-lifting Power Thruster at the top of the ladder (650 kills).",
  ],
  fireworks: [
    "Unlocks at 180 kills (or 29 Robux skip).",
    "Attaches to any dummy or object and rockets straight upward before exploding.",
  ],
  katana: [
    "Unlocks at the shared 200-kill milestone alongside Throwing Knives (or 39 Robux skip).",
    "Long melee reach and clean slicing strikes.",
  ],
  "throwing-knives": [
    "Unlocks at the shared 200-kill gate alongside Katana.",
    "Holds three blades at once that embed into ragdoll limbs on impact.",
  ],
  harpoon: [
    "Unlocks at 350 kills (or 29 Robux skip).",
    "Impales distant targets and reels them back—great for dragging dummies into the Blender.",
  ],
  rifle: [
    "Unlocks at 400 kills (or 29 Robux skip) as a steadier, harder-hitting upgrade over SMG.",
  ],
  "sticky-bomb": [
    "Unlocks at 500 kills (often searched as C4 or timed charge).",
    "Sticks directly onto a dummy or vehicle before detonating after a short delay.",
  ],
  sniper: [
    "Unlocks at 600 kills (or 39 Robux skip).",
    "High-impulse rifle shot that lifts ragdolls clean off their feet from across the arena.",
  ],
  "power-thruster": [
    "Final milestone on the free kill ladder at 650 kills (or 39 Robux skip).",
    "Strong enough to lift full-sized drivable cars off the ground.",
  ],
  "gravity-gun": [
    "Exclusive to the Arsenal Game Pass (249 Robux) or Everything Bundle (499 Robux).",
    "Effortlessly blasts dummies into walls, blenders (Smoothie), or spike walls (Pin Cushion).",
  ],
  "black-hole": [
    "Exclusive to the Arsenal Game Pass (249 Robux) or Everything Bundle (499 Robux).",
    "Handheld gravity vortex—separate from the map-wide BLACKHOLE world event in the Shop (N).",
  ],
  "lightning-staff": [
    "Exclusive to the Arsenal Game Pass (249 Robux) or Everything Bundle (499 Robux).",
    "Jumps electric arcs from body to body across grouped dummies.",
  ],
  flamethrower: [
    "Exclusive heavy weapon in the Arsenal Game Pass (249 Robux) and Everything Bundle (499 Robux).",
    "Engulfs ragdolls in continuous flames, triggering frantic burning reactions.",
  ],
  minigun: [
    "Exclusive heavy weapon in the Arsenal Game Pass (249 Robux) and Everything Bundle (499 Robux).",
    "Sustained rotary fire built for shredding NPC Wars crowds.",
  ],
  "rocket-launcher": [
    "Exclusive heavy weapon in the Arsenal Game Pass (249 Robux) and Everything Bundle (499 Robux).",
    "High-blast explosive launcher that sends bodies flying across the map.",
  ],
  grenade: [
    "Unlocks at the shared 250-kill gate alongside Axe.",
    "Cookable fuse and bouncy trajectory—great for setting off barrel clusters.",
  ],
  shotgun: [
    "Unlocks at 160 kills (or 29 Robux skip).",
    "Heavy close-range pellet blast that shoves dummies off ledges or onto spikes.",
  ],
  smg: [
    "Unlocks at 100 kills (or 19 Robux skip)—best early gun for fast kill farming with R (Revive All).",
  ],
};
