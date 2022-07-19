import React from "react";
import "./Progressbar.css";

function CircularProgressBar({ progress, carbon }) {
  const radius = 99;
  const circumference = radius * 2 * Math.PI;

  const offset = circumference - (progress / 100) * circumference;
  return (
    <svg width="200" height="200" viewBox="0 0 250 250">
      <circle
        cx="50%"
        cy="50%"
        r="99"
        style={{
          WebkitTransformOrigin: "50% 50%",
          MsTransformOrigin: "50% 50%",
          transformOrigin: "50% 50%",
        }}
        fill="none"
        stroke="rgba(243, 243, 243, 1)"
        strokeLinecap="round"
        strokeWidth="17"
        transform="rotate(-90)"
      ></circle>
      <circle
        cx="50%"
        cy="50%"
        r="99"
        style={{
          WebkitTransformOrigin: "50% 50%",
          MsTransformOrigin: "50% 50%",
          transformOrigin: "50% 50%",
          WebkitTransition: "1s ease",
          transition: "1s ease",
        }}
        fill="none"
        stroke="#0ED154"
        strokeDasharray="622.0353454107791 622.0353454107791"
        strokeDashoffset={offset}
        strokeLinecap="round"
        strokeWidth="15"
        transform="rotate(-90)"
      ></circle>
      <circle
        cx="50%"
        cy="10.5%"
        r="12.5"
        fill="#0ED154"
        stroke="rgba(14, 209, 84, 0.12)"
        strokeWidth="25"
        style={{
          WebkitTransformOrigin: "50% 50%",
          MsTransformOrigin: "50% 50%",
          transformOrigin: "50% 50%",
          WebkitTransition: "1s ease",
          transition: "1s ease",
          transform: "rotate(" + (360 * progress) / 100 + "deg)",
        }}
      ></circle>
      <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle">
        <tspan className="progress">
          {((progress / 100) * carbon).toFixed(1)}
        </tspan>
        <tspan className="unit">go</tspan>
      </text>
      <text
        x="50%"
        y="58%"
        className="goal"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        /{carbon} go
      </text>
    </svg>
  );
}

export default CircularProgressBar;
