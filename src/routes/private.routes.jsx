import Home from "@layouts/layout_home";
import { Navigate } from "react-router-dom";

const ROUTER_PATH = {
  HOME_FIRST: "/",
  HOME_INDEX: "/index",
};

const PublicRoutes = [
  {
    path: ROUTER_PATH.HOME_FIRST,
    element: <Home />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTER_PATH.HOME_FIRST} replace />,
      },
      {
        path: ROUTER_PATH.HOME_FIRST,
        element: <Home />,
      },
    ],
  },
];

export default PublicRoutes;
