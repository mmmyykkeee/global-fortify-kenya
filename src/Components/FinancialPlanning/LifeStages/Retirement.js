import React, {useEffect} from 'react'
import "./lifestages.css";
import Pagination from '../../Navigation/Pagination';


function Retirement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <h2 className="text-center">
        Personal financial planning at different life stages?
      </h2>
      <h3>Retirement (Age 61 On-Wards) Leaving A Legacy</h3>
      <p>It is time to enjoy your years of retirement!</p>
      <strong>Goal</strong>
      <ul>
        <li>Medical and long-term care plans</li>
        <li>Review budget and cash flow</li>
        <li>Review your living will</li>
        <li>Estate Planning</li>
      </ul>

      <strong>Plan for Action</strong>
      <ul>
        <li>
          <strong>
            Review your medical and long term care needs to ensure they are met
          </strong>
          <p>
            Plan and discuss your desires and needs for possible long-term
            healthcare with your family and arrange to provide the right level
            of coverage
          </p>
        </li>
        <li>
          <strong>Re-evaluate budget and cash flow</strong>
        </li>
        <p>
          Creating a budget is crucial to fulfilling your plans for retirement.
          Be sure to plan on a reserve for emergency situations when evaluating
          your needs.
        </p>
        <li>
          <strong>Review your living will</strong>
          <p>
            Changes in your family or other circumstances make it important to
            regularly review your plans for your property and your medical care.
          </p>
        </li>
        <li>
          <strong>Review your estate plan</strong>
          <p>Develop or review a plan for your property and assets</p>
        </li>
      </ul>

      <Pagination />
    </div>
  );
}

export default Retirement
