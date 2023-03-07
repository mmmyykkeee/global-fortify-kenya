import React from "react";
import './cards.css'

const Cards = () => {
  return (
    <div className="container my-5  d-flex row mx-auto">
      <div className="cards border border-danger col-lg-3 col-sm-12 col-md-5 my-2 mw-25 rounded text-center">
        <div>
          <h6>Cash</h6>
          <p>
            Cash is considered to have the lowest degree of risk, particularly
            over the short term, as it is immediately liquid and does not
            present the risk of capital loss. However, cash does carry inflation
            risk which means that if the rate of interest being paid is lower
            than the escalation in the price of goods and services, the
            purchasing power of your cash is decreasing.
          </p>
        </div>
      </div>
      <div className="cards border border-danger col-lg-3 col-sm-12 col-md-5 my-2 mw-25 rounded text-center">
        <div>
          <h6>Bonds</h6>
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
      <div className="cards border border-danger col-lg-3 col-sm-12 col-md-5 my-2 mw-25 rounded text-center">
        <div>
          <h6>Equities (Stocks and Shares)</h6>
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
      </div>
      <div className="cards border border-danger col-lg-3 col-sm-12 col-md-5 my-2 mw-25 rounded text-center">
        <div>
          <h6>Property</h6>
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
};

export default Cards;
