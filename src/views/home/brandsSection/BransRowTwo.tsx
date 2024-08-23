const BrandsRowTwo = () => {
  return (
    <div className="flex justify-end gap-x-32 mb-[3.25rem]">
      <Brands />
      <Brands />
      <Brands />
    </div>
  );
};

const BrandsLogo = ({ src, alt }: { src: string; alt: string }) => {
  return <img className="max-w-[initial]" src={src} alt={alt} />;
};

const Brands = () => {
  return (
    <div className="flex items-center gap-x-32 animate-brand-two-marquee">
      <BrandsLogo src="/src/assets/food-panda-logo.png" alt="Food Panda Logo" />
      <BrandsLogo src="/src/assets/surfshark-logo.png" alt="Surfshark Logo" />
      <BrandsLogo src="/src/assets/samsung-logo.png" alt="Samsung Logo" />
      <BrandsLogo
        src="/src/assets/scottish-leader-logo.png"
        alt="Scottish Leader Logo"
      />
      <BrandsLogo
        src="/src/assets/la-food-fest-logo.png"
        alt="LA Food Fest Logo"
      />
      <BrandsLogo src="/src/assets/oakberry-logo.png" alt="Oakberry Logo" />
      <BrandsLogo src="/src/assets/wei-chuan-logo.png" alt="Wei Chuan Logo" />
    </div>
  );
};

export default BrandsRowTwo;
