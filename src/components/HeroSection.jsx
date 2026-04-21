import { Link } from "react-router-dom";

const highlights = ["Trusted local barbers", "Clear pricing", "Fast confirmations"];

export default function HeroSection() {
  return (
    <section className="section hero-section">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">Barber-tech, built for modern cities</span>
          <h1>Find your barber. Skip the wait.</h1>
          <p>
            Discover trusted barbers near you and book instantly from your phone with Line Up Barber Booking.
          </p>
          <p className="hero-domain">lineupbarberbooking.org</p>
          <div className="cta-row">
            <Link to="/download-app" className="button button-primary">
              Download App
            </Link>
            <Link to="/for-barbers" className="button button-secondary">
              Join as a Barber
            </Link>
          </div>
          <div className="hero-chips">
            {highlights.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay">
          <div className="phone-stage">
            <div className="phone-shell">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-top">
                  <span className="status-pill">Live in Kampala</span>
                  <span className="rating-pill">4.9 average rating</span>
                </div>
                <div className="phone-card spotlight">
                  <p className="screen-label">Top pick</p>
                  <h3>Fade District</h3>
                  <p>Clean fades. Strong reviews. Fast replies.</p>
                </div>
                <div className="phone-list">
                  <div className="phone-item">
                    <strong>Classic cut</strong>
                    <span>UGX 15,000</span>
                  </div>
                  <div className="phone-item">
                    <strong>Skin fade</strong>
                    <span>UGX 25,000</span>
                  </div>
                  <div className="phone-item">
                    <strong>Beard shape</strong>
                    <span>UGX 10,000</span>
                  </div>
                </div>
                <div className="phone-action">Continue in App</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
