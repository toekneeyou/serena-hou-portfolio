import { ImgHTMLAttributes, ReactNode } from "react";
import { classnames } from "../../lib/helpers";
import { PropsWithClassName } from "../../lib/types";

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
    <div className={classnames("pt-16 md:pt-[5.75rem]", "px-6")}>
      <img {...logo} className="mx-auto mb-6" />
      <h1
        className={classnames(
          "text-4xl md:text-5xl",
          "text-center mb-3",
          "md:leading-[120%]"
        )}
      >
        {header}
      </h1>
      <p
        className={classnames(
          "text-center",
          "text-xl md:text-2xl",
          "md:mx-auto md:max-w-[34ch]"
        )}
      >
        {description}
      </p>
    </div>
  );
}
