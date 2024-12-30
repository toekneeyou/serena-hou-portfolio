import { MainContentLayout } from "@components/layouts/MainContentLayout";
import { BrandMarquee } from "./components/BrandMarquee";

export const HomeView = () => {
  return (
    <MainContentLayout>
      <section className="centered-col h-screen px-10 py-8">
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
    </MainContentLayout>
  );
};
