import React, {useEffect} from "react";
import "./lifestages.css";
import Pagination from "../../Navigation/Pagination";

function SettlingDown() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
      <div className="container">
        <h2 className="text-center">Personal financial planning at different life stages?</h2>
        <h3>Settling Down (31-40 Years)</h3>
        <p>
          You may now have a partner or just married thinking of starting a
          family. You are in your first or second job and have been financially
          independent for a couple of years. You may be thinking about buying
          your first house or car.
        </p>
        <strong>Goals</strong>
        <ul>
          <li>Buying a house</li>
          <li>Purchasing insurance for the family</li>
          <li>Saving for the future (children’s education and goals)</li>
          <li>Replacing income in the event of a job loss or disability</li>
        </ul>
        <strong>Plan Of Action</strong>
        <ul>
          <li>Make a financial plan and a budget</li>
          <li>Create an emergency fund for life’s surprises</li>
          <li>Pay off debt – starting with high-interest ones</li>
          <li>Set up a savings fund (for medium-term goals)</li>
          <li> Start investing (for longer-term goals)</li>
          <li>Set up a medical fund</li>
          <li>Protect your belongings with insurance</li>
          <li>Start saving towards your children’s education</li>
          <li>Plan for retirement</li>
          <li>Create a living will</li>
          <li>
            Name a guardian for your children – in case of any eventualities
          </li>
            </ul>
            <Pagination />
      </div>
    );
}

export default SettlingDown;
