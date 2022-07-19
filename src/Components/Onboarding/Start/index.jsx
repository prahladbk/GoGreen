import React, { useState } from "react";
import Qi from "../qi/Qi";
import "./Start.css";

const Start = () => {
  const [current, setCurrent] = useState(0);
  const state = [
    <>
      <h2 className="Start-questions">
        Let’s start with a <br />
        few <span class="Black-Start">questions</span>
      </h2>

      <div className="Switch-Start">
        <button className="Start-start" onClick={() => setCurrent(1)}>
          ➝
        </button>
      </div>
    </>,
    <Qi />,
  ];

  return <div className="Start-body">{state[current]}</div>;
};

export default Start;
