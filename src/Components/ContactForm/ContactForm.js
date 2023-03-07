// import React from 'react'

// function ContactForm() {
//   return (
//     <div>
//       <section className="contact_top_sec">
//         <div className="contact_top">
//           <div className="container">
//             <h1 className="contact_header">Get in touch with our team</h1>
//             <p className="contact_text">
//               Leave your information below and our team will be in touch!
//             </p>
//           </div>
//           <div className="contact_form">
//             <div className="container">
//               <form>
//                 <div className="input-field">
//                   <input type="text" id="fname" required />
//                   <label for="fname">First name</label>
//                 </div>
//                 <div className="input-field">
//                   <input type="text" id="lname" required />
//                   <label for="lname">Last name</label>
//                 </div>
//                 <div className="input-field">
//                   <input type="text" id="email" required />
//                   <label for="email">Email address</label>
//                 </div>
//                 <div className="input-field">
//                   <input type="text" id="num" required />
//                   <label for="num">Phone number</label>
//                 </div>
//                 <div className="input-field">
//                   <input type="text" id="cname" required />
//                   <label for="cname">Your company name</label>
//                 </div>
//                 <div className="input-field">
//                   <textarea
//                     rows="5"
//                     id="message"
//                     name="text"
//                     required
//                   ></textarea>
//                   <label for="message">Type your message here...</label>
//                 </div>
//                 <button
//                   className="btn btn-primary"
//                   data-toggle="modal"
//                   href="#ignismyModal"
//                 >
//                   Submit
//                 </button>
//                 <div className="modal fade" id="ignismyModal" role="dialog">
//                   <div className="modal-dialog">
//                     <div className="modal-content">
//                       <div className="modal-body">
//                         <div className="thank-you-pop">
//                           <h1>Your message has been submitted!</h1>
//                           <p>
//                             Thank you for contacting us. A representative from
//                             our team will be in touch with you.
//                           </p>
//                           <button
//                             type="button"
//                             className="btn okay"
//                             data-dismiss="modal"
//                             aria-label=""
//                           >
//                             <span>OKAY</span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ContactForm

import React from "react";
import "./contactform.css";

function ContactForm() {
  return (
    <div className="bg-light">
      <section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2 className="h2s">CONTACT</h2>
            <div className="links">
              <div className="link">
                <a>
                  <img className="img"
                    src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                    alt="linkedin"
                  />
                </a>
              </div>
              <div className="link">
                <a>
                  <img className="img"
                    src="https://i.postimg.cc/YCV2QBJg/github.png"
                    alt="github"
                  />
                </a>
              </div>
              <div className="link">
                <a>
                  <img className="img"
                    src="https://i.postimg.cc/W4Znvrry/codepen.png"
                    alt="codepen"
                  />
                </a>
              </div>
              <div className="link">
                <a>
                  <img className="img"
                    src="https://i.postimg.cc/NjLfyjPB/email.png"
                    alt="email"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper bg-secondary">
            <form>
              <div className="form-item">
                <input type="text" name="sender" required />
                <label className="labels">Name:</label>
              </div>
              <div className="form-item">
                <input type="text" name="sender" required />
                <label className="labels">Phone Number:</label>
              </div>
              <div className="form-item">
                <input type="text" name="email" required />
                <label className="labels">Email:</label>
              </div>
              <div className="form-item">
                <textarea className="" name="message" required></textarea>
                <label className="labels">Message:</label>
              </div>
              <button className="submit-btn">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
