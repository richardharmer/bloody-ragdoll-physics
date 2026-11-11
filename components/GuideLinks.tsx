import Link from "next/link";
export function GuideLinks() {
  return (
    <nav className="guide-links" aria-label="More field guides">
      {[
        [
          "/passes/",
          "01",
          "Pass comparison",
          "Five passes. Clear entitlements.",
        ],
        ["/badges/", "02", "Badge checklist", "Track all 13 published tasks."],
        [
          "/guides/mobile/",
          "03",
          "Mobile field notes",
          "Explore the observed screen layout.",
        ],
      ].map(([href, n, title, desc]) => (
        <Link href={href} key={href}>
          <span className="eyebrow">FIELD FILE / {n}</span>
          <h2>{title} ↗</h2>
          <p>{desc}</p>
        </Link>
      ))}
    </nav>
  );
}
