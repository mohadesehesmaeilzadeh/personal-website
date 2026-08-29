import { Badge, Card, Col, Container, Row } from "react-bootstrap";

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "MUI",
  ];

  return (
    <main className="about">
      <Container>
        <section className="page-header text-center">
          <p className="eyebrow">About</p>
          <h1>About Me</h1>

          <p>
            I'm a Frontend Developer who enjoys building clean,
            responsive, and user-friendly web applications.
          </p>
        </section>

        <Row className="g-4">
          <Col lg={5}>
            <Card className="content-card h-100">
              <Card.Body>
                <h2>Who Am I?</h2>

                <p>
                  I enjoy working with React and JavaScript and learning
                  more about modern frontend development.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={7}>
            <Card className="content-card h-100">
              <Card.Body>
                <h2>My Skills</h2>

                <div className="skills-list">
                  {skills.map((skill) => (
                    <Badge bg="light" text="dark" className="skill-badge" key={skill}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default About;
