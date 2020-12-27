import CurrLocation from "Components/CurrLocation";
import Product from "Components/ProductSection/Product";
import Section from "Components/ProductSection/Section";
import React, { useEffect, useState } from "react";

const Shirts = () => {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState("COAT");
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1966&cate_no=108&display_group=1",
      name: "EASY DOUBLE COAT (BLACK, OVERSIZED)",
      brand: "FIRST FLOOR",
      price: "256,000원",
      salePrice: "231,000원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/ead675fb28ae92ff0a0276bd0782ea69.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1951&cate_no=108&display_group=1",
      name: "SERENE SOUTIEN (OATMEAL GRAY)",
      brand: "FIRST FLOOR",
      price: "348,000원",
      salePrice: "295,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/022cafc270e6efe9891f0ca5606fc7b0.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1955&cate_no=108&display_group=1",
      name: "SERENE SOUTIEN (DARK BROWN)",
      brand: "FIRST FLOOR",
      price: "348,000원",
      salePrice: "344,600원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/114d9b84f3a38e54b1ba26d8ab6a56a6.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1950&cate_no=108&display_group=1",
      name: "MINIMAL PEA COAT (DARK BROWN,오버핏)",
      brand: "FIRST FLOOR",
      price: "249,000원",
      salePrice: "210,900원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202010/f319019473034b8f253e7fd89b72625a.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1949&cate_no=108&display_group=1",
      name: "MINIMAL PEA COAT (BLACK,오버핏)",
      brand: "FIRST FLOOR",
      price: "249,000원",
      salePrice: "210,900원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202010/be0591efb508eb7bcd59e0da06151a25.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1763&cate_no=108&display_group=1",
      name: "2020 EASY COAT (CAMEL, CASHMERE BLENDED)",
      brand: "FIRST FLOOR",
      price: "228,000원",
      salePrice: "193,800원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/2f6a36e5c923b7679d798c5ac20acc74.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1549&cate_no=108&display_group=1",
      name: "2020 EASY COAT (BLACK, CASHMERE BLENDED)",
      brand: "FIRST FLOOR",
      price: "228,000원",
      salePrice: "193,800원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/ca2896d4934d146a68ee5d1b46e529f7.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1853&cate_no=108&display_group=1",
      name: "ROBE TRENCH (wool blended, BLACK)",
      brand: "FIRST FLOOR",
      price: "198,000원",
      salePrice: "112,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/201902/ba470894d065bb765633aafa787388fe.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1854&cate_no=108&display_group=1",
      name: "ROBE TRENCH (wool blended, DARK NAVY)",
      brand: "FIRST FLOOR",
      price: "198,000원",
      salePrice: "169,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/201902/4bb67990405d30ad3370f171ac7d4a07.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1856&cate_no=108&display_group=1",
      name: "ROBE TRENCH (wool blended, OLIVE)",
      brand: "FIRST FLOOR",
      price: "198,000원",
      salePrice: "169,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/201902/02abd7156198d3fba2812e4f1ce9e32b.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1855&cate_no=108&display_group=1",
      name: "ROBE TRENCH (wool blended, BEIGE)",
      brand: "FIRST FLOOR",
      price: "198,000원",
      salePrice: "169,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/201902/06459a05e29819a2f7bc29e60fe397e4.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1857&cate_no=108&display_group=1",
      name: "ROBE TRENCH (wool blended, MOCHA BEIGE)",
      brand: "FIRST FLOOR",
      price: "198,000원",
      salePrice: "169,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/201902/7b3db4d15faf74150ad1655aac3953ed.jpg",
    },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CurrLocation location={location} products={products} />
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

export default Shirts;
