import { Bars3Icon } from "@heroicons/react/24/solid";
import { APP_ROUTES } from "../constants";
import { useId, useState } from "react";
import { classnames } from "@helpers/helpers";

const HeaderMobileMenu = () => {
  const buttonId = useId();
  const navId = useId();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <button
        onClick={toggleMobileMenu}
        aria-controls={navId}
        aria-expanded={isMobileMenuOpen ? "true" : "false"}
        aria-label="Open navigation menu"
        id={buttonId}
        className="z-header"
      >
        <Bars3Icon className="size-6" />
      </button>
      <nav
        id={navId}
        className={classnames(
          "fixed top-0 py-11 left-0 right-0 bottom-0 h-screen w-screen transition-opacity z-mobile-menu bg-background",
          {
            "opacity-1": isMobileMenuOpen,
            "opacity-0 pointer-events-none": !isMobileMenuOpen,
          }
        )}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-y-20">
          {APP_ROUTES.map((route) => {
            return <li className="uppercase text-xs">{route.name}</li>;
          })}
        </ul>
      </nav>
    </>
  );
};

export default HeaderMobileMenu;
