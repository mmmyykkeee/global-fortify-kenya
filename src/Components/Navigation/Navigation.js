import React, { useState, useRef, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../Home/Home";
import About from "../AboutUs/About";
import Partners from "../AboutUs/Partners";
import FinancialPlanning from "../FinancialPlanning/FinancialPlanning";
import ConsultationRequest from "../Forms/ConsultationRequest";
import ContactForm from "../ContactForm/ContactForm";
import StartingOut from "../FinancialPlanning/LifeStages/StartingOut";
import SettlingDown from "../FinancialPlanning/LifeStages/SettlingDown";
import EmptyNest from "../FinancialPlanning/LifeStages/EmptyNest";
import Retirement from "../FinancialPlanning/LifeStages/Retirement";
import BusinessOwners from "../FinancialPlanning/BusinessOwners/BusinessOwners";
import Investment from "../InvestmentPlanning/Investment";
import Property from "../InvestmentPlanning/Pages/Property";
import Cash from "../InvestmentPlanning/Pages/Cash";
import Bonds from "../InvestmentPlanning/Pages/Bonds";
import Equities from "../InvestmentPlanning/Pages/Equities";
import "animate.css";
import "./navigation.css";
import Insurance from "../Insurance/Insurance";
import Business from "../Insurance/Pages/Business";
import Group from "../Insurance/Pages/Group";
import Aviation from "../Insurance/Pages/Aviation";
import Agriculture from "../Insurance/Pages/Agriculture";
import SMEs from "../Insurance/Pages/SMEs";
import School from "../Insurance/Pages/School";
import Personal from "../Insurance/Pages/Personal";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenu1, setShowSubMenu1] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [showSubMenu3, setShowSubMenu3] = useState(false);
  const [showSubMenu4, setShowSubMenu4] = useState(false);
  const [isCaretDown, setIsCaretDown] = useState(false);

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
    setShowIcon(!showIcon);
    setShowMenu(!showMenu);
  }

  function handleMenuClick() {
    setShowIcon(!showIcon);
    setShowMenu(!showMenu);
  }

  function handleSubMenuClick() {
    setShowSubMenu(!showSubMenu);
  }
  function handleSubMenuClick1() {
    setShowSubMenu1(!showSubMenu1);
  }
  function handleSubMenuClick2() {
    setShowSubMenu2(!showSubMenu2);
  }
  function handleSubMenuClick3() {
    setShowSubMenu3(!showSubMenu3);
  }
  function handleSubMenuClick4() {
    setShowSubMenu4(!showSubMenu4);
  }

  function flipCaret() {
    setIsCaretDown(!isCaretDown);
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
                    <li className="indicator" onClick={flipCaret}>
                      <Link
                        to={"/financialplanning"}
                        onClick={handleSubMenuClick}
                      >
                        Life Stages
                      </Link>
                      <i
                        class={
                          isCaretDown ? "fa fa-caret-down" : "fa fa-caret-up"
                        }
                      ></i>
                    </li>
                    <ul
                      className="side-menu rounded animate__animated animate__flipInX animate__delay-.02s"
                      style={{
                        display: showSubMenu ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link to={"/startingout"}>Starting Out</Link>
                      </li>
                      <li>
                        <Link to={"/settlingdown"}>Settling Down</Link>
                      </li>
                      <li>
                        <Link to={"/emptynest"}>Empty Nest</Link>
                      </li>
                      <li>
                        <Link to={"/retirement"}>Retirement</Link>
                      </li>
                    </ul>
                  </div>
                  <li>
                    <Link to={"/businessowners"}>Business Owners</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="link" to={"/investmentplanning"}>
                  Investment Planning
                </Link>
                <ul className="submenu rounded animate__animated animate__flipInX animate__delay-.02s">
                  <li onClick={flipCaret}>
                    <div className="sub-submenu">
                      <Link
                        to={"/investmentplanning"}
                        onClick={handleSubMenuClick}
                      >
                        Understanding Investment Risk
                      </Link>
                      <i
                        class={
                          isCaretDown ? "fa fa-caret-down" : "fa fa-caret-up"
                        }
                      ></i>
                      <ul
                        className="side-menu1 rounded animate__animated animate__flipInX animate__delay-.02s"
                        style={{
                          display: showSubMenu ? "block" : "none",
                        }}
                      >
                        <li>
                          <Link to="/cash">Cash</Link>
                        </li>
                        <li>
                          <Link to="/bonds">Bonds</Link>
                        </li>
                        <li>
                          <Link to="/equities">
                            Equities (Stocks and Shares)
                          </Link>
                        </li>
                        <li>
                          <Link to="/property">Property</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li onClick={flipCaret}>
                    <div className="sub-submenu">
                      <Link onClick={handleSubMenuClick1}>
                        Investment Products
                      </Link>

                      <i
                        class={
                          isCaretDown ? "fa fa-caret-down" : "fa fa-caret-up"
                        }
                      ></i>
                      <ul
                        className="side-menu1 rounded animate__animated animate__flipInX animate__delay-.02s"
                        style={{
                          display: showSubMenu1 ? "block" : "none",
                        }}
                      >
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
                <Link to={"/insurance"} className="link">
                  Insurance
                </Link>
                <ul className="submenu rounded animate__animated animate__flipInX animate__delay-.02s">
                  <li onClick={flipCaret}>
                    <div className="sub-submenu">
                      <Link to={"/personal"} onClick={handleSubMenuClick}>
                        Personal
                      </Link>
                      <i
                        class={
                          isCaretDown ? "fa fa-caret-down" : "fa fa-caret-up"
                        }
                      ></i>
                      <ul
                        className="side-menu3 rounded animate__animated animate__flipInX animate__delay-.02s"
                        style={{
                          display: showSubMenu ? "block" : "none",
                        }}
                      >
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
                  <li onClick={flipCaret}>
                    <div className="sub-submenu">
                      <Link to={"/business"} onClick={handleSubMenuClick1}>
                        Business Insurance
                      </Link>{" "}
                      <i
                        class={
                          isCaretDown ? "fa fa-caret-down" : "fa fa-caret-up"
                        }
                      ></i>
                      <ul
                        className="side-menu3 rounded animate__animated animate__flipInX animate__delay-.02s"
                        style={{
                          display: showSubMenu1 ? "block" : "none",
                        }}
                      >
                        <li>Motor Commercial Insurance</li>
                        <li>Property</li>
                        <li>Liability</li>
                        <li>Engineering</li>
                      </ul>
                    </div>
                  </li>
                  <li onClick={flipCaret}>
                    <div className="sub-submenu">
                      <Link to={"/group"} onClick={handleSubMenuClick2}>
                        Group Insurance
                      </Link>{" "}
                      <i
                        class={
                          isCaretDown ? "fa fa-caret-down" : "fa fa-caret-up"
                        }
                      ></i>
                      <ul
                        className="side-menu3 rounded animate__animated animate__flipInX animate__delay-.02s"
                        style={{
                          display: showSubMenu2 ? "block" : "none",
                        }}
                      >
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
                  <li onClick={flipCaret}>
                    <div className="sub-submenu">
                      <Link to={"/aviation"} onClick={handleSubMenuClick3}>
                        Aviation and Marine
                      </Link>{" "}
                      <i
                        class={
                          isCaretDown ? "fa fa-caret-down" : "fa fa-caret-up"
                        }
                      ></i>
                      <ul
                        className="side-menu3 rounded animate__animated animate__flipInX animate__delay-.02s"
                        style={{
                          display: showSubMenu3 ? "block" : "none",
                        }}
                      >
                        <li>Aviation Insurance</li>
                        <li>Marine Cargo Insurance</li>
                        <li>Marine Hull Insurance</li>
                      </ul>
                    </div>
                  </li>
                  <li onClick={flipCaret}>
                    <div className="sub-submenu">
                      <Link to={"/agriculture"} onClick={handleSubMenuClick4}>
                        Agriculture
                      </Link>{" "}
                      <i
                        class={
                          isCaretDown ? "fa fa-caret-down" : "fa fa-caret-up"
                        }
                      ></i>
                      <ul
                        className="side-menu3 rounded animate__animated animate__flipInX animate__delay-.02s"
                        style={{
                          display: showSubMenu4 ? "block" : "none",
                        }}
                      >
                        <li>Crop Insurance</li>
                        <li>Horticulture</li>
                        <li>Forestry (Tree Crop) Insurance</li>
                        <li>Livestock Insurance</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="sub-submenu">
                      <Link to={"/smes"}>
                        Small and Medium Enterprices Insurance (SME)
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="sub-submenu">
                      <Link to={"/school"}>
                        Schools/Learning Institution Insurance
                      </Link>
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
          <button className="btn menu-btn" onClick={handleMenuClick}>
            {showIcon ? (
              <i className="bars fa fa-bars" onClick={handleClick}></i>
            ) : (
              <i className=" close fa fa-times" onClick={handleClick}></i>
            )}
          </button>
        </nav>
        <ul
          className="mobile-menu rounded animate__animated animate__delay-0.2s animate__fadeInLeftBig @media screen and (max-width: 768px) {
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
          <li onClick={handleMenuClick}>
            <Link to={"./"}>Home</Link>
          </li>
          <li onClick={handleMenuClick}>
            <Link to={"/about"}>About</Link>
          </li>
          <li onClick={handleMenuClick}>
            <Link to={"./financialplanning"}>Financial Planning</Link>
          </li>
          <li onClick={handleMenuClick}>
            <Link to={"./investmentplanning"}>Investment Planning</Link>
          </li>
          <li onClick={handleMenuClick}>Insurance</li>
          <li onClick={handleMenuClick}>Blog</li>
          <li onClick={handleMenuClick}>
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
        <Route path="/investmentplanning" element={<Investment />} />
        <Route path="/cash" element={<Cash />} />
        <Route path="/bonds" element={<Bonds />} />
        <Route path="/equities" element={<Equities />} />
        <Route path="/property" element={<Property />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/business" element={<Business />} />
        <Route path="/group" element={<Group />} />
        <Route path="/aviation" element={<Aviation />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/smes" element={<SMEs />} />
        <Route path="/school" element={<School />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/consultation" element={<ConsultationRequest />} />
      </Routes>
    </div>
  );
}

export default Navigation;
