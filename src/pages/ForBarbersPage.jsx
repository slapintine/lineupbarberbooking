import { useState } from "react";
import CTASection from "../components/CTASection";
import { barberBenefits } from "../data";

const initialForm = {
  name: "",
  businessName: "",
  phone: "",
  email: "",
  location: "",
};

export default function ForBarbersPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <>
      <section className="section page-hero">
        <div className="container section-heading left">
          <span className="eyebrow">For barbers</span>
          <h1>Grow your barber business with Line Up</h1>
          <p>Reach more customers, build trust faster, and stand out with a polished digital presence.</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-column-grid">
          <div className="column-stack">
            <div className="glass-card">
              <span className="eyebrow">Benefits</span>
              <div className="compact-list">
                {barberBenefits.map((benefit) => (
                  <div key={benefit} className="compact-row">
                    <span className="trust-dot" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card">
              <span className="eyebrow">How it works</span>
              <div className="compact-list">
                {["Sign up", "Create profile", "Set services", "Get discovered", "Receive bookings"].map((step) => (
                  <div key={step} className="compact-row">
                    <span className="benefit-icon small">{step.slice(0, 1)}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card">
              <span className="eyebrow">Pricing</span>
              <h3>Free, Premium, and Featured plans</h3>
              <p>Start free, then upgrade visibility when you want stronger ranking and homepage placement.</p>
            </div>
          </div>

          <form className="glass-card form-card" onSubmit={handleSubmit}>
            <span className="eyebrow">Join as a barber</span>
            <label>
              Name
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
            </label>
            <label>
              Business name
              <input
                name="businessName"
                value={form.businessName}
                onChange={handleChange}
                placeholder="Shop or brand name"
                required
              />
            </label>
            <label>
              Phone
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="+256..." required />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              Location
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Kampala, Ntinda, Kololo..."
                required
              />
            </label>
            <button type="submit" className="button button-primary">
              Join as a Barber
            </button>
            {submitted ? <p className="form-success">Thanks. Our team will reach out about onboarding.</p> : null}
          </form>
        </div>
      </section>

      <CTASection
        title="Ready to get discovered by more customers?"
        description="Join Line Up and give your business a premium presence where customers are already searching."
        primaryLabel="Join as a Barber"
        primaryTo="/for-barbers"
        secondaryLabel="View Pricing"
        secondaryTo="/pricing"
      />
    </>
  );
}
