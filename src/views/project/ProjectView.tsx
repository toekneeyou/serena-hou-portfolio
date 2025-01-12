import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ROUTES } from "@constants/routes";
import { ProjectList } from "./components/project-list/ProjectList";
import { headerMobileHeight } from "@theme/height";
import { useViewportState } from "@contexts/viewport/hooks";

export const ProjectView = () => {
  const location = useLocation();
  const projectsRef = useRef<HTMLElement>(null);
  const { isMobile } = useViewportState();

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (location.pathname === ROUTES.PROJECT && projectsRef.current) {
        const top = projectsRef.current.getBoundingClientRect().top;
        const fromTop = isMobile ? headerMobileHeight : 0;
        const scrollToPosition = window.scrollY + top - fromTop;
        window.scrollTo({
          top: scrollToPosition,
          behavior: "smooth",
        });
      }
    });

    observer.observe(document.documentElement);

    return () => {
      observer.disconnect();
    };
  }, [location.pathname, isMobile]);

  return (
    <section ref={projectsRef} className="centered-col gap-9 px-8 w-full">
      <div className="mobile-container">
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

      <ProjectList />
    </section>
  );
};
