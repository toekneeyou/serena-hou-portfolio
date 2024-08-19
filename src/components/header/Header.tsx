import styled from "styled-components";
import Nav from "./Nav";

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
  return (
    <HeaderContainer>
      <div>Serena</div>
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
