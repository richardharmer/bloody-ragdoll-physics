export const equipmentSource =
  "https://apis.roblox.com/developer-products/v2/universes/10773926254/developerproducts?limit=100";
export const equipmentSnapshot = "/evidence/equipment-2026-11-12.json";
export const equipmentEvidence: Record<
  string,
  { productId: number; effect: string; diagram?: string }
> = {
  rope: {
    productId: 3724638495,
    effect: "Connects a limb to another object.",
    diagram: "rope",
  },
  slingshot: { productId: 3724638505, effect: "Launches a rock." },
  balloon: {
    productId: 3724638628,
    effect: "An attached balloon lifts a body.",
    diagram: "balloon",
  },
  smg: {
    productId: 3724638649,
    effect: "Described as rapid sustained firing; no firing rate is given.",
  },
  "nail-gun": {
    productId: 3724638659,
    effect: "Pins a target against a wall.",
    diagram: "pin",
  },
  shotgun: {
    productId: 3724638668,
    effect: "Described as a forceful hit; pellet count is unspecified.",
  },
  "throwing-knives": {
    productId: 3724638674,
    effect: "Three held knives that stick on impact.",
  },
  grenade: {
    productId: 3724638686,
    effect: "Can be cooked and thrown; bounces. Fuse timing is unspecified.",
  },
  freeze: {
    productId: 3724638690,
    effect: "Holds a body suspended in the air.",
    diagram: "freeze",
  },
  harpoon: {
    productId: 3724638702,
    effect: "Pierces a target and pulls it back.",
  },
  rifle: {
    productId: 3724638717,
    effect:
      "Promotes steady aim and stronger hits, without a comparison baseline.",
  },
  katana: {
    productId: 3724638728,
    effect:
      "Described as reaching farther and cutting deeply; no measured range.",
  },
  "sticky-bomb": {
    productId: 3724638742,
    effect: "Attaches to a dummy before a delay; timing is unspecified.",
  },
  sniper: {
    productId: 3724638753,
    effect: "A hit can knock a body off the ground.",
  },
  "gravity-gun": {
    productId: 3724638768,
    effect: "Propels bodies toward walls.",
  },
  "lightning-staff": {
    productId: 3724638779,
    effect: "Electric arcs pass between bodies.",
    diagram: "chain",
  },
  "black-hole": {
    productId: 3724638795,
    effect: "Pulls things toward its center.",
  },
  thruster: {
    productId: 3725420118,
    effect: "Lifts itself or the object it is attached to.",
    diagram: "thruster",
  },
  fireworks: {
    productId: 3725420151,
    effect: "Attaches to an object and launches upward.",
  },
  "power-thruster": {
    productId: 3725420185,
    effect: "Described as powerful enough to lift cars.",
  },
};
export const extraEquipment = [
  {
    slug: "slingshot",
    name: "Slingshot",
    category: "Ranged",
    kind: "slingshot",
  },
  { slug: "smg", name: "SMG", category: "Ranged", kind: "smg" },
  { slug: "nail-gun", name: "Nail Gun", category: "Ranged", kind: "nail-gun" },
  {
    slug: "throwing-knives",
    name: "Throwing Knives",
    category: "Ranged",
    kind: "knives",
  },
  { slug: "grenade", name: "Grenade", category: "Explosives", kind: "grenade" },
  { slug: "harpoon", name: "Harpoon", category: "Ranged", kind: "harpoon" },
  { slug: "rifle", name: "Rifle", category: "Ranged", kind: "rifle" },
  { slug: "katana", name: "Katana", category: "Melee", kind: "katana" },
  {
    slug: "sticky-bomb",
    name: "Sticky Bomb",
    category: "Explosives",
    kind: "bomb",
  },
  { slug: "rope", name: "Rope", category: "Tools", kind: "rope" },
  { slug: "balloon", name: "Balloon", category: "Tools", kind: "balloon" },
  { slug: "freeze", name: "Freeze", category: "Tools", kind: "freeze" },
  { slug: "thruster", name: "Thruster", category: "Tools", kind: "thruster" },
  {
    slug: "fireworks",
    name: "Fireworks",
    category: "Tools",
    kind: "fireworks",
  },
  {
    slug: "power-thruster",
    name: "Power Thruster",
    category: "Tools",
    kind: "thruster",
  },
];
