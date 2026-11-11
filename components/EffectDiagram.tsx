"use client";
import { useState } from "react";
const flows: Record<string, { steps: string[]; notes: string[] }> = {
  rope: {
    steps: ["Choose a limb", "Connect to an object", "Linked endpoints"],
    notes: [
      "The description identifies a limb as one endpoint.",
      "The other endpoint can be another object.",
      "The source establishes a connection, not a rope length or breaking force.",
    ],
  },
  balloon: {
    steps: ["Choose a body", "Attach the balloon", "Body lifts"],
    notes: [
      "Use the body as the attachment target described by the source.",
      "The description says the balloon attaches to the body.",
      "Floating is the advertised outcome. Height, duration and weight limits are not specified.",
    ],
  },
  pin: {
    steps: ["Body near a wall", "Use Nail Gun", "Body pinned"],
    notes: [
      "The wall is the surface named in the description.",
      "The product describes pinning a target to a wall; exact aiming and touch inputs remain unverified.",
      "This shows the advertised result, not a measured attachment strength.",
    ],
  },
  freeze: {
    steps: ["Body in the air", "Use Freeze", "Body suspended"],
    notes: [
      "The description specifically refers to a body in midair.",
      "The precise targeting control is not verified.",
      "The source describes stopping the body. Duration and unfreeze inputs are not specified.",
    ],
  },
  chain: {
    steps: ["Multiple bodies", "Use Lightning Staff", "Arcs between bodies"],
    notes: [
      "Multiple bodies illustrate the described chaining behavior; this is not a required count.",
      "The source does not specify a button, range or cooldown.",
      "The description establishes body-to-body arcs. Target count, damage and falloff are unknown.",
    ],
  },
  thruster: {
    steps: ["Choose a surface", "Attach the thruster", "Object lifts"],
    notes: [
      "The description distinguishes the floor from other objects.",
      "When attached to an object, that object is described as lifting.",
      "On the floor the thruster itself takes off. No thrust or mass limit is specified.",
    ],
  },
};
export function EffectDiagram({ kind }: { kind: string }) {
  const [step, setStep] = useState(0);
  const flow = flows[kind];
  if (!flow) return null;
  const lifted = step === 2 && ["balloon", "thruster"].includes(kind);
  const y = lifted ? 65 : 130;
  return (
    <section className="effect-explainer">
      <p className="eyebrow">OFFICIAL DESCRIPTION / VISUAL EXPLANATION</p>
      <h2>See the described sequence.</h2>
      <p>
        Choose a stage. This schematic explains the published behavior; it is
        not a recording or a button-by-button walkthrough.
      </p>
      <div className="effect-stages">
        {flow.steps.map((title, i) => (
          <button
            key={title}
            aria-pressed={step === i}
            onClick={() => setStep(i)}
          >
            <span>0{i + 1}</span>
            {title}
          </button>
        ))}
      </div>
      <svg
        viewBox="0 0 620 260"
        role="img"
        aria-label={`${flow.steps[step]}. ${flow.notes[step]}`}
      >
        <defs>
          <pattern
            id={`effect-grid-${kind}`}
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <path d="M30 0H0V30" fill="none" stroke="#263841" />
          </pattern>
        </defs>
        <rect width="620" height="260" rx="12" fill="#101b23" />
        <rect width="620" height="260" fill={`url(#effect-grid-${kind})`} />
        <path d="M30 225H590" stroke="#67818a" strokeWidth="3" />
        {kind === "pin" && (
          <path d="M370 30v195" stroke="#93a6ad" strokeWidth="14" />
        )}
        {(kind === "chain" ? [180, 310, 440] : [310]).map((x) => (
          <g
            key={x}
            transform={`translate(${kind === "pin" && step === 2 ? 350 : x} ${kind === "freeze" ? 80 : y})`}
            stroke="#b7cbd1"
            strokeWidth="7"
            strokeLinecap="round"
            fill="#2b404b"
          >
            <circle cy="-15" r="13" />
            <path d="M0 1v39m0-25-23 19m23-19 23 19M0 40l-17 34M0 40l17 34" />
          </g>
        ))}
        {step > 0 && kind === "rope" && (
          <>
            <path
              d="M333 164Q430 190 490 80"
              fill="none"
              stroke="#efa674"
              strokeWidth="4"
            />
            <rect x="480" y="60" width="35" height="35" fill="#46535a" />
          </>
        )}
        {step > 0 && kind === "balloon" && (
          <>
            <path
              d={`M333 ${y + 34}L365 ${y - 30}`}
              stroke="#d2c9b7"
              strokeWidth="2"
            />
            <ellipse cx="365" cy={y - 53} rx="22" ry="28" fill="#ef9061" />
          </>
        )}
        {step > 0 && kind === "thruster" && (
          <>
            <rect
              x="287"
              y={y + 25}
              width="17"
              height="30"
              rx="4"
              fill="#ef9061"
            />
            {step === 2 && (
              <path d={`M289 ${y + 57}l7 30 6-30`} fill="#ffe18a" />
            )}
          </>
        )}
        {step === 2 && kind === "pin" && (
          <path d="M335 150h48" stroke="#ef9061" strokeWidth="5" />
        )}
        {step === 2 && kind === "freeze" && (
          <rect
            x="267"
            y="38"
            width="86"
            height="125"
            rx="16"
            fill="#8bddf2"
            fillOpacity=".12"
            stroke="#8bddf2"
            strokeDasharray="7 5"
          />
        )}
        {step === 2 && kind === "chain" && (
          <path
            d="M185 130l40-23-12 31 47-18 45 10 38-21-9 30 44-21 57 12"
            stroke="#a9edff"
            strokeWidth="5"
            fill="none"
          />
        )}
        <text x="25" y="30" fill="#91a6b3" fontSize="12">
          SCHEMATIC · NO MEASURED DISTANCES OR TIMING
        </text>
      </svg>
      <p className="effect-caption" aria-live="polite">
        <strong>{flow.steps[step]}</strong> — {flow.notes[step]}
      </p>
    </section>
  );
}
