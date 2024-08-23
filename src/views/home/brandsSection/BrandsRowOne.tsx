const BrandsRowOne = () => {
  return (
    <div className="brands-row-one flex gap-x-32 mb-[3.25rem]">
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
    <div className="flex items-center gap-x-32 animate-brand-one-marquee">
      <BrandsLogo src="/src/assets/heineken-logo.png" alt="Heineken Logo" />
      <BrandsLogo src="/src/assets/budweiser-logo.png" alt="Budweiser Logo" />
      <BrandsLogo src="/src/assets/lipton-logo.png" alt="Lipton Logo" />
      <BrandsLogo src="/src/assets/pringles-logo.png" alt="Pringles Logo" />
      <BrandsLogo
        src="/src/assets/boiling-point-logo.png"
        alt="Boiling Point Logo"
      />
      <BrandsLogo src="/src/assets/lg-logo.png" alt="LG Logo" />
      <BrandsLogo
        src="/src/assets/summers-eve-logo.png"
        alt="Summer's Eve Logo"
      />
    </div>
  );
};

export default BrandsRowOne;
