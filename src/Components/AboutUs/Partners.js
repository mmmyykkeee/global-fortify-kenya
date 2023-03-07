import React from "react";
import AAR from "./Resources/AAR.png";
import APA from "./Resources/apa.png";
import CIC from "./Resources/CIC.png";
import HERITAGE from "./Resources/Heritage.png";
import ICELION from "./Resources/icealion.png";
import JUBILLEE from "./Resources/Jubillee.png";
import OLDMUTUAL from "./Resources/old-mutual.png";
import UAP from "./Resources/uap.png";
import "./about.css";

function Partners() {
  return (
    <div className="container text-center">
      <h3 className="headings mt-5">Our Partners</h3>
      <br />
      <p>
        We believe in providing top-notch financial solutions and services to
        our clients and that requires working with the best financial
        institutions available in today's market. We're proud to be associated
        with the following companies offering savings, investments and insurance
        solutions:
      </p>
      <div className=" d-flex row p-4 partners">
        <img className="col-lg-3 col-xs-12 mt-4" src={AAR} alt="k" />
        <img className="col-lg-3 col-xs-12 mt-4" src={APA} alt="k" />
        <img className="col-lg-3 col-xs-12 mt-4" src={CIC} alt="k" />
        <img className="col-lg-3 col-xs-12 mt-4" src={HERITAGE} alt="k" />
        <img className="col-lg-3 col-xs-12 mt-4" src={ICELION} alt="k" />
        <img className="col-lg-3 col-xs-12 mt-4" src={JUBILLEE} alt="k" />
        <img className="col-lg-3 col-xs-12 mt-4" src={OLDMUTUAL} alt="k" />
        <img className="col-lg-3 col-xs-12 mt-4" src={UAP} alt="k" />
      </div>
    </div>
  );
}

export default Partners;
