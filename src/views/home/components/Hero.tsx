import clsx from "clsx";
import { BrandMarquee } from "./BrandMarquee";
import serenaGif from "@assets/serena.gif";
import filmStripCornerTablet from "@assets/tablet/film-strip-corner.png";
import { useViewportState } from "@contexts/viewport/hooks";
import { XIcon } from "@components/icons/XIcon";

export const Hero = () => {
  const { isMobile, isTablet } = useViewportState();

  return (
    <section
      className={clsx("centered-col md:items-start md:justify-end", "mb-28", {
        "space-y-28": isMobile,
      })}
    >
      {!isMobile && (
        <div className="flex justify-end">
          <img src={isTablet ? filmStripCornerTablet : undefined} />
        </div>
      )}

      <div
        className={clsx(
          "mx-auto md:mb-20",
          "space-y-14 md:space-y-9",
          "mobile-container md:tablet-container"
        )}
      >
        <div
          className={clsx("centered-col md:flex-col-reverse md:items-start")}
        >
          <h1 className="text-48 md:text-120 leading-none font-black font-mango tracking-wider">
            Serena Hou
          </h1>
          <p className="text-24 md:text-40">UI Designer</p>
        </div>

        {isMobile && (
          <div className="h-40 w-40 mx-auto rounded-full center-row overflow-hidden">
            <img
              src={serenaGif}
              width="10rem"
              height="10rem"
              className="w-full"
              alt="Serena"
            />
          </div>
        )}

        {isMobile ? (
          <div>
            <p className="text-center text-neutral-300 text-18">
              10+ years in video production, specializing in visual storytelling
              and motion graphics
            </p>
          </div>
        ) : (
          <ul>
            {[
              "With 10+ Years of Expertise in Video Production",
              "Specializing in Visual Storytelling and Motion Graphics",
            ].map((text) => {
              return (
                <li
                  key={text}
                  className="flex items-center text-neutral-300 text-24 gap-x-[1ch]"
                >
                  <XIcon role="presentation" className="stroke-neutral-300" />
                  {text}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <BrandMarquee />
    </section>
  );
};
