import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  box-shadow: 1.5px 2.5px 2.5px rgba(118, 146, 180, 0.18);
  background-color: rgba(255, 255, 255, 0.8);
  position: ${(props) => (props.active ? "fixed" : "static")};
  width: 100%;
  top: 45px;
  display: flex;
  justify-content: center;
`;
const List = styled.ul`
  padding: 0 100px;
  width: 1460px;
  display: flex;
  justify-content: space-between;
`;
const Item = styled.li``;
const SLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-weight: 600;
  font-size: 14px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ fixNav }) => {
  return (
    <NavBar active={fixNav === true}>
      <List>
        <Item>
          <SLink to="/about">ABOUT US</SLink>
        </Item>
        <Item>
          <SLink to="/lookbook">LOOK BOOK</SLink>
        </Item>
        <Item>
          <SLink to="/outer">OUTER</SLink>
        </Item>
        <Item>
          <SLink to="/coat">COAT</SLink>
        </Item>
        <Item>
          <SLink to="/shirts">SHIRTS</SLink>
        </Item>
        <Item>
          <SLink to="/top">TOP</SLink>
        </Item>
        <Item>
          <SLink to="/bottom">BOTTOM</SLink>
        </Item>
        <Item>
          <SLink to="/etc">ETC</SLink>
        </Item>
      </List>
    </NavBar>
  );
};
