import React from "react";
import { InlineWidget } from "react-calendly";
import Jay from "../images/jb.png";
import Logo from "../images/logo.png";

const header = () => {
  const handleBook = () => {
    <InlineWidget url="https://calendly.com/25teerich" />;
  };
  return (
    <div className="top">
      <div className="pic">
        <div className="bg"></div>
        <img src={Jay} alt="" className="j-img" />
      </div>
      <div className="text">
        <div className="text-wrapper">
          <h1 className="we">"WE GUARANTEED TO GET YOU THE MAX!"</h1>

          <a href="https://calendly.com/25teerich">
            <button className="btn" onClick={handleBook}>
              Book An Appointment Today
            </button>
          </a>
          <img src={Logo} alt="" className="l-img" />
        </div>
      </div>
    </div>
  );
};

export default header;
