import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import { homeRoute } from "../../lib/services/routeService";

const HeaderContainer = styled.header`
  position: fixed;
  height: 6.25rem;
  width: 100%;
  padding: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`;

const HeaderGradient = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.75), transparent);
  height: 40%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 99;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <NavLink to={homeRoute.path!}>
          <img src="/src/assets/serena-white.png" width={140} height={30} />
        </NavLink>
        <Nav />
      </HeaderContainer>
      <HeaderGradient role="none" />
    </>
  );
};

export default Header;
