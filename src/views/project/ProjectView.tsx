import { pxToRem } from "@helpers/helpers";
import { ProjectCard } from "./components/project-card/ProjectCard";
import { projectTranslations } from "./constants";
import { renderProjectCardText } from "./helpers";

export const ProjectView = () => {
  return (
    <section className="centered-col gap-9 px-8 w-full">
      <div className="max-w-mobile-container">
        <h2
          className={`text-40 text-center mb-2 font-mango font-black leading-none tracking-wider`}
        >
          PROJECTS
        </h2>
        <p className="text-16 text-center">
          Explore my featured projects, showcasing my passion for design and
          user experience.
        </p>
      </div>

      <ul className="centered-col gap-9 w-full max-w-mobile-container">
        <li>
          <ProjectCard
            className="bg-cover bg-no-repeat bg-top h-72"
            header={projectTranslations.str.title.map(renderProjectCardText)}
            subheader={projectTranslations.str.description.map(
              renderProjectCardText
            )}
            style={{
              backgroundImage: "url('/src/assets/mobile/str-case-study.png')",
            }}
          />
        </li>
        <li>
          <ProjectCard
            className="flex flex-col"
            header={projectTranslations.instagram.title.map(
              renderProjectCardText
            )}
            subheader={projectTranslations.instagram.description.map(
              renderProjectCardText
            )}
          >
            <div className="flex items-end justify-center flex-1">
              <img
                className="mr-4"
                src="/src/assets/mobile/ig-case-study.png"
                style={{ width: pxToRem(140) }}
              />
            </div>
          </ProjectCard>
        </li>
        <li>
          <ProjectCard
            className="flex flex-col"
            header={projectTranslations.yelp.title.map(renderProjectCardText)}
            subheader={projectTranslations.yelp.description.map(
              renderProjectCardText
            )}
          >
            <div className="centered-row flex-1">
              <img
                className="max-w-full"
                src="/src/assets/mobile/yelp-case-study.png"
                style={{ width: pxToRem(288) }}
              />
            </div>
          </ProjectCard>
        </li>
        <li>
          <ProjectCard
            header={projectTranslations.youtube.title.map(
              renderProjectCardText
            )}
            subheader={projectTranslations.youtube.description.map(
              renderProjectCardText
            )}
          >
            <div className="centered-row flex-1 flex">
              <img
                src="/src/assets/mobile/youtube-case-study.png"
                style={{ height: pxToRem(188) }}
              />
            </div>
          </ProjectCard>
        </li>
      </ul>
    </section>
  );
};
