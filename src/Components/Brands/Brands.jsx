import React from "react";
import Slider from "react-slick";

const Brands = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    // rtl: true,
  };

  return (
    <>
      {/* <!-- Brand Start --> */}
      <div className="brand">
        <div className="container-fluid">
          <Slider {...settings}>
            <div className="brand-item">
              <img src="assets/img/brand-1.png" alt="" />
            </div>
            <div className="brand-item">
              <img src="assets/img/brand-2.png" alt="" />
            </div>
            <div className="brand-item">
              <img src="assets/img/brand-3.png" alt="" />
            </div>
            <div className="brand-item">
              <img src="assets/img/brand-4.png" alt="" />
            </div>
            <div className="brand-item">
              <img src="assets/img/brand-5.png" alt="" />
            </div>
            <div className="brand-item">
              <img src="assets/img/brand-6.png" alt="" />
            </div>
          </Slider>
        </div>
      </div>
      {/* <!-- Brand End --> */}
    </>
  );
};

export default Brands;
