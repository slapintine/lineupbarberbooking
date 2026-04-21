import CTASection from "../components/CTASection";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container section-heading">
          <span className="eyebrow">Contact</span>
          <h1>Need help or want to talk to the team?</h1>
          <p>Reach out for support, partnerships, or barber onboarding questions.</p>
        </div>
      </section>
      <section className="section">
        <div className="container two-column-grid">
          <div className="glass-card contact-info">
            <span className="eyebrow">Support</span>
            <h3>support@lineupbarberbooking.org</h3>
            <p>We reply to support, onboarding, and business questions through email.</p>
            <div className="compact-list">
              <div className="compact-row">
                <span className="trust-dot" />
                <span>Customer support</span>
              </div>
              <div className="compact-row">
                <span className="trust-dot" />
                <span>Barber onboarding</span>
              </div>
              <div className="compact-row">
                <span className="trust-dot" />
                <span>Partnership enquiries</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <CTASection />
    </>
  );
}
