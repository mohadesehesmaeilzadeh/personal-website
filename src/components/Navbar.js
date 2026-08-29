import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <BootstrapNavbar
      expand="lg"
      className="site-navbar"
      sticky="top"
      variant="dark"
    >
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/">
          Personal Website
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="main-navigation" />

        <BootstrapNavbar.Collapse id="main-navigation">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about">
              About
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
