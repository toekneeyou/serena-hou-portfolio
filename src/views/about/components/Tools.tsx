import clsx from "clsx";
import { TOOLS } from "../constants";

export const Tools = () => {
  return (
    <section className={clsx("flex flex-col gap-y-16")}>
      <h2 className={`title`}>TOOLS</h2>
      <ul
        className={clsx(
          "grid grid-flow-row mx-auto w-fit grid-cols-4 gap-x-[60px] gap-y-4",
          "md:grid-cols-6 md:gap-x-20 md:gap-y-20"
        )}
      >
        {TOOLS.map((tool) => {
          return (
            <li
              key={tool.label}
              title={tool.label}
              className={clsx("w-9 h-9 object-contain", "md:w-44px md:h-44px")}
            >
              <img src={tool.logo} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
