import React from "react";
import { ReactComponent as Home } from "./Icons/home.svg";
import { ReactComponent as Learn } from "./Icons/learn.svg";
import { ReactComponent as Leaderboard } from "./Icons/leaderboard.svg";
import { ReactComponent as Profile } from "./Icons/profile.svg";
import classes from "./AppDrawer.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function AppDrawer(props) {
  const location = useLocation();
  console.log(location.pathname);
  const sstyle = {
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
  };

  return (
    <div
      id="drawer"
      style={{
        boxShadow: "0px -5px 155px rgba(0, 0, 0, 0.05)",
        height: "86px",
        zIndex: 21,
      }}
      className="flex fixed  bottom-0 bg-white w-full justify-around items-center px-6"
    >
      <Link style={sstyle} to="/home">
        <Home
          className={classes.icon}
          data-active={location.pathname === "/home"}
        />
      </Link>
      <Link style={sstyle} to="/learn">
        <Learn
          className={classes.icon}
          data-active={location.pathname === "/learn"}
        />
      </Link>
      <Link style={sstyle} to="/leaderboard">
        <Leaderboard
          className={classes.icon}
          data-active={location.pathname === "/leaderboard"}
        />
      </Link>
      <Link style={sstyle} to="/profile">
        <Profile
          className={classes.icon}
          data-active={location.pathname === "/profile"}
        />
      </Link>
    </div>
  );
}

export default AppDrawer;
