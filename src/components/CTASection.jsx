import { Link } from "react-router-dom";

export default function CTASection({
  title = "Ready to line up your next cut?",
  description = "Download the app to discover trusted barbers, compare options, and continue your booking on mobile.",
  primaryLabel = "Download App",
  primaryTo = "/download-app",
  secondaryLabel,
  secondaryTo = "/for-barbers",
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-panel">
          <div>
            <span className="eyebrow">Next step</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="cta-row">
            <Link to={primaryTo} className="button button-primary">
              {primaryLabel}
            </Link>
            {secondaryLabel ? (
              <Link to={secondaryTo} className="button button-secondary">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
