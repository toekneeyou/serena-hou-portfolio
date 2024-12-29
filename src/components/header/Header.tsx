import { ABS_ROUTES } from "@constants/routes";
import { useNavigate } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import clsx from "clsx";

export const Header = () => {
  const navigate = useNavigate();

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

      <button>
        <Bars3Icon className="size-6" />
      </button>
    </header>
  );
};
