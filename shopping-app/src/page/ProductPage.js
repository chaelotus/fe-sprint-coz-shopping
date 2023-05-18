import React, { useEffect, useState, useCallback } from "react";
import "./Productpage.css";
import ProductCategory from "../component/ProductCategory";
import Product from "../component/Product";

const ProductPage = () => {
  const bookmark = [];
  const [productList, setProductList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categoryType, setCategoryType] = useState("All");

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      });
  }, []);

  const setCategory = (type) => {
    setCategoryType(type);
    setFiltered(productList.filter((product) => product.type === type));
  };
  return (
    <div className="wrapper">
      <div className="category-container">
        <ProductCategory setCategory={setCategory} />
      </div>
      <div className="category-product-list">
        <Product
          className="productPage-product"
          productData={categoryType === "All" ? productList : filtered}
          getBookmarkItem={bookmark}
        />
      </div>
    </div>
  );
};
export default ProductPage;
