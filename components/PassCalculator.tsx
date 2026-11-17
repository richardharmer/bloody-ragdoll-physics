"use client";
import { useState } from "react";
import { passes } from "@/lib/research";

const singlePasses = passes.filter((p) => p.name !== "Everything");
const bundlePass = passes.find((p) => p.name === "Everything")!;

export function PassCalculator() {
  const [selected, setSelected] = useState<string[]>(["2058843165", "2061925867"]);

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  const chosen = singlePasses.filter((p) => selected.includes(p.id));
  const separateCost = chosen.reduce((sum, p) => sum + p.price, 0);
  const includesSandbox = chosen.some((p) => p.name === "Sandbox");

  let verdictTitle = "Select the features you want above";
  let verdictBody =
    "Check one or more passes to compare buying individually vs. the 499 Robux Everything bundle.";

  if (chosen.length > 0) {
    if (separateCost > bundlePass.price) {
      const saved = separateCost - bundlePass.price;
      verdictTitle = `Best Value: Buy Everything Bundle (499 R$) — Save ${saved} R$`;
      verdictBody = `Your selected passes cost ${separateCost} R$ separately. Everything costs 499 R$, saving ${saved} Robux while unlocking all 4 passes plus future passes.`;
    } else if (separateCost >= 398) {
      const extra = bundlePass.price - separateCost;
      verdictTitle = `Close Call: ${separateCost} R$ Separate vs. 499 R$ Everything (+${extra} R$)`;
      verdictBody = `Buying separately is ${extra} R$ cheaper right now, but paying ${extra} R$ more for Everything unlocks all remaining passes (worth 746 R$ total) plus future passes.`;
    } else {
      verdictTitle = `Cheapest Option: Buy Individually (${separateCost} R$)`;
      verdictBody = `You save ${bundlePass.price - separateCost} R$ compared with the 499 R$ Everything bundle if you only need ${chosen.map((c) => c.name).join(" + ")}.`;
    }
  }

  return (
    <div className="calc-box">
      <div className="calc-header">
        <div>
          <h3>Robux Pass Value Calculator</h3>
          <p>
            Tick the features you actually plan to use to see whether buying
            individual passes or the 499 R$ Everything bundle is cheaper.
          </p>
        </div>
      </div>

      <div className="pass-calc-grid">
        {singlePasses.map((p) => {
          const active = selected.includes(p.id);
          return (
            <label
              key={p.id}
              className={`pass-pick ${active ? "is-picked" : ""}`}
            >
              <div className="pass-pick-top">
                <input
                  type="checkbox"
                  checked={active}
                  onChange={() => toggle(p.id)}
                />
                <strong>{p.name}</strong>
                <span className="price-tag">{p.price} R$</span>
              </div>
              <p>{p.bestFor}</p>
            </label>
          );
        })}
      </div>

      <div className="pass-verdict" role="status" aria-live="polite">
        <div className="pass-verdict-main">
          <strong>{verdictTitle}</strong>
          <p>{verdictBody}</p>
          {includesSandbox && (
            <p className="sandbox-warn">
              Heads-up: The official Sandbox pass works in{" "}
              <strong>singleplayer mode only</strong>, not public multiplayer
              servers.
            </p>
          )}
        </div>
        <div className="pass-verdict-nums">
          <div>
            <small>Selected Separate</small>
            <strong>{separateCost} R$</strong>
          </div>
          <div>
            <small>Everything Bundle</small>
            <strong>{bundlePass.price} R$</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
