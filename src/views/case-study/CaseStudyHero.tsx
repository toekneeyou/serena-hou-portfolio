import { HTMLAttributes } from "react";
import { classnames } from "../../lib/helpers/helpers";
import { PropsWithClassNameAndChildren } from "../../types/types";

interface CaseStudyHeroProps
  extends PropsWithClassNameAndChildren,
    HTMLAttributes<HTMLElement> {}

export default function CaseStudyHero({
  children,
  className,
  ...sectionProps
}: CaseStudyHeroProps) {
  return (
    <section
      className={classnames(
        "relative",
        "pt-[4rem] md:pt-[6rem] lg:pt-[25vh]",
        "lg:px-[2.5rem] xl:px-[5rem] 2xl:px-[7.5rem]",
        "lg:flex lg:h-screen lg:overflow-hidden",
        className
      )}
      {...sectionProps}
    >
      {children}
    </section>
  );
}
