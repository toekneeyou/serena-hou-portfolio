import { charcoal } from "@theme/colors";
import clsx from "clsx";
import Marquee from "react-fast-marquee";
import { MARQUEE_SPEED } from "../constants";
import mcdonaldsLogo from "@assets/logos/mcdonalds-logo.png";
import heinekenLogo from "@assets/logos/heineken-logo.png";
import budweiserLogo from "@assets/logos/budweiser-logo.png";
import liptonLogo from "@assets/logos/lipton-logo.png";
import pringlesLogo from "@assets/logos/pringles-logo.png";
import boilingPointLogo from "@assets/logos/boiling-point-logo.png";
import lgLogo from "@assets/logos/lg-logo.png";
import summersEveLogo from "@assets/logos/summers-eve-logo.png";
import microsoftLogo from "@assets/logos/microsoft-logo.png";
import foodPandaLogo from "@assets/logos/food-panda-logo.png";
import surfsharkLogo from "@assets/logos/surfshark-logo.png";
import samsungLogo from "@assets/logos/samsung-logo.png";
import oakberryLogo from "@assets/logos/oakberry-logo.png";
import scottishLeaderLogo from "@assets/logos/scottish-leader-logo.png";
import laFoodFestLogo from "@assets/logos/la-food-fest-logo.png";
import weiChuanLogo from "@assets/logos/wei-chuan-logo.png";

export const BrandMarquee = () => {
  const renderImage = ({ src, alt }: { src: string; alt: string }) => {
    return (
      <img
        loading="lazy"
        src={src}
        alt={alt}
        key={src}
        className={clsx("h-6 md:h-10", "mr-14 md:mr-24")}
      />
    );
  };
  return (
    <div
      className={clsx(
        "w-screen flex flex-col",
        "gap-y-6 md:gap-y-8",
        "md:py-10"
      )}
    >
      <Marquee
        gradient={true}
        gradientColor={charcoal}
        gradientWidth="4rem"
        speed={MARQUEE_SPEED}
        autoFill
      >
        {[
          { src: mcdonaldsLogo, alt: "McDonald's" },
          { src: heinekenLogo, alt: "Heineken" },
          {
            src: budweiserLogo,
            alt: "Budweiser",
          },
          { src: liptonLogo, alt: "Lipton" },
          { src: pringlesLogo, alt: "Pringles" },
          {
            src: boilingPointLogo,
            alt: "Boiling Point",
          },
          { src: lgLogo, alt: "LG Gram" },
          {
            src: summersEveLogo,
            alt: "Summer's Eve",
          },
        ].map(renderImage)}
      </Marquee>
      <Marquee
        gradient={true}
        gradientColor={charcoal}
        gradientWidth="4rem"
        direction="right"
        speed={MARQUEE_SPEED}
        autoFill
      >
        {[
          { src: microsoftLogo, alt: "Microsoft" },
          {
            src: foodPandaLogo,
            alt: "Food Panda",
          },
          {
            src: surfsharkLogo,
            alt: "Surfshark",
          },
          { src: samsungLogo, alt: "Samsung" },
          {
            src: scottishLeaderLogo,
            alt: "Scottish Leader",
          },
          {
            src: laFoodFestLogo,
            alt: "LA Food Fest",
          },
          { src: oakberryLogo, alt: "Oakberry" },
          {
            src: weiChuanLogo,
            alt: "Wei Chuan",
          },
        ].map(renderImage)}
      </Marquee>
    </div>
  );
};
