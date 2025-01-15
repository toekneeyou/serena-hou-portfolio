import { VisualCard } from "@views/visual/components/VisualCard";
import { useVisuals } from "./hooks/useVisuals";
import { useViewportState } from "@contexts/viewport/hooks";
import clsx from "clsx";

export const VisualView = () => {
  const { visuals } = useVisuals();
  const { isDesktop } = useViewportState();
  const title = "Visual Works";
  const description = (
    <p className={clsx("description", "lg:text-start")}>
      Here’s a collection of visuals {isDesktop && <br />}I&apos;ve enjoyed
      creating over the years.
    </p>
  );

  return (
    <main className="main-content-layout">
      <div
        className={clsx(
          "fluid-container",
          "lg:grid lg:grid-cols-[10rem_1fr] lg:gap-x-44",
          "xl:gap-x-60"
        )}
      >
        {isDesktop && (
          <div className="h-full centered-row">
            <h2 className="text-160px font-black font-mango text-nowrap -rotate-90">
              {title}
            </h2>
          </div>
        )}

        {!isDesktop && (
          <div className="title-container">
            <h2 className="title">{title}</h2>
            {description}
          </div>
        )}

        <div className="lg:flex lg:flex-col lg:items-start">
          {isDesktop && <div className="lg:mb-9">{description}</div>}

          <ul className={clsx("grid grid-cols-1 gap-9", "md:grid-cols-2")}>
            {visuals.map((visual) => {
              const date = new Date(visual.date);

              const formattedDate = new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
              }).format(date);

              return (
                <li key={visual._id} className="w-full">
                  <VisualCard
                    title={visual.title}
                    description={`${visual.tags.join(
                      " / "
                    )} • ${formattedDate}`}
                    img={{ src: visual.image_small }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};
