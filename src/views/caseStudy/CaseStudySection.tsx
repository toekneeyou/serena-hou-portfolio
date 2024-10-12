import { PropsWithChildren } from "react";
import { classnames } from "../../lib/helpers";

interface CaseStudySectionProps extends PropsWithChildren {
  description: string;
  header: string;
  descriptionColor: string;
}

export const CaseStudySection = ({
  children,
  description,
  header,
  descriptionColor,
}: CaseStudySectionProps) => {
  return (
    <div>
      <p
        className={classnames(
          `uppercase text-sm font-bold mb-2`,
          descriptionColor
        )}
      >
        {description}
      </p>
      <h2 className="leading-10 mb-6">{header}</h2>
      {children}
    </div>
  );
};
