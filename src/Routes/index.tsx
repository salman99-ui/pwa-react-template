import Login from "../Views/Auth/Presentation/Login";
import Dashboard from "../Views/Dashboard/Presentation/Main";

export const MainRoutes = [
  {
    path: "/",
    element: <Dashboard />,
    isDisable: false,
  },
];

export const PublicRoutes = [
  {
    path: "/login",
    element: <Login />,
    isDisable: false,
  },
];
