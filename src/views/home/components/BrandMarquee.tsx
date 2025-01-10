import Marquee from "react-fast-marquee";

export const BrandMarquee = () => {
  return (
    <div className="w-screen flex flex-col gap-y-6">
      <Marquee
        gradient={true}
        gradientColor="#262525"
        gradientWidth="4rem"
        speed={25}
      >
        {[
          { src: "/src/assets/heineken-logo.png", alt: "Heineken Logo" },
          {
            src: "/src/assets/budweiser-logo.png",
            alt: "Budweiser Logo",
          },
          { src: "/src/assets/lipton-logo.png", alt: "Lipton Logo" },
          { src: "/src/assets/pringles-logo.png", alt: "Pringles Logo" },
          {
            src: "/src/assets/boiling-point-logo.png",
            alt: "Boiling Point Logo",
          },
          { src: "/src/assets/lg-logo.png", alt: "LG Logo" },
          {
            src: "/src/assets/summers-eve-logo.png",
            alt: "Summer's Eve Logo",
          },
        ].map(({ src, alt }) => {
          return <img src={src} alt={alt} key={src} className="h-6 mr-14" />;
        })}
      </Marquee>
      <Marquee
        gradient={true}
        gradientColor="#262525"
        gradientWidth="4rem"
        direction="right"
        speed={25}
      >
        {[
          {
            src: "/src/assets/food-panda-logo.png",
            alt: "Food Panda Logo",
          },
          {
            src: "/src/assets/surfshark-logo.png",
            alt: "Surfshark Logo",
          },
          { src: "/src/assets/samsung-logo.png", alt: "Samsung Logo" },
          {
            src: "/src/assets/scottish-leader-logo.png",
            alt: "Scottish Leader Logo",
          },
          {
            src: "/src/assets/la-food-fest-logo.png",
            alt: "LA Food Fest Logo",
          },
          { src: "/src/assets/oakberry-logo.png", alt: "Oakberry Logo" },
          {
            src: "/src/assets/wei-chuan-logo.png",
            alt: "Wei Chuan Logo",
          },
        ].map(({ src, alt }) => {
          return <img src={src} alt={alt} key={src} className="h-6 mr-14" />;
        })}
      </Marquee>
    </div>
  );
};
