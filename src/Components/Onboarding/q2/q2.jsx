import React from "react";
import ProgessiveBar from "../q2/progessiveBar";

import "./q2.css";

const Q2 = ({ setCurr, setEmission }) => {
  return (
    <div className="qi-body">
      <ProgessiveBar Progress={50} />

      <h1 className="qi-h1 mt-10">Type of Vehicle</h1>

      {/* <input className='qi-input' placeholder='enter country name' /> */}
      <div className="optional">
        <button
          className="qi-zero-div"
          onClick={() => {
            setEmission((em) => em + 10);
            setCurr((curr) => curr + 1);
          }}
        >
          <h1
            className="qi-zero"
            onClick={() => {
              setEmission((em) => em + 127);
              setCurr((curr) => curr + 1);
            }}
          >
            Newly registered passenger cars
          </h1>
        </button>
        <button
          className="qi-one-div"
          onClick={() => {
            setEmission((em) => em + 92);
            setCurr((curr) => curr + 1);
          }}
        >
          <h1 className="qi-one">Hybrid-electric vehicles</h1>
        </button>
        <button
          className="qi-two-div"
          onClick={() => {
            setEmission((em) => em + 175);
            setCurr((curr) => curr + 1);
          }}
        >
          <h1 className="qi-two">Light commercial vehicles</h1>
        </button>
      </div>
    </div>
  );
};

export default Q2;
