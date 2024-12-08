import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  CASE_STUDY_ROUTE,
  GHOST_WRITER_ROUTE,
  HOME_ROUTE,
  STR_ROUTE,
  YELP_ELITE_ROUTE,
} from "./constants";
import App from "../../../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: HOME_ROUTE,
        lazy: async () => {
          const { HomeView } = await import("@views/home/HomeView");
          return { Component: HomeView };
        },
      },
      {
        path: CASE_STUDY_ROUTE,
        lazy: async () => {
          const { CaseStudyView } = await import(
            "@views/caseStudy/CaseStudyView"
          );
          return { Component: CaseStudyView };
        },
        children: [
          {
            path: GHOST_WRITER_ROUTE,
            lazy: async () => {
              const { GhostWriterCaseStudy } = await import(
                "@views/caseStudy/caseStudies/ghostWriter/GhostWriter"
              );
              return { Component: GhostWriterCaseStudy };
            },
          },
          {
            path: STR_ROUTE,
            lazy: async () => {
              const { STRCaseStudy } = await import(
                "@views/caseStudy/caseStudies/str/STR"
              );
              return { Component: STRCaseStudy };
            },
          },
          {
            path: YELP_ELITE_ROUTE,
            lazy: async () => {
              const { YelpEliteCaseStudy } = await import(
                "@views/caseStudy/caseStudies/YelpElite"
              );
              return { Component: YelpEliteCaseStudy };
            },
          },
        ],
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
