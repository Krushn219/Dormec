import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    // rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
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
        <div className="width:500px, height:500px">
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
    </>
  );
};

export default MySlider;
