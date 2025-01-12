import { MainContentLayout } from "@components/layouts/MainContentLayout";
import { Tools } from "./components/Tools";

export const AboutView = () => {
  return (
    <MainContentLayout className="space-y-16">
      <section className="max-w-mobile-container mx-auto space-y-16">
        <div className="space-y-7">
          <h2
            className={`text-40 text-center font-mango font-black leading-none tracking-wider`}
          >
            ABOUT ME
          </h2>
          <p className="text-20 text-center">Hey there, I'm Serena!</p>

          <div className="h-40 w-40 rounded-full center-row mx-auto overflow-hidden">
            <img src="/src/assets/serena.gif" className="w-full" alt="Serena" />
          </div>

          <p className="text-20 text-center">
            A UI/UX Designer
            <br /> based in Los Angeles
          </p>
        </div>

        <div className="max-w-mobile-container mx-auto space-y-7">
          <p>
            For over 10 years, I worked in the video production industry and
            eventually became a Video Post-Production Lead. While making videos
            look great, I noticed they often felt clunky across different
            platforms - a problem I wanted to solve.
          </p>
          <p>
            That's what drew me to UX/UI design. I dove in headfirst - taking
            courses, earning certificates, and learning from UX experts. The
            more I learned, the more I loved solving design problems.
          </p>
          <p>
            Now, I combine my visual storytelling skills with user-centered
            design to create experiences that just click. My goal? Build
            products that users love and creators can't wait to share!
          </p>
        </div>
      </section>

      <Tools />
    </MainContentLayout>
  );
};
