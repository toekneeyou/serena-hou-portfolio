import { MainContentLayout } from "@components/layouts/MainContentLayout";
import { ProjectView } from "@views/project/ProjectView";
import { Hero } from "./components/Hero";

export const HomeView = () => {
  return (
    <MainContentLayout className="pt-32 pb-7">
      <Hero />
      <ProjectView />
    </MainContentLayout>
  );
};
