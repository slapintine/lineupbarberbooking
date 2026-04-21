import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import ImageGallery from "../components/ImageGallery";
import { customerBenefits, galleryImages } from "../data";

export default function ForCustomersPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container hero-grid customers-grid">
          <div className="section-heading left">
            <span className="eyebrow">For customers</span>
            <h1>Find the right barber without the usual hassle.</h1>
            <p>
              Line Up helps you discover nearby barbers, compare trusted profiles, and continue your booking in the app.
            </p>
            <Link to="/download-app" className="button button-primary">
              Download App
            </Link>
          </div>
          <div className="glass-card mock-panel">
            <div className="mock-header">
              <span>Nearby barbers</span>
              <span>12 open</span>
            </div>
            <div className="mock-stack">
              <div className="mock-item">
                <strong>Fade District</strong>
                <span>4.9 rating</span>
              </div>
              <div className="mock-item">
                <strong>Trim House</strong>
                <span>UGX 20,000</span>
              </div>
              <div className="mock-item">
                <strong>Executive Cuts</strong>
                <span>Book in App</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container benefit-grid">
          {customerBenefits.map((benefit, index) => (
            <article key={benefit} className="glass-card benefit-card">
              <div className="benefit-icon">{String(index + 1).padStart(2, "0")}</div>
              <h3>{benefit}</h3>
              <p>Everything is designed to make the next step feel simple and trustworthy.</p>
            </article>
          ))}
        </div>
      </section>
      <ImageGallery
        eyebrow="Style preview"
        title="See the quality before you continue in the app."
        description="Profiles, reviews, pricing, and visuals help customers feel confident fast."
        images={galleryImages.slice(0, 3)}
      />
      <CTASection primaryLabel="Download App" />
    </>
  );
}
