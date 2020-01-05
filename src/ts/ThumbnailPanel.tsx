import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import home from "../img/colour-home.jpg";
import liam_wong from "../img/liam_wong_to_ky_oo_editorial_5.jpg";

const MyCell = () => (
  <Col sm={true}>
    <Image src={liam_wong} thumbnail />
  </Col>
);

const MyRow = () => (
  <Row>
    <MyCell />
  </Row>
);
const ThumbnailPanel = () => (
  <Container className="thumbnails">
    <MyRow />
  </Container>
);

export default ThumbnailPanel;
