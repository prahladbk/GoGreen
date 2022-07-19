import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./Login.css";
import CircularProgressBar from "../../Progressbar";
import { auth, profile } from "../../api";
import { useSnackbar } from "react-simple-snackbar";
import { useNavigate } from "react-router-dom";
import useStore from "../../context";

function Login() {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const navigate = useNavigate();
  const setProfile = useStore((state) => state.setProfile);
  const setState = useStore((state) => state.toggle);

  let handleAuth = async (e) => {
    e.preventDefault();
    const result = await auth(e.target[0].value, e.target[1].value);
    const { error, message, token } = result.data;
    console.log(result.data);
    if (error) {
      openSnackbar(error, [1000]);
      return;
    }
    if (token) openSnackbar("Login successfull", [1000]);
    localStorage.setItem("token", token);
    const profile2 = await profile();
    setProfile(profile2.data);
    setState(true);
    navigate("/");
  };

  return (
    <div class="bg-[#31D66C] h-screen flex flex-col items-center p-5">
      <span className="title text-3xl font-bold w-[50%] mt-10 shrink-0 text-white">
        <div className="opacity-60">Welcome to </div>
        <div className="text-[#3c5535] float-right">go green</div>
      </span>
      <form
        className="grow flex flex-col gap-5 items-center form  w-[90%] justify-center -mt-10"
        onSubmit={(e) => handleAuth(e)}
      >
        <div>
          <label className="text-[#3C5535]" htmlFor="username">
            Username:{" "}
          </label>
          <input type="text" name="username" required />
        </div>
        <div>
          <label className="text-[#3C5535]" htmlFor="password">
            Password:{" "}
          </label>
          <input type="password" name="password" required />
        </div>
        <button
          type="submit"
          className="w-[90%] shadow-sm p-3 rounded-lg text-[#31D66c] font-bold text-xl bg-white border-solid border border-[#31d66c]"
        >
          Login
        </button>
      </form>
      <span className="text-white font-bold text-lg lowercase">
        Don't have an account? <span className="text-[#3c5535]">Sign Up</span>
      </span>
    </div>
  );
}

export default Login;
