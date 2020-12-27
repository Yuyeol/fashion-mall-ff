import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  color: grey;
  font-weight: 600;
`;

const A = styled.a``;

const ImgUrl = styled.img`
  width: 400px;
`;

const Name = styled.div`
  font-size: 16px;
  color: grey;
  padding: 10px 0;
  border-bottom: 1px solid lightgrey;
`;

const Brand = styled.div`
  padding: 5px 0;
`;

const Price = styled.div`
  padding-bottom: 5px;
`;

const SalePrice = styled.div`
  color: rgb(236, 105, 70);
`;

const Product = ({ name, brand, price, salePrice, imgUrl, id }) => (
  <Container>
    <A href={id}>
      <ImgUrl src={imgUrl} />
    </A>
    <A href={id}>
      <Name>{name}</Name>
    </A>
    <Brand>{brand}</Brand>
    <Price>권장소비자가 : {price}</Price>
    <SalePrice>할인판매가 : {salePrice}</SalePrice>
  </Container>
);

export default Product;
