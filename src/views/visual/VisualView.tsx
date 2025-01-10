import { MainContentLayout } from "@components/layouts/MainContentLayout";
import { VisualCard } from "./components/VisualCard";

export const VisualView = () => {
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
        <li>
          <VisualCard
            title="ZENME: Anime Streaming Website"
            description="UI Design / Web Design &bull; 2024"
            img={{ src: "/src/assets/mobile/zenme-visual.jpg", alt: "Zenme" }}
          />
        </li>
        <li>
          <VisualCard
            img={{
              src: "/src/assets/mobile/jury-duty-visual.jpg",
              alt: "Redesigned Jury Duty Portal",
            }}
            title="Los Angeles Jury Online Service"
            description="UI Design / Web Design &bull; 2024"
          />
        </li>
      </ul>
    </MainContentLayout>
  );
};
