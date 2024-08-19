import { Link, useLocation } from "react-router-dom";
import { homeRoute } from "../../lib/services/routeService";
import { classnames } from "../../lib/helpers";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      <ul className="flex items-center gap-x-[0.625rem]">
        {homeRoute.children?.map((ar) => {
          const isActive = location.pathname === `/${ar.path}`;

          return (
            <Link
              key={ar.id}
              to={ar.path!}
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
