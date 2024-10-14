import { ReactNode } from "react";
import { classnames } from "../../lib/helpers";
import { PropsWithClassName } from "../../lib/types";

interface CaseStudyBodyProps extends PropsWithClassName {
  nav: ReactNode;
  content: ReactNode;
}

export default function CaseStudyBody({
  className,
  nav,
  content,
}: CaseStudyBodyProps) {
  return (
    <section className={classnames("lg:grid lg:grid-cols-1")}>
      {nav !== undefined && (
        <div
          className={classnames(
            "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 z-10",
            "lg:pl-[2.5rem] xl:pl-[5rem] 2xl:pl-[7.5rem]"
          )}
        >
          {nav}
        </div>
      )}
      <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
        <div
          className={classnames(
            "bg-white rounded-[1.75rem]",
            "-translate-y-8 md:-translate-y-32 xl:-translate-y-[25vh]",
            "pt-[6rem]",
            "px-6 md:px-12",
            "md:mx-6 lg:mx-[2.5rem] xl:mx-[5rem] 2xl:mx-[7.5rem]",

            className
          )}
        >
          {content}
        </div>
      </div>
    </section>
  );
}
