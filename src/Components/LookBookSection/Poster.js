import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  color: grey;
  font-weight: 600;
  line-height: 20px;
  &:hover {
    opacity: 0.5;
    transition: 0.2s ease-in-out opacity;
  }
`;

const A = styled.a``;

const ImgUrl = styled.img`
  width: 300px;
`;

const Title = styled.div``;

const Writer = styled.div``;

const Date = styled.div``;

const Product = ({ imgUrl, title, writer, date, id }) => (
  <Container>
    <A href={id}>
      <ImgUrl src={imgUrl} />
      <Title>{title}</Title>
      <Writer>{writer}</Writer>
      <Date>{date}</Date>
    </A>
  </Container>
);

export default Product;
