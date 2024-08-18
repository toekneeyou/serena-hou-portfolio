import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { fog, taupe } from "../../styles/GlobalStyle";
import { homeRoute } from "../../lib/services/routes";

const NavContainer = styled.nav`
  ul {
    display: flex;
    align-items: center;
    column-gap: 0.625rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.25rem;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  padding: 0.625rem 1rem;
  border-radius: 0.625rem;

  &.active {
    background-color: ${fog};
    color: ${taupe};
  }
`;

const Nav = () => {
  return (
    <NavContainer>
      <ul>
        {homeRoute.children?.map((ar) => {
          return (
            <StyledNavLink key={ar.id} to={ar.path!}>
              {ar.name}
            </StyledNavLink>
          );
        })}
      </ul>
    </NavContainer>
  );
};

export default Nav;
