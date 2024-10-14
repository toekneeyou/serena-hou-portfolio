import { useEffect, useState } from "react";

interface SideNavSection {
  id: string;
  display: string;
}

const useSideNav = (sections: SideNavSection[] = []) => {
  const [currentSectionId, setCurrentSectionId] = useState("");

  useEffect(() => {
    const currVisible = Object.values(sections).reduce((a, c) => {
      a[c.id] = false;
      return a;
    }, {} as { [id: string]: boolean });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          currVisible[entry.target.id] = entry.isIntersecting;
        });

        const closestToTop = Object.entries(currVisible).find(
          ([id, isVisible]) => {
            const el = document.getElementById(id);
            return el && isVisible && el.getBoundingClientRect().top >= 0;
          }
        );
        if (closestToTop) setCurrentSectionId(closestToTop[0]);
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i * 0.01),
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return currentSectionId;
};

export default useSideNav;
