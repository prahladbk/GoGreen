import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import SnackbarProvider from "react-simple-snackbar";
import "./App.css";

import useStore from "./context";
import { checkAuth, profile } from "./api";

function App() {
  const state = useStore((state) => state.state);
  const setState = useStore((state) => state.toggle);
  const setProfile = useStore((state) => state.setProfile);
  useEffect(() => {
    let handle = async () => {
      let x = await checkAuth();
      let y = await profile();
      return { x: x, y: y?.data };
    };
    handle().then((x) => {
      setState(x.x);
      setProfile(x.y);
    });

    const timer = setTimeout(() => {
      handle().then((x) => {
        setState(x.x);
        setProfile(x.y);
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </SnackbarProvider>
  );
}
export default App;
