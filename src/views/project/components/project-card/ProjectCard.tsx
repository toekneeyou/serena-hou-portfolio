import clsx from "clsx";
import { FC } from "react";
import { ProjectCardProps } from "./types";
import { renderProjectCardText } from "@views/project/components/project-card/helpers";
import filmFrame from "@assets/film-frame.png";
import { useViewportState } from "@contexts/viewport/hooks";
import { useNavigate } from "react-router-dom";

export const ProjectCard: FC<ProjectCardProps> = ({
  className,
  header,
  subheader,
  visual,
  skills,
  background,
  style = {},
  url,
  ...props
}) => {
  const { isMobile } = useViewportState();
  const navigate = useNavigate();
  return (
    <div
      role="button"
      tabIndex={0}
      className={clsx(
        "w-320px h-320px aspect-square pt-44px flex flex-col rounded-xl text-black bg-clip-border gap-3 cursor-pointer relative bg-neutral-300 group",
        "md:w-tablet-container md:max-w-full md:aspect-auto md:px-56px md:py-0 md:flex-row md:items-center",
        "lg:w-full lg:h-560px lg:px-96px",
        className
      )}
      style={{
        backgroundImage: background ? `url(${background})` : undefined,
        backgroundSize: "cover",
        ...style,
      }}
      onClick={() => navigate(url)}
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

      <div>
        <h3
          className={clsx(
            "text-center text-20px mx-24px mb-12px leading-tight font-bold",
            "md:text-start md:text-24px md:mx-0 md:mb-8px",
            "lg:text-32px lg:mb-12px",
            "xl:text-40px"
          )}
        >
          {header.map(renderProjectCardText)}
        </h3>
        <p
          className={clsx(
            "mx-24px text-12px text-center text-neutral-500",
            "md:mx-0 md:text-14px md:text-start",
            "lg:text-18px",
            "xl:text-24px"
          )}
        >
          {subheader.map(renderProjectCardText)}
        </p>

        <ul className={clsx("hidden", "md:flex md:flex-wrap md:mt-48px")}>
          {skills.map((skill) => {
            return (
              <li
                key={skill}
                className={clsx(
                  "text-nowrap after:content-['/'] after:mx-1 last:after:content-[''] last:after:mx-0 text-neutral-950",
                  "md:text-12px",
                  "lg:text-14px",
                  "xl:text-20px"
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
