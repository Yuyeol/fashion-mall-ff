import CurrLocation from "Components/CurrLocation";
import Product from "Components/ProductSection/Product";
import Section from "Components/ProductSection/Section";
import React, { useEffect, useState } from "react";

const ETC = () => {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState("ETC");
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([
    {
      id:
        "http://firstfloor.co.kr/product/detail.html?product_no=1766&cate_no=115&display_group=1",
      name: "STRIPE SOCKS (4 types, all seasons)",
      brand: "FIRST FLOOR",
      price: "10,400원",
      salePrice: "1,900원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/201903/21a0d5be61b5927cfad4b14e9e0dc023.jpg",
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

export default ETC;
