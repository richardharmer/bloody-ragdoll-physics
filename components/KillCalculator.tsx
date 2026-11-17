"use client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Lock } from "lucide-react";
import { weapons } from "@/lib/data";

const ladderItems = weapons
  .filter(
    (w): w is typeof w & { killsRequired: number } =>
      w.unlockType === "kills" && typeof w.killsRequired === "number",
  )
  .sort((a, b) => a.killsRequired - b.killsRequired);

export function KillCalculator() {
  const [kills, setKills] = useState(80);
  const [hasVip, setHasVip] = useState(false);

  const clamped = Math.max(0, Math.min(700, Number.isFinite(kills) ? kills : 0));
  const unlockedCount = ladderItems.filter(
    (w) => clamped >= w.killsRequired,
  ).length;
  const nextItem = ladderItems.find((w) => clamped < w.killsRequired);
  const killsShort = nextItem ? nextItem.killsRequired - clamped : 0;
  const actualElimsNeeded = hasVip ? Math.ceil(killsShort / 2) : killsShort;

  const maxKillsNeeded = Math.max(0, 650 - clamped);
  const maxActualElims = hasVip ? Math.ceil(maxKillsNeeded / 2) : maxKillsNeeded;

  return (
    <div className="calc-box">
      <div className="calc-header">
        <div>
          <h3>Kill-Gate Unlock Calculator (0 → 650 Kills)</h3>
          <p>
            Press <kbd>B</kbd> in-game to see your current kills, then enter the
            number below to check unlocked weapons and exact kills remaining.
          </p>
        </div>
        <label className="inline-toggle vip-toggle">
          <input
            type="checkbox"
            checked={hasVip}
            onChange={(e) => setHasVip(e.target.checked)}
          />
          <span>Own VIP Pass (2× kill credit)</span>
        </label>
      </div>

      <div className="calc-inputs">
        <label className="calc-number-field">
          <span>Your current kills</span>
          <input
            type="number"
            min={0}
            max={700}
            value={clamped}
            onChange={(e) => setKills(Number(e.target.value))}
          />
        </label>

        <label className="calc-slider-field">
          <span className="control-head">
            <span>Slide kill count</span>
            <b>{clamped} / 650 kills</b>
          </span>
          <input
            type="range"
            min={0}
            max={650}
            step={5}
            value={Math.min(650, clamped)}
            onChange={(e) => setKills(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="calc-summary-row">
        <div className="calc-stat">
          <small>Ladder Progress</small>
          <strong>
            {unlockedCount} / {ladderItems.length} unlocked
          </strong>
          <span>+ 8 starter items free at 0 kills</span>
        </div>

        <div className="calc-stat highlight">
          <small>Next Milestone</small>
          {nextItem ? (
            <>
              <strong>
                {nextItem.name} ({nextItem.killsRequired} kills)
              </strong>
              <span>
                Need <b>{killsShort}</b> more kills
                {hasVip ? ` (${actualElimsNeeded} dummy kills with VIP 2×)` : ""}
              </span>
            </>
          ) : (
            <>
              <strong>All 15 Kill-Ladder Items Unlocked!</strong>
              <span>650-kill Power Thruster milestone reached</span>
            </>
          )}
        </div>

        <div className="calc-stat">
          <small>To Max Ladder (650 Kills)</small>
          <strong>
            {maxKillsNeeded === 0 ? "Complete" : `${maxKillsNeeded} kills left`}
          </strong>
          <span>
            {maxKillsNeeded === 0
              ? "Power Thruster unlocked"
              : hasVip
                ? `${maxActualElims} dummy eliminations with VIP 2×`
                : "Unlocks Power Thruster at 650"}
          </span>
        </div>
      </div>

      <div className="ladder-chips" aria-label="Kill progression milestones">
        {ladderItems.map((item) => {
          const unlocked = clamped >= item.killsRequired;
          const diff = item.killsRequired - clamped;
          const realDiff = hasVip ? Math.ceil(diff / 2) : diff;
          return (
            <Link
              href={`/weapons/${item.slug}/`}
              key={item.slug}
              className={`ladder-chip ${unlocked ? "unlocked" : "locked"}`}
            >
              <div className="ladder-chip-top">
                {unlocked ? (
                  <CheckCircle2 size={15} aria-hidden="true" />
                ) : (
                  <Lock size={14} aria-hidden="true" />
                )}
                <strong>{item.name}</strong>
              </div>
              <span>
                {unlocked
                  ? `Unlocked (${item.killsRequired})`
                  : `${item.killsRequired} kills (${realDiff} left)`}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
