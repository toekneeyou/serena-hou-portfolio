import { ROUTES } from "@constants/routes";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import HeaderNav from "./components/HeaderNav";
import { lazy, Suspense } from "react";
import { useViewportState } from "@contexts/viewport/hooks";
import { useMenUActions } from "@contexts/menu/hooks";

const HeaderMobileMenu = lazy(() => import("./components/HeaderMobileMenu"));

export const Header = () => {
  const navigate = useNavigate();
  const { isMobile } = useViewportState();
  const { closeMenu } = useMenUActions();

  const goHome = () => {
    closeMenu();
    navigate(ROUTES.HOME);
  };

  return (
    <header
      className={clsx(
        "px-7 h-header-mobile bg-charcoal between-row z-header fixed w-full",
        "md:h-header-tablet  md:bg-transparent"
      )}
    >
      <button onClick={goHome} className="z-header-content">
        <img src="/src/assets/sh-logo.png" className={clsx("h-8 w-auto")} />
      </button>

      {!isMobile && <div className="header-gradient" />}

      <Suspense>{isMobile ? <HeaderMobileMenu /> : <HeaderNav />}</Suspense>
    </header>
  );
};
