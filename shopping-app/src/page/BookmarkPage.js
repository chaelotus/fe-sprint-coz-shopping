import React, { useState, useEffect } from "react";
import ProductCategory from "../component/ProductCategory";
import Product from "../component/Product";
import "./BookmarkPage.css";
const BookmarkPage = () => {
  const [bookmarkList, setBookmarkList] = useState([]);
  const [categoryType, setCategoryType] = useState("All");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setBookmarkList(JSON.parse(localStorage.getItem("bookmark")));
  }, []);
  console.log(bookmarkList);
  useEffect(() => {
    if (categoryType === "All") {
      setFiltered(bookmarkList);
    } else {
      setFiltered(
        bookmarkList.filter((product) => product.type === categoryType)
      );
    }
  }, [categoryType, bookmarkList]);

  const setCategory = (type) => {
    setCategoryType(type);
  };
  return (
    <div className="wrapper">
      <div className="category-container">
        <ProductCategory setCategory={setCategory} />
      </div>
      <div className="bookmark-list-product">
        <Product
          className="productPage-product"
          productData={categoryType === "All" ? bookmarkList : filtered}
        />
      </div>
    </div>
  );
};
export default BookmarkPage;
