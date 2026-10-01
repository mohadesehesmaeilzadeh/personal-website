import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="page" id="main-content" tabIndex="-1">
      <Container>
        <section className="not-found" aria-labelledby="not-found-title">
          <p className="eyebrow">404 error</p>
          <h1 id="not-found-title">This page couldn’t be found.</h1>
          <p>The link may be outdated, or the page may have moved.</p>
          <Button as={Link} to="/" variant="primary">
            Back to home
          </Button>
        </section>
      </Container>
    </main>
  );
}

export default NotFound;
