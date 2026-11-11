import { PageIntro } from "@/components/Shell";
import { GuideLinks } from "@/components/GuideLinks";
import { passes, passUrl, researchDate } from "@/lib/research";
export const metadata = {
  title: "Game passes: benefits, prices & restrictions",
  description:
    "Compare Sandbox, Arsenal, Injections, VIP and Everything against their official Roblox descriptions.",
  alternates: { canonical: "/passes/" },
};
export default function Page() {
  return (
    <div className="page">
      <PageIntro
        tag="ACCESS / OFFICIAL PASS RECORDS"
        title="Know what you unlock."
      >
        Five passes, side by side. Benefits and displayed Robux prices checked
        against the official store on {researchDate}.
      </PageIntro>
      <div className="notice">
        Prices are a dated store snapshot and may change. Check the Roblox
        purchase screen before buying. We do not sell passes.
      </div>
      <div
        className="comparison-wrap"
        tabIndex={0}
        role="region"
        aria-label="Pass comparison; scroll horizontally on small screens"
      >
        <table className="comparison">
          <caption>Included entitlements · ✓ listed / — not listed</caption>
          <thead>
            <tr>
              <th scope="col">Pass / Robux</th>
              {["Sandbox", "Arsenal", "Injections", "VIP"].map((x) => (
                <th scope="col" key={x}>
                  {x}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {passes.map((p) => (
              <tr key={p.id}>
                <th scope="row">
                  <a href={`#pass-${p.id}`}>{p.name}</a>
                  <small>{p.price} R$</small>
                </th>
                {["Sandbox", "Arsenal", "Injections", "VIP"].map((x) => (
                  <td key={x}>
                    <span
                      aria-label={
                        p.includes.includes(x) ? "Included" : "Not listed"
                      }
                    >
                      {p.includes.includes(x) ? "✓" : "—"}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="research-grid">
        {passes.map((p, i) => (
          <article className="research-card" id={`pass-${p.id}`} key={p.id}>
            <span className="eyebrow">ACCESS FILE / 0{i + 1}</span>
            <div className="card-heading">
              <h2>{p.name}</h2>
              <strong>
                {p.price} <small>R$</small>
              </strong>
            </div>
            <p>{p.summary}</p>
            <div className="evidence-note">{p.limit}</div>
            <a href={passUrl(p)} target="_blank" rel="noreferrer">
              Official pass description ↗
            </a>
          </article>
        ))}
      </div>
      <GuideLinks />
    </div>
  );
}
