import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <Navbar bg="light" variant="light" className="Header">
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link className="nav-link" to="/liamwong">
          Liam Wong
        </Link>
        <Link className="nav-link" to="/liamwongphotos">
          Liam Wong Photos
        </Link>
        <Link className="nav-link" to="/liamwongphotoshop">
          Liam Wong Photoshop
        </Link>
        <Link className="nav-link" to="/troypaiva">
          Troy Paiva
        </Link>
        <Link className="nav-link" to="/eugenetumusiime">
          Eugene Tumusiime
        </Link>
        <Link className="nav-link" to="/shootone">
          Shoot One
        </Link>
        <Link className="nav-link" to="/tunneledit">
          Tunnel Edit
        </Link>
        <Link className="nav-link" to="/finalpiece">
          Final Piece
        </Link>
      </Nav>
    </Navbar>
  </div>
);

export default Header;
