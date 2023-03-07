import React, {useEffect} from "react";
import "./lifestages.css";
import Pagination from "../../Navigation/Pagination";

function EmptyNest() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <h2 className="text-center">
        Personal financial planning at different life stages?
      </h2>
      <h3>Empty Nest (41 – 60 Years) Wealth Generation Stage</h3>
      <p>
        The children are all grown up and have left home to start their own
        lives. It is time to prepare for your retirement.
      </p>
      <strong>Goals</strong>
      <ul>
        <li>Set retirement goals</li>
        <li>
          Expand investment options to provide a mix of higher-return and more
          secure investments according to your plans for retirement
        </li>
        <li>Make long-term healthcare plans</li>
      </ul>
      <strong>Plan of Action</strong>
      <ul>
        <li>Save for retirement</li>
        <li>Pay off debts</li>
        <li>Set up fund for health care purposes</li>
        <li>Re-evaluate insurance needs</li>
        <li>Estate planning</li>
        <li>Revise your will</li>
      </ul>
      <Pagination />
    </div>
  );
}

export default EmptyNest;
