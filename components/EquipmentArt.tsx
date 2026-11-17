import { equipmentEvidence } from "@/lib/equipment";

function StickerSilhouette({ slug }: { slug: string }) {
  switch (slug) {
    case "pistol":
      return (
        <g transform="rotate(-24 100 100)">
          <path
            d="M54 84h88v24H92l-10 38H58l8-38H54z"
            fill="#4d5966"
            stroke="#fff"
            strokeWidth="10"
            strokeLinejoin="round"
            paintOrder="stroke fill"
          />
          <rect x="60" y="88" width="76" height="10" fill="#7c8b99" />
          <path d="M88 108h14v12H88z" fill="#2c353d" />
        </g>
      );
    case "bow":
      return (
        <g transform="rotate(-30 100 100)">
          <path
            d="M78 46c38 26 38 82 0 108"
            fill="none"
            stroke="#fff"
            strokeWidth="15"
            strokeLinecap="round"
          />
          <path
            d="M78 46c38 26 38 82 0 108"
            fill="none"
            stroke="#b57a44"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <line x1="78" y1="50" x2="78" y2="150" stroke="#e2e8f0" strokeWidth="3" />
          <line
            x1="52"
            y1="100"
            x2="138"
            y2="100"
            stroke="#fff"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <line
            x1="52"
            y1="100"
            x2="138"
            y2="100"
            stroke="#cbd5e1"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <polygon points="145,100 128,91 128,109" fill="#ef6c44" />
        </g>
      );
    case "chainsaw":
      return (
        <g transform="rotate(-28 100 100)">
          <rect
            x="92"
            y="86"
            width="66"
            height="24"
            rx="12"
            fill="#9aa6b2"
            stroke="#fff"
            strokeWidth="10"
            paintOrder="stroke fill"
          />
          <rect
            x="44"
            y="76"
            width="54"
            height="42"
            rx="8"
            fill="#e86a33"
            stroke="#fff"
            strokeWidth="10"
            paintOrder="stroke fill"
          />
          <rect x="54" y="64" width="28" height="12" rx="4" fill="#334155" />
          <line x1="102" y1="98" x2="146" y2="98" stroke="#475569" strokeWidth="5" />
        </g>
      );
    case "sledgehammer":
      return (
        <g transform="rotate(-35 100 100)">
          <rect
            x="93"
            y="58"
            width="14"
            height="98"
            rx="4"
            fill="#b77946"
            stroke="#fff"
            strokeWidth="10"
            paintOrder="stroke fill"
          />
          <rect
            x="62"
            y="44"
            width="76"
            height="34"
            rx="6"
            fill="#566370"
            stroke="#fff"
            strokeWidth="10"
            paintOrder="stroke fill"
          />
        </g>
      );
    case "bat":
      return (
        <g transform="rotate(-38 100 100)">
          <path
            d="M92 42h16l5 104a8 8 0 0 1-8 8h-10a8 8 0 0 1-8-8z"
            fill="#cfa06b"
            stroke="#fff"
            strokeWidth="10"
            strokeLinejoin="round"
            paintOrder="stroke fill"
          />
          <rect x="91" y="130" width="18" height="20" rx="3" fill="#3b4754" />
        </g>
      );
    case "axe":
      return (
        <g transform="rotate(-34 100 100)">
          <rect
            x="93"
            y="46"
            width="13"
            height="108"
            rx="4"
            fill="#a96e3e"
            stroke="#fff"
            strokeWidth="10"
            paintOrder="stroke fill"
          />
          <path
            d="M104 52c24 2 38 14 40 34-16 12-30 14-40 10z"
            fill="#94a3b8"
            stroke="#fff"
            strokeWidth="10"
            strokeLinejoin="round"
            paintOrder="stroke fill"
          />
        </g>
      );
    case "flamethrower":
      return (
        <g transform="rotate(-25 100 100)">
          <path
            d="M46 88h78v20H82l-8 26H56l6-26H46z"
            fill="#475569"
            stroke="#fff"
            strokeWidth="10"
            strokeLinejoin="round"
            paintOrder="stroke fill"
          />
          <rect
            x="52"
            y="104"
            width="24"
            height="32"
            rx="8"
            fill="#e65c2e"
            stroke="#fff"
            strokeWidth="8"
            paintOrder="stroke fill"
          />
          <path
            d="M128 98c12-18 32-12 34 0-6 14-22 18-34 0z"
            fill="#ffb038"
            stroke="#fff"
            strokeWidth="8"
            strokeLinejoin="round"
            paintOrder="stroke fill"
          />
        </g>
      );
    case "minigun":
      return (
        <g transform="rotate(-24 100 100)">
          <rect
            x="46"
            y="80"
            width="52"
            height="38"
            rx="6"
            fill="#3e4c59"
            stroke="#fff"
            strokeWidth="10"
            paintOrder="stroke fill"
          />
          <rect
            x="96"
            y="84"
            width="62"
            height="28"
            rx="4"
            fill="#7b8794"
            stroke="#fff"
            strokeWidth="10"
            paintOrder="stroke fill"
          />
          <line x1="98" y1="92" x2="155" y2="92" stroke="#1f2933" strokeWidth="3" />
          <line x1="98" y1="103" x2="155" y2="103" stroke="#1f2933" strokeWidth="3" />
        </g>
      );
    case "rocket-launcher":
      return (
        <g transform="rotate(-28 100 100)">
          <rect
            x="44"
            y="84"
            width="92"
            height="28"
            rx="6"
            fill="#4c6b53"
            stroke="#fff"
            strokeWidth="10"
            paintOrder="stroke fill"
          />
          <polygon
            points="136,78 162,98 136,118"
            fill="#e05a36"
            stroke="#fff"
            strokeWidth="10"
            strokeLinejoin="round"
            paintOrder="stroke fill"
          />
          <rect x="78" y="112" width="14" height="22" rx="3" fill="#334155" />
        </g>
      );
    case "landmine":
      return (
        <g>
          <ellipse
            cx="100"
            cy="112"
            rx="48"
            ry="22"
            fill="#475569"
            stroke="#fff"
            strokeWidth="10"
            paintOrder="stroke fill"
          />
          <ellipse
            cx="100"
            cy="102"
            rx="34"
            ry="14"
            fill="#64748b"
          />
          <circle
            cx="100"
            cy="96"
            r="9"
            fill="#ff4d4f"
            stroke="#fff"
            strokeWidth="4"
          />
        </g>
      );
    case "spike":
      return (
        <g>
          <path
            d="M50 132h100v12H50zM58 132l14-48 14 48zm28 0l14-56 14 56zm28 0l14-48 14 48z"
            fill="#94a3b8"
            stroke="#fff"
            strokeWidth="9"
            strokeLinejoin="round"
            paintOrder="stroke fill"
          />
        </g>
      );
    case "grab":
      return (
        <g>
          <path
            d="M74 96V68a7 7 0 0 1 14 0v22V60a7 7 0 0 1 14 0v30V64a7 7 0 0 1 14 0v28V74a7 7 0 0 1 14 0v40c0 20-14 34-34 34H88c-16 0-28-12-28-28V96a7 7 0 0 1 14 0z"
            fill="#e2b98f"
            stroke="#fff"
            strokeWidth="9"
            strokeLinejoin="round"
            paintOrder="stroke fill"
          />
        </g>
      );
    default:
      // fists
      return (
        <g>
          <rect
            x="62"
            y="72"
            width="76"
            height="62"
            rx="18"
            fill="#d96b43"
            stroke="#fff"
            strokeWidth="10"
            paintOrder="stroke fill"
          />
          <rect x="70" y="124" width="60" height="18" rx="5" fill="#334155" />
        </g>
      );
  }
}

export function EquipmentArt({
  slug,
  name,
  unlockType,
}: {
  slug: string;
  name: string;
  category?: string;
  unlockType?: string;
}) {
  const hasOfficialIcon = Boolean(equipmentEvidence[slug]);
  const ringColor =
    unlockType === "pass"
      ? "#ad78ff"
      : unlockType === "kills" || unlockType === "reward"
        ? "#49df79"
        : "#67b7ff";

  return (
    <div className="weapon-media">
      {hasOfficialIcon ? (
        <img
          className="equipment-icon"
          src={`/images/equipment/${slug}.png`}
          width="420"
          height="420"
          loading="lazy"
          alt={`${name} icon in Bloody Ragdoll Physics`}
        />
      ) : (
        <svg
          className="slot-badge-svg"
          viewBox="0 0 200 200"
          role="img"
          aria-label={`${name} slot badge`}
        >
          <circle
            cx="100"
            cy="100"
            r="84"
            fill="#111824"
            stroke={ringColor}
            strokeWidth="10"
          />
          <circle
            cx="100"
            cy="100"
            r="77"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.65"
            strokeWidth="1.5"
          />
          <StickerSilhouette slug={slug} />
        </svg>
      )}
    </div>
  );
}
