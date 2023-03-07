import React from "react";
import "./footer.css";

function Footer() {
    return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta mb-3 d-flex">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>
                      JKUAT Towers, 17th Floor <br /> P.O Box 69888 00400
                      Nairobi
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta mb-3 d-flex">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>Phone: +254 20 515 7067</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta d-flex">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>Email: info@global-fortify.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 d-flex mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.81600253459!2d36.81886251515814!3d-1.284318935987254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d69428395d%3A0x5feca0500bd24aeb!2sJKUAT%20Towers!5e0!3m2!1sen!2ske!4v1678109346608!5m2!1sen!2ske"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="#">
                      <img
                        src="./Images/logo.png"
                        className="img-fluid"
                        alt="logo"
                        width={90}
                      />
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className="footer-social-icon mb-4">
                    <span>Follow us</span>
                    <a href="#">
                      <i className="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram google-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Financial Planning</a>
                    </li>
                    <li>
                      <a href="#">Investment Planning</a>
                    </li>

                    <li>
                      <a href="#">Insurance</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>

                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button className="pt-3 mt-2">
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2023, All Right Reserved{" "}
                    <a href="#">Global Fortified</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
