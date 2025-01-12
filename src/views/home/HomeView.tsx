import { MainContentLayout } from "@components/layouts/MainContentLayout";
import { ProjectView } from "@views/project/ProjectView";
import { Hero } from "./components/Hero";

export const HomeView = () => {
  return (
    <MainContentLayout>
      <Hero />
      <ProjectView />
    </MainContentLayout>
  );
};
