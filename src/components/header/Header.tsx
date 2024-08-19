import styled from "styled-components";
import Nav from "./Nav";
import { createElement } from "react";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
  position: fixed;
  height: 6.25rem;
  width: 100%;
  padding: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return createElement(
    HeaderContainer,
    null,
    createElement(
      NavLink,
      { to: "/" },
      createElement("img", {
        src: "/src/assets/serena-white.png",
        width: 140,
        height: 30,
      })
    ),

    createElement(Nav, null)
  );
};

export default Header;
