"use client";
import { useEffect, useState } from "react";
import {
  Trophy,
  Target,
  DoorOpen,
  Bomb,
  RotateCcw,
  Pin,
  Wind,
  Snowflake,
  ArrowUp,
  ArrowDown,
  MoveDown,
  Disc,
  Anchor,
} from "lucide-react";
import { badges, badgeUrl } from "@/lib/research";
const icons = [
  DoorOpen,
  Target,
  Bomb,
  Bomb,
  Anchor,
  ArrowUp,
  Disc,
  Pin,
  ArrowDown,
  RotateCcw,
  Pin,
  Wind,
  Snowflake,
];
const key = "brp-badge-checklist-v1";
export function BadgeChecklist() {
  const [done, setDone] = useState<string[]>([]);
  const [group, setGroup] = useState("All");
  const [pending, setPending] = useState(false);
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || "[]");
      if (Array.isArray(saved))
        setDone([
          ...new Set(
            saved.filter(
              (id: unknown) =>
                typeof id === "string" && badges.some((b) => b.id === id),
            ),
          ),
        ]);
    } catch {
      setMessage("Saved progress could not be loaded.");
    }
    setReady(true);
  }, []);
  function save(next: string[]) {
    setDone(next);
    try {
      localStorage.setItem(key, JSON.stringify(next));
      setMessage("Progress saved on this browser.");
    } catch {
      setMessage(
        "Browser storage is unavailable; progress lasts for this visit only.",
      );
    }
  }
  const shown = badges.filter(
    (b) =>
      (group === "All" || b.group === group) &&
      (!pending || !done.includes(b.id)),
  );
  return (
    <>
      <div className="checklist-summary">
        <Trophy size={40} />
        <div>
          <strong>
            {done.length} / {badges.length}
          </strong>
          <p>tasks marked complete</p>
        </div>
        <progress
          aria-label="Badge task progress"
          value={done.length}
          max={badges.length}
        />
      </div>
      <p className="evidence-note">
        This is your personal checklist, not a connection to your Roblox
        account. Mark tasks after checking your in-game badge awards. Icons are
        original guide symbols.
      </p>
      <div className="research-controls">
        <label>
          Task group{" "}
          <select value={group} onChange={(e) => setGroup(e.target.value)}>
            {["All", "First steps", "Lab equipment", "Manipulation"].map(
              (g) => (
                <option key={g}>{g}</option>
              ),
            )}
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            checked={pending}
            onChange={(e) => setPending(e.target.checked)}
          />{" "}
          Show unfinished only
        </label>
      </div>
      <p role="status" className="save-status">
        {message ||
          `${shown.length} tasks shown. Progress stays on this browser.`}
      </p>
      <div className="research-grid">
        {shown.map((b) => {
          const index = badges.indexOf(b);
          const Icon = icons[index] || MoveDown;
          return (
            <article
              className={`research-card badge-card ${done.includes(b.id) ? "is-complete" : ""}`}
              key={b.id}
            >
              <div className="badge-symbol">
                <Icon size={42} strokeWidth={1.4} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <span className="eyebrow">{b.group}</span>
              <h2>{b.name}</h2>
              <p>{b.task}</p>
              <label className="task-check">
                <input
                  type="checkbox"
                  disabled={!ready}
                  checked={done.includes(b.id)}
                  onChange={() =>
                    save(
                      done.includes(b.id)
                        ? done.filter((id) => id !== b.id)
                        : [...done, b.id],
                    )
                  }
                />
                Mark {b.name} complete
              </label>
              <a href={badgeUrl(b)} target="_blank" rel="noreferrer">
                Official badge ↗
              </a>
            </article>
          );
        })}
      </div>
      {shown.length === 0 && (
        <div className="notice">
          No unfinished tasks in this selection. Change the filters to see more.
        </div>
      )}
    </>
  );
}
