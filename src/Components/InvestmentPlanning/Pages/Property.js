import React from "react";
import PagesPagination from "./PagesPagination";
import "./pages.css";

function Property() {
  return (
    <div>
      <div className="container text-center d-flex row mt-4">
        <div className="col-lg-6 hide-image">
          <img width={"100%"} src="https://picsum.photos/600/200" alt="" />
        </div>
        <div className="col-lg-6">
          <h2>Property</h2>
          <p>
            Commercial or buy to let property is an increasingly popular asset
            class as it is seen as being tangible and easy to understand.
            However, this asset class has significant short term risk as it is
            not instantly tradable in the same way that cash, bonds and equities
            are and values can be eroded by increases in interest rates, rental
            voids, bad debts and cyclical downturns in value. The risks
            associated with property reduce over the longer term.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Property;
