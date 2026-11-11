import { equipmentEvidence } from "@/lib/equipment";
import { WeaponArt } from "./Art";
export function EquipmentArt({
  slug,
  name,
  kind,
}: {
  slug: string;
  name: string;
  kind: string;
}) {
  return equipmentEvidence[slug] ? (
    <img
      className="equipment-icon"
      src={`/images/equipment/${slug}.png`}
      width="420"
      height="420"
      loading="lazy"
      alt={`${name}: official Roblox product icon`}
    />
  ) : (
    <WeaponArt kind={kind} />
  );
}
