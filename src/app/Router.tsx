import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "@app/App";
import { NotFound } from "@views/not-found/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { HomeView } = await import("@views/home/HomeView");
          return { Component: HomeView };
        },
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
