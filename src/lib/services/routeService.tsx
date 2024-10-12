import { createBrowserRouter } from "react-router-dom";
import App from "../../App";

export const HOME_ROUTE = "/";
export const CASE_STUDY_ROUTE = "/case-study";
export const GHOST_WRITER_ROUTE = `${CASE_STUDY_ROUTE}/ghost-writer`;
export const STR_ROUTE = `${CASE_STUDY_ROUTE}/str`;
export const YELP_ELITE_ROUTE = `${CASE_STUDY_ROUTE}/yelp-elite`;

export const router = createBrowserRouter([
  {
    path: HOME_ROUTE,
    element: <App />,
    children: [
      {
        path: CASE_STUDY_ROUTE,
        lazy: async () => {
          const { CaseStudyView } = await import(
            "../../views/caseStudy/CaseStudyView"
          );
          return { Component: CaseStudyView };
        },
        children: [
          {
            path: GHOST_WRITER_ROUTE,
            lazy: async () => {
              const { GhostWriterCaseStudy } = await import(
                "../../views/caseStudy/caseStudies/ghostWriter/GhostWriter"
              );
              return { Component: GhostWriterCaseStudy };
            },
          },
          {
            path: STR_ROUTE,
            lazy: async () => {
              const { STRCaseStudy } = await import(
                "../../views/caseStudy/caseStudies/str/STR"
              );
              return { Component: STRCaseStudy };
            },
          },
          {
            path: YELP_ELITE_ROUTE,
            lazy: async () => {
              const { YelpEliteCaseStudy } = await import(
                "../../views/caseStudy/caseStudies/YelpElite"
              );
              return { Component: YelpEliteCaseStudy };
            },
          },
        ],
      },
    ],
  },
]);
