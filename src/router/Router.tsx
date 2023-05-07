import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Error } from "../pages/Error";
import { Provider } from "react-redux";
import { store } from "../utilis/store";
import { Maintainance } from "../pages/Maintainance";

const Router: React.FC = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/tv-shows",
      element: <Maintainance />,
      errorElement: <Error />,
    },
    {
      path: "/genre",
      element: <Maintainance />,
      errorElement: <Error />,
    },

    {
      path: "/latest",
      element: <Maintainance />,
      errorElement: <Error />,
    },
    {
      path: "/my-list",
      element: <Maintainance />,
      errorElement: <Error />,
    },
    {
      path: "/lannguage",
      element: <Maintainance />,
      errorElement: <Error />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default Router;
