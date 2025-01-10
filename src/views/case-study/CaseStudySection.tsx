import { PropsWithChildren } from "react";
import { classnames } from "../../lib/helpers/helpers";

interface CaseStudySectionProps extends PropsWithChildren {
  description: string;
  header: string;
  descriptionColor: string;
  id?: string;
}

export const CaseStudySection = ({
  children,
  description,
  header,
  descriptionColor,
  id,
}: CaseStudySectionProps) => {
  return (
    <div className="text-lg" id={id}>
      <p
        className={classnames(
          `uppercase font-bold mb-2`,
          "text-sm md:text-xl",
          descriptionColor
        )}
      >
        {description}
      </p>
      <h2
        className={classnames(
          "mb-4 md:mb-6",
          "text-3xl md:text-[2.5rem]",
          "leading-[110%] md:leading-[120%]"
        )}
      >
        {header}
      </h2>
      <div className={classnames("space-y-6 leading-[150%]", "text-lg")}>
        {children}
      </div>
    </div>
  );
};
