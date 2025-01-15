import clsx from "clsx";
import { TOOLS } from "../constants";
import { useViewportState } from "@contexts/viewport/hooks";

export const Tools = () => {
  const { isDesktop } = useViewportState();
  const title = "TOOLS";

  return (
    <section
      className={clsx(
        "flex flex-col gap-y-16 fluid-container",
        "lg:grid lg:grid-cols-[10rem_1fr] lg:gap-x-44"
      )}
    >
      {isDesktop ? (
        <div className="h-full centered-row">
          <h2 className="text-160px font-black font-mango text-nowrap -rotate-90">
            {title}
          </h2>
        </div>
      ) : (
        <h2 className={`title`}> {title}</h2>
      )}

      <ul
        className={clsx(
          "grid grid-flow-row mx-auto w-full grid-cols-4 gap-x-[60px] gap-y-4",
          "md:grid-cols-6 md:gap-x-20 md:gap-y-20",
          "lg:gap-x-[calc((100% - (5 * 2.75rem))) / 5] lg:gap-y-[3.75rem] lg:items-center"
        )}
      >
        {TOOLS.map((tool) => {
          return (
            <li
              key={tool.label}
              title={tool.label}
              className={clsx(
                "w-9 h-9 object-contain",
                "md:w-44px md:h-44px",
                "lg:w-56px lg:h-56px"
              )}
            >
              <img src={tool.logo} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
