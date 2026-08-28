import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <p className="hero-subtitle">Hello, I'm</p>

        <h1>Mohadeseh</h1>

        <h2>Frontend Developer</h2>

        <p className="hero-description">
          I enjoy building modern and user-friendly web applications
          with JavaScript and React.
        </p>

        <div className="hero-buttons">
          <Link to="/about" className="primary-button">
            About Me
          </Link>

          <Link to="/contact" className="secondary-button">
            Contact Me
          </Link>
        </div>
      </section>

      <section className="home-about">
        <h2>Welcome to My Website</h2>

        <p>
          This is my personal website where you can learn more about me,
          my skills, and how to contact me.
        </p>
      </section>
    </main>
  );
}

export default Home;