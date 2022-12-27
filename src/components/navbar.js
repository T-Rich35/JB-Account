import React from "react";
import Logo from "../images/logo.png";

export default function navbar() {
  return (
    <div className="navwrapper">
      <div className="topleft">
        <img src={Logo} alt="" className="logo" />
      </div>

      <div className="topright">
        <button>Book An Appointment</button>
      </div>
    </div>
  );
}
