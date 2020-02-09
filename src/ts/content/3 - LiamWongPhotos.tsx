import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import lwphotos from "../../img/LiamWong.jpg";

const LiamWongPhotos = () => (
  <Container>
    <Row>
      <Image src={lwphotos} />
    </Row>
  </Container>
);

export default LiamWongPhotos;
