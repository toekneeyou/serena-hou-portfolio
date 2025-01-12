import { APP_ROUTES } from "../constants";
import { MouseEventHandler, useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { XIcon } from "@components/icons/XIcon";
import { Menu2Icon } from "@components/icons/Menu2Icon";

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
        {isMobileMenuOpen ? <XIcon /> : <Menu2Icon />}
      </button>
      <nav
        id={navId}
        className={clsx(
          "fixed top-0 py-header left-0 right-0 bottom-0 h-screen w-screen transition-all z-mobile-menu bg-charcoal",
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
              window.scrollTo({ top: 0 });
            };

            return (
              <li className="uppercase text-base" key={route.path}>
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
