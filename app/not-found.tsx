import Link from "next/link";
export default function NotFound() {
  return (
    <div className="page empty">
      <p className="eyebrow">404 / OUTSIDE THE TEST CHAMBER</p>
      <h1>Experiment not found.</h1>
      <p>
        This page does not exist. Return to the guide or browse the confirmed
        armory.
      </p>
      <Link className="button primary" href="/">
        Back to the lab →
      </Link>
    </div>
  );
}
