function ExternalLabel() {
  return <span className="visually-hidden"> (opens in a new tab)</span>;
}

function ProjectCard({ project, index, featured = false, headingLevel = 2 }) {
  const Heading = `h${headingLevel}`;

  return (
    <article
      className={`project-card${featured ? " project-card--featured" : ""}`}
    >
      <div className="project-card-media">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading={featured ? "eager" : "lazy"}
          decoding="async"
        />
      </div>

      <div className="project-card-content">
        <div className="project-card-meta">
          <span className="project-number" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{project.category}</span>
        </div>

        <Heading>{project.title}</Heading>
        <p>{project.description}</p>

        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-actions">
          {project.liveUrl && (
            <a
              className="project-link project-link-primary"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live demo <span aria-hidden="true">↗</span>
              <ExternalLabel />
            </a>
          )}
          <a
            className="project-link"
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            View source <span aria-hidden="true">↗</span>
            <ExternalLabel />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
