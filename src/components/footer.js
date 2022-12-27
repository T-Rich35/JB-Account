import React, { Component } from "react";
import { FaPhone, FaEnvelope, FaMap } from "react-icons/fa";

export default class footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="email">
          <FaEnvelope />
        </div>
        <div className="text">Tee@gmail.com</div>

        <div className="phone">
          <FaPhone />
        </div>
        <div className="text">555-555-5555</div>

        <div className="map">
          <FaMap />
        </div>
        <div className="text">mobile, AL 36603</div>
      </div>
    );
  }
}
