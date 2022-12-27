import React from "react";
import Jay from "../images/jb.png";

const header = () => {
  return (
    <div className="top">
      <div className="pic">
        <div className="bg"></div>
        <img src={Jay} alt="" className="j-img" />
      </div>
      <div className="text">
        <div className="text-wrapper">
          <h1 className="we">"WE GUARANTEED TO GET YOU THE MAX!"</h1>
        </div>
      </div>
    </div>
  );
};

export default header;
