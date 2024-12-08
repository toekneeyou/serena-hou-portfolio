import { HOME_ROUTE } from "@features/router/constants";
import { classnames } from "../../lib/helpers/helpers";
import { useLocation, useNavigate } from "react-router-dom";

import { HeaderGradient } from "./components/HeaderGradient";
import { lazy, Suspense } from "react";
import { useAppSelector } from "@hooks/reduxHooks";
import { getIsDesktop } from "@store/viewportSlice";
import HeaderMobileMenu from "./components/HeaderMobileMenu";

const HeaderNav = lazy(() => import("./components/HeaderNav"));

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDesktop = useAppSelector(getIsDesktop);

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
          "px-[1.875rem] xl:p-[2.25rem]",
          "between-row z-header fixed w-full",
          "h-11 xl:h-16"
        )}
      >
        <button onClick={navigateHome} className="z-header">
          <img src="/src/assets/sh-logo.png" className={"h-6 w-auto"} />
        </button>
        <Suspense>{isDesktop ? <HeaderNav /> : <HeaderMobileMenu />}</Suspense>
        <HeaderGradient />
      </header>
    </>
  );
};

export default Header;
