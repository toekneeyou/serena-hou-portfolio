import { useCallback } from "react";
import StackedCards, {
  StackedCardsProps,
} from "../../components/stackedCards/StackedCards";
import { classnames } from "../../lib/helpers";
import ProjectCard from "./ProjectCard";

export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  src: string;
  alt: string;
}

const projects: Project[] = [
  {
    id: "project-str",
    title: "Redesigning the Streaming Experience for 1M Users",
    description:
      "How I Aimed to Improve Usability by 50% and Boost Engagement by 30% with a Comprehensive Redesign",
    skills: ["Web Design", "UX Research", "UI Design", "Design System"],
    src: "/src/assets/str-project-thumbnail.jpg",
    alt: "thumbnail of str",
  },
  {
    id: "project-ghost-writer",
    title: "Transforming Instagram Reels: A Visual Design Success Story",
    description:
      "How We Boosted Reel Views by 525% with User-Centric Design and Minimal Branding",
    skills: ["UX Research", "Visual Design", "Design System"],
    src: "/src/assets/ghost-writer-project-thumbnail.jpg",
    alt: "thumbnail of ghost-writer",
  },
  {
    id: "project-bam",
    title: "Bam",
    description:
      "How We Boosted Reel Views by 525% with User-Centric Design and Minimal Branding",
    skills: ["UX Research", "Visual Design", "Design System"],
    src: "/src/assets/str-project-thumbnail.jpg",
    alt: "thumbnail of str",
  },
];

const ProjectCards = () => {
  const projectRenderFunction: StackedCardsProps<Project>["cardRenderFunction"] =
    useCallback((project, index, ref) => {
      return (
        <ProjectCard
          {...project}
          ref={ref}
          className={classnames({
            "bg-white": index % 2 === 0,
            "bg-beige": index % 2 !== 0,
          })}
        />
      );
    }, []);

  return (
    <StackedCards cards={projects} cardRenderFunction={projectRenderFunction} />
  );
};

export default ProjectCards;
