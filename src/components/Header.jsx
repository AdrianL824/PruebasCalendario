import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/css/Header.css";

function Header() {
  return (
    <>
      <Navbar className="navbar" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Sistema de reserva de ambientes</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Calendario</Nav.Link> */}
            <Nav.Link href="/reservation">Reserva</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
