import { trustItems } from "../data";

export default function TrustBar() {
  return (
    <section className="section section-tight">
      <div className="container trust-strip">
        {trustItems.map((item) => (
          <div key={item} className="trust-item">
            <span className="trust-dot" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
