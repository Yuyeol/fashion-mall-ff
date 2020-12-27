import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsFillMicFill, BsFillBookmarkFill } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";
import { AiFillCamera, AiFillCreditCard } from "react-icons/ai";
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  margin: 30px 0;
  padding: 0 40px;
  &:not(:first-child) {
    border-left: 1px solid lightgrey;
  }
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const CallNumBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  margin-bottom: 15px;
`;

const CallNum = styled.span`
  font-size: 32px;
  font-weight: 600;
`;

// hover 넣자
const SmallText = styled.div`
  margin-bottom: 5px;
  line-height: 1.5;
  color: grey;
  font-weight: 600;
`;

const SelectBox = styled.select`
  margin-top: 15px;
  display: block;
`;

const SLink = styled(Link)``;

const IconBox = styled.div`
  display: flex;
  margin-top: 15px;
`;

const IconLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightgrey;
  border: 1px solid lightgray;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 32px;
  margin-right: 15px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Container>
    <Box>
      <Title>CUSTOMER CENTER</Title>
      <CallNumBox>
        <BsFillMicFill />
        <CallNum>1600-5176</CallNum>
      </CallNumBox>
      <SmallText>
        평일 오후 1:00 ~ 오후 4:00 / 점심시간 오후 12:00 ~ 오후 1:00
        <br />토 / 일 / 공휴일 휴무
      </SmallText>
    </Box>
    <Box>
      <Title>ACCOUNT INFO</Title>
      <SmallText>
        기업 021-111182-04-018
        <br />
        플로어코오퍼레이션
        <SelectBox name="job">
          <option value="">인터넷뱅킹 바로가기</option>
          <option value="학생">신한은행</option>
          <option value="회사원">국민은행</option>
          <option value="기타">농협</option>
        </SelectBox>
      </SmallText>
    </Box>
    <Box>
      <Title>FAVORITE MENU</Title>
      <SmallText>
        <SLink to="/">로그인</SLink>/<SLink to="/">회원가입</SLink>
      </SmallText>
      <SmallText>관련상품</SmallText>
      <SmallText>장바구니</SmallText>
      <SmallText>주문조회</SmallText>
      <SmallText>마이페이지</SmallText>
    </Box>
    <Box>
      <Title>RETURN / EXCAHNGE</Title>
      <SmallText>
        서울 성북구 동소문동5가 100번지 3층, 퍼스트플로어
        <br />
        자세한 교환·반품절차 안내는 문의란 및 공지사항을 참고해주세요
      </SmallText>
      <IconBox>
        <IconLink to="/">
          <BsFillMicFill />
        </IconLink>
        <IconLink to="/">
          <RiMessage3Fill />
        </IconLink>
        <IconLink to="/">
          <AiFillCamera />
        </IconLink>
        <IconLink to="/">
          <AiFillCreditCard />
        </IconLink>
        <IconLink to="/">
          <BsFillBookmarkFill />
        </IconLink>
      </IconBox>
    </Box>
  </Container>
);
