import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="contact">
        <div className="thank-you-message">
          <h1>Thank you, {name}! ❤️</h1>

          <p>Your message has been received.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="contact">
      <section className="contact-section">
        <h1>Contact Me</h1>

        <p>
          Feel free to send me a message using the form below.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />

          <button type="submit">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;