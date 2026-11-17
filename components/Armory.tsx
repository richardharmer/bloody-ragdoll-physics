"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, LayoutGrid, List } from "lucide-react";
import { weapons, weaponSummary } from "@/lib/data";
import { EquipmentArt } from "./EquipmentArt";
import { badges } from "@/lib/research";

const badgeByTool = new Map(
  badges
    .filter((b): b is typeof b & { toolSlug: string } => Boolean(b.toolSlug))
    .map((b) => [b.toolSlug, b.name]),
);

type TierFilter = "all" | "free" | "kills" | "pass";

export default function Armory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [tier, setTier] = useState<TierFilter>("all");
  const [view, setView] = useState<"grid" | "table">("grid");

  const q = query.trim().toLowerCase();
  const shown = weapons.filter((w) => {
    const matchCategory = category === "All" || w.category === category;
    const matchTier =
      tier === "all" ||
      (tier === "free" &&
        (w.unlockType === "starter" || w.unlockType === "reward")) ||
      (tier === "kills" && w.unlockType === "kills") ||
      (tier === "pass" && w.unlockType === "pass");
    const summary = weaponSummary(w.slug).toLowerCase();
    const matchQuery =
      !q ||
      w.name.toLowerCase().includes(q) ||
      w.category.toLowerCase().includes(q) ||
      w.unlockLabel.toLowerCase().includes(q) ||
      summary.includes(q);
    return matchCategory && matchTier && matchQuery;
  });

  return (
    <>
      <div className="filter-bar">
        <label className="search">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search weapons and tools</span>
          <input
            type="text"
            inputMode="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 33 items by name, kills, or effect (e.g. 60, streak, pin, car)…"
          />
        </label>

        <div className="view-controls">
          <div className="view-switch" role="group" aria-label="Display layout">
            <button
              type="button"
              aria-pressed={view === "grid"}
              onClick={() => setView("grid")}
            >
              <LayoutGrid size={15} aria-hidden="true" /> Cards
            </button>
            <button
              type="button"
              aria-pressed={view === "table"}
              onClick={() => setView("table")}
            >
              <List size={15} aria-hidden="true" /> Table
            </button>
          </div>
        </div>
      </div>

      <div className="filter-rows">
        <div className="chips" role="group" aria-label="Filter by unlock method">
          {[
            ["all", "All Items (33)"],
            ["free", "0 Kills & Free Rewards (12)"],
            ["kills", "Kill Ladder 60–650 (15)"],
            ["pass", "Arsenal Pass Exclusives (6)"],
          ].map(([key, label]) => (
            <button
              type="button"
              key={key}
              aria-pressed={tier === key}
              onClick={() => setTier(key as TierFilter)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="chips" role="group" aria-label="Filter by category">
          {["All", "Ranged", "Melee", "Physics", "Explosives", "Tools"].map(
            (c) => (
              <button
                type="button"
                key={c}
                aria-pressed={c === category}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ),
          )}
        </div>
      </div>

      <p className="result-count" aria-live="polite">
        Showing <strong>{shown.length}</strong> of {weapons.length} weapons,
        tools & starter gear.
      </p>

      {shown.length === 0 ? (
        <div className="empty">
          <h2>No matching items</h2>
          <p>
            Try searching “Gravity”, “Chainsaw”, “60”, “Pin”, or reset filters.
          </p>
          <button
            type="button"
            className="button outline"
            onClick={() => {
              setQuery("");
              setCategory("All");
              setTier("all");
            }}
          >
            Reset all filters
          </button>
        </div>
      ) : view === "table" ? (
        <div className="comparison-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Category</th>
                <th scope="col">How to Unlock</th>
                <th scope="col">Effect & Badge Role</th>
              </tr>
            </thead>
            <tbody>
              {shown.map((w) => {
                const badgeName = badgeByTool.get(w.slug);
                return (
                  <tr key={w.slug}>
                    <th scope="row">
                      <Link
                        href={`/weapons/${w.slug}/`}
                        className="table-item-link"
                      >
                        {w.name}
                      </Link>
                    </th>
                    <td>{w.category}</td>
                    <td>
                      <span
                        className={`pill ${
                          w.unlockType === "pass"
                            ? "pass"
                            : w.unlockType === "kills"
                              ? "kills"
                              : "free"
                        }`}
                      >
                        {w.unlockLabel}
                      </span>
                    </td>
                    <td>
                      {weaponSummary(w.slug)}
                      {badgeName ? ` (Unlocks ${badgeName} badge)` : ""}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="weapon-grid">
          {shown.map((w) => {
            const badgeName = badgeByTool.get(w.slug);
            return (
              <Link
                href={`/weapons/${w.slug}/`}
                className="weapon-card"
                key={w.slug}
              >
                <div className="card-label">
                  <span className="cat-pill">{w.category}</span>
                  <div className="tag-row">
                    <span
                      className={`pill ${
                        w.unlockType === "pass"
                          ? "pass"
                          : w.unlockType === "kills"
                            ? "kills"
                            : "free"
                      }`}
                    >
                      {w.unlockLabel}
                    </span>
                    {badgeName && <span className="pill badge">Badge</span>}
                  </div>
                </div>
                <EquipmentArt {...w} />
                <div className="weapon-bottom">
                  <h2>{w.name}</h2>
                  <p className="card-effect">{weaponSummary(w.slug)}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
