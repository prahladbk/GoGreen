import React from "react";
import pub from "./pub.svg";
import vector from "./Vector.png";
import roundProgressBar from "./round-progress-bar1.png";
import { ReactComponent as Addbtn } from "./addbtn.svg";
import { ReactComponent as Form } from "./form.svg";
import { useState } from "react";
import "./mye.css";
import styles from "./Home.module.css";
import CircularProgressBar from "../../Progressbar";
import { useSnackbar } from "react-simple-snackbar";
import { useNavigate } from "react-router-dom";
import useStore from "../../context";

function Profile() {
  const setState = useStore((state) => state.toggle);
  const profile = useStore((state) => state.profile);
  const { name, carbon, go } = profile;
  console.log(profile);
  const navigate = useNavigate();
  return (
    <div className="relative">
      <h1>Hello {name}! </h1>
      <div className="progressbar flex items-center justify-center">
        <CircularProgressBar progress={go} carbon={carbon} />
      </div>
      <span className="trees">Trees planted</span>
      <div className="numbers px-3">
        <span className="nu" style={{ color: "green" }}>
          17
        </span>
        <p>by you</p>
        <div>
          <span className="nu text-red-400">{carbon}</span>
          <p>carbon footprint by you</p>
        </div>
      </div>
      <p>Your activity today.</p>
      <div className="last">
        <div className="box">
          <h3>Used public transport</h3>
          <p>3 go gained</p>
        </div>
        <div className="box">
          <h3>Turned off lights.</h3>
        </div>
        <div className="box">
          <h3>Turned off fans.</h3>
        </div>
      </div>
      <svg
        className="w-8 h-8 absolute top-5 right-4 hover:bg-gray-300 shadow-md rounded-full p-2 "
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          localStorage.removeItem("token");
          setState(false);
          setTimeout(() => navigate("/"), [100]);
        }}
      >
        <path
          fillRule="evenodd"
          d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default Profile;
