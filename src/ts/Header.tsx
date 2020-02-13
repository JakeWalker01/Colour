import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navver = (props: { href: string; text: String }) => (
  <NavDropdown.Item>
    <Link to={props.href}>{props.text}</Link>
  </NavDropdown.Item>
);

const Header = () => (
  <div>
    <Navbar bg="light" variant="light" className="Header">
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <NavDropdown title="Pages" id="basic-nav-dropdown">
          <Navver href="/liamwong" text="Liam Wong" />
          <Navver href="/liamwongphotos" text="Liam Wong Photos" />
          <Navver href="/liamwongphotoshop" text="Liam Wong Photoshop" />
          <NavDropdown.Divider />
          <Navver href="/troypaiva" text="Troy Paiva" />
          <NavDropdown.Divider />
          <Navver href="/eugenetumusiime" text="Eugene Tumusiime" />
          <NavDropdown.Divider />
          <Navver href="/shootone" text="Shoot One" />
          <Navver href="/tunneledit" text="Tunnel Edit" />
          <Navver href="/finalpiece" text="Final Piece" />
        </NavDropdown>
      </Nav>
    </Navbar>
  </div>
);

export default Header;
