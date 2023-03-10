import React from "react";
import "./pages.css";

const Cards = () => {
  return (
    <div className="container text-center d-flex row p-0">
      <div className="col-lg-6">
        <h2>Cash</h2>
        <p>
          Cash is considered to have the lowest degree of risk, particularly
          over the short term, as it is immediately liquid and does not present
          the risk of capital loss. However, cash does carry inflation risk
          which means that if the rate of interest being paid is lower than the
          escalation in the price of goods and services, the purchasing power of
          your cash is decreasing.
        </p>
      </div>
      <div className="col-lg-6 col-md-12 hide-image">
        <img width={"100%"} src="https://picsum.photos/600/200" alt="" />
      </div>
    </div>
  );
};

export default Cards;
