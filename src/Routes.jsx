import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { checkAuth } from "./api";
import routes from "./Components/routes";
import useStore from "./context";

function Routes() {
  const state = useStore((state) => state.state);
  const routing = useRoutes(routes(state));
  return <>{routing}</>;
}

export default Routes;
