import { classnames } from "../../lib/helpers";

const Brands = () => {
  return (
    <section
      id="brands"
      className={classnames(
        "relative py-[3.25rem] px-[11rem] overflow-hidden",
        "before:z-[1] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[30rem] before:bg-brandsLeft",
        "after:z-[1] after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-[30rem] after:bg-brandsRight"
      )}
    >
      <div className="flex gap-x-32 mb-[3.25rem]">
        <BrandsOne />
        <BrandsOne />
        <BrandsOne />
      </div>
      <div className="flex justify-end gap-x-32 mb-[3.25rem]">
        <BrandsTwo />
        <BrandsTwo />
        <BrandsTwo />
      </div>
    </section>
  );
};
/**
 *
 * Comopnent used to style logos for the brand marquee
 *
 */
const BrandsLogo = ({ src }: { src: string }) => {
  return <img className="max-w-[initial]" src={src} />;
};
/**
 *
 * Brands on the first row
 *
 */
const BrandsOne = () => {
  return (
    <div className="flex items-center gap-x-32 animate-brand-one-marquee">
      <BrandsLogo src="/src/assets/heineken-logo.png" />
      <BrandsLogo src="/src/assets/budweiser-logo.png" />
      <BrandsLogo src="/src/assets/lipton-logo.png" />
      <BrandsLogo src="/src/assets/pringles-logo.png" />
      <BrandsLogo src="/src/assets/boiling-point-logo.png" />
      <BrandsLogo src="/src/assets/lg-logo.png" />
      <BrandsLogo src="/src/assets/summers-eve-logo.png" />
    </div>
  );
};
/**
 *
 * Brands on the second row
 *
 */
const BrandsTwo = () => {
  return (
    <div className="flex items-center gap-x-32 animate-brand-two-marquee">
      <BrandsLogo src="/src/assets/food-panda-logo.png" />
      <BrandsLogo src="/src/assets/surfshark-logo.png" />
      <BrandsLogo src="/src/assets/samsung-logo.png" />
      <BrandsLogo src="/src/assets/scottish-leader-logo.png" />
      <BrandsLogo src="/src/assets/la-food-fest-logo.png" />
      <BrandsLogo src="/src/assets/oakberry-logo.png" />
      <BrandsLogo src="/src/assets/wei-chuan-logo.png" />
    </div>
  );
};

export default Brands;
