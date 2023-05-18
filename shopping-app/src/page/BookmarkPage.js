import React, { useState, useEffect } from "react";
import ProductCategory from "../component/ProductCategory";
import Product from "../component/Product";
import "./BookmarkPage.css";
import { useSelector } from "react-redux";
const BookmarkPage = () => {
  const [bookmarkList, setBookmarkList] = useState([]);
  const [categoryType, setCategoryType] = useState("All");
  const [filtered, setFiltered] = useState([]);
  const getBookmarkArr = useSelector((state) => state.bookmarkItem);

  useEffect(() => {
    if (categoryType === "All") {
      setFiltered(getBookmarkArr);
    } else {
      setFiltered(
        getBookmarkArr.filter((product) => product.type === categoryType)
      );
    }
  }, [categoryType, getBookmarkArr]);

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
          productData={categoryType === "All" ? getBookmarkArr : filtered}
        />
      </div>
    </div>
  );
};
export default BookmarkPage;
