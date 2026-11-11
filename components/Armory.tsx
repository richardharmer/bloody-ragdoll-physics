"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { weapons } from "@/lib/data";
import { EquipmentArt } from "./EquipmentArt";
import { equipmentEvidence } from "@/lib/equipment";
export default function Armory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const shown = weapons.filter(
    (w) =>
      (category === "All" || w.category === category) &&
      w.name.toLowerCase().includes(query.trim().toLowerCase()),
  );
  return (
    <>
      <div className="filter-bar">
        <label className="search">
          <Search size={18} />
          <span className="sr-only">Search weapons</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the armory…"
          />
        </label>
        <div className="chips" aria-label="Weapon categories">
          {["All", "Ranged", "Melee", "Physics", "Explosives", "Tools"].map(
            (c) => (
              <button
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
        {shown.length} of {weapons.length} sourced weapon & tool entries ·
        Categories are editorial; this is not the advertised 23-weapon roster.
      </p>
      <div className="weapon-grid">
        {shown.map((w) => (
          <Link
            href={`/weapons/${w.slug}/`}
            className="weapon-card"
            key={w.slug}
          >
            <div className="card-label">
              <span>{w.category}</span>
              <ArrowUpRight size={18} />
            </div>
            <EquipmentArt {...w} />
            <div className="weapon-bottom">
              <h2>{w.name}</h2>
              {equipmentEvidence[w.slug] && (
                <p className="card-effect">
                  {equipmentEvidence[w.slug].effect}
                </p>
              )}
              <small>
                {equipmentEvidence[w.slug]
                  ? "OFFICIAL PRODUCT ICON"
                  : "NAME CONFIRMED · CONCEPT ART"}
              </small>
            </div>
          </Link>
        ))}
      </div>
      {!shown.length && (
        <div className="empty">
          <h2>No matching weapons</h2>
          <p>Try a confirmed name such as “gravity” or clear your filters.</p>
          <button
            className="button outline"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
