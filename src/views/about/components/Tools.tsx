import clsx from "clsx";
import { TOOLS } from "../constants";

export const Tools = () => {
  return (
    <section className="max-w-mobile-container mx-auto space-y-16">
      <h2
        className={`text-40 text-center font-mango font-black leading-none tracking-wider`}
      >
        TOOLS
      </h2>
      <ul className="grid grid-flow-row mx-auto w-fit grid-cols-4 gap-x-[60px] gap-y-4">
        {TOOLS.map((tool) => {
          return (
            <li
              key={tool.label}
              title={tool.label}
              className={clsx("w-9 h-9 object-contain")}
            >
              <img src={tool.logo} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
