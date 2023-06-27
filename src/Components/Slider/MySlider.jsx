import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.css";

const MySlider = () => {
  return (
    <Carousel>
      <div>
        <img src="assets/img/slider-1.jpg" alt="Slider" />
        <div className="legend">
          <p>Some text goes here that describes the image</p>
          <a className="btn" href="/">
            <i className="fa fa-shopping-cart"></i>Shop Now
          </a>
        </div>
      </div>
      <div>
        <img src="assets/img/slider-2.jpg" alt="Slider-2" />
        <div className="legend">
          <p>Some text goes here that describes the image</p>
          <a className="btn" href="/">
            <i className="fa fa-shopping-cart"></i>Shop Now
          </a>
        </div>
      </div>
      <div>
        <img src="assets/img/slider-3.jpg" alt="Slider-3" />
        <div className="legend">
          <p>Some text goes here that describes the image</p>
          <a className="btn" href="/">
            <i className="fa fa-shopping-cart"></i>Shop Now
          </a>
        </div>
      </div>
    </Carousel>
  );
};

export default MySlider;
