import styled, { keyframes } from "styled-components";
import { charcoal } from "../../styles/GlobalStyle";

const BrandsContainer = styled.section`
  position: relative;
  padding: 3.25rem 11rem;
  background: linear-gradient(
    90deg,
    ${charcoal} 0%,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0) 90%,
    ${charcoal} 100%
  );
  &::before {
    z-index: 1;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 30rem;
    background: linear-gradient(90deg, ${charcoal}, transparent);
  }
  &::after {
    z-index: 1;
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 30rem;
    background: linear-gradient(90deg, transparent, ${charcoal});
  }
`;
const brandsRowOneAnimation = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-200%); }
`;
const brandsRowTwoAnimation = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(200%); }
`;
const BrandsRowOne = styled.div`
  margin-bottom: 3.25rem;
  display: flex;
  column-gap: 8rem;
`;
const BrandsOneContainer = styled.div`
  animation: ${brandsRowOneAnimation} 20s linear infinite;
  display: flex;
  align-items: center;
  column-gap: 8rem;
`;
const BrandsRowTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 8rem;
`;
const BrandsTwoContainer = styled.div`
  animation: ${brandsRowTwoAnimation} 20s linear infinite;
  display: flex;
  align-items: center;
  column-gap: 8rem;
`;

const BrandsOne = () => {
  return (
    <BrandsOneContainer>
      <img src="/src/assets/heineken-logo.png" />
      <img src="/src/assets/budweiser-logo.png" />
      <img src="/src/assets/lipton-logo.png" />
      <img src="/src/assets/pringles-logo.png" />
      <img src="/src/assets/boiling-point-logo.png" />
      <img src="/src/assets/lg-logo.png" />
      <img src="/src/assets/summers-eve-logo.png" />
    </BrandsOneContainer>
  );
};

const BrandsTwo = () => {
  return (
    <BrandsTwoContainer>
      <img src="/src/assets/microsoft-logo.png" />
      <img src="/src/assets/food-panda-logo.png" />
      <img src="/src/assets/surfshark-logo.png" />
      <img src="/src/assets/samsung-logo.png" />
      <img src="/src/assets/scottish-leader-logo.png" />
      <img src="/src/assets/la-food-fest-logo.png" />
      <img src="/src/assets/oakberry-logo.png" />
      <img src="/src/assets/wei-chuan-logo.png" />
    </BrandsTwoContainer>
  );
};

const Brands = () => {
  return (
    <BrandsContainer>
      <BrandsRowOne>
        <BrandsOne />
        <BrandsOne />
        <BrandsOne />
      </BrandsRowOne>
      <BrandsRowTwo>
        <BrandsTwo />
        <BrandsTwo />
        <BrandsTwo />
      </BrandsRowTwo>
    </BrandsContainer>
  );
};

export default Brands;
