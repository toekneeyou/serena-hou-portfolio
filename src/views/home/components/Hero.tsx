import { BrandMarquee } from "./BrandMarquee";
import serenaGif from "@assets/serena.gif";

export const Hero = () => {
  return (
    <section id="hero" className="centered-col mb-28 space-y-28">
      <div className="centered-col gap-14 mobile-container">
        <div className="centered-col">
          <h1 className="text-48 leading-none font-black font-mango tracking-wider">
            Serena Hou
          </h1>
          <p className="text-24">UI Designer</p>
        </div>

        <div className="h-40 w-40 rounded-full center-row overflow-hidden">
          <img src={serenaGif} className="w-full" alt="Serena" />
        </div>

        <div>
          <p className="text-center text-18">
            10+ years in video production, specializing in visual storytelling
            and motion graphics
          </p>
        </div>
      </div>

      <BrandMarquee />
    </section>
  );
};
