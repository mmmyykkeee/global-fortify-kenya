
import React, { useState, useEffect } from "react";
import './consultationrequest.css'

const ConsultationRequest = () => {
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      type,
      message,
      firstName,
      surname,
      phone,
      email,
      checked,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="form-holder border border-5 mx-auto rounded px-5 pt-3 m-5">
        <p className="fw-bold">What type of consultation would you like?</p>
        <form onSubmit={handleSubmit}>
          <div className="radios d-flex mx-auto">
            <div className="d-flex">
              <label className="fw-bold">
                Phone call
                <input
                  type="radio"
                  value="phone"
                  checked={type === "phone"}
                  onChange={() => setType("phone")}
                />
              </label>
            </div>
            <div className="mx-auto">
              <label className="fw-bold ">
                Face to face
                <input
                  type="radio"
                  value="face-to-face"
                  checked={type === "face-to-face"}
                  onChange={() => setType("face-to-face")}
                />
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="fw-bold">
              What would you like to discuss?
            </label>
            <textarea
              id="message"
              placeholder="Please enter your message here"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>

          <div>
            <label className="fw-bold" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>

          <div>
            <label className="fw-bold" htmlFor="surname">
              Surname
            </label>
            <input
              id="surname"
              type="text"
              placeholder="Enter your surname"
              value={surname}
              onChange={(event) => setSurname(event.target.value)}
            />
          </div>

          <div>
            <label className="fw-bold" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>

          <div>
            <label className="fw-bold" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div>
            <label className="fw-bold">
              I am not a robot
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary mb-3"
            disabled={!checked}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationRequest;
