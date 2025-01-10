import { ImgHTMLAttributes, ReactNode } from "react";
import { classnames } from "../../lib/helpers/helpers";
import { PropsWithClassName } from "../../types/types";

interface CaseStudyHeaderProps extends PropsWithClassName {
  logo: ImgHTMLAttributes<HTMLImageElement>;
  header: ReactNode;
  description: string;
}

export default function CaseStudyHeader({
  logo,
  header,
  description,
}: CaseStudyHeaderProps) {
  return (
    <div className="px-4 lg:px-0">
      <img {...logo} className={classnames("mx-auto lg:mx-0", "mb-6")} />
      <h1
        className={classnames(
          "mb-3",
          "text-4xl md:text-5xl",
          "text-center lg:text-start",
          "md:leading-[120%]"
        )}
      >
        {header}
      </h1>
      <p
        className={classnames(
          "text-center lg:text-start",
          "text-xl md:text-2xl",
          "md:mx-auto lg:mx-0",
          "md:max-w-[34ch]"
        )}
      >
        {description}
      </p>
    </div>
  );
}
