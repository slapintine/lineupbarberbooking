import { previewCards } from "../data";

export default function AppPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Inside the app</span>
          <h2>Everything important happens on mobile.</h2>
          <p>The website builds trust. The app handles the real booking experience.</p>
        </div>
        <div className="preview-grid">
          {previewCards.map((card, index) => (
            <article
              key={card.title}
              className="glass-card preview-card reveal"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <span className="eyebrow">{card.eyebrow}</span>
              <h3>{card.title}</h3>
              <p>{card.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
