import React, {useEffect} from 'react'
import "./lifestages.css";

import Pagination from '../../Navigation/Pagination';


function StartingOut() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <h2 className="text-center">
        Personal financial planning at different life stages?
      </h2>
      <h3>Starting Out (20-30 Years) Growth Stage</h3>
      <p>
        You may have just completed college and have landed your first job. You
        could be thinking of moving out of home, starting to pay rent on your
        own or to pay off your college loan. At this stage, you have few
        financial responsibilities
      </p>
      <strong>GOALS</strong>
      <ul>
        <li>Paying for further college education</li>
        <li>Paying off college loan</li>
        <li>Building savings</li>
        <li>Paying off debt</li>
        <li>Building a good credit history</li>
        <li>Buying a car or home furnishings</li>
      </ul>
      <strong>PLAN OF ACTION</strong>
      <ul>
        <li>Make a financial plan and a budget</li>
        <li>Pay off debts for example student loans</li>
        <li>Build an emergency fund to cater for life’s emergencies</li>
        <li>Start saving towards a goal</li>
        <li>Start investing</li>
        <li>Protect your belongings with insurance</li>
        <li>Start saving towards retirement</li>
        <li>
          Create a living will – it helps your family make decisions if you are
          indisposed according to your wishes
        </li>
      </ul>
      <Pagination />
    </div>
  );
}

export default StartingOut
