import { Link, useLocation } from "react-router-dom";
import {
  aboutRoute,
  homeRoute,
  videoRoute,
  visualRoute,
} from "../../lib/services/routeService";
import { classnames } from "../../lib/helpers";
import {} from "../../lib/hooks/reduxHooks";
import { store } from "../../store/store";

const prefetchVisuals = () => {
  requestIdleCallback(() => {
    import("../../store/visualSlice").then((module) => {
      module.injectVisualSlice();
      if (module.visualGetShouldFetch(store.getState())) {
        store.dispatch(module.visualInitialFetch());
      }
    });
  });
};

const prefetchVideos = () => {
  requestIdleCallback(() => {
    import("../../store/video/videoSlice").then((module) => {
      module.injectVideoSlice();
      if (module.videoGetShouldFetch(store.getState())) {
        store.dispatch(module.videoInitialFetch());
      }
    });
  });
};

const prefetchBlog = () => {
  requestIdleCallback(() => {
    import("../../store/blog/blogSlice").then((module) => {
      module.injectBlogSlice();
      if (module.blogGetShouldFetch(store.getState())) {
        store.dispatch(module.blogInitialFetch());
      }
    });
  });
};

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      <ul className="flex items-center gap-x-[0.625rem]">
        {homeRoute.children?.map((ar) => {
          const isActive = location.pathname + location.hash === ar.path;

          const handleMouseEnter = () => {
            if (ar.name === visualRoute.name) prefetchVisuals();
            if (ar.name === videoRoute.name) prefetchVideos();
            if (ar.name === aboutRoute.name) prefetchBlog();
          };

          return (
            <Link
              key={ar.id}
              to={`${ar.path!}`}
              onMouseEnter={handleMouseEnter}
              className={classnames(
                "uppercase rounded-[0.625rem] py-2 px-4",
                { "text-white": !isActive },
                { "bg-fog text-taupe": isActive }
              )}
            >
              {ar.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
