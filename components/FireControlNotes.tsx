"use client";
import { useState } from "react";
const parts = [
  {
    title: "SMG selected",
    text: "At 03:51, the SMG slot is outlined. SMG also appears independently in the official product catalog.",
  },
  {
    title: "FIRE and RELOAD",
    text: "The frame shows FIRE below RELOAD on the right. It does not establish tap-versus-hold behavior or reload duration.",
  },
  {
    title: "25 / 32 readout",
    text: "The screen shows 25 / 32 above the SMG label. This is one observed readout, not a verified magazine-capacity or ammunition rule.",
  },
];
export function FireControlNotes() {
  const [part, setPart] = useState(0);
  return (
    <section className="effect-explainer">
      <p className="eyebrow">SECOND VIDEO / GD TRACE · 03:51</p>
      <h2>A different item, a different action area.</h2>
      <p>
        This recording shows the SMG selected. Its title names Bloody Ragdoll
        Physics, but the description has no game link. The layout observations
        below remain video-specific.
      </p>
      <svg
        viewBox="0 0 620 260"
        role="img"
        aria-label="SMG selected at bottom. Right side shows 25 / 32, RELOAD and FIRE."
      >
        <rect width="620" height="260" rx="12" fill="#0b151d" />
        <path d="M295 70v30m-15-15h30" stroke="#95a6b0" />
        <text
          x="435"
          y="85"
          textAnchor="middle"
          fill={part === 2 ? "#b9f279" : "#fff"}
          fontSize="25"
        >
          25 / 32
        </text>
        <text x="435" y="108" textAnchor="middle" fill="#aabecb" fontSize="12">
          SMG
        </text>
        <circle
          cx="545"
          cy="95"
          r="38"
          fill={part === 1 ? "#36576a" : "#23343f"}
        />
        <text x="545" y="100" textAnchor="middle" fill="white" fontSize="12">
          RELOAD
        </text>
        <circle
          cx="465"
          cy="173"
          r="43"
          fill="#a83645"
          stroke={part === 1 ? "#b9f279" : "#a83645"}
          strokeWidth="3"
        />
        <text x="465" y="180" textAnchor="middle" fill="white" fontSize="19">
          FIRE
        </text>
        {["Grab", "Fists", "Pistol", "Bow", "SMG"].map((name, i) => (
          <g key={name}>
            <rect
              x={40 + i * 69}
              y="200"
              width="62"
              height="44"
              rx="6"
              fill="#22323d"
              stroke={i === 4 ? (part === 0 ? "#b9f279" : "#fff") : "#526875"}
              strokeWidth={i === 4 ? 3 : 1}
            />
            <text
              x={71 + i * 69}
              y="228"
              textAnchor="middle"
              fill="white"
              fontSize="12"
            >
              {name}
            </text>
          </g>
        ))}
      </svg>
      <div className="effect-stages">
        {parts.map((p, i) => (
          <button
            key={p.title}
            aria-pressed={part === i}
            onClick={() => setPart(i)}
          >
            {i + 1}. {p.title}
          </button>
        ))}
      </div>
      <p className="effect-caption" aria-live="polite">
        {parts[part].text}
      </p>
      <a
        className="text-link"
        href="https://www.youtube.com/watch?v=DdwGd37TWIs&t=231s"
        target="_blank"
        rel="noreferrer"
      >
        Check the video at 03:51 ↗
      </a>
    </section>
  );
}
