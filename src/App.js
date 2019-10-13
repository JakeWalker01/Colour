import React, { useState } from "react";
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

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
    console.log("HandleSelect");
  };
  return (
    <Container className="App">
      <Carousel
        slide={false}
        index={index}
        direction={direction}
        nextIcon={nextIcon}
        prevIcon={prevIcon}
        onSelect={handleSelect}
      >
        <Carousel.Item className="Tile">
          <MainTitle />
          <Carousel.Caption>
            <SubHeader />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="Tile">
          <MainTitle />
          <Carousel.Caption>
            <SubHeader />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="Tile">
          <MainTitle />
          <Carousel.Caption>
            <SubHeader />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default App;
