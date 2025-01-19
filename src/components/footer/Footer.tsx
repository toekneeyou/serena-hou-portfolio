import { SOCIAL_MEDIA_LINKS } from "@constants/contacts";
import { useViewportState } from "@contexts/viewport/hooks";
import clsx from "clsx";
import shLogo from "@assets/sh-logo.png";

export const Footer = () => {
  const { viewportSize, isMobile, isTablet, isDesktop } = useViewportState();
  const iconSize = (() => {
    switch (viewportSize) {
      case "3xl":
      case "2xl":
      case "lg":
      case "md":
        return 36;
      default:
        return 24;
    }
  })();
  const isHidden = false;

  if (isHidden) return null;

  return (
    <footer
      className={clsx(
        "border-t-1 border-t-divider v-stack centered-col p-gutter-md h-footer-mobile",
        "md:h-footer-tablet md:p-gutter-lg",
        "lg:py-20 lg:flex-row-reverse lg:between-row lg:h-footer-desktop lg:p-gutter-xl"
      )}
    >
      <ul className={clsx("centered-row gap-x-9", "mb-4", "lg:mb-0")}>
        {SOCIAL_MEDIA_LINKS.map((sm) => {
          return (
            <li key={sm.name}>
              <a href={sm.url} target="_blank">
                <sm.icon size={iconSize} />
              </a>
            </li>
          );
        })}
      </ul>

      {(isMobile || isTablet) && (
        <p className={clsx("text-center mb-2 text-12px", "md:text-14px")}>
          Check out this portfolio on a desktop for the best experience!
        </p>
      )}
      <div className="centered-row gap-x-9">
        {isDesktop && (
          <img src={shLogo} className="h-9 aspect-square object-contain" />
        )}
        <p className="text-center text-12px">© 2024 Serena Hou</p>
      </div>
    </footer>
  );
};
