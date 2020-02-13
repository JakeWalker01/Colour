import React from "react";
import { Container, Row } from "react-bootstrap";
import CenteredImageRow from "./CenteredImageRow";

const ContentPage = (props: {
  headerText?: String;
  img?: any;
  children?: any;
}) => (
  <Container>
    {props.headerText !== null && (
      <Row className="justify-content-md-center">
        <h3 className="page-header text-uppercase">{props.headerText}</h3>
      </Row>
    )}
    {props.children}
    {props.img !== null && <CenteredImageRow img={props.img} />}
  </Container>
);

export default ContentPage;
