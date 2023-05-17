import React, { useEffect, useState } from "react";

import Product from "../component/Product";
import "./MainPage.css";
import "../component/Product.css";
import { MdOutlineCommentsDisabled } from "react-icons/md";
import InitialData from "../data/InitialData";
const MainPage = () => {
  const [productData, setProductData] = useState([]);
  let getBookmarkItem = [];
  if (localStorage.getItem("bookmark")) {
    // getBookmarkItem = JSON.parse(localStorage.getItem("bookmark"));
    InitialData.bookmark.item = JSON.parse(localStorage.getItem("bookmark"));
    console.log("Initial", InitialData);
  }
  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, []);
  return (
    <div className="wrapper">
      <div className="contentWrapper">
        <div className="content">
          <div className="product-list">
            <div className="product-title">상품 리스트</div>
            <Product
              getBookmarkItem={InitialData.bookmark.item}
              productData={productData}
            />
          </div>
          <div className="product-list bookmark-list">
            <div className="bookmark-title">북마크 리스트</div>
            {InitialData.bookmark.item.length > 0 ? (
              <Product
                className="bookmark-product"
                getBookmarkItem={InitialData.bookmark.item}
                productData={InitialData.bookmark.item.slice(0, 4)}
              />
            ) : (
              <MdOutlineCommentsDisabled className="nodataImage" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
