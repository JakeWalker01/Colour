import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => (
  <Navbar bg="light" variant="light" className="Header">
    {/*<Navbar.Brand href="#home">Navbar with text</Navbar.Brand>*/}
    <Nav className="mr-auto">
      <Nav.Link className="NavLink" href="#home">
        Home
      </Nav.Link>
      {/* <Navbar.Text>
        Signed in as: <a href="#login">Jake Walker</a>
      </Navbar.Text> */}
    </Nav>
  </Navbar>
);

export default Header;
