import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavDropdown = (props: { href: string; text: String }) => (
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
          <MyNavDropdown href="/statementofintent" text="Statement Of Intent" />
          <NavDropdown.Divider />
          <MyNavDropdown href="/liamwong" text="Liam Wong" />
          <MyNavDropdown href="/liamwongphotos" text="Liam Wong Photos" />
          <MyNavDropdown href="/liamwongphotoshop" text="Liam Wong Photoshop" />
          <NavDropdown.Divider />
          <MyNavDropdown href="/troypaiva" text="Troy Paiva" />
          <NavDropdown.Divider />
          <MyNavDropdown href="/eugenetumusiime" text="Eugene Tumusiime" />
          <NavDropdown.Divider />
          <MyNavDropdown href="/bolynetsieng" text="Bolynet Sieng" />
          <NavDropdown.Divider />
          <MyNavDropdown href="/mathewguidophotos" text="Mathew Guido Photos" />
          <NavDropdown.Divider />
          <MyNavDropdown href="/sdroadevaluation" text="SD Road Evaluation" />
          <NavDropdown.Divider />
          <MyNavDropdown href="/shootone" text="Shoot One" />
          <MyNavDropdown href="/tunneledit" text="Tunnel Edit" />
          <MyNavDropdown href="/finalpiece" text="Final Piece" />
        </NavDropdown>
      </Nav>
    </Navbar>
  </div>
);

export default Header;
