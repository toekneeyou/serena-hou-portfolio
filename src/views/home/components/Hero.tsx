import clsx from "clsx";
import { BrandMarquee } from "./BrandMarquee";
import serenaGif from "@assets/serena.gif";
import filmStripCorner from "@assets/film-strip-corner.png";
import { useViewportState } from "@contexts/viewport/hooks";
import { XIcon } from "@components/icons/XIcon";

export const Hero = () => {
  const { isMobile, isTablet } = useViewportState();

  return (
    <section
      className={clsx(
        "centered-col",
        "relative md:items-start md:justify-end lg:min-h-screen lg:justify-center",
        {
          "space-y-28": isMobile,
        }
      )}
    >
      {/* Film Strip */}
      {!isMobile && (
        <div className="flex justify-end z-hero-visual lg:absolute lg:top-0 lg:right-0 -mr-page-gutter">
          <img
            src={filmStripCorner}
            className="lg:max-h-[42rem] lg:w-auto z-[1]"
          />
        </div>
      )}
      {/* Hero Text + Image */}
      <div
        className={clsx(
          "z-hero",
          "mx-auto md:mb-20 lg:my-48",
          "space-y-14 md:space-y-9",
          "mobile-container md:tablet-container lg:desktop-container"
        )}
      >
        <div
          className={clsx(
            "z-hero-text",
            "centered-col md:flex-col-reverse md:items-start"
          )}
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
                  <XIcon
                    role="presentation"
                    className="stroke-neutral-300"
                    size={isMobile ? 16 : isTablet ? 20 : 24}
                  />
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
