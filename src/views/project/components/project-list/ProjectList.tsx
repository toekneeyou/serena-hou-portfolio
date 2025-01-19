import clsx from "clsx";
import { StrProjectCard } from "../str-project-card/StrProjectCard";
import { GhostWriterProjectCard } from "../ghost-writer-project-card/GhostWriterProjectCard";
import { YelpProjectCard } from "../yelp-project-card/YelpProjectCard";
import { YoutubeProjectCard } from "../youtube-project-card/YoutubeProjectCard";

export const ProjectList = () => {
  return (
    <ul className={clsx("project-list fluid-container flex flex-col gap-y-9")}>
      <li>
        <StrProjectCard />
      </li>
      <li>
        <GhostWriterProjectCard />
      </li>
      <li>
        <YelpProjectCard />
      </li>
      <li>
        <YoutubeProjectCard />
      </li>
    </ul>
  );
};
