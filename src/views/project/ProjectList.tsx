import { classnames } from "../../lib/helpers";
import ProjectSlide from "./ProjectSlide";

import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Redesigning the Streaming Experience for 1M Users",
    description:
      "How I Aimed to Improve Usability by 50% and Boost Engagement by 30% with a Comprehensive Redesign",
    skills: ["Web Design", "UX Research", "UI Design", "Design System"],
    src: "/src/assets/str-project-thumbnail.jpg",
    alt: "thumbnail of str",
  },
  {
    title: "Transforming Instagram Reels: A Visual Design Success Story",
    description:
      "How We Boosted Reel Views by 525% with User-Centric Design and Minimal Branding",
    skills: ["UX Research", "Visual Design", "Design System"],
    src: "/src/assets/ghost-writer-project-thumbnail.jpg",
    alt: "thumbnail of ghost-writer",
  },
  {
    title: "Bam",
    description:
      "How We Boosted Reel Views by 525% with User-Centric Design and Minimal Branding",
    skills: ["UX Research", "Visual Design", "Design System"],
    src: "/src/assets/str-project-thumbnail.jpg",
    alt: "thumbnail of str",
  },
];

const ProjectList = () => {
  const projectRefs = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const projects = projectRefs.current!;
    const n = projects.length;
    /**
     *
     * Check to see if an element is interecting the viewport
     *
     */
    const isIntersecting = (el: HTMLElement) =>
      el.getBoundingClientRect().top <= window.innerHeight;
    /**
     *
     * Check to see if an element has reached the top of the viewport
     *
     */
    const hasReachedTop = (el: HTMLElement) => {
      return el.getBoundingClientRect().top <= el.offsetTop;
    };
    /**
     *
     * Check to see if the next project is intersecting the viewport.
     *
     */
    const isNextElShowing = (index: number) => {
      if (index <= projects.length - 1) {
        return isIntersecting(projects[index]);
      } else {
        return false;
      }
    };
    /**
     *
     * Create `scale` and `yOffset` values based on index value for transitions.
     *
     */
    const createTransitionValuesArray = (projectsSize: number) => {
      const scale = new Array(projectsSize)
        .fill(0.05)
        .map((percentage, i) => percentage * i)
        .reverse();
      const yOffset = new Array(projectsSize)
        .fill(100)
        .map((y, i) => -y / (i + 1));
      return { scale, yOffset };
    };
    /**
     *
     * Get transition values based off of index value.
     *
     */
    const getTransitionValues = (
      index: number,
      scale: number[],
      yOffset: number[]
    ) => {
      return `scale(${1 - scale[index]}) translateY(${yOffset[index]}px)`;
    };
    /**
     *
     * Animate project slides on scroll
     *
     */
    let rafId: ReturnType<typeof requestAnimationFrame>;
    const { scale, yOffset } = createTransitionValuesArray(n);
    const handleScroll = () => {
      /**
       *
       * Cancel pending animation frames
       *
       */
      cancelAnimationFrame(rafId);
      /**
       *
       * request animation frame
       *
       */
      rafId = requestAnimationFrame(() => {
        for (let i = 0; i < n; i++) {
          const project = projects[i];
          /**
           *
           * If a project has reached the top and the next project is showing, apply transition values.
           *
           */
          if (hasReachedTop(project) && isNextElShowing(i + 1)) {
            project.style.transform = getTransitionValues(i, scale, yOffset);
          } else {
            project.style.transform = `scale(1) translateY(0)`;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul>
      {projects.map((project, i) => {
        return (
          <ProjectSlide
            ref={(el) => (projectRefs.current[i] = el as HTMLLIElement)}
            key={project.title}
            className={classnames({
              "bg-white": i % 2 === 0,
              "bg-beige": i % 2 !== 0,
            })}
            {...project}
          />
        );
      })}
    </ul>
  );
};

export default ProjectList;
