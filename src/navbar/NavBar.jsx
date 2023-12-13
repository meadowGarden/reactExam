import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Link />
        <Navbar.Brand href="/">home</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link href="/basiccomponent">2.1</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
