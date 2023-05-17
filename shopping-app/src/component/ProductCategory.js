import React, { useEffect, useState } from "react";
import All from "../img/1.png";
import product from "../img/2.png";
import category from "../img/3.png";
import exhibition from "../img/4.png";
import brand from "../img/5.png";
import "./ProductCategory.css";

const ProductCategory = () => {
  const [categoryCliked, setCategoryClicked] = useState("All");
  const categoryImg = [
    { img: All, title: "전체", type: "All" },
    { img: product, title: "상품", type: "Product" },
    { img: category, title: "카테고리", type: "Category" },
    { img: exhibition, title: "기획전", type: "Exhibition" },
    { img: brand, title: "브랜드", type: "Brand" },
  ];

  const onClickCategory = (li) => {
    setCategoryClicked(li);
  };
  return (
    <ul className="category-filter">
      {categoryImg.map((category, index) => (
        <li key={index} onClick={() => onClickCategory(category.type)}>
          <img className="category-filter_img" src={category.img}></img>
          <div
            className={
              categoryCliked === category.type
                ? "category-filter_title category-clicked"
                : "category-filter_title"
            }
          >
            {category.title}
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ProductCategory;
