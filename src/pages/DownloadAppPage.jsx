import CTASection from "../components/CTASection";
import ImageGallery from "../components/ImageGallery";
import { galleryImages } from "../data";

export default function DownloadAppPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container hero-grid customers-grid">
          <div className="section-heading left">
            <span className="eyebrow">Download app</span>
            <h1>The full Line Up experience lives on your phone.</h1>
            <p>Discover trusted barbers, compare prices, and continue your booking inside the mobile app.</p>
            <div className="cta-row">
              <a href="#" className="button button-primary">
                App Store
              </a>
              <a href="#" className="button button-secondary">
                Google Play
              </a>
            </div>
          </div>
          <div className="download-showcase">
            <div className="phone-shell compact">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-card spotlight">
                  <p className="screen-label">Nearby now</p>
                  <h3>Fade District</h3>
                  <p>Rated highly for fades and fast confirmations.</p>
                </div>
                <div className="phone-item">
                  <strong>Real profiles</strong>
                  <span>See shops before you choose</span>
                </div>
                <div className="phone-item">
                  <strong>Book in app</strong>
                  <span>Fast and clear on mobile</span>
                </div>
                <div className="phone-item">
                  <strong>Stay updated</strong>
                  <span>Get reminders and confirmations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container benefit-grid">
          {["Trusted barbers", "Clear pricing", "Smooth mobile booking", "Fast confirmations"].map((item, index) => (
            <article key={item} className="glass-card benefit-card">
              <div className="benefit-icon">{String(index + 1).padStart(2, "0")}</div>
              <h3>{item}</h3>
              <p>The app is where discovery turns into action with less friction and more confidence.</p>
            </article>
          ))}
        </div>
      </section>
      <ImageGallery
        eyebrow="Barber inspiration"
        title="A premium app for premium grooming culture."
        description="Line Up is built to feel current, stylish, and easy to trust from the first screen."
        images={galleryImages}
      />
      <CTASection title="Download Line Up and book in the app." primaryLabel="Download App" />
    </>
  );
}
