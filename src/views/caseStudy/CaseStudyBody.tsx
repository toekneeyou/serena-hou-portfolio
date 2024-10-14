import { classnames } from "../../lib/helpers";
import { PropsWithClassNameAndChildren } from "../../lib/types";

export default function CaseStudyBody({
  className,
  children,
}: PropsWithClassNameAndChildren) {
  return (
    <section
      className={classnames(
        "bg-white rounded-[1.75rem]",
        "-translate-y-8 md:-translate-y-32 xl:-translate-y-[25vh]",
        "pt-[6rem]",
        "px-6 md:px-12",
        "md:mx-6 lg:mx-[2.5rem] xl:mx-[5rem] 2xl:mx-[7.5rem]",

        className
      )}
    >
      {children}
    </section>
  );
}
