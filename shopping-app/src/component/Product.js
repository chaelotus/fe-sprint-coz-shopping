import React, { useEffect } from "react";
import { MdStar } from "react-icons/md";

import "./Product.css";
const Product = ({ productData }) => {
  return (
    <ul className="productList-Container">
      {productData.map((item) => {
        switch (item.type) {
          case "Product":
            return (
              <li key={item.id}>
                <div className="product-image">
                  <img src={item.image_url} />
                  <MdStar className="starIcon" />
                </div>
                <div className="product-info">
                  <div>{item.title}</div>
                  <div>{`${item.discountPercentage}%`}</div>
                </div>
                <div className="product-price">
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                    "원"}
                </div>
              </li>
            );
          case "Brand":
            return (
              <li key={item.id}>
                <div className="product-image">
                  <img src={item.brand_image_url} />
                  <MdStar className="starIcon" />
                </div>
                <div className="brand-info">
                  <div>{item.brand_name}</div>
                  <div>관심고객수</div>
                </div>
                <div className="brand-follower">
                  {item.follower
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
              </li>
            );
          case "Exhibition":
            return (
              <li key={item.id}>
                <div className="product-image">
                  <img src={item.image_url}></img>
                  <MdStar className="starIcon" />
                </div>
                <div className="exhibition-title">{item.title}</div>
                <div className="exhibition-subtitle">{item.subtitle}</div>
              </li>
            );
          case "Category":
            return (
              <li key={item.id}>
                <div className="product-image">
                  <img src={item.image_url}></img>
                  <MdStar className="starIcon" />
                </div>
                <div className="category-title">{`# ${item.title}`}</div>
              </li>
            );
        }
      })}
    </ul>
  );
};
export default Product;
