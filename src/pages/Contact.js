import { useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";

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
        <Container>
          <Alert variant="success" className="thank-you-message">
            <Alert.Heading>Thank you, {name}!</Alert.Heading>

            <p>Your message has been received.</p>
          </Alert>
        </Container>
      </main>
    );
  }

  return (
    <main className="contact">
      <Container>
        <section className="contact-section">
          <Card className="content-card">
            <Card.Body>
              <p className="eyebrow">Contact</p>
              <h1>Contact Me</h1>

              <p>
                Feel free to send me a message using the form below.
              </p>

              <Form className="contact-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>

                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>

                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="message">
                  <Form.Label>Message</Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                  />
                </Form.Group>

                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </section>
      </Container>
    </main>
  );
}

export default Contact;
