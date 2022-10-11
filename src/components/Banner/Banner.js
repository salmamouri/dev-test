import React from "react";
import { Carousel } from "react-bootstrap";
import img from "../../images/dev-img.png";

const Banner = () => {
  return (
    <Carousel className="bg-info">
      <Carousel.Item style={{ display: "flex" }}>
        <img className="w-25 h-25 " src={img} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
