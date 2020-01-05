import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";

import { Col, Container, Image, Row } from "react-bootstrap";
import placeholder_portrait from "../img/placeholder_portrait.jpg";

import placeholder_lansdcape from "../img/placeholder_landscape.jpg";
import FadingTitle from "./FadingTitle";
import Header from "./Header";

const App = () => (
  <Container className="App">
    <Header />
    {/* <ShowcaseCarousel />
    <ThumbnailPanel /> */}
    <Row>
      <Col>
        <Image src={placeholder_lansdcape} fluid />
      </Col>
    </Row>
    <Row>
      <Col>
        <Image src={placeholder_portrait} fluid />
      </Col>
      <Col>
        <Image src={placeholder_portrait} fluid />
      </Col>
    </Row>
    <FadingTitle />
    <div>Bottom Navigation</div>
  </Container>
);

export default App;
