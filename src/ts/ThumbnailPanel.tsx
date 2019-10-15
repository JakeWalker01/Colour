import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import home from "../img/colour-home.jpg";

const MyCell = () => (
  <Col sm={true}>
    <Image src={home} thumbnail />
  </Col>
);

const MyRow = () => (
  <Row>
    <MyCell />
    <MyCell />
  </Row>
);
const ThumbnailPanel = () => (
  <Container className="thumbnails">
    <MyRow />
    <MyRow />
  </Container>
);

export default ThumbnailPanel;
