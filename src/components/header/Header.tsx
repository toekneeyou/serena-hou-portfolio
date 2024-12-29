import { ABS_ROUTES } from "@constants/routes";
import { useNavigate } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useAppSelector } from "@hooks/reduxHooks";
import { getIsMobile } from "@store/viewportSlice";
import HeaderNav from "./components/HeaderNav";

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
      <button onClick={goHome}>
        <img src="/src/assets/sh-logo.png" className={clsx("h-8 w-auto")} />
      </button>

      {isMobile ? (
        <button>
          <Bars3Icon className="size-6" />
        </button>
      ) : (
        <HeaderNav />
      )}
    </header>
  );
};
