import React, { useState } from "react";

import MainTitle from "./MainTitle";
import SubHeader from "./SubHeader";
import Carousel from "react-bootstrap/Carousel";

import left from "../img/ArrowLeft.png";
import right from "../img/ArrowRight.png";
import DummyTile from "./Dummy";

const ShowcaseCarousel = () => {
  const prevIcon = <img className="navArrows" src={left} alt="Previous" />;
  const nextIcon = <img className="navArrows" src={right} alt="Next" />;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
    console.log("HandleSelect");
  };
  return (
    <Carousel
      slide={false}
      activeIndex={index}
      nextIcon={nextIcon}
      prevIcon={prevIcon}
      onSelect={handleSelect}
    >
      <Carousel.Item className="Tile">
        <DummyTile />
        <Carousel.Caption>
          <div className="SubHeader">Tile 1</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Tile">
        <MainTitle />
        <Carousel.Caption>
          <SubHeader />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Tile">
        <DummyTile />
        <Carousel.Caption>
          <div className="SubHeader">Tile 3</div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ShowcaseCarousel;
