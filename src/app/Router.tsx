import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "@app/App";
import { NotFound } from "@views/not-found/NotFound";
import { ROUTES } from "@constants/routes";
import { HomeView } from "@views/home/HomeView";
import { VisualView } from "@views/visual/VisualView";
import { VideoView } from "@views/video/VideoView";
import { AboutView } from "@views/about/AboutView";
import { ContactView } from "@views/contact/ContactView";
import { CaseStudyView } from "@views/case-study/CaseStudyView";
import { STRCaseStudy } from "@views/case-study/components/STRCaseStudy";
import { YoutubeCaseStudy } from "@views/case-study/components/YoutubeCaseStudy";
import { GhostWriterCaseStudy } from "@views/case-study/components/GhostWriterCaseStudy";
import { YelpCaseStudy } from "@views/case-study/components/YelpCaseStudy";

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
      { path: ROUTES.VIDEO, element: <VideoView /> },
      { path: ROUTES.ABOUT, element: <AboutView /> },
      { path: ROUTES.CONTACT, element: <ContactView /> },
      {
        path: ROUTES.CASE_STUDY,
        element: <CaseStudyView />,
        children: [
          {
            path: `${ROUTES.CASE_STUDY}${ROUTES.STR}`,
            element: <STRCaseStudy />,
          },
          {
            path: `${ROUTES.CASE_STUDY}${ROUTES.GHOST_WRITER}`,
            element: <GhostWriterCaseStudy />,
          },
          {
            path: `${ROUTES.CASE_STUDY}${ROUTES.YELP}`,
            element: <YelpCaseStudy />,
          },
          {
            path: `${ROUTES.CASE_STUDY}${ROUTES.YOUTUBE}`,
            element: <YoutubeCaseStudy />,
          },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
