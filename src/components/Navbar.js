import { useEffect, useState } from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  return (
    <BootstrapNavbar
      expand="lg"
      className="site-navbar"
      sticky="top"
      variant="dark"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/" aria-label="Mohadeseh, home">
          <span className="brand-mark" aria-hidden="true">
            M
          </span>
          <span>Mohadeseh</span>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle
          aria-controls="main-navigation"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        />

        <BootstrapNavbar.Collapse id="main-navigation">
          <Nav className="ms-auto" aria-label="Primary navigation">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>

            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
