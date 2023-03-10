import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="bg d-flex align-items-center mt-2">
      <img
        className="animate"
        src="https://www.charings.com/wp-content/uploads/2020/03/banner-shape-05.png"
        alt=""
      />
      <img
        className="animate1"
        src="https://www.charings.com/wp-content/uploads/2020/03/banner-shape-05.png"
        alt=""
      />

      <img
        className="animate3"
        src="      https://www.charings.com/wp-content/uploads/2020/03/banner-shape-04.png
"
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h1 className="animate__animated animate__slideInLeft animate__delay-0.2s">
              Get Insurance for almost anything you need
            </h1>
            <h6 className="animate__animated animate__slideInLeft animate__delay-1s main-page-text fw-bold">
              Global Fortify Financial Planning Consultants and Insurance Agency
              is a highly respected company that specializes in offering
              financial planning and insurance services to clients around the
              world. Their team of experts works closely with clients to deliver
              tailored solutions that meet their specific needs and objectives.
              The company is committed to transparency, honesty, and integrity.
             
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
