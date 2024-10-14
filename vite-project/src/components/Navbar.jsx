import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="" variant="white">
        <Container fluid>
          <Navbar.Brand href="#home">Aigle Fintech Auto</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">+225 01 02 03 04 05</Nav.Link>
            <Nav.Link href="#link">
              Cocody, près de la Boulangerie Flaman
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
