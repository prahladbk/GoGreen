import React from "react";
import ProgessiveBar from "../q2/progessiveBar";

import "./q4.css";

const Q4 = ({ setCurr, setEmission }) => {
  return (
    <div className="qi-body">
      <ProgessiveBar Progress={100} />

      <h1 className="qi-h1 mt-10">
        Number of <br />
        Electronic
        <br /> appliances in your
        <br /> house ?
      </h1>

      {/* <input className='qi-input' placeholder='enter country name' /> */}
      <div className="optional">
        <div className="qi-zero-div">
          <input className="w-full h-12 bg-transparent"></input>
        </div>
        <div className="flex items-center justify-center mt-5">
          <div
            className="Switch-Start1 bg-white"
            onClick={() => {
              setEmission((em) => em + 10);
              setCurr((curr) => curr + 1);
            }}
          >
            <button className="Start-start1 text-2xl text-[#31cc35]">➝</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Q4;
