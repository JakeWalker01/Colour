import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainTitle from "./MainTitle";
import SubHeader from "./SubHeader";

import "./App.css";
import Container from "react-bootstrap/Container";

import Carousel from "react-bootstrap/Carousel";

import left from "./img/ArrowLeft.png";
import right from "./img/ArrowRight.png";

function App() {
  const prevIcon = <img className="navArrows" src={left} alt="Previous" />;
  const nextIcon = <img className="navArrows" src={right} alt="Next" />;
  return (
    <Container className="App">
      <Carousel nextIcon={nextIcon} prevIcon={prevIcon} activeIndex={2}>
        <Carousel.Item>
          <div>Page One</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>Page Two</div>
        </Carousel.Item>
        <Carousel.Item className="">
          <MainTitle />
          <SubHeader />
        </Carousel.Item>
        <Carousel.Item>
          <div>Page Four</div>
        </Carousel.Item>
        <Carousel.Item>
          <div>Page Five</div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default App;
