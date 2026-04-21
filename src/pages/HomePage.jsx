import { Link } from "react-router-dom";
import AppPreview from "../components/AppPreview";
import BenefitCards from "../components/BenefitCards";
import CTASection from "../components/CTASection";
import FAQAccordion from "../components/FAQAccordion";
import HeroSection from "../components/HeroSection";
import ImageGallery from "../components/ImageGallery";
import PricingCards from "../components/PricingCards";
import TestimonialCards from "../components/TestimonialCards";
import TrustBar from "../components/TrustBar";
import { barberBenefits, customerBenefits, faqs, galleryImages, whyLineUp } from "../data";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AppPreview />
      <BenefitCards
        eyebrow="Why Line Up"
        title="Built for speed, trust, and modern grooming."
        description="Everything on the website points to one thing: a better mobile booking experience."
        items={whyLineUp}
      />
      <BenefitCards
        eyebrow="For Customers"
        title="Find a barber with less effort."
        description="Simple discovery. Clear choices. Booking handled in the app."
        items={customerBenefits}
      />
      <BenefitCards
        eyebrow="For Barbers"
        title="Turn visibility into growth."
        description="Join a platform that helps people discover your shop and take action faster."
        items={barberBenefits}
      />
      <ImageGallery
        eyebrow="Real haircut moments"
        title="The look and feel customers want to trust."
        description="Clean cuts, modern shops, and a premium grooming vibe that fits the Line Up brand."
        images={galleryImages}
      />
      <section className="section">
        <div className="container">
          <div className="section-heading with-action">
            <div>
              <span className="eyebrow">Pricing preview</span>
              <h2>Simple plans for barbers who want more reach.</h2>
            </div>
            <Link to="/pricing" className="button button-secondary">
              View Pricing
            </Link>
          </div>
          <PricingCards compact />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Testimonials</span>
            <h2>Built to feel trustworthy from the first scroll.</h2>
          </div>
          <TestimonialCards />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading with-action">
            <div>
              <span className="eyebrow">FAQ preview</span>
              <h2>Clear answers before the download.</h2>
            </div>
            <Link to="/faq" className="button button-secondary">
              See All FAQs
            </Link>
          </div>
          <FAQAccordion items={faqs.slice(0, 4)} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
