import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function About() {
  const skillGroups = [
    {
      title: "Core frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React"],
    },
    {
      title: "Workflow",
      skills: ["Git", "GitHub", "Responsive design", "Component architecture"],
    },
    {
      title: "Quality",
      skills: ["Accessibility", "Semantic HTML", "Cross-device testing"],
    },
  ];

  return (
    <main className="page" id="main-content" tabIndex="-1">
      <Container>
        <header className="page-header">
          <p className="eyebrow">About me</p>
          <h1>Building for people, learning with every project.</h1>
          <p className="lead-copy">
            I’m a frontend developer who enjoys turning ideas into clear,
            responsive, and approachable web experiences.
          </p>
        </header>

        <section className="about-story" aria-labelledby="story-title">
          <Row className="gy-4 gx-lg-5">
            <Col lg={4}>
              <h2 id="story-title">My approach</h2>
            </Col>
            <Col lg={8}>
              <div className="prose">
                <p>
                  I work with React and JavaScript to build interfaces that are
                  straightforward to use and dependable across screen sizes. I
                  enjoy shaping both the visible details and the component
                  structure behind them.
                </p>
                <p>
                  My process starts with the content and the user’s goal. From
                  there, I focus on semantic structure, consistent styling,
                  accessible interactions, and careful responsive behavior.
                </p>
              </div>
            </Col>
          </Row>
        </section>

        <section className="skills-section" aria-labelledby="skills-title">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2 className="section-title" id="skills-title">
                Skills I use to bring interfaces together.
              </h2>
            </div>
          </div>

          <Row className="g-3">
            {skillGroups.map((group, index) => (
              <Col md={6} lg={4} key={group.title}>
                <article className="skill-card h-100">
                  <span className="card-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h3>{group.title}</h3>
                  <ul className="skill-list">
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              </Col>
            ))}
          </Row>
        </section>

        <section className="cta-panel" aria-labelledby="about-cta-title">
          <div>
            <p className="eyebrow">Let’s connect</p>
            <h2 id="about-cta-title">Have a project or an idea in mind?</h2>
          </div>
          <Button as={Link} to="/contact" variant="primary">
            Start a conversation
          </Button>
        </section>
      </Container>
    </main>
  );
}

export default About;
