import { useState } from "react";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <article key={item.question} className={`glass-card faq-item ${isOpen ? "open" : ""}`}>
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <span>{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? <p className="faq-answer">{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
