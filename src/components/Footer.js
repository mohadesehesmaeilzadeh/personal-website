import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-content">
          <div>
            <Link className="footer-brand" to="/">
              Mohadeseh
            </Link>
            <p>Frontend developer building thoughtful web experiences.</p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <a
              href="https://github.com/mohadesehesmaeilzadeh"
              target="_blank"
              rel="noreferrer"
            >
              GitHub<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </nav>
        </div>

        <div className="footer-meta">
          <p>© {currentYear} Mohadeseh. Built with React.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
