import Nav from "./Nav";
import { homeRoute } from "../../lib/services/routeService";
import { classnames } from "../../lib/helpers";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateHome = () => {
    if (location.pathname === homeRoute.path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    navigate(homeRoute.path!);
  };

  return (
    <>
      <header
        className={classnames(
          "header",
          "between-row z-50 fixed h-[6.25rem] w-full p-[2.25rem]"
        )}
      >
        <button onClick={navigateHome}>
          <img src="/src/assets/serena-white.png" width={140} height={30} />
        </button>
        <Nav />
      </header>
      <HeaderGradient />
    </>
  );
};

export default Header;

const HeaderGradient = () => {
  return (
    <div
      role="none"
      className={classnames(
        "header-gradient",
        "bg-header h-[40%] w-full fixed left-0 top-0 pointer-events-none z-[49]"
      )}
    />
  );
};
