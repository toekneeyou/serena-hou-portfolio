import { ABS_ROUTES } from "@constants/routes";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useAppSelector } from "@hooks/reduxHooks";
import { getIsMobile } from "@store/viewportSlice";
import HeaderNav from "./components/HeaderNav";
import { lazy, Suspense } from "react";

const HeaderMobileMenu = lazy(() => import("./components/HeaderMobileMenu"));

export const Header = () => {
  const navigate = useNavigate();
  const isMobile = useAppSelector(getIsMobile);

  const goHome = () => {
    navigate(ABS_ROUTES.HOME);
  };

  return (
    <header
      className={clsx(
        "app-header",
        "px-7 py-7 h-header",
        "bg-background between-row z-header fixed w-full"
      )}
    >
      <button onClick={goHome} className="z-header-content">
        <img src="/src/assets/sh-logo.png" className={clsx("h-8 w-auto")} />
      </button>

      <Suspense>{isMobile ? <HeaderMobileMenu /> : <HeaderNav />}</Suspense>
    </header>
  );
};
