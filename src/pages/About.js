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
      <section className="about-intro">
        <h1>About Me</h1>

        <p>
          I'm a Frontend Developer who enjoys building clean,
          responsive, and user-friendly web applications.
        </p>
      </section>

      <section className="about-info">
        <h2>Who Am I?</h2>

        <p>
          I enjoy working with React and JavaScript and learning
          more about modern frontend development.
        </p>
      </section>

      <section className="skills-section">
        <h2>My Skills</h2>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;