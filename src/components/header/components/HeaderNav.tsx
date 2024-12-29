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

          const preventDefaultIfActive: MouseEventHandler<HTMLButtonElement> = (
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
              <button
                className={clsx(
                  "uppercase rounded-lg py-2 px-3 text-white hover:bg-nav-active-link-bg transition-[background-color] centered-row h-8",
                  {
                    "bg-nav-active-link-bg": isActive,
                  }
                )}
                onClick={preventDefaultIfActive}
                onMouseEnter={handleMouseEnter}
              >
                <span className="leading-none">{route.name}</span>
              </button>
              {/* <Link
                onClick={preventDefaultIfActive}
                to={route.path}
                onMouseEnter={handleMouseEnter}
                className={clsx(
                  "uppercase rounded-lg py-1 px-3 text-white hover:bg-nav-active-link-bg transition-[background-color] centered-row",
                  {
                    "bg-nav-active-link-bg": isActive,
                  }
                )}
              >
                {route.name}
              </Link> */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNav;
