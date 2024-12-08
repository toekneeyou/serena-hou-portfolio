import { HOME_ROUTE } from "@features/router/constants";
import { classnames } from "../../lib/helpers/helpers";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/HeaderNav";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateHome = () => {
    if (location.pathname === HOME_ROUTE) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    navigate(HOME_ROUTE);
  };

  return (
    <>
      <header
        className={classnames(
          "header",
          "between-row z-50 fixed h-16 w-full p-[2.25rem]"
        )}
      >
        <button onClick={navigateHome}>
          <img src="/src/assets/sh-logo.png" className="h-6 w-auto" />
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
