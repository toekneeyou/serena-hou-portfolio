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
        "centered-col relative",
        "md:justify-end",
        "lg:min-h-screen lg:justify-center",
        {
          "gap-y-28": isMobile,
        }
      )}
    >
      {!isMobile && (
        <div
          className={clsx(
            "flex justify-end z-hero-visual -mr-gutter-sm",
            "lg:absolute lg:top-0 lg:right-0"
          )}
        >
          <img
            src={filmStripCorner}
            className="lg:max-h-[42rem] lg:w-auto z-[1]"
            role="presentation"
          />
        </div>
      )}

      <div
        className={clsx(
          "z-hero centered-col gap-y-14",
          "md:mb-20 md:gap-y-9 md:items-start md:fluid-container md:pl-24px",
          "lg:my-48"
        )}
      >
        <div
          className={clsx(
            "z-hero-text centered-col",
            "md:flex-col-reverse md:items-start"
          )}
        >
          <h1
            className={clsx(
              "text-48px leading-none font-black font-mango tracking-wider",
              "md:text-120px"
            )}
          >
            Serena Hou
          </h1>
          <p className={clsx("text-24px", "md:text-40px")}>UI Designer</p>
        </div>

        {isMobile && (
          <div className="center-row">
            <img
              src={serenaGif}
              className="h-40 w-40 object-top object-cover rounded-full"
              alt="Serena"
            />
          </div>
        )}

        {isMobile ? (
          <div className="fluid-container">
            <p className="text-center text-neutral-300 text-18px">
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
                  className="flex items-center text-neutral-300 text-24px gap-x-[1ch]"
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
