import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className="nav-list" fluid>
        <Navbar.Brand>Anusha</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/skills" className="nav-link">
              Skills
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            <Link to="/contacts" className="nav-link">
              Contact
            </Link>
            <Link to="/about" className="nav-link">
              About Me
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
