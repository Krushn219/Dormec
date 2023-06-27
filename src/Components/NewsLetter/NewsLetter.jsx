import React from "react";

const NewsLetter = () => {
  return (
    <>
      {/* <!-- Newsletter Start --> */}
      <div class="newsletter mt-4">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <h1>Subscribe Our Newsletter</h1>
            </div>
            <div class="col-md-6">
              <div class="form">
                <input type="email" value="Your email here" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Newsletter End --> */}
    </>
  );
};

export default NewsLetter;
