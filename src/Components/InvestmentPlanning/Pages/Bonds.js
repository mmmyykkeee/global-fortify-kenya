import React from "react";
import PagesPagination from "./PagesPagination";
import "./pages.css";

function Bonds() {
  return (
    <div className="container">
      <div className="container text-center d-flex row mt-4 p-0">
        <div className="col-lg-6 hide-image">
          <img width={"100%"} src="https://picsum.photos/600/300" alt="" />
        </div>
        <div className="col-lg-6">
          <h2>Bonds</h2>
          <p>
            Bonds are effectively debt. Government bonds are commonly referred
            to as gilts or treasuries. When you buy a Government bond you are
            lending money to a Government in return for a fixed rate of
            interest. These are considered higher risk than cash but less risky
            than equities. Corporate Bonds work on the same principle but carry
            a higher degree of risk and therefore a higher fixed rate of
            interest. Bonds are subject to interest rate risk and inflation
            risk. If the interest rate rises then the face value of a bond will
            decrease and if the price of goods and services escalates above the
            fixed rate of interest then the real value of your investment will
            erode. If, for example, you bought a 10-year government bond during
            a low interest rate environment and sold it before its maturity date
            then you could suffer a significant capital loss.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bonds;
