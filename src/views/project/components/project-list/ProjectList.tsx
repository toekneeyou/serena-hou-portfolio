import clsx from "clsx";
import { StrProjectCard } from "../str-project-card/StrProjectCard";
import { IgProjectCard } from "../ig-project-card/IgProjectCard";
import { YelpProjectCard } from "../yelp-project-card/YelpProjectCard";
import { YoutubeProjectCard } from "../youtube-project-card/YoutubeProjectCard";

export const ProjectList = () => {
  return (
    <ul
      className={clsx(
        "project-list",
        "mobile-container md:tablet-container lg:desktop-container",
        "centered-col gap-y-9"
      )}
    >
      <li className="w-full">
        <StrProjectCard />
      </li>
      <li className="w-full">
        <IgProjectCard />
      </li>
      <li className="w-full">
        <YelpProjectCard />
      </li>
      <li className="w-full">
        <YoutubeProjectCard />
      </li>
    </ul>
  );
};
