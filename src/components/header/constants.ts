import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  PROJECT_ROUTE,
  VIDEO_ROUTE,
  VISUAL_ROUTE,
} from "@features/router/constants";

export const APP_ROUTES = [
  { path: PROJECT_ROUTE, name: "Project" },
  { path: VISUAL_ROUTE, name: "Visual" },
  { path: VIDEO_ROUTE, name: "Video" },
  { path: ABOUT_ROUTE, name: "About" },
  { path: CONTACT_ROUTE, name: "Contact" },
];
