import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-content">
          <span className="footer-brand">Personal Website</span>
          <span className="footer-divider" aria-hidden="true" />
          <p>© 2026 Personal Website</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
