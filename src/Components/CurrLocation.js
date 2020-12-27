import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const TextBox = styled.div`
  width: 1260px;
`;

const SmallText = styled.div`
  text-align: right;
  margin: 15px 0;
  font-size: 15px;
`;
const Head = styled.div`
  padding-bottom: 10px;
  margin: 30px 0;
  font-size: 18px;
  color: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const BigText = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: black;
`;
const Total = styled.div`
  margin-top: 30px;
`;
const Number = styled.span`
  font-weight: 600;
  margin: 0 5px;
  opacity: 0.7;
  color: black;
`;

const CurrLocation = ({ location, products }) => (
  <Container>
    <TextBox>
      <SmallText>Home &#62; {location}</SmallText>
      <Head>
        <BigText>{location}</BigText>
        <Total>
          Total<Number>{products && products.length}</Number>items
        </Total>
      </Head>
    </TextBox>
  </Container>
);

export default CurrLocation;
