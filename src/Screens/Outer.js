import CurrLocation from "Components/CurrLocation";
import Product from "Components/ProductSection/Product";
import Section from "Components/ProductSection/Section";
import React, { useEffect, useState } from "react";

const Outer = () => {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useState("OUTER");
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([
    {
      id: "http://firstfloor.co.kr/product/detail.html?product_no=1958&cate_no=95&display_group=1",
      name: "[M.H] FIELD BLOUSON (BROWN CHECK)",
      brand: "FIRST FLOOR",
      price: "189,000원",
      salePrice: "160,550원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202010/cc94acf75fbded0081d899d5e739d566.jpg",
    },
    {
      id: "http://firstfloor.co.kr/product/detail.html?product_no=1957&cate_no=95&display_group=1",
      name: "[M.H] FIELD BLOUSON (BLACK)",
      brand: "FIRST FLOOR",
      price: "189,000원",
      salePrice: "160,550원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202010/2c43fd504efe168b6b279b30ddef2732.jpg",
    },
    {
      id: "http://firstfloor.co.kr/product/detail.html?product_no=1948&cate_no=95&display_group=1",
      name: "HIGHBROW JACKET (BLACK,세미오버핏)",
      brand: "FIRST FLOOR",
      price: "189,000원",
      salePrice: "160,550원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202010/d254c3b863e6534d6a61e85d7569f662.jpg",
    },
    {
      id: "http://firstfloor.co.kr/product/detail.html?product_no=1947&cate_no=95&display_group=1",
      name: "HIGHBROW JACKET (DARK NAVY,세미오버핏)",
      brand: "FIRST FLOOR",
      price: "189,000원",
      salePrice: "160,550원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202010/ccd0828dd0795c977b9309c7e040060d.jpg",
    },
    {
      id: "http://firstfloor.co.kr/product/detail.html?product_no=1946&cate_no=95&display_group=1",
      name: "HIGHBROW JACKET (BROWN CHECK,세미오버핏)",
      brand: "FIRST FLOOR",
      price: "189,000원",
      salePrice: "169,000원",
      imgUrl:
        "http://firstfloor.co.kr/web/product/medium/202010/ad2a17bd68971b99009a5e41f5554d5b.jpg",
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

export default Outer;
