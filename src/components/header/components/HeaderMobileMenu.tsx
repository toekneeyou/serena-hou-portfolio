import { Bars3Icon } from "@heroicons/react/24/solid";
import { APP_ROUTES } from "../constants";
import { MouseEventHandler, useId, useState } from "react";
import { classnames } from "@helpers/helpers";
import { useNavigate } from "react-router-dom";

const HeaderMobileMenu = () => {
  const buttonId = useId();
  const navId = useId();
  const navigate = useNavigate();
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
        className="z-header-content"
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
        <ul className="flex flex-col items-center justify-center h-full gap-y-16">
          {APP_ROUTES.map((route) => {
            const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              navigate(route.path);
            };

            return (
              <li className="uppercase text-md" role="link">
                <a href={route.path} onClick={handleClick}>
                  {route.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default HeaderMobileMenu;
