import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "@app/App";

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
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
