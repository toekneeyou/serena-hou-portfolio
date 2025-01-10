import clsx from "clsx";
import { FC, ReactNode } from "react";
import { ElementProps } from "src/types/types";

interface ProjectCardProps extends ElementProps<HTMLDivElement> {
  header: ReactNode;
  subheader: ReactNode;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  className,
  header,
  subheader,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "rounded-xl pt-11 text-black bg-[#dbdbdb] overflow-hidden w-80 h-80 gap-3",
        className
      )}
      {...props}
    >
      <div>
        <h3 className="mx-6 mb-3 leading-tight text-center text-20 font-bold">
          {header}
        </h3>
        <p className="text-[#666] text-center mx-6 text-12">{subheader}</p>
      </div>
      {children}
    </div>
  );
};
