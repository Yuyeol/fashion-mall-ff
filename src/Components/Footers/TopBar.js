import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 100px;
`;
const List = styled.ul`
  padding: 15px 0;
  display: flex;
`;
const Item = styled.li`
  display: flex;
  &:not(:first-child) {
    border-left: 1.2px solid lightgrey;
  }
`;

const SLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: 14px;
`;

const IconBlock = styled.div`
  display: flex;
`;

const Icon = styled(Link)`
  background-color: lightgrey;
  color: white;
  font-size: 16px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  border-radius: 50%;
  &:first-child:hover {
    background-color: rgb(64, 100, 172);
    transition: background-color 0.2s ease-in-out;
  }
  &:nth-child(2):hover {
    background-color: tomato;
    transition: background-color 0.2s ease-in-out;
  }
  &:last-child:hover {
    background-color: rgb(4, 207, 92);
    transition: background-color 0.2s ease-in-out;
  }
`;
const BIcon = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Header>
    <List>
      <Item>
        <SLink to="/">회사소개</SLink>
      </Item>
      <Item>
        <SLink to="/">이용약관</SLink>
      </Item>
      <Item>
        <SLink to="/">개인정보취급방침</SLink>
      </Item>
      <Item>
        <SLink to="/">
          <AiOutlineMail />
          제휴문의
        </SLink>
      </Item>
    </List>
    <IconBlock>
      <Icon to="/">
        <FaFacebookF />
      </Icon>
      <Icon to="/">
        <FaInstagram />
      </Icon>
      <Icon to="/">
        <BIcon>B</BIcon>
      </Icon>
    </IconBlock>
  </Header>
);
