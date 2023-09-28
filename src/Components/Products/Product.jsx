import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Product = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
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
      {/* <!-- Featured Product Start -->  */}
      <div class="featured-product product">
        <div class="container-fluid custom-fluid">
          <div class="section-header">
            <h1>Featured Product</h1>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="col-lg-12 custom-col">
            <div className="product-item">
              <div className="product-title">
                <a href="/">Neno</a>
                <div className="ratting">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="assets/img/Neno.JPG" alt="Product" />
                </a>
                <div className="product-action">
                  <a href="/">
                    <i className="fa fa-cart-plus"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-heart"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              {/* <div className="product-price">
                <h3>
                  <span>$</span>99
                </h3>
                <a className="btn" href="/">
                  <i className="fa fa-shopping-cart"></i>Buy Now
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div>
          <div className="col-lg-12">
            <div className="product-item">
              <div className="product-title">
                <a href="/">Regular</a>
                <div className="ratting">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="assets/img/Regular.JPG" alt="Product" />
                </a>
                <div className="product-action">
                  <a href="/">
                    <i className="fa fa-cart-plus"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-heart"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-lg-12">
            <div className="product-item">
              <div className="product-title">
                <a href="/">Pelmet</a>
                <div className="ratting">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="assets/img/pelmet.JPG" alt="Product" />
                </a>
                <div className="product-action">
                  <a href="/">
                    <i className="fa fa-cart-plus"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-heart"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-lg-12">
            <div className="product-item">
              <div className="product-title">
                <a href="/">Squere</a>
                <div className="ratting">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="assets/img/Squre.JPG" alt="Product" />
                </a>
                <div className="product-action">
                  <a href="/">
                    <i className="fa fa-cart-plus"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-heart"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-lg-12">
            <div className="product-item">
              <div className="product-title">
                <a href="/">Extra</a>
                <div className="ratting">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="assets/img/Extra.JPG" alt="Product" />
                </a>
                <div className="product-action">
                  <a href="/">
                    <i className="fa fa-cart-plus"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-heart"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-lg-12">
            <div className="product-item">
              <div className="product-title">
                <a href="/">Conceald</a>
                <div className="ratting">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="assets/img/Conceald.JPG" alt="Product" />
                </a>
                <div className="product-action">
                  <a href="/">
                    <i className="fa fa-cart-plus"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-heart"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </Slider>
      {/* <!-- Featured Product End -->} */}
    </>
  );
};

export default Product;
