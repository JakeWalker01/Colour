import React, { useState } from "react";
import MainTitle from "./MainTitle";
import SubHeader from "./SubHeader";
import { Fade, Container } from "react-bootstrap";

const FadingTitle = () => {
  const [open, setOpen] = useState(true);
  const fadeout = () => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  console.log({ open });
  fadeout();
  return (
    <Fade in={open} timeout={10000} unmountOnExit={true}>
      <Container className="fadeTitle">
        <MainTitle />
        <SubHeader />
      </Container>
    </Fade>
  );
};

export default FadingTitle;
