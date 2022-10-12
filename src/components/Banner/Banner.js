import React from "react";
import { Carousel } from "react-bootstrap";
import img from "../../images/dev-img.png";

const Banner = () => {
  return (
    <Carousel className="bg-info w-100 h-50 mb-5">
      <Carousel.Item style={{ display: "flex" }}>
        <img className="w-25 h-25 " src={img} alt="First slide" />
        <Carousel.Caption className="mb-5">
          <h2>Test Yourself</h2>
          <h5>
            You can justify yourself in web-development by practising these
            quizes..
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
