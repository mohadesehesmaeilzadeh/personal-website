import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slideshow from "../components/Slideshow";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <p className="hero-subtitle">Hello, I'm</p>

              <h1>Mohadeseh</h1>

              <h2>Frontend Developer</h2>

              <p className="hero-description">
                I enjoy building modern and user-friendly web applications
                with JavaScript and React.
              </p>

              <div className="hero-buttons">
                <Button as={Link} to="/about" variant="primary">
                  About Me
                </Button>

                <Button as={Link} to="/contact" variant="outline-primary">
                  Contact Me
                </Button>
              </div>
            </Col>

            <Col lg={5}>
              <Card className="hero-card">
                <Card.Body>
                  <p className="eyebrow">Portfolio Focus</p>
                  <h3>Clean and Responsive React Interfaces</h3>
                  <p>
                    This personal website shares my introduction, skills, and
                    contact form in a polished frontend layout.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-about">
        <Container>
          <Card className="intro-card">
            <Card.Body>
              <h2>Welcome to My Website</h2>

              <p>
                This is my personal website where you can learn more about me,
                my skills, and how to contact me.
              </p>
            </Card.Body>
          </Card>

          <Slideshow />
        </Container>
      </section>
    </main>
  );
}

export default Home;
