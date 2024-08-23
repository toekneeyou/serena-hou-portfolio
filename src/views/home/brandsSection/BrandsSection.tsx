import { classnames } from "../../../lib/helpers";
import BrandsRowOne from "./BrandsRowOne";
import BrandsRowTwo from "./BransRowTwo";

const BrandsSection = () => {
  return (
    <section
      id="brands"
      className={classnames(
        "relative py-[3.25rem] px-[11rem] overflow-hidden",
        "before:z-[1] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[30rem] before:bg-brandsLeft",
        "after:z-[1] after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-[30rem] after:bg-brandsRight"
      )}
    >
      <BrandsRowOne />
      <BrandsRowTwo />
    </section>
  );
};

export default BrandsSection;
