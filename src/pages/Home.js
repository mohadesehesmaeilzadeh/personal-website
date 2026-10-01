import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Home() {
  return (
    <main className="home" id="main-content" tabIndex="-1">
      <section className="hero">
        <Container>
          <Row className="align-items-center gy-5 gx-lg-5">
            <Col lg={7}>
              <p className="eyebrow hero-eyebrow">
                <span className="status-dot" aria-hidden="true" />
                Frontend developer
              </p>

              <h1>
                I build clean, responsive interfaces for the modern web.
              </h1>

              <p className="hero-description lead-copy">
                Hi, I’m Mohadeseh. I turn ideas into accessible, dependable
                experiences with React, JavaScript, and thoughtful CSS.
              </p>

              <div className="hero-buttons">
                <Button as={Link} to="/projects" variant="primary">
                  View my work
                </Button>

                <Button as={Link} to="/contact" variant="outline-primary">
                  Get in touch
                </Button>
              </div>
            </Col>

            <Col lg={5}>
              <div className="hero-panel" aria-label="Development focus">
                <div className="panel-topbar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <p className="panel-label">Currently focused on</p>
                <h2>Useful details. Clear interactions. Solid code.</h2>
                <ul className="focus-list">
                  <li>Responsive React interfaces</li>
                  <li>Accessible, semantic experiences</li>
                  <li>Maintainable frontend foundations</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section" aria-labelledby="about-preview-title">
        <Container>
          <Row className="align-items-start gy-4 gx-lg-5">
            <Col lg={4}>
              <p className="eyebrow">About me</p>
              <h2 className="section-title" id="about-preview-title">
                Thoughtful frontend work, from structure to finish.
              </h2>
            </Col>
            <Col lg={{ span: 7, offset: 1 }}>
              <p className="section-copy">
                I care about the details that make a website feel effortless:
                clear hierarchy, responsive layouts, useful feedback, and code
                that stays easy to understand.
              </p>
              <Link className="text-link" to="/about">
                More about me <span aria-hidden="true">→</span>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section-tinted" aria-labelledby="work-title">
        <Container>
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title" id="work-title">
                Built with purpose and attention to detail.
              </h2>
            </div>
            <Link className="text-link" to="/projects">
              All projects <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="projects-grid home-projects-grid">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard
                project={project}
                index={index}
                headingLevel={3}
                key={project.id}
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Home;
