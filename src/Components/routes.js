import { Navigate, Outlet } from "react-router-dom";
import Feed from "./Feed";
import Leaderboard from "./Leaderboard";
import Learn from "./Learn";
import Login from "./Login";
import Start from "./Onboarding";
import StartQ from "./Onboarding/Start";
import MainLayout from "./MainLayout";
import Profile from "./Profile";

const routes = (isLoggedIn) => [
  {
    path: "/",
    element: !isLoggedIn ? <Start /> : <Navigate to="/profile" />,
  },
  {
    path: "/start",
    element: !isLoggedIn ? <StartQ /> : <Navigate to="/profile" />,
  },
  {
    path: "/profile",
    element: isLoggedIn ? (
      <MainLayout>
        <Profile />
      </MainLayout>
    ) : (
      <Navigate to="/" />
    ),
  },
  {
    path: "/login",
    element: !isLoggedIn ? <Login /> : <Navigate to="/" />,
  },
  {
    path: "/home",
    element: isLoggedIn ? (
      <MainLayout>
        <Feed />
      </MainLayout>
    ) : (
      <Navigate to="/" />
    ),
  },
  {
    path: "/leaderboard",
    element: isLoggedIn ? (
      <MainLayout>
        <Leaderboard />
      </MainLayout>
    ) : (
      <Navigate to="/" />
    ),
  },
  {
    path: "/learn",
    element: isLoggedIn ? (
      <MainLayout>
        <Learn />
      </MainLayout>
    ) : (
      <Navigate to="/" />
    ),
  },
];

export default routes;
