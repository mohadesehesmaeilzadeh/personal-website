import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      nextErrors.message = "Please add a short message.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstInvalidField = Object.keys(nextErrors)[0];
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    setIsSending(true);
    window.setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 650);
  };

  if (submitted) {
    return (
      <main className="page" id="main-content" tabIndex="-1">
        <Container>
          <Alert variant="success" className="thank-you-message" role="status">
            <span className="success-mark" aria-hidden="true">✓</span>
            <Alert.Heading>Thanks, {formData.name}.</Alert.Heading>
            <p>Your message has been recorded. I appreciate you reaching out.</p>
            <Button
              variant="outline-primary"
              onClick={() => {
                setFormData({ name: "", email: "", message: "" });
                setSubmitted(false);
              }}
            >
              Send another message
            </Button>
          </Alert>
        </Container>
      </main>
    );
  }

  return (
    <main className="page" id="main-content" tabIndex="-1">
      <Container>
        <Row className="contact-layout gy-5 gx-lg-5">
          <Col lg={5}>
            <header className="contact-intro">
              <p className="eyebrow">Contact</p>
              <h1>Let’s build something clear and useful.</h1>
              <p className="lead-copy">
                Have a project, question, or opportunity? Share a few details
                and I’ll be glad to hear from you.
              </p>
            </header>

            <div className="contact-note">
              <span className="contact-note-label">A good message includes</span>
              <p>Your goals, timeline, and where you’d like frontend help.</p>
            </div>
          </Col>

          <Col lg={{ span: 6, offset: 1 }}>
            <section className="form-panel" aria-labelledby="contact-form-title">
              <h2 id="contact-form-title">Send a message</h2>
              <p className="form-helper">All fields are required.</p>

              <Form className="contact-form" onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-4" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    isInvalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  <Form.Control.Feedback type="invalid" id="name-error" role="alert">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    inputMode="email"
                    required
                    isInvalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  <Form.Control.Feedback type="invalid" id="email-error" role="alert">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    isInvalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  <Form.Control.Feedback type="invalid" id="message-error" role="alert">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" variant="primary" disabled={isSending}>
                  {isSending ? "Sending…" : "Send message"}
                </Button>
                <span className="visually-hidden" aria-live="polite">
                  {isSending ? "Sending your message" : ""}
                </span>
              </Form>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Contact;
