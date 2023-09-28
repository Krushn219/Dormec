import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "./styles.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* <!-- Service Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="d-flex bg-light py-2 px-2">
                <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                <div className="pl-4">
                  <h5 className="mb-3">OUR VISION</h5>
                  <p>
                    With a clear vision of customer satisfaction our prime
                    concern has always been to keep oue customers at a leading
                    edge of development both technologically and economically.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="d-flex bg-light py-2 px-2">
                <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                <div className="pl-4">
                  <h5 className="mb-3">OUR MISSION</h5>
                  <p>
                    Our Perpose Leads to the advancement of Technology in Door
                    Closer and Thus Contributing the Confort and Enhancement to
                    the Existence Of Human Life.
                  </p>
                  {/* <a className="text-secondary border-bottom" href="">
                    Read More
                  </a> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="d-flex bg-light py-2 px-2">
                <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                <div className="pl-4">
                  <h5 className="mb-3">CLIENT SATISFACTION</h5>
                  <p>
                    Client Satisfaction is the primary motto of our firm and
                    strive to attain and maintain same. We offer customized
                    solutions to the patrons so as to fulfill the diverse
                    requirements of a wide client base.
                  </p>
                  {/* <a className="text-secondary border-bottom" href="">
                    Read More
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}
      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
              <div
                className="position-relative h-100 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="assets/img/about.jpg"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
                <div
                  className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5"
                  style={{ background: "rgba(0, 0, 0, .08)" }}
                >
                  <h1 className="display-4 mb-0" style={{color:"#18588d"}}>
                    5 <span className="fs-4">Years</span>
                  </h1>
                  <h4 className="text-white">Experience</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h6 className="text-primary text-uppercase">// About Us //</h6>
              <h1 className="mb-4">
                <span className="text-primary">Dormec</span> Is The Best Place
                For Your Home Decors
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row g-4 mb-3 pb-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">01</span>
                    </div>
                    <div className="ps-3">
                      <h6>Professional & Expert</h6>
                      <span>Diam dolor diam ipsum sit amet diam et eos</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">02</span>
                    </div>
                    <div className="ps-3">
                      <h6>Quality Servicing Center</h6>
                      <span>Diam dolor diam ipsum sit amet diam et eos</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">03</span>
                    </div>
                    <div className="ps-3">
                      <h6>Awards Winning Workers</h6>
                      <span>Diam dolor diam ipsum sit amet diam et eos</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link to={"/about"} className="btn btn-primary py-3 px-5">
                Read More<i className="fa fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
    </>
  );
};

export default About;
