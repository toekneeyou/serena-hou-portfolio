import { VisualCard } from "@views/visual/components/VisualCard";
import { useVisuals } from "./hooks/useVisuals";

export const VisualView = () => {
  const { visuals } = useVisuals();

  return (
    <main className="main-content-layout centered-col">
      <div className="title-container">
        <h2 className="title">VISUAL WORKS</h2>
        <p className="description">
          Here’s a collection of visuals I’ve enjoyed creating over the years.
        </p>
      </div>

      <ul className="mobile-container mx-auto space-y-9">
        {visuals.map((visual) => {
          const date = new Date(visual.date);

          const formattedDate = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
          }).format(date);

          return (
            <li key={visual._id}>
              <VisualCard
                title={visual.title}
                description={`${visual.tags.join(" / ")} • ${formattedDate}`}
                img={{ src: visual.image_small }}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
};
