import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "@app/App";
import { NotFound } from "@views/not-found/NotFound";
import { ROUTES } from "@constants/routes";
import { HomeView } from "@views/home/HomeView";
import { VisualView } from "@views/visual/VisualView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: ROUTES.PROJECT,
        element: <HomeView />,
      },
      { path: ROUTES.VISUAL, element: <VisualView /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
