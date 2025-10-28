import React, { FC } from "react";
import { useRoutes } from "react-router-dom";
import { Compare, History, Home, NotFound } from "src/pages";
import { PATHNAMES } from "../config/routes";

const ROUTES = [
  {
    element: <Home />,
    path: PATHNAMES.HOME,
  },
  {
    element: <Compare />,
    path: PATHNAMES.COMPARE,
  },
  {
    element: <History />,
    path: PATHNAMES.HISTORY,
  },
  {
    element: <NotFound />,
    path: PATHNAMES.NOT_FOUND,
  },
];

const AppRoutes: FC = () => {
  return useRoutes(ROUTES);
};

export default AppRoutes;
