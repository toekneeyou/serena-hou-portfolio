import { GW_SECTIONS } from "./ghostWriterConstants";
import { classnames } from "../../../../lib/helpers";
import useSideNav from "../../../../lib/hooks/useSideNav";

export default function GhostWriterSideNav() {
  const currentSectionId = useSideNav(GW_SECTIONS);

  return (
    <nav
      role="navigation"
      className="w-max sticky top-0 h-screen flex flex-col justify-center"
    >
      <ol className="space-y-6">
        {GW_SECTIONS.map((section, i) => {
          const isCurrent = section.id === currentSectionId;
          return (
            <li key={section.display}>
              <a
                className={classnames(
                  "text-xs grid grid-cols-[1.75rem,1fr] cursor-pointer",
                  { "text-[#808080]": !isCurrent }
                )}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(section.id);
                  if (el) {
                    const elementPosition =
                      el.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: elementPosition - 32,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <span>0{i + 1}</span>
                <span>{section.display}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
