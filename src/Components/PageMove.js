import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  BsChevronDoubleRight,
  BsChevronRight,
  BsChevronLeft,
  BsChevronDoubleLeft,
} from "react-icons/bs";

const MoveBlock = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  color: grey;
  margin: 40px;
`;

const SLink = styled(Link)``;

const MoveBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  width: 30px;
  height: 30px;
  &:hover {
    background-color: lightgray;
    transition: 0.1s ease-in-out background-color;
  }
`;

const NumberBlock = styled.div``;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <MoveBlock>
      <SLink>
        <MoveBtn>
          <BsChevronDoubleLeft />
        </MoveBtn>
      </SLink>
      <SLink>
        <MoveBtn>
          <BsChevronLeft />
        </MoveBtn>
      </SLink>
      <SLink>
        <NumberBlock>
          <MoveBtn>1</MoveBtn>
        </NumberBlock>
      </SLink>
      <SLink>
        <MoveBtn>
          <BsChevronRight />
        </MoveBtn>
      </SLink>
      <SLink>
        <MoveBtn>
          <BsChevronDoubleRight />
        </MoveBtn>
      </SLink>
    </MoveBlock>
  );
};
