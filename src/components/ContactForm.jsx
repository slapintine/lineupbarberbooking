import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <form className="glass-card form-card" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us what you need."
          rows="5"
          required
        />
      </label>
      <button type="submit" className="button button-primary">
        Send Message
      </button>
      {submitted ? <p className="form-success">Thanks. We will get back to you soon.</p> : null}
    </form>
  );
}
