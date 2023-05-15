import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Product from "../component/Product";
import "./MainPage.css";
const MainPage = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);
  return (
    <div className="wrapper">
      <Header className="header" />
      <div className="contentWrapper">
        <div className="content">
          <div className="product-list">
            <div className="product-title">상품 리스트</div>
            <Product productData={productData} />
          </div>
          <div className="product-list">
            <div className="bookmark-title">북마크 리스트</div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};
export default MainPage;
