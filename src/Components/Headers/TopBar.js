import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaRegEye, FaSearch, FaRegStar, FaHome } from "react-icons/fa";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 100px;
  position: fixed;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;
const ListBox = styled.div`
  display: flex;
`;
const List = styled.ul`
  padding: 15px 0;
  display: flex;
`;
const Home = styled(Link)`
  background-color: rgb(84, 81, 81);
  color: white;
  width: 50px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  display: ${(props) => (props.active ? "flex" : "none")};
  transition: display 10s ease-in-out;
`;
const Item = styled.li`
  &:not(:first-child) {
    border-left: 1.2px solid lightgrey;
  }
  font-weight: 600;
`;
const SLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: 14px;
`;
const Badge = styled.div`
  background-color: lightgrey;
  color: white;
  width: 15px;
  height: 16px;
  font-size: 11px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
`;

const SearchBox = styled.div`
  display: flex;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  background-color: lightgrey;
  color: white;
  border-radius: 5px;
  &:focus-within {
    background-color: grey;
    transition: background-color 0.2s ease-in-out;
  }
`;
const Input = styled.input`
  all: unset;
  padding-left: 15px;
`;

const IconSearch = styled(Link)`
  color: white;
  font-size: 16px;
  margin-right: 7px;
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
  border-radius: 5px;
  &:hover {
    background-color: grey;
    transition: background-color 0.2s ease-in-out;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ fixNav }) => (
  <Header>
    <ListBox>
      <Home to="/" active={fixNav === true}>
        <FaHome />
      </Home>
      <List>
        <Item>
          <SLink to="/">마이페이지</SLink>
        </Item>
        <Item>
          <SLink to="/">
            장바구니<Badge>0</Badge>
          </SLink>
        </Item>
        <Item>
          <SLink to="/">커뮤니티</SLink>
        </Item>
        <Item>
          <SLink to="/">Q & A</SLink>
        </Item>
      </List>
    </ListBox>
    <SearchBox>
      <Form>
        <Input />
        <IconSearch to="/">
          <FaSearch />
        </IconSearch>
      </Form>
      <Icon to="/">
        <FaRegEye />
      </Icon>
      <Icon to="/">
        <FaRegStar />
      </Icon>
    </SearchBox>
  </Header>
);
