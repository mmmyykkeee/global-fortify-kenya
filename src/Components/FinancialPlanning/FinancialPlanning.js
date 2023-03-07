import React, {useEffect} from "react";
import "./financialplanning.css";
import Pagination from '../Navigation/Pagination'
import {Link} from 'react-router-dom'

function FinancialPlanning() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="container text-center">
      <h3 className="heading mt">Life Stages</h3>
      <br />
      <div className="d-flex row">
        <div className="col-lg-8">
          <p>
            <span>A</span> financial plan is simply a blueprint to help you
            build, grow and protect your family’s money in order to achieve your
            financial goals. It helps you in deciding what your short-term and
            long-term financial goals are going to be and how to go about
            achieving them. Planning well safeguards not only your future but
            also that of your loved ones, giving you peace of mind.
            <br />A financial plan enables you to define your goals, understand
            why you need to achieve them and put a plan and a path towards
            achieving your dreams. A budget helps you track your spending and
            monitor your progress on savings. This planning discipline will
            enable you to gain visibility into your finances way into the future
            and it does give you peace of mind in knowing where you are going
            and seeing yourself make progress.
          </p>
        </div>
        <div className="col-lg-4 imgs">
          <img
            src="https://globalfortifykenya.com/wp-content/uploads/2020/05/crop-0-0-2560-1709-0-young-coworkers-working-on-computer-in-the-office-Q6A3WSQ-scaled-2048x1367.jpg"
            alt=""
          />
        </div>
      </div>
      <br />
      <p>
        To develop your financial plan, assess your financial situation
        objectively and honestly! This will enable you to have a firm baseline
        to plan from and to measure your progress from. Once this is clear,
        dream on! What is it you would like to achieve? Define your goals and
        they need to be SMART goals. By having clarity of goals and financial
        situation, you can then put in place a practical plan of action. Having
        a plan is one thing – executing the plan is the ultimate objective! Put
        the plan into action in a disciplined manner, for example, put money
        aside on a monthly basis towards achieving a certain goal like saving
        for college fees, a deposit towards a mortgage for a home loan amongst
        others.
      </p>
      <div className="row d-flex">
        <div className="col-lg-4 imgs">
          <img
            src="https://img.freepik.com/free-photo/african-family-spending-time-together_53876-20995.jpg?w=1380&t=st=1677877728~exp=1677878328~hmac=cab55a49b65e4417d1ca10f778556f65e6f5af61344324a47e83d3bbb0abe5d1"
            alt=""
          />
        </div>
        <div className="col-lg-8">
          <p>
            <span className="drop-letter">T</span> here will always be show
            stoppers on the way – that is live! An illness, a job loss, an
            accident, a burglary, a civil suit against you or a fire in your
            home are some of the things that could derail your well thought out
            plan and throw it into total disarray. Manage these risks that may
            interfere or stop you from executing your plan of action by
            arranging the right protection or insurances. While following a
            financial plan you need to ensure that the plan you decide on is
            followed. These are only basic strategies which if reviewed
            regularly and followed with discipline, will help you in achieving
            those financial goals.
            <br />
            During our lifetime, we come across changes which affect our
            financial situation and needs – therefore, our financial goals
            should shift along with the situation to serve our biggest needs
            while focusing on where we want to be in the future.
          </p>
        </div>
      </div>
      <br />
      <div className="d-flex row">
        <div className="col-lg-7">
          <h4>How We Work</h4>
          <p>
            Our Financial Planning process has been designed to help us fully
            understand you, your family, your current financial circumstances,
            your attitude to and understanding of investment risk, your life
            goals and your short, medium and long term financial objectives. We
            then work with you to put together a plan that will ensure that with
            disciplined execution, you are able to meet your goals. We will
            conduct regular reviews with you. If your personal or financial
            circumstances change or if there is any event which requires an
            adjustment of your financial plan, we will help you to make the best
            and most suitable alterations. We look forward to being of service.
            To request for a free consultation, please{" "}
            <Link to={"/consultation"}>Click Here</Link>
          </p>
        </div>
        <div className="col-lg-4 mb-5">
          <img
            className="consultation-pic"
            src="https://img.freepik.com/free-vector/certified-nutritionist-counseling-appointment-cartoon-composition-with-dietitian-advises-client-healthy-cooking-food-choices_1284-59042.jpg?w=740&t=st=1677968543~exp=1677969143~hmac=1bed1376bb4eff73940703b602e3f597cc3b60acddbd394dce93a6a326f7b511"
            alt=""
          />
        </div>
      </div>
      <Pagination />
    </div>
  );
}

export default FinancialPlanning;
