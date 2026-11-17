import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page">
      <div className="empty">
        <h1>Page Not Found (404)</h1>
        <p>
          That URL doesn’t exist on this wiki. Jump back to the homepage or
          browse all confirmed weapons and badges below.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Link className="button primary" href="/">
            Wiki Home
          </Link>
          <Link className="button outline" href="/weapons/">
            Weapons & Tools
          </Link>
          <Link className="button outline" href="/badges/">
            All 13 Badges
          </Link>
        </div>
      </div>
    </div>
  );
}
