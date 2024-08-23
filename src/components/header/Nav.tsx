import { Link, useLocation } from "react-router-dom";
import {
  homeRoute,
  videoRoute,
  visualRoute,
} from "../../lib/services/routeService";
import { classnames } from "../../lib/helpers";
import { useAppDispatch } from "../../lib/hooks/reduxHooks";
import { store } from "../../store/store";

const Nav = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const prefetchVisuals = () => {
    requestIdleCallback(() => {
      import("../../store/visualSlice").then((module) => {
        module.injectVisualSlice();
        if (module.visualGetShouldFetch(store.getState())) {
          dispatch(module.visualInitialFetch());
        }
      });
    });
  };

  const prefetchVideos = () => {
    requestIdleCallback(() => {
      import("../../store/videoSlice").then((module) => {
        module.injectVideoSlice();
        if (module.videoGetShouldFetch(store.getState())) {
          dispatch(module.videoInitialFetch());
        }
      });
    });
  };

  return (
    <nav className="nav">
      <ul className="flex items-center gap-x-[0.625rem]">
        {homeRoute.children?.map((ar) => {
          const isActive = location.pathname + location.hash === ar.path;

          const handleMouseEnter = () => {
            if (ar.name === visualRoute.name) prefetchVisuals();
            if (ar.name === videoRoute.name) prefetchVideos();
          };

          return (
            <Link
              key={ar.id}
              to={`${ar.path!}`}
              onMouseEnter={handleMouseEnter}
              className={classnames(
                "text-[1.25rem] uppercase rounded-[0.625rem] py-[0.625rem] px-4",
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
