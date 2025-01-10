import { ROUTES } from "@constants/routes";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import HeaderNav from "./components/HeaderNav";
import { lazy, Suspense } from "react";
import { useViewportState } from "@contexts/viewport/hooks";

const HeaderMobileMenu = lazy(() => import("./components/HeaderMobileMenu"));

export const Header = () => {
  const navigate = useNavigate();
  const { isMobile } = useViewportState();

  const goHome = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <header
      className={clsx(
        "app-header",
        "px-7 h-header",
        "bg-charcoal between-row z-header fixed w-full"
      )}
    >
      <button onClick={goHome} className="z-header-content">
        <img src="/src/assets/sh-logo.png" className={clsx("h-8 w-auto")} />
      </button>

      <Suspense>{isMobile ? <HeaderMobileMenu /> : <HeaderNav />}</Suspense>
    </header>
  );
};
