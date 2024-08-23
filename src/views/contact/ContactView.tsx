import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { ButtonHTMLAttributes, useState } from "react";
import { classnames } from "../../lib/helpers";

const EMAIL = "serena1214@gmail.com";

export const ContactView = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    alert("Email successfully copied to clipboard!");
  };

  return (
    <section className="h-screen grid grid-rows-[max-content_1fr_max-content] p-[8rem]">
      <div className="between-row">
        <span className="opacity-80">BASED IN LOS ANGELES</span>
        <span className="opacity-80">WORKING WORLDWIDE</span>
      </div>
      <div className="centered-col">
        <h2 className="opacity-50 text-[5rem] mb-[2.25rem]">LET'S CONNECT!</h2>
        <div className="centered-row gap-x-4">
          <a href={`mailto:${EMAIL}`} className="font-bold text-[1.5rem]">
            {EMAIL}
          </a>
          <button onClick={handleCopyEmail}>
            <DocumentDuplicateIcon className="size-6 text-white" />
          </button>
        </div>
      </div>
      <ul className="between-row">
        <li>
          <ContactButton
            name="INSTAGRAM"
            logoSrc="/src/assets/instagram-logo.png"
            onClick={() =>
              window.open(import.meta.env.VITE_INSTAGRAM_URL, "_blank")
            }
          />
        </li>
        <li>
          <ContactButton
            name="LINKEDIN"
            logoSrc="/src/assets/linkedin-logo.png"
            onClick={() =>
              window.open(import.meta.env.VITE_LINKEDIN_URL, "_blank")
            }
          />
        </li>
        <li>
          <ContactButton
            name="YOUTUBE"
            logoSrc="/src/assets/youtube-logo.png"
            onClick={() =>
              window.open(import.meta.env.VITE_YOUTUBE_URL, "_blank")
            }
          />
        </li>
      </ul>
    </section>
  );
};

interface ContactButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  logoSrc: string;
}
const ContactButton = ({
  name,
  logoSrc,
  className,
  ...buttonAttributes
}: ContactButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <button
      type="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classnames(
        "opacity-80 border-[1px] border-transparent hover:border-white transition-[border] px-6 h-10 relative min-w-[7.75rem]",
        className
      )}
      {...buttonAttributes}
    >
      <div
        className={classnames(
          "absolute w-full h-full left-0 top-0 centered-row",
          { "opacity-0": isHovered }
        )}
      >
        {name}
      </div>
      <div
        className={classnames(
          "absolute w-full h-full left-0 top-0 centered-row",
          { "opacity-0": !isHovered }
        )}
      >
        <img src={logoSrc} />
      </div>
    </button>
  );
};
