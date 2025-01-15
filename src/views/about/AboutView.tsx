import clsx from "clsx";
import { Tools } from "./components/Tools";
import serenaGif from "@assets/serena.gif";
import { useViewportState } from "@contexts/viewport/hooks";

export const AboutView = () => {
  const { isTablet, isMobile, isDesktop } = useViewportState();
  const title = "ABOUT ME";
  const description = (
    <p className="text-20px md:text-24px text-center md:text-start">
      A UI/UX Designer
      {isTablet && <br />} based in Los Angeles
    </p>
  );

  return (
    <main className={clsx("main-content-layout gap-y-16", "md:gap-y-40")}>
      <section
        className={clsx(
          "fluid-container flex flex-col gap-y-16",
          "lg:grid lg:grid-cols-[10rem_1fr] lg:gap-x-44"
        )}
      >
        {isDesktop && (
          <div className="h-full centered-row">
            <h2 className="text-160px font-black font-mango text-nowrap -rotate-90">
              {title}
            </h2>
          </div>
        )}
        <div
          className={clsx(
            "flex flex-col gap-y-7",
            "md:gap-y-20",
            "lg:gap-y-[7.5rem]"
          )}
        >
          <div className="centered-col gap-y-7">
            {!isDesktop && <h2 className={clsx("title")}>{title}</h2>}

            <div
              className={clsx(
                "flex flex-col gap-y-16",
                "md:flex-row md:justify-between md:w-full"
              )}
            >
              <div className="md:flex md:flex-col md:justify-center md:gap-y-6">
                <p
                  className={clsx(
                    "text-20px text-center",
                    "md:text-48px md:text-start md:font-bold md:leading-none"
                  )}
                >
                  Hey there,{isTablet && <br />} I'm Serena!
                </p>
                {!isMobile && description}
              </div>

              <div className="centered-row">
                <img
                  src={serenaGif}
                  className={clsx(
                    "h-40 w-40 rounded-full object-cover object-top",
                    "md:h-[23rem] md:w-auto md:rounded-xl",
                    "lg:h-444px"
                  )}
                  alt="Serena"
                />
              </div>
            </div>

            {isMobile && description}
          </div>

          <div
            className={clsx(
              "flex flex-col gap-y-7",
              "md:text-20px",
              "lg:text-24px"
            )}
          >
            <p>
              For over 10 years, I worked in the video production industry and
              eventually became a Video Post-Production Lead. While making
              videos look great, I noticed they often felt clunky across
              different platforms - a problem I wanted to solve.
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
        </div>
      </section>

      <Tools />
    </main>
  );
};
