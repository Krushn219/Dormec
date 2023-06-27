import React from "react";

const Category = () => {
  return (
    <>
      {/* <!-- Category Start--> */}
      <div className="category">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="category-item ch-400">
                <img src="assets/img/category-3.jpg" alt="" />
                <a className="category-name" href="/">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-item ch-250">
                <img src="assets/img/category-4.jpg" alt="" />
                <a className="category-name" href="/">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
              <div className="category-item ch-150">
                <img src="assets/img/category-5.jpg" alt="" />
                <a className="category-name" href="/">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-item ch-150">
                <img src="assets/img/category-6.jpg" alt="" />
                <a className="category-name" href="/">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
              <div className="category-item ch-250">
                <img src="assets/img/category-7.jpg" alt="" />
                <a className="category-name" href="/">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-item ch-400">
                <img src="assets/img/category-8.jpg" alt="" />
                <a className="category-name" href="/">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Category End-->  */}
    </>
  );
};

export default Category;
