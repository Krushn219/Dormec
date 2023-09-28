import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "./styles.css";

const About = () => {
  return (
    <>
      <Header />
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url(assets/img/carousel-bg-1.jpg)" }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              About Us
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* About Text start */}

      {/* About Text end */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-12 col-lg-12 col-md-12 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <p className="about-text">
                <span>Dormec</span> is a Rajkot based company, manufacturing door closer
                since 2001. We have the latest machines & have developed special
                purpose machines to manufacture the best in door closing
                devices. All the products are made in — house & nothing is out
                sourced. Our products comply with European Standards. We believe
                that quality is never the result of chance, but a sustained
                effort & determination. It is our motto fo give the best at the
                least. We know that you put your reputation on the line when you
                endorse a specific brand of door closer. Consequently we ensure
                that when you choose Dormec, you get the best. All our closers
                are built to provide years of trouble free operation. The
                product range we have is suitable for every need & it ranges
                from the aesthetic for interiors to heavy duty for elevator
                doors, service doors, fire doors and hotel entrance doors. Our
                products are not only best in appearances but also the best in
                efficiency. We believe that quality is never the result of
                chance, but a sustained effort & determination.
              </p>
            </div>
          </div>
        </div>
      </div>

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
                  <h1 className="display-4 text-white mb-0">
                    15 <span className="fs-4">Years</span>
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
              <a href="" className="btn btn-primary py-3 px-5">
                Read More<i className="fa fa-arrow-right ms-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
      <Footer />
    </>
  );
};

export default About;
