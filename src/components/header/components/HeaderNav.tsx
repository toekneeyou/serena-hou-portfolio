import { useLocation, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../constants";
import { MouseEventHandler } from "react";
import { prefetchBlog, prefetchVideos, prefetchVisuals } from "../helpers";
import { ABS_ROUTES } from "@constants/routes";
import clsx from "clsx";

const HeaderNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
            } else {
              navigate(route.path);
            }
          };

          const handleMouseEnter = () => {
            if (route.path === ABS_ROUTES.VISUAL) prefetchVisuals();
            if (route.path === ABS_ROUTES.VIDEO) prefetchVideos();
            if (route.path === ABS_ROUTES.ABOUT) prefetchBlog();
          };

          return (
            <li key={`${route.path}-${route.name}`}>
              <a
                className={clsx(
                  "uppercase rounded-lg py-2 px-3 text-white hover:bg-white/25 transition-[background-color] centered-row h-8 cursor-pointer",
                  {
                    "bg-white/25": isActive,
                  }
                )}
                onClick={preventDefaultIfActive}
                onMouseEnter={handleMouseEnter}
              >
                <span className="leading-none">{route.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNav;
