import React, { useState, useRef, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../Home/Home";
import About from "../AboutUs/About";
import Partners from "../AboutUs/Partners";
import FinancialPlanning from "../FinancialPlanning/FinancialPlanning";
import ConsultationRequest from "../Forms/ConsultationRequest";
import "animate.css";
import "./navigation.css";
import ContactForm from "../ContactForm/ContactForm";
import StartingOut from "../FinancialPlanning/LifeStages/StartingOut";
import SettlingDown from "../FinancialPlanning/LifeStages/SettlingDown";
import EmptyNest from "../FinancialPlanning/LifeStages/EmptyNest";
import Retirement from "../FinancialPlanning/LifeStages/Retirement";
import BusinessOwners from "../FinancialPlanning/BusinessOwners/BusinessOwners";
import Investment from "../InvestmentPlanning/Investment";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const [showIcon, setShowIcon] = useState(true)
  const navbarRef = useRef(null);
  useEffect(() => {
    const navbar = navbarRef.current;

    const handleScroll = () => {
      if (window.pageYOffset > navbar.offsetTop) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    setShowIcon(!showIcon)
    setShowMenu(!showMenu)
  }
  
    function handleMenuClick() {
      setShowIcon(!showIcon);
      setShowMenu(!showMenu);
    }
  return (
    <div>
      <div className="top-nav">
        <nav className="navbar" ref={navbarRef}>
          <div className="container ">
            <p>
              <Link to={"/"}>
                <img width={60} src="./Images/logo.png" alt="" />
              </Link>
            </p>
            <input type="checkbox" id="chkToggle"></input>
            <ul className="main-nav main-men" id="js-menu">
              <li>
                <Link className="link" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to={"/about"}>
                  About
                </Link>
                <ul className="submenu rounded animate__animated animate__flipInX animate__delay-.02s">
                  <li>Who we are</li>
                  <li>How we Work</li>
                  <li>
                    <Link className="link" to={"/partners"}>
                      Our Partners
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="link" to={"/financialplanning"}>
                  Financial Planning
                </Link>
                <ul className="submenu  rounded  animate__animated animate__flipInX animate__delay-.02s">
                  <div className="sub-submenu">
                    <li className="indicator">
                      Life Stages <i class="fa fa-caret-right"></i>
                    </li>
                    <ul className="side-menu rounded animate__animated animate__flipInX animate__delay-.02s">
                      <li>
                        <Link to={"/startingout"}>
                          Starting Out (20-30 Years) Growth Stage
                        </Link>
                      </li>
                      <li>
                        <Link to={"/settlingdown"}>
                          Settling Down (31-40 Years)
                        </Link>
                      </li>
                      <li>
                        <Link to={"/emptynest"}>
                          Empty Nest (41 – 60 Years) Wealth Generation Stage
                        </Link>
                      </li>
                      <li>
                        <Link to={"/retirement"}>
                          Retirement (Age 61 On-Wards) Leaving A Legacy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <li>
                    <Link to={"/businessowners"}>Business Owners</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="link" to={"/investmentplannig"}>
                  Investment Planning
                </Link>
                <ul className="submenu rounded animate__animated animate__flipInX animate__delay-.02s">
                  <li>
                    <div className="sub-submenu">
                      Understanding Investment Risk
                      <i class="fa fa-caret-right"></i>
                      <ul className="side-menu1 rounded animate__animated animate__flipInX animate__delay-.02s">
                        <li>Cash</li>
                        <li>Bonds</li>
                        <li>Equities (Stocks and Shares)</li>
                        <li>Property</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="sub-submenu">
                      Investment Products <i class="fa fa-caret-right"></i>
                      <ul className="side-menu1 rounded animate__animated animate__flipInX animate__delay-.02s">
                        <li>Unit Trust</li>
                        <li>Money Market Fund</li>
                        <li>Balance Fund</li>
                        <li>Equity Fund</li>
                        <li>Real Estate Investment Trusts (REITS)</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                Insurance
                <ul className="submenu rounded animate__animated animate__flipInX animate__delay-.02s">
                  <li>
                    <div className="sub-submenu">
                      Personal <i class="fa fa-caret-right"></i>
                      <ul className="side-menu3 rounded animate__animated animate__flipInX animate__delay-.02s">
                        <li>Life Assurance</li>
                        <li>Medical & Accident</li>
                        <li>Private Motor Insurance</li>
                        <li>Domestic/Home Insurance</li>
                        <li>Travel Insurance</li>
                        <li>Sports Insurance</li>
                        <li>Golfers Insurance</li>
                        <li>Retirement Planning</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="sub-submenu">
                      Business Insurance <i class="fa fa-caret-right"></i>
                      <ul className="side-menu3 rounded animate__animated animate__flipInX animate__delay-.02s">
                        <li>Motor Commercial Insurance</li>
                        <li>Property</li>
                        <li>Liability</li>
                        <li>Engineering</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="sub-submenu">
                      Group Insurance <i class="fa fa-caret-right"></i>
                      <ul className="side-menu3 rounded animate__animated animate__flipInX animate__delay-.02s">
                        <li>Life Policy</li>
                        <li>Group Medical</li>
                        <li>Group Credit Life</li>
                        <li>Group Mortgage Protection</li>
                        <li>Group Last Expense</li>
                        <li>Group Pension/Provident Fund</li>
                        <li>Umbrella Retirement Fund</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="sub-submenu">
                      Aviation and Marine <i class="fa fa-caret-right"></i>
                      <ul className="side-menu3 rounded animate__animated animate__flipInX animate__delay-.02s">
                        <li>Aviation Insurance</li>
                        <li>Marine Cargo Insurance</li>
                        <li>Marine Hull Insurance</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="sub-submenu">
                      Agriculture <i class="fa fa-caret-right"></i>
                      <ul className="side-menu3 rounded animate__animated animate__flipInX animate__delay-.02s">
                        <li>Crop Insurance</li>
                        <li>Horticulture</li>
                        <li>Forestry (Tree Crop) Insurance</li>
                        <li>Livestock Insurance</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="sub-submenu">
                      Small and Medium Enterprices Insurance (SME)
                    </div>
                  </li>
                  <li>
                    <div className="sub-submenu">
                      Schools/Learning Institution Insurance
                    </div>
                  </li>
                </ul>
              </li>
              <li>Blog</li>
              <li>
                {" "}
                <Link className="link" to={"/contact"}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="btn menu-btn"
            onClick={ handleMenuClick}
          >
            {showIcon ? (<i className="bars fa fa-bars" onClick={handleClick}></i>) : (<i className=" close fa fa-times" onClick={handleClick}></i>)
            }
          </button>
        </nav>
        <ul
          className="mobile-menu rounded animate__animated animate__delay-.2s animate__fadeInRight @media screen and (max-width: 768px) {
  .bg .container h1 {
    background-color: transparent;
    text-shadow: #000;
    background-blend-mode: color-burn;
    color: #5f664e;
  }
  .bg {
    background: url(https://www.charings.com/wp-content/uploads/2021/06/banner-shape-01-1.png)
      no-repeat top center / cover;
    height: 60vh;
  }
}
"
          style={{
            display: showMenu ? "block" : "none",
          }}
        >
          <li onClick={ handleMenuClick}>
            <Link to={"./"}>Home</Link>
          </li>
          <li onClick={ handleMenuClick}>
            <Link to={"/about"}>About</Link>
          </li>
          <li onClick={ handleMenuClick}>
            <Link to={"./financialplanning"}>Financial Planning</Link>
          </li>
          <li onClick={ handleMenuClick}>
            <Link to={"./investmentplannig"}>Investment Planning</Link>
          </li>
          <li onClick={ handleMenuClick}>Insurance</li>
          <li onClick={ handleMenuClick}>Blog</li>
          <li onClick={ handleMenuClick}>
            <Link to={"./contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/financialplanning" element={<FinancialPlanning />} />
        <Route path="/startingout" element={<StartingOut />} />
        <Route path="/settlingdown" element={<SettlingDown />} />
        <Route path="/emptynest" element={<EmptyNest />} />
        <Route path="/retirement" element={<Retirement />} />
        <Route path="/businessowners" element={<BusinessOwners />} />
        <Route path="/investmentplannig" element={<Investment />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/consultation" element={<ConsultationRequest />} />
        consultation
      </Routes>
    </div>
  );
}

export default Navigation;
