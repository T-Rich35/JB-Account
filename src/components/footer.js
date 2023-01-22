import React, { Component } from "react";
import { FaPhone, FaEnvelope, FaMap } from "react-icons/fa";

export default class footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="email">
          <FaEnvelope />
        </div>
        <div className="text">J.Accounting@Yahoo.com</div>

        <div className="phone">
          <FaPhone />
        </div>
        <div className="text">251-270-4828</div>

        <div className="map">
          <FaMap />
        </div>
        <div className="text">
          350 North Broad street Suite K&C Mobile, Al 36603
        </div>
      </div>
    );
  }
}
