import { ProjectView } from "@views/project/ProjectView";
import { Hero } from "./components/Hero";
import clsx from "clsx";

export const HomeView = () => {
  return (
    <main
      className={clsx(
        "main-content-layout md:pt-0",
        "space-y-28 md:space-y-40"
      )}
    >
      <Hero />
      <ProjectView />
    </main>
  );
};
