import { Link, useLocation } from "react-router-dom";
import { APP_ROUTES } from "../constants";
import { MouseEventHandler } from "react";
import { prefetchBlog, prefetchVideos, prefetchVisuals } from "../helpers";
import { ABS_ROUTES } from "@constants/routes";
import clsx from "clsx";

const HeaderNav = () => {
  const location = useLocation();

  return (
    <nav className="header-nav z-header-content">
      <ul className="flex items-center gap-x-3">
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
            if (route.path === ABS_ROUTES.VISUAL) prefetchVisuals();
            if (route.path === ABS_ROUTES.VIDEO) prefetchVideos();
            if (route.path === ABS_ROUTES.ABOUT) prefetchBlog();
          };

          return (
            <Link
              onClick={preventDefaultIfActive}
              key={`${route.path}-${route.name}`}
              to={route.path}
              onMouseEnter={handleMouseEnter}
              className={clsx(
                "uppercase rounded-lg py-1 px-3 text-white hover:bg-nav-active-link-bg transition-[background-color]",
                {
                  "bg-nav-active-link-bg": isActive,
                }
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

export default HeaderNav;
