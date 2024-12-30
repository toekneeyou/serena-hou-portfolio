import { MainContentLayout } from "@components/layouts/MainContentLayout";
import { BrandMarquee } from "./components/BrandMarquee";
import { ProjectView } from "@views/project/ProjectView";

export const HomeView = () => {
  return (
    <MainContentLayout>
      <section className="centered-col h-screen px-9 py-8 relative mb-6">
        <div className="centered-col gap-14">
          <div className="centered-col">
            <h1 className="text-3xl">SERENA HOU</h1>
            <p>UI Designer</p>
          </div>
          <div className="h-40 w-40 rounded-full center-row overflow-hidden">
            <img src="/src/assets/serena.gif" className="w-full" alt="Serena" />
          </div>
          <div>
            <p className="text-center">
              With 10+ years of video production expertise, specializing in
              visual storytelling and motion graphics.
            </p>
          </div>
          <BrandMarquee />
        </div>
      </section>
      <ProjectView />
    </MainContentLayout>
  );
};
