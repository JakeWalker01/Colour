import React from "react";
import { Image, Row } from "react-bootstrap";

const CenteredImageRow = (props: { img: any }) => (
  <Row className="justify-content-md-center">
    <Image src={props.img} fluid />
  </Row>
);
export default CenteredImageRow;
