import { ProjectView } from "@views/project/ProjectView";
import { Hero } from "./components/Hero";
import clsx from "clsx";

export const HomeView = () => {
  return (
    <main
      className={clsx("main-content-layout gap-y-28", "md:pt-0 md:gap-y-40")}
    >
      <Hero />
      <ProjectView />
    </main>
  );
};
