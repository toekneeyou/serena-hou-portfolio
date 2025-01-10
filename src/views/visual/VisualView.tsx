import { MainContentLayout } from "@components/layouts/MainContentLayout";
import { VisualCard } from "@features/visuals/components/VisualCard";
import { useVisuals } from "@features/visuals/hooks/useVisuals";

export const VisualView = () => {
  const { visuals } = useVisuals();

  return (
    <MainContentLayout className="pt-32 pb-7">
      <div className="max-w-mobile-container mx-auto mb-14">
        <h2
          className={`text-40 text-center mb-2 font-mango font-black leading-none tracking-wider`}
        >
          VISUAL WORKS
        </h2>
        <p className="text-16 text-center">
          Here’s a collection of visuals I’ve enjoyed creating over the years.
        </p>
      </div>
      <ul className="max-w-mobile-container mx-auto space-y-9">
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
    </MainContentLayout>
  );
};
