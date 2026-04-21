export default function BenefitCards({ eyebrow, title, description, items, variant = "default" }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        <div className={`benefit-grid ${variant}`}>
          {items.map((item, index) => (
            <article
              key={item.title || item}
              className="glass-card benefit-card reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="benefit-icon">{String(index + 1).padStart(2, "0")}</div>
              <h3>{item.title || item}</h3>
              <p>{item.description || "Line Up keeps the experience simple, premium, and easy to act on."}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
