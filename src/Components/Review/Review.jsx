import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./review.css";

const Review = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
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
      {/* <!-- Review Start --> */}
      <div className="review-main">
        <Slider {...settings}>
          <div>
            <div className="review mt-4">
              <div className="container-fluid">
                <div className="row align-items-center review-slider normal-slider">
                  <div className="col-md-12">
                    <div className="review-slider-item">
                      <div className="review-img">
                        <img src="assets/img/review-1.jpg" alt="Review" />
                      </div>
                      <div className="review-text">
                        <h2>Customer Name</h2>
                        <h3>Profession</h3>
                        <div className="ratting">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Curabitur vitae nunc eget leo finibus luctus et
                          vitae lorem
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="review mt-4">
              <div className="container-fluid">
                <div className="row align-items-center review-slider normal-slider">
                  <div className="col-md-12">
                    <div className="review-slider-item">
                      <div className="review-img">
                        <img src="assets/img/review-2.jpg" alt="Review" />
                      </div>
                      <div className="review-text">
                        <h2>Customer Name</h2>
                        <h3>Profession</h3>
                        <div className="ratting">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Curabitur vitae nunc eget leo finibus luctus et
                          vitae lorem
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="review mt-4">
              <div className="container-fluid">
                <div className="row align-items-center review-slider normal-slider">
                  <div className="col-md-12">
                    <div className="review-slider-item">
                      <div className="review-img">
                        <img src="assets/img/review-3.jpg" alt="Review" />
                      </div>
                      <div className="review-text">
                        <h2>Customer Name</h2>
                        <h3>Profession</h3>
                        <div className="ratting">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Curabitur vitae nunc eget leo finibus luctus et
                          vitae lorem
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Review;
