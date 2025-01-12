import { ProjectView } from "@views/project/ProjectView";
import { Hero } from "./components/Hero";

export const HomeView = () => {
  return (
    <main className="main-content-layout">
      <Hero />
      <ProjectView />
    </main>
  );
};
