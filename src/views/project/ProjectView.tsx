import { useCallback, useRef } from "react";
import ProjectList from "./ProjectCards";

import ProjectInitializer from "./ProjectInitializer";

const ProjectView = () => {
  const projectContainerRef = useRef<HTMLElement>(null);

  const scrollProjectUp = useCallback(() => {
    const projectContainer = projectContainerRef.current!;
    projectContainer.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section id="project" className="py-[7.5rem]" ref={projectContainerRef}>
      <ProjectInitializer scrollProjectUp={scrollProjectUp} />
      <ProjectHeader />
      <ProjectList />
    </section>
  );
};

const ProjectHeader = () => {
  return (
    <div className="project-header centered-col gap-y-3">
      <h1 className="text-center">PROJECTS</h1>
      <p className="max-w-[54ch] text-center">
        Here are some projects that highlight my passion for visual design and
        creating great web experiences products and brands.
      </p>
    </div>
  );
};

export default ProjectView;
