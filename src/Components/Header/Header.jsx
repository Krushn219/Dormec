import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <!-- Top bar Start --> */}
      <div className="top-bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <i className="fa fa-envelope"></i>
              dormecllp@email.com
            </div>
            <div className="col-sm-6">
              <i className="fa fa-phone-alt"></i>
              +91 97262 94830
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Top bar End --> */}

      {/* <!-- Nav Bar Start --> */}
      <div className="nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a href="/" className="navbar-brand">
              Dormec
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto">
                <Link to={"/"} className="nav-item nav-link">
                  Home
                </Link>
                <Link to={"/about"} className="nav-item nav-link">
                  About
                </Link>
                <Link to={"/contect"} className="nav-item nav-link">
                  Contect Us
                </Link>

                {/* <div className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    More Pages
                  </a>
                  <div className="dropdown-menu">
                    <a href="wishlist.html" className="dropdown-item">
                      Wishlist
                    </a>
                    <a href="login.html" className="dropdown-item">
                      Login & Register
                    </a>
                    <a href="contact.html" className="dropdown-item">
                      Contact Us
                    </a>
                  </div>
                </div> */}
              </div>
              <div className="navbar-nav ml-auto">
                <div className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    User Account
                  </a>
                  <div className="dropdown-menu">
                    <a href="/" className="dropdown-item dropdown-item-custom">
                      Login
                    </a>
                    <a href="/" className="dropdown-item">
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Nav Bar End -->       */}

      {/* <!-- Bottom Bar Start --> */}
      <div className="bottom-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="logo">
                <NavLink>
                  {/* <img src="llogo.png" alt="Logo" /> */}
                  <h2>Dormec</h2>
                </NavLink>
              </div>
            </div>
            <div className="col-md-6">
              <div className="search">
                <input type="text" placeholder="Search" />
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="user">
                <a href="wishlist.html" className="btn wishlist">
                  <i className="fa fa-heart"></i>
                  <span>(0)</span>
                </a>
                <a href="cart.html" className="btn cart">
                  <i className="fa fa-shopping-cart"></i>
                  <span>(0)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Bottom Bar End -->    */}
    </>
  );
};

export default Header;
