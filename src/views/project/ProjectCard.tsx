import { forwardRef, LegacyRef } from "react";
import { PropsWithClassName } from "../../lib/types";
import { classnames } from "../../lib/helpers";
import { Project } from "./ProjectCards";

interface ProjectCardProps extends PropsWithClassName, Project {}

const ProjectCard = forwardRef(
  (
    { className, title, description, skills, src, alt }: ProjectCardProps,
    ref
  ) => {
    return (
      <div
        ref={ref as LegacyRef<HTMLDivElement>}
        className={classnames(
          "project-card",
          "w-full max-w-[75rem] h-[35rem] rounded-[1.25rem] duration-300 p-[4.25rem] text-black grid grid-cols-2 gap-x-28",
          className
        )}
      >
        <div className="project-card__text my-auto">
          <h2 className="text-[2.125rem] leading-none mb-8">{title}</h2>
          <p className="text-[1.5rem] mb-[7.75rem]">{description}</p>
          <ul className="flex">
            {skills.map((skill, i) => {
              const isLast = i === skills.length - 1;
              return (
                <li
                  key={skill}
                  className={classnames({
                    'after:content-["/"] after:mx-[1ch]': !isLast,
                  })}
                >
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="project-card__image my-auto">
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
);

export default ProjectCard;
