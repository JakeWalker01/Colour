import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import placeholder_lansdcape from "../../img/placeholder_landscape.jpg";

const Home = () => (
  <Row>
    <Col>
      <Image src={placeholder_lansdcape} fluid />
    </Col>
  </Row>
);
export default Home;
