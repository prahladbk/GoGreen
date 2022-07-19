import React from "react";
import "./Login.css";
import { useSnackbar } from "react-simple-snackbar";
import { useNavigate } from "react-router-dom";
import { auth, create, profile } from "../../../api";
import useStore from "../../../context";

function Login({ emission }) {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const navigate = useNavigate();
  const setState = useStore((state) => state.toggle);
  const setProfile = useStore((state) => state.setProfile);

  let handleAuth = async (e) => {
    e.preventDefault();
    const result = await create(
      e.target[0].value,
      emission,
      e.target[1].value,
      e.target[2].value
    );
    const { error, message, token } = result.data;
    console.log(result.data);
    if (error) {
      openSnackbar(error, [1000]);
      return;
    }
    if (message) openSnackbar("Account creation success", [1000]);
    const result2 = await auth(e.target[1].value, e.target[2].value);
    const { error2, message2, token2 } = result2.data;
    console.log(result.data);
    if (error2) {
      openSnackbar(error, [1000]);
      return;
    }
    localStorage.setItem("token", token);
    setTimeout(async () => {
      const profile2 = await profile();
      setProfile(profile2.data);
    }, [1000]);
    setState(true);
    navigate("/home");
  };

  return (
    <div class="bg-[#31D66C] h-screen flex flex-col items-center p-5 w-full">
      <span className="title text-3xl font-bold w-[50%] mt-10 shrink-0 text-white">
        <div className="opacity-60">Welcome to </div>
        <div className="text-[#3c5535] float-right">go green</div>
      </span>
      <form
        className="grow flex flex-col gap-5 items-center form  w-[90%] justify-center -mt-10"
        onSubmit={(e) => handleAuth(e)}
      >
        <div>
          <label className="text-[#3C5535]" htmlFor="name">
            Name:{" "}
          </label>
          <input type="text" name="name" required />
        </div>
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
          Create account
        </button>
      </form>
    </div>
  );
}

export default Login;
