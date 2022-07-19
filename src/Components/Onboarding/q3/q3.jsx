import React from "react";
import ProgessiveBar from "../q3/progessiveBar";

import "./q3.css";

const Q3 = ({ setEmission, setCurr }) => {
  return (
    <div className="qi-body">
      <ProgessiveBar Progress={75} />

      <h1 className="qi-h1 mt-10">
        Have you recently <br />
        took a flight ?
      </h1>

      {/* <input className='qi-input' placeholder='enter country name' /> */}
      <div className="optional">
        <button
          className="qi-zero-div"
          onClick={() => {
            setEmission((em) => em);
            setCurr((curr) => curr + 1);
          }}
        >
          <h1 className="qi-zero">No</h1>
        </button>
        <button
          className="qi-one-div"
          onClick={() => {
            setEmission((em) => em + 257);
            setCurr((curr) => curr + 1);
          }}
        >
          <h1 className="qi-one">Domestic Flights</h1>
        </button>
        <button
          className="qi-two-div"
          onClick={() => {
            setEmission((em) => em + 127);
            setCurr((curr) => curr + 1);
          }}
        >
          <h1 className="qi-two">International Flights</h1>
        </button>
      </div>
    </div>
  );
};

export default Q3;
