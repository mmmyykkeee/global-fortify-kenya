import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards/Cards'
function Investment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <h2 className="text-center">Investment Planning</h2>
      <div className="d-flex">
        <div className="col-lg-7 col-md-12">
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
          <p>
            To request for a free consultation, please{" "}
            <Link to={"/consultation"}>Click Here</Link>
          </p>
        </div>
        <div className="col-lg-4 col-md-0 mx-4 mb-3">
          <img
            width="100%"
            src="https://img.freepik.com/free-photo/desk-scene-with-laptop_23-2147626521.jpg?w=740&t=st=1678027714~exp=1678028314~hmac=486d2c84a843aa119db2f36598eff502d7d9f1be0c74e2a6418a734d2f9b6612"
            alt=""
          />
        </div>
      </div>
      <h2 className='text-center'>Understanding Investment Risk</h2>
      <p>
        A key part of our financial planning process with you is to help you
        understand investment risk and to clearly establish your attitude to
        risk in order to make the right investment choices. Each type of
        investment has its own type of risk. There are a myriad of different
        types of investments but the main ones are Cash, Bonds, Equities (stocks
        and shares) and property.
      </p>
      <Cards />
    </div>
  );
}

export default Investment
