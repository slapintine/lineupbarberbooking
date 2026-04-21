import { legalSections } from "../data";

export default function LegalPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container section-heading">
          <span className="eyebrow">Legal</span>
          <h1>Privacy and terms, kept simple.</h1>
          <p>Line Up uses this website to inform, support, and onboard. Booking activity happens only inside the app.</p>
        </div>
      </section>
      <section className="section">
        <div className="container narrow legal-stack">
          {legalSections.map((section) => (
            <article key={section.title} className="glass-card legal-card">
              <h2>{section.title}</h2>
              <div className="legal-points">
                {section.points.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
