import CurrLocation from "Components/CurrLocation";
import Product from "Components/ProductSection/Product";
import Section from "Components/ProductSection/Section";
import React, { useEffect, useState } from "react";

const Bottom = () => {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState("BOTTOM");
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1965&cate_no=127&display_group=1",
      name: "HIGHBROW SLACKS (LONG STRAIGHT , CHOCO)",
      brand: "FIRST FLOOR",
      price: "80,000원",
      salePrice: "74,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/9478adf21ebf0e522a8adec0902f52bb.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1964&cate_no=127&display_group=1",
      name: "HIGHBROW SLACKS (LONG STRAIGHT , BEIGE)",
      brand: "FIRST FLOOR",
      price: "80,000원",
      salePrice: "74,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/e59cec4deb8608fe5a847e749d198691.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1963&cate_no=127&display_group=1",
      name: "HIGHBROW SLACKS (LONG STRAIGHT , DARK NAVY)",
      brand: "FIRST FLOOR",
      price: "80,000원",
      salePrice: "74,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/a6eb2fa14d63846b10aeb38191a6484b.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1962&cate_no=127&display_group=1",
      name: "HIGHBROW SLACKS (LONG STRAIGHT , BLACK)",
      brand: "FIRST FLOOR",
      price: "80,000원",
      salePrice: "74,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/993df3f271ed9494ed2d85efd38b398a.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1871&cate_no=127&display_group=1",
      name: "EASYGOING CROP PANTS (regular fit, cream)",
      brand: "FIRST FLOOR",
      price: "68,000원",
      salePrice: "50,500원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202010/adb4df94a096772ffc7dcbb8adda8e99.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1952&cate_no=127&display_group=1",
      name: "EASYGOING CROP PANTS (regular fit, dyed charcoal)",
      brand: "FIRST FLOOR",
      price: "68,000원",
      salePrice: "50,500원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/5a7c7d3869bad11c21bead8f5619a41a.jpg",
    },
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1954&cate_no=127&display_group=1",
      name: "EASYGOING CROP PANTS (regular fit, dyed beige)",
      brand: "FIRST FLOOR",
      price: "68,000원",
      salePrice: "55,100원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202011/f36092cd909b2f20d436ebdff9fa5f20.jpg",
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

export default Bottom;
