import CTASection from "../components/CTASection";

const sections = [
  {
    title: "What Line Up is",
    text: "Line Up is a modern barber discovery and booking brand built around a mobile-first experience.",
  },
  {
    title: "The problem it solves",
    text: "Too many customers waste time guessing which barber to trust, what it costs, and whether they will be kept waiting.",
  },
  {
    title: "Our mission",
    text: "Make finding and booking a barber feel simple, fast, and reliable from the first tap.",
  },
  {
    title: "Our vision",
    text: "Build the most trusted barber discovery platform in the region for customers and barbers alike.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container section-heading">
          <span className="eyebrow">About</span>
          <h1>A cleaner way to connect customers and barbers.</h1>
          <p>Line Up exists to make barber discovery feel premium, simple, and dependable.</p>
        </div>
      </section>
      <section className="section">
        <div className="container benefit-grid">
          {sections.map((section, index) => (
            <article key={section.title} className="glass-card benefit-card">
              <div className="benefit-icon">{String(index + 1).padStart(2, "0")}</div>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection secondaryLabel="Join as a Barber" />
    </>
  );
}
