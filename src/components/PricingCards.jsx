import { Link } from "react-router-dom";
import { pricingPlans } from "../data";

export default function PricingCards({ compact = false }) {
  const plans = compact ? pricingPlans.slice(0, 3) : pricingPlans;

  return (
    <div className="pricing-grid">
      {plans.map((plan) => (
        <article key={plan.name} className={`glass-card pricing-card ${plan.accent}`}>
          <span className="eyebrow">{plan.name}</span>
          <h3>{plan.price}</h3>
          <p>{plan.subtitle}</p>
          <div className="pricing-list">
            {plan.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
          <Link to={plan.name === "Free" ? "/download-app" : "/for-barbers"} className="button button-secondary">
            {plan.name === "Free" ? "Download App" : "Join as a Barber"}
          </Link>
        </article>
      ))}
    </div>
  );
}
