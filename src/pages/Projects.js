import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <main className="page" id="main-content" tabIndex="-1">
      <Container>
        <header className="page-header projects-header">
          <p className="eyebrow">Projects</p>
          <h1>Selected work, built around clarity and usability.</h1>
          <p className="lead-copy">
            From real-time dashboards to local-first tools, these projects show
            how I approach product structure, responsive UI, state, data, and
            frontend quality.
          </p>
        </header>

        <section className="projects-grid" aria-label="Selected projects">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              index={index}
              featured={index === 0}
              key={project.id}
            />
          ))}
        </section>

        <section className="cta-panel projects-cta" aria-labelledby="projects-cta-title">
          <div>
            <p className="eyebrow">Work together</p>
            <h2 id="projects-cta-title">Interested in what we could build?</h2>
          </div>
          <Button as={Link} to="/contact" variant="primary">
            Get in touch
          </Button>
        </section>
      </Container>
    </main>
  );
}

export default Projects;
