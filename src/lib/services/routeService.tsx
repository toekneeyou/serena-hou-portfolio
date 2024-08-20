import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";

/**
 *
 * AppRoute is the route class for nav elements inside the App.
 *
 */
class AppRoute {
  name: string;
  id: string;
  path: RouteObject["path"];
  element?: RouteObject["element"];
  lazy?: RouteObject["lazy"];
  children?: AppRoute[];

  constructor({ name, id, path, element, lazy, children }: AppRoute) {
    this.name = name;
    this.id = id;
    this.path = path;
    this.element = element;
    this.lazy = lazy;
    this.children = children ?? [];
  }
}
/**
 *
 * Create Routes. `homeRoute` is the parent route.
 *
 */
export const homeRoute = new AppRoute({
  name: "Home",
  id: "home",
  path: "/",
  element: <App />,
});
export const projectRoute = new AppRoute({
  name: "Project",
  id: "project",
  path: "/#project",
  element: <App />,
});
export const visualRoute = new AppRoute({
  name: "Visual",
  id: "visual",
  path: "/visual",
  lazy: async () => {
    const { VisualView } = await import("../../views/visual/VisualView");
    return { Component: VisualView };
  },
});
export const videoRoute = new AppRoute({
  name: "Video",
  id: "video",
  path: "/video",
  lazy: async () => {
    const { VideoView } = await import("../../views/video/VideoView");
    return { Component: VideoView };
  },
});
export const aboutRoute = new AppRoute({
  name: "About",
  id: "about",
  path: "/about",
  lazy: async () => {
    const { AboutView } = await import("../../views/about/AboutView");
    return { Component: AboutView };
  },
});
export const contactRoute = new AppRoute({
  name: "Contact",
  id: "contact",
  path: "/contact",
  lazy: async () => {
    const { ContactView } = await import("../../views/contact/ContactView");
    return { Component: ContactView };
  },
});
homeRoute.children?.push(
  projectRoute,
  visualRoute,
  videoRoute,
  aboutRoute,
  contactRoute
);
/**
 *
 * Converts appRoutes into the right format to pass into `createBrowserRouter` for react-router-dom to use
 *
 */
const convertAppRouteToRouterRoute = (appRoutes: AppRoute[]) => {
  return appRoutes.map((ar) => {
    const routeObject: RouteObject = {
      path: ar.path,
    };
    if (ar.element) {
      routeObject.element = ar.element;
    }
    if (ar.lazy) {
      routeObject.lazy = ar.lazy;
    }
    if (ar.children && ar.children.length > 0) {
      routeObject.children = convertAppRouteToRouterRoute(ar.children);
    }
    return routeObject;
  });
};
const routerRoutes = convertAppRouteToRouterRoute([homeRoute]);
/**
 *
 * Router that react-router-dom is going to use
 *
 */
export const router = createBrowserRouter(routerRoutes);
