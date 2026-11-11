"use client";
import { useState } from "react";
import { mobileSource } from "@/lib/research";
const notes = [
  {
    title: "Equipment bar",
    text: "The bottom row reads Grab, Fists, Pistol, Bow and Landmine. Landmine has the selection border. These are video labels, not additions to our officially verified weapon roster.",
  },
  {
    title: "PLACE",
    text: "A large red PLACE button is visible on the lower right while Landmine is selected. The recording does not expose the exact touch sequence.",
  },
  {
    title: "MORE / RAGDOLL",
    text: "Two labeled buttons appear above the action area. Their labels and relative positions are visible; their behavior is not established by these frames.",
  },
  {
    title: "TAKE BACK",
    text: "At about 00:30, TAKE BACK is visible above PLACE while several mine-shaped objects are on the ground. This frame alone does not prove what touching it does.",
  },
];
export function MobileFieldNotes() {
  const [active, setActive] = useState(0);
  return (
    <div className="mobile-notes">
      <div className="screen-caption">
        <span className="eyebrow">ANNOTATED RECONSTRUCTION</span>
        <span>Landscape · not to scale</span>
      </div>
      <svg
        className="mobile-diagram"
        viewBox="0 0 900 440"
        role="img"
        aria-label="Landscape screen diagram: equipment at bottom, PLACE at lower right, MORE and RAGDOLL above it; TAKE BACK appears in the later frame."
      >
        <defs>
          <pattern
            id="mobile-grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path d="M50 0H0V50" fill="none" stroke="#253640" />
          </pattern>
        </defs>
        <rect
          x="2"
          y="2"
          width="896"
          height="436"
          rx="24"
          fill="#0d171e"
          stroke="#45616c"
        />
        <rect
          x="20"
          y="20"
          width="860"
          height="400"
          rx="15"
          fill="url(#mobile-grid)"
        />
        <path d="M440 150v40m-20-20h40" stroke="#8ea6b0" />
        <circle cx="95" cy="300" r="35" fill="#24343d" stroke="#7b8f99" />
        <text x="95" y="305" textAnchor="middle" fill="#c2cdd2" fontSize="13">
          joystick
        </text>
        {["Grab", "Fists", "Pistol", "Bow", "Landmine"].map((label, i) => (
          <g key={label}>
            <rect
              x={218 + i * 81}
              y="352"
              width="75"
              height="58"
              rx="8"
              fill="#25313b"
              stroke={i === 4 ? "#ffffff" : "#657583"}
              strokeWidth={i === 4 ? 3 : 1}
            />
            <text
              x={255 + i * 81}
              y="387"
              fill="white"
              textAnchor="middle"
              fontSize="13"
            >
              {label}
            </text>
          </g>
        ))}
        <circle cx="736" cy="344" r="47" fill="#ae3445" />
        <text
          x="736"
          y="350"
          fill="white"
          textAnchor="middle"
          fontSize="20"
          fontWeight="bold"
        >
          PLACE
        </text>
        <circle cx="828" cy="351" r="31" fill="#24343d" stroke="#7b8f99" />
        <text x="828" y="360" textAnchor="middle" fill="white" fontSize="27">
          ↑
        </text>
        {["MORE", "RAGDOLL"].map((t, i) => (
          <g key={t}>
            <rect
              x="700"
              y={44 + i * 66}
              width="150"
              height="55"
              rx="10"
              fill="#25313b"
            />
            <text
              x="775"
              y={78 + i * 66}
              textAnchor="middle"
              fill="white"
              fontSize="17"
            >
              {t}
            </text>
          </g>
        ))}
        {active === 3 && (
          <g>
            <circle cx="790" cy="232" r="42" fill="#38434c" />
            <text
              x="790"
              y="228"
              textAnchor="middle"
              fill="white"
              fontSize="16"
            >
              TAKE
              <tspan x="790" dy="20">
                BACK
              </tspan>
            </text>
            <ellipse cx="450" cy="245" rx="28" ry="10" fill="#53646a" />
            <circle cx="450" cy="240" r="4" fill="#ee644d" />
          </g>
        )}
        {[
          [205, 350],
          [680, 310],
          [685, 50],
          [740, 205],
        ].map(([x, y], i) => (
          <g key={i} opacity={i === 3 && active !== 3 ? 0.35 : 1}>
            <circle
              cx={x}
              cy={y}
              r="16"
              fill={active === i ? "#b9f279" : "#ff8056"}
            />
            <text
              x={x}
              y={y + 5}
              textAnchor="middle"
              fill="#071015"
              fontWeight="bold"
              fontSize="15"
            >
              {i + 1}
            </text>
          </g>
        ))}
      </svg>
      <div className="hotspot-tabs" aria-label="Choose a screen annotation">
        {notes.map((n, i) => (
          <button
            key={n.title}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            {i + 1}. {n.title}
          </button>
        ))}
      </div>
      <article className="annotation-detail" aria-live="polite">
        <span className="eyebrow">
          FRAME / {active === 3 ? "00:30" : "00:14"}
        </span>
        <h2>{notes[active].title}</h2>
        <p>{notes[active].text}</p>
        <a
          href={`${mobileSource}&t=${active === 3 ? 30 : 14}s`}
          target="_blank"
          rel="noreferrer"
        >
          Compare with the video at {active === 3 ? "00:30" : "00:14"} ↗
        </a>
      </article>
    </div>
  );
}
