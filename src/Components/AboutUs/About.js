import React from "react";
import "./about.css";
import { Route, Routes, Link } from "react-router-dom";

function About() {
  return (
    <div className="container text-center">
      <h1 className="mt-">Who we are</h1>
      <div className="d-flex row">
        <div className="col-lg-8">
          <p>
            At our independent financial planning and insurance agency, we take
            pride in being able to provide customized solutions to each of our
            clients. We understand that everyone's financial situation and
            aspirations are unique, and that's why we don't believe in a
            one-size-fits-all approach. Instead, we work closely with you to
            understand your current financial status, including your income,
            expenses, debts, assets, and liabilities. Once we have a clear
            understanding of your current financial situation, we take the time
            to listen to your dreams and goals. <br /> We believe that financial
            planning is not just about managing your money; it's about helping
            you achieve your dreams. Whether you want to retire early, travel
            the world, start a business, or leave a legacy for your children, we
            are here to help you make it happen. We know that making important
            financial decisions can be daunting, especially if you're not
            familiar with the intricacies of investing, insurance, and tax
            planning. That's why we take a collaborative approach to financial
            planning, working with you every step of the way to help you make
            informed decisions that align with your goals.
          </p>
        </div>
        <div className="row col-lg-4 imgs">
          <img
            src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="mt-3">
        <h3>Why we are your perfect Choice</h3>
        <p>
          As independent consultants, we are working for you and because we have
          access to a wide variety of financial services companies offering both
          investment and insurance solutions within Kenya, we are able to help
          you make the right choices for what is most important to you in line
          with your plan for the future.
        </p>
      </div>
      <div>
        <h3>Our Expertise</h3>
        <p>
          We have years of experience in the insurance industry and will support
          you by providing knowledge, helping with planning and investing and
          advising you on the requisite insurance protection that will meet your
          needs.
        </p>
      </div>
      <div>
        <h3>Our Services</h3>
        <p>
          We treat our customers like family and will ensure that we use our
          passion in insurance in ensuring you get value for yourself, your
          family and your business.
        </p>
      </div>

      <Link to={"/partners"}>
        <button className="btns" id="breathing-button">
          Our Partners
          <img
            width={50}
            src="https://em-content.zobj.net/source/microsoft-teams/337/backhand-index-pointing-right_1f449.png"
            alt=""
          />
        </button>
      </Link>
    </div>
  );
}

export default About;
