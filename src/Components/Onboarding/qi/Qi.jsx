import React, { useState } from "react";
import ProgessiveBar from "./progessiveBar";
import Q2 from "../q2/q2";
import Q3 from "../q3/q3";
import Q4 from "../q4/q4";
import Signup from "../Signup";
import "./qi.css";

const Qi = () => {
  const [curr, setCurr] = useState(0);
  const [emission, setEmission] = useState(0);
  const q1 = (
    <div className="qi-body">
      <ProgessiveBar Progress={25} />

      <h1 className="qi-h1 mt-10">
        How many Vehicle <br />
        do you posess?
      </h1>

      {/* <input className='qi-input' placeholder='enter country name' /> */}
      <div className="optional">
        <button
          className="qi-zero-div"
          onClick={() => {
            setEmission((em) => em + 10);
            setCurr((curr) => curr + 1);
          }}
        >
          <h1 className="qi-zero">Zero</h1>
        </button>
        <button
          className="qi-one-div"
          onClick={() => {
            setEmission((em) => em + 20);
            setCurr((curr) => curr + 1);
          }}
        >
          <h1 className="qi-one">One</h1>
        </button>
        <button
          className="qi-two-div"
          onClick={() => {
            setEmission((em) => em + 30);
            setCurr((curr) => curr + 1);
          }}
        >
          <h1 className="qi-two">Two or more</h1>
        </button>
      </div>
    </div>
  );
  const state = [
    q1,
    <Q2 setCurr={setCurr} setEmission={setEmission} />,
    <Q3 setCurr={setCurr} setEmission={setEmission} />,
    <Q4 setCurr={setCurr} setEmission={setEmission} />,
    <Signup emission={emission} />,
  ];
  return state[curr];
};

export default Qi;
