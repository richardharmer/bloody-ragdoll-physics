"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Trophy, ExternalLink } from "lucide-react";
import { badges, badgeUrl } from "@/lib/research";

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
      setMessage(
        `Saved (${next.length} of ${badges.length} badges marked complete in this browser).`,
      );
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
      <div className="checklist-bar">
        <div className="checklist-summary">
          <Trophy size={28} aria-hidden="true" />
          <div>
            <strong>
              {done.length} / {badges.length}
            </strong>
            <span>badges completed</span>
          </div>
          <progress
            aria-label="Badge completion progress"
            value={done.length}
            max={badges.length}
          />
        </div>

        <div className="research-controls">
          <div className="chips" role="group" aria-label="Badge category">
            {["All", "First steps", "Lab equipment", "Manipulation"].map(
              (g) => (
                <button
                  type="button"
                  key={g}
                  aria-pressed={group === g}
                  onClick={() => setGroup(g)}
                >
                  {g}
                </button>
              ),
            )}
          </div>
          <label className="inline-toggle">
            <input
              type="checkbox"
              checked={pending}
              onChange={(e) => setPending(e.target.checked)}
            />
            <span>Unfinished only</span>
          </label>
        </div>
      </div>

      <p role="status" className="save-status">
        {message ||
          `Showing ${shown.length} of ${badges.length} official badges. Checklist saves locally in your browser.`}
      </p>

      <div className="badge-list-grid">
        {shown.map((b) => {
          const completed = done.includes(b.id);
          return (
            <article
              className={`badge-item ${completed ? "is-complete" : ""}`}
              key={b.id}
            >
              <div className="badge-item-top">
                <label className="badge-check-label">
                  <input
                    type="checkbox"
                    disabled={!ready}
                    checked={completed}
                    onChange={() =>
                      save(
                        completed
                          ? done.filter((id) => id !== b.id)
                          : [...done, b.id],
                      )
                    }
                  />
                  <h2>{b.name}</h2>
                </label>
                <span className="cat-pill">{b.group}</span>
              </div>

              <p className="badge-objective">
                <strong>Objective:</strong> {b.task}
              </p>
              <p className="badge-tip">
                <strong>How to do it:</strong> {b.tip}
              </p>

              <div className="badge-links">
                {b.toolSlug && (
                  <Link href={`/weapons/${b.toolSlug}/`} className="pill-link">
                    Item: {b.toolLabel} →
                  </Link>
                )}
                {b.guideHref && (
                  <Link href={b.guideHref} className="pill-link">
                    {b.guideLabel} →
                  </Link>
                )}
                <a
                  href={badgeUrl(b)}
                  target="_blank"
                  rel="noreferrer"
                  className="ext-subtle"
                >
                  Roblox record <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {shown.length === 0 && (
        <div className="empty">
          <h2>All matching badges marked complete</h2>
          <p>Uncheck “Unfinished only” or switch groups to review completed badges.</p>
        </div>
      )}
    </>
  );
}
