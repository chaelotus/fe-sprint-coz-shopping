import React, { useEffect, useState } from "react";
import "./Productpage.css";
import ProductCategory from "../component/ProductCategory";
import Product from "../component/Product";
const ProductPage = () => {
  const bookmark = [];
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products?count=10")
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);

  return (
    <div className="wrapper">
      <div className="productContent">
        <div className="category-container">
          <ProductCategory />
        </div>
        <div className="category-product-list">
          <Product productData={productList} getBookmarkItem={bookmark} />
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
