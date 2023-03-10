import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Cash from "./Pages/Cash";
import PagesPagination from "./Pages/PagesPagination";
import Bonds from "./Pages/Bonds";
import Equities from "./Pages/Equities";
import Property from "./Pages/Property";
function Investment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <h2 className="text-center">Investment Planning</h2>
      <div className="d-flex row">
        <div className="col-lg-6 col-md-12 text-center">
          <p>
            Investment planning allows you to match your financial goals and
            objectives with your financial resources and it begins when you are
            clear on your financial goals and objectives. There are thousands of
            different investments. The most commonly used are cash, equities,
            bonds and property. Each of these have different characteristics and
            a good investment plan will usually contain all of these. <br /> By
            helping you set out clear and measurable goals, we can match the
            most suitable mixture of investments to each specific goal in the
            most efficient way. From the outset it is important to build a
            strong foundation and as your circumstance change, we can help you
            make any necessary adjustments to keep you on track.
          </p>
        </div>
        <div className="col-lg-6 col-md-0 mb-3">
          <img width="100%" src="https://picsum.photos/600/200" alt="" />
        </div>
      </div>
      <h2 className="text-center">Understanding Investment Risk</h2>
      <p>
        A key part of our financial planning process with you is to help you
        understand investment risk and to clearly establish your attitude to
        risk in order to make the right investment choices. Each type of
        investment has its own type of risk. There are a myriad of different
        types of investments but the main ones are Cash, Bonds, Equities (stocks
        and shares) and property.
      </p>
      <Cash />
      <Bonds />
      <Equities />
      <Property />
      <PagesPagination />
      <p className="text-center fw-bold">
        To request for a free consultation, please{" "}
        <Link to={"/consultation"}>Click Here</Link>
      </p>
    </div>
  );
}

export default Investment;
