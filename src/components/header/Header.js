import "./Header.css";
import HeaderLogo from "../../image/HeaderLogo.png";

import SearchIcon from "@mui/icons-material/Search";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    <header>
      <div className="container header">
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={HeaderLogo} alt="logoHeader" height="30" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Features</Nav.Link>
                <Nav.Link href="#">Pricing</Nav.Link>
                <Nav.Link href="#">Gallery</Nav.Link>
                <Nav.Link href="#">Team</Nav.Link>
                <Nav.Link onClick="">
                  <SearchIcon />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}
