import MainBanner from "Components/Mainbanner";
import Product from "Components/ProductSection/Product";
import Section from "Components/ProductSection/Section";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const NewArr = styled.div`
  text-align: center;
  font-size: 32px;
  margin: 70px 0 40px 0;
`;

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [banner, setBanner] = useState(
    "http://app-storage-edge-004.cafe24.com/bannermanage2/firstfloor/2020/11/04/4fd73533946d8f2370fec67546c1bb25.jpg"
  );
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1966&cate_no=1&display_group=3",
      name: "EASY DOUBLE COAT (BLACK, OVERSIZED)",
      brand: "FIRST FLOOR",
      price: "256,000원",
      salePrice: "219,450원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/ead675fb28ae92ff0a0276bd0782ea69.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1952&cate_no=1&display_group=3",
      name: "EASYGOING CROP PANTS (regular fit, dyed charcoal)",
      brand: "FIRST FLOOR",
      price: "68,000원",
      salePrice: "55,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/5a7c7d3869bad11c21bead8f5619a41a.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1954&cate_no=1&display_group=3",
      name: "EASYGOING CROP PANTS (regular fit, dyed beige)",
      brand: "FIRST FLOOR",
      price: "68,000원",
      salePrice: "55,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/f36092cd909b2f20d436ebdff9fa5f20.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1549&cate_no=1&display_group=3",
      name: "2020 EASY COAT (BLACK, CASHMERE BLENDED)",
      brand: "FIRST FLOOR",
      price: "228,000원",
      salePrice: "193,800원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/ca2896d4934d146a68ee5d1b46e529f7.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1763&cate_no=1&display_group=3",
      name: "2020 EASY COAT (CAMEL, CASHMERE BLENDED)",
      brand: "FIRST FLOOR",
      price: "228,000원",
      salePrice: "193,800원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/2f6a36e5c923b7679d798c5ac20acc74.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1951&cate_no=1&display_group=3",
      name: "SERENE SOUTIEN (OATMEAL GRAY)",
      brand: "FIRST FLOOR",
      price: "348,000원",
      salePrice: "344,600원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/2e5a0a85032a6cf1278b8b2727d3f476.jpg",
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const bannerImg = [
      "http://app-storage-edge-004.cafe24.com/bannermanage2/firstfloor/2020/11/04/4fd73533946d8f2370fec67546c1bb25.jpg",
      "http://app-storage-edge-004.cafe24.com/bannermanage2/firstfloor/2020/12/22/31d39464e01af07bdd429a117101360c.jpg",
      "http://app-storage-edge-004.cafe24.com/bannermanage2/firstfloor/2020/10/20/7aaef5a4a20285acc5678922f8953527.jpg",
      "http://app-storage-edge-004.cafe24.com/bannermanage2/firstfloor/2020/10/20/84b6383d6bc7133bf6b58c92fcc8209c.jpg",
      "http://app-storage-edge-004.cafe24.com/bannermanage2/firstfloor/2020/10/20/16a7e048918ce6273512084dbdd06c1c.jpg",
    ];

    let count = 0;
    const timer = () => {
      count = count + 1;
      if (bannerImg.length < count) {
        count = count - bannerImg.length;
      }
      setBanner(bannerImg[count - 1]);
    };
    const counting = setInterval(timer, 3000);
    return () => {
      clearInterval(counting);
    };
  });
  return (
    <>
      <MainBanner banner={banner} />
      <NewArr>NEW ARRIVALS</NewArr>
      {products && products.length > 0 && (
        <Section>
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              brand={product.brand}
              price={product.price}
              salePrice={product.salePrice}
              imgUrl={product.imgUrl}
              id={product.id}
            />
          ))}
        </Section>
      )}
    </>
  );
};

export default Home;
