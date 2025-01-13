import clsx from "clsx";
import { FC } from "react";
import { ProjectCardProps } from "./types";
import { renderProjectCardText } from "@views/project/components/project-card/helpers";
import filmFrame from "@assets/film-frame.png";
import { useViewportState } from "@contexts/viewport/hooks";

export const ProjectCard: FC<ProjectCardProps> = ({
  className,
  header,
  subheader,
  visual,
  skills,
  background,
  style = {},
  ...props
}) => {
  const { isMobile } = useViewportState();
  return (
    <div
      className={clsx(
        "w-80 md:w-tablet-container md:max-w-full lg:w-full",
        "h-80 lg:h-[35rem]",
        "aspect-square md:aspect-auto",
        "pt-11 md:px-14 md:py-0 lg:px-24",
        "flex flex-col md:flex-row md:items-center",
        "rounded-xl text-black bg-clip-border gap-3 cursor-pointer relative bg-neutral-300 group",
        className
      )}
      style={{
        backgroundImage: background ? `url(${background})` : undefined,
        backgroundSize: "cover",
        ...style,
      }}
      {...props}
    >
      {!isMobile && (
        <img
          loading="lazy"
          src={filmFrame}
          className="w-full h-full absolute top-0 left-0 pointer-events-none"
          role="presentation"
        />
      )}

      <div className="">
        <h3
          className={clsx(
            "text-center md:text-start",
            "text-20 md:text-24 lg:text-32 xl:text-40",
            "mx-6 md:mx-0 mb-3 md:mb-2 lg:mb-3",
            "leading-tight font-bold"
          )}
        >
          {header.map(renderProjectCardText)}
        </h3>
        <p
          className={clsx(
            "mx-6 md:mx-0",
            "text-center md:text-start",
            "text-12 md:text-14 lg:text-18 xl:text-24",
            "text-neutral-500"
          )}
        >
          {subheader.map(renderProjectCardText)}
        </p>

        <ul className={clsx("hidden md:flex md:flex-wrap", "md:mt-12")}>
          {skills.map((skill) => {
            return (
              <li
                key={skill}
                className={clsx(
                  "md:text-12 lg:text-14 xl:text-20",
                  "text-nowrap after:content-['/'] after:mx-1 last:after:content-[''] last:after:mx-0 text-neutral-950"
                )}
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </div>

      {visual}
    </div>
  );
};
