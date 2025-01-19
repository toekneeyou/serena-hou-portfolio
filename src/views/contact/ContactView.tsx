import { CopyIcon } from "@components/icons/CopyIcon";
import { SOCIAL_MEDIA_LINKS } from "@constants/contacts";
import serenaContactGif from "@assets/serena-contact.gif";
import clsx from "clsx";
import { useViewportState } from "@contexts/viewport/hooks";
import { footerHeightDesktop, footerHeightTablet } from "@theme/height";
import { pxToRem } from "@helpers/conversions";

const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;

export const ContactView = () => {
  const { isMobile, isTablet } = useViewportState();
  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(emailAddress);
    alert("Email successfully copied to clipboard!");
  };

  return (
    <main
      className="main-content-layout"
      style={{
        minHeight: !isMobile
          ? `calc(100vh - ${pxToRem(
              isTablet ? footerHeightTablet : footerHeightDesktop
            )})`
          : undefined,
      }}
    >
      <div className="centered-col gap-y-14 fluid-container">
        <h2 className={"title"}>LET'S CONNECT!</h2>

        <div className="center-row">
          <img
            src={serenaContactGif}
            className={clsx(
              "h-40 w-40 rounded-full",
              "md:h-200px md:w-200px",
              "lg:h-240px lg:w-240px"
            )}
            alt="Serena"
          />
        </div>

        <div className={clsx("space-y-6", "md:space-y-9")}>
          <div className="centered-row gap-x-4">
            <p className="md:text-24px">{emailAddress}</p>

            <button onClick={handleCopyEmail} aria-label="Copy Email">
              <CopyIcon />
            </button>
          </div>
          <ul
            className={clsx("centered-col gap-y-6", "md:flex-row md:gap-x-10")}
          >
            {SOCIAL_MEDIA_LINKS.filter(
              (socialMedia) => socialMedia.name !== "Email"
            ).map((sm) => {
              const handleClick = () => {
                window.open(sm.url, "_blank");
              };

              return (
                <li key={sm.name}>
                  <button className="btn" onClick={handleClick}>
                    {sm.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};
