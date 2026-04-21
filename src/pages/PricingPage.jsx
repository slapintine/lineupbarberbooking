import CTASection from "../components/CTASection";
import PricingCards from "../components/PricingCards";

const comparisonRows = [
  ["Basic listing", "Yes", "Yes", "Yes"],
  ["Accept bookings", "Yes", "Yes", "Yes"],
  ["Reviews", "Yes", "Yes", "Yes"],
  ["Higher ranking", "No", "Yes", "Priority"],
  ["Better visibility", "No", "Yes", "Maximum"],
  ["Homepage feature", "No", "No", "Yes"],
];

export default function PricingPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container section-heading">
          <span className="eyebrow">Pricing</span>
          <h1>Simple plans for every stage of growth.</h1>
          <p>Choose the visibility level that matches your barber shop goals.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <PricingCards />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading left">
            <span className="eyebrow">Comparison</span>
            <h2>See what changes as visibility increases.</h2>
          </div>
          <div className="glass-card table-card">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Free</th>
                  <th>Premium</th>
                  <th>Featured</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <CTASection
        title="Want more visibility for your shop?"
        description="Choose a plan, submit your details, and let Line Up help more customers find you."
        primaryLabel="Join as a Barber"
        primaryTo="/for-barbers"
        secondaryLabel="Download App"
        secondaryTo="/download-app"
      />
    </>
  );
}
