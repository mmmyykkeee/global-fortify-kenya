import React from "react";
import PagesPagination from "./PagesPagination";
import "./pages.css";

function Equities() {
  return (
    <div>
      <div className="container text-center d-flex row">
        <div className="col-lg-6">
          <h2>Equities (Stocks and Shares)</h2>
          <p>
            Equities are effectively shares in a company and are considered to
            have the highest degree of risk, particularly short term risk. The
            degree of risk can vary dramatically with major market Blue Chip
            equities considered less risky than small cap emerging market
            equities. Equities are subject to a variety of risks with major
            market equities considered less risky than emerging market equities.
            The risks associated with investing in equities reduce over time and
            in general have the capacity to out-perform cash and bonds over the
            longer term.
          </p>
        </div>
        <div className="col-lg-6">
          <img width={"100%"} src="https://picsum.photos/600/250" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Equities;
