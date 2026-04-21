import CTASection from "../components/CTASection";

const customerSteps = [
  "Download app",
  "Find barber",
  "Choose service",
  "Book in app",
  "Get confirmation",
];

const barberSteps = [
  "Sign up",
  "Create profile",
  "Set services",
  "Get discovered",
  "Receive bookings",
];

function StepList({ title, steps }) {
  return (
    <div className="glass-card step-card">
      <span className="eyebrow">{title}</span>
      <div className="step-list">
        {steps.map((step, index) => (
          <div key={step} className="step-row">
            <div className="benefit-icon">{index + 1}</div>
            <div>
              <h3>{step}</h3>
              <p>Line Up keeps the journey clear, simple, and designed for fast action.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container section-heading">
          <span className="eyebrow">How it works</span>
          <h1>Two clean journeys. One strong platform.</h1>
          <p>Customers discover and book in the app. Barbers join and grow through Line Up.</p>
        </div>
      </section>
      <section className="section">
        <div className="container two-column-grid">
          <StepList title="For customers" steps={customerSteps} />
          <StepList title="For barbers" steps={barberSteps} />
        </div>
      </section>
      <CTASection
        title="See the full experience on mobile."
        description="The website introduces Line Up. The app is where customers book and confirmations happen."
        primaryLabel="Download App"
        secondaryLabel="Join as a Barber"
      />
    </>
  );
}
