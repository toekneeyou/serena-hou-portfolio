import { ButtonHTMLAttributes, useState } from "react";
import { classnames } from "../../lib/helpers/helpers";

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

export default ContactButton;
