import { Link, useLocation } from "react-router-dom";
import { APP_ROUTES } from "../constants";
import { MouseEventHandler } from "react";
import {
  ABOUT_ROUTE,
  VIDEO_ROUTE,
  VISUAL_ROUTE,
} from "@features/router/constants";
import { classnames } from "@helpers/helpers";
import { prefetchBlog, prefetchVideos, prefetchVisuals } from "../helpers";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      <ul className="flex items-center gap-x-[0.625rem]">
        {APP_ROUTES.map((route) => {
          const isActive = location.pathname === route.path;

          const preventDefaultIfActive: MouseEventHandler<HTMLAnchorElement> = (
            e
          ) => {
            if (isActive) {
              e.preventDefault();
            }
          };

          const handleMouseEnter = () => {
            if (route.name === VISUAL_ROUTE) prefetchVisuals();
            if (route.name === VIDEO_ROUTE) prefetchVideos();
            if (route.name === ABOUT_ROUTE) prefetchBlog();
          };

          return (
            <Link
              onClick={preventDefaultIfActive}
              key={`${route.path}-${route.name}`}
              to={route.name}
              onMouseEnter={handleMouseEnter}
              className={classnames(
                "uppercase rounded-[0.625rem] py-1 px-4",
                { "bg-fog text-taupe": isActive },
                { "text-white": !isActive }
              )}
            >
              {route.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
