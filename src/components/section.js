import React from "react";
import Both from "../images/both.png";

const section = () => {
  return (
    <div className="mid">
      <div className="left">
        <div className="bbg"></div>
        <img src={Both} alt="" className="b-img" />
      </div>
      <div className="right">
        <div className="wei-wrapper">
          <h2 className="spect"> WE SPECIALIZE IN </h2>
          <div className="title">
            <div className="title-wrapper">
              <div className="title-item">Taxes</div>
              <div className="title-item">Notary Public</div>
              <div className="title-item">Credit Repair</div>
              <div className="title-item">Book Keeping</div>
              <div className="title-item">Book Keeping</div>
            </div>
          </div>
        </div>

        <h2 className="bud">
          "OUR PRICES ARE BASED ON OUR TALENT NOT YOUR BUDGET"
        </h2>
      </div>
    </div>
  );
};

export default section;
