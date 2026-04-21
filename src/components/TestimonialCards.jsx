import { testimonials } from "../data";

export default function TestimonialCards() {
  return (
    <div className="testimonial-grid">
      {testimonials.map((testimonial, index) => (
        <article
          key={testimonial.name}
          className="glass-card testimonial-card reveal"
          style={{ animationDelay: `${index * 120}ms` }}
        >
          <p className="testimonial-quote">“{testimonial.quote}”</p>
          <strong>{testimonial.name}</strong>
          <span>{testimonial.role}</span>
        </article>
      ))}
    </div>
  );
}
