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
    <div className={classnames("pt-16 px-6")}>
      <img {...logo} className="mx-auto mb-6" />
      <h1 className="text-4xl text-center mb-3">{header}</h1>
      <p className="text-xl text-center">{description}</p>
    </div>
  );
}
