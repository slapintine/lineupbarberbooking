import CTASection from "../components/CTASection";
import FAQAccordion from "../components/FAQAccordion";
import { faqs } from "../data";

export default function FAQPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container section-heading">
          <span className="eyebrow">FAQ</span>
          <h1>Quick answers, no confusion.</h1>
          <p>Everything you need to know before downloading the app or joining as a barber.</p>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
