import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBookmark, removeFromBookmark } from "../Store";
import { MdStar } from "react-icons/md";
import Modal from "./Modal";
import "./Product.css";

//
const Product = ({ productData }) => {
  const dispatch = useDispatch();
  const getBookmarkArr = useSelector((state) => state.bookmarkItem);

  const [imgClicked, setImageClicked] = useState(false);
  const [imageTarget, setImageTarget] = useState("");
  const [imageName, setImageName] = useState("");

  const onClickBookmark = (item) => {
    // 기존에 있으면 localStorage에서 제거
    if (
      Array.isArray(getBookmarkArr) &&
      getBookmarkArr.some((bookmarkItem) => bookmarkItem.id === item.id)
    ) {
      dispatch(removeFromBookmark(item));
      localStorage.setItem(
        "bookmark",
        JSON.stringify(
          getBookmarkArr.filter((removeItem) => removeItem.id !== item.id)
        )
      );
    } else {
      dispatch(addToBookmark(item));
      localStorage.setItem(
        "bookmark",
        JSON.stringify([...getBookmarkArr, item])
      );
    }
  };
  const imgClickHandler = (imageUrl, image_Name) => {
    setImageClicked(!imgClicked);
    setImageTarget(imageUrl);
    setImageName(image_Name);
  };

  return (
    <ul className="productList-Container">
      {productData.map((item) => {
        switch (item.type) {
          case "Product":
            return (
              <li key={item.id}>
                <div className="product-image">
                  <img
                    onClick={() => imgClickHandler(item.image_url, item.title)}
                    src={item.image_url}
                  />

                  <MdStar
                    className={
                      Array.isArray(getBookmarkArr) &&
                      getBookmarkArr.some(
                        (bookmarkItem) => bookmarkItem.id === item.id
                      )
                        ? "starIcon Toggle"
                        : "starIcon"
                    }
                    onClick={() => onClickBookmark(item)}
                  />
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
                  <img
                    onClick={() =>
                      imgClickHandler(item.brand_image_url, item.brand_name)
                    }
                    src={item.brand_image_url}
                  />
                  <MdStar
                    className={
                      Array.isArray(getBookmarkArr) &&
                      getBookmarkArr.some(
                        (bookmarkItem) => bookmarkItem.id === item.id
                      )
                        ? "starIcon Toggle"
                        : "starIcon"
                    }
                    onClick={() => onClickBookmark(item)}
                  />
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
                  <img
                    onClick={() => imgClickHandler(item.image_url, item.title)}
                    src={item.image_url}
                  ></img>
                  <MdStar
                    className={
                      Array.isArray(getBookmarkArr) &&
                      getBookmarkArr.some(
                        (bookmarkItem) => bookmarkItem.id === item.id
                      )
                        ? "starIcon Toggle"
                        : "starIcon"
                    }
                    onClick={() => onClickBookmark(item)}
                  />
                </div>
                <div className="exhibition-title">{item.title}</div>
                <div className="exhibition-subtitle">{item.subtitle}</div>
              </li>
            );
          case "Category":
            return (
              <li key={item.id}>
                <div className="product-image">
                  <img
                    onClick={() => imgClickHandler(item.image_url, item.title)}
                    src={item.image_url}
                  ></img>
                  <MdStar
                    className={
                      Array.isArray(getBookmarkArr) &&
                      getBookmarkArr.some(
                        (bookmarkItem) => bookmarkItem.id === item.id
                      )
                        ? "starIcon Toggle"
                        : "starIcon"
                    }
                    onClick={() => onClickBookmark(item)}
                  />
                </div>
                <div className="category-title">{`# ${item.title}`}</div>
              </li>
            );
        }
      })}
      {imgClicked && (
        <Modal
          imgUrl={imageTarget}
          imgName={imageName}
          onClose={imgClickHandler}
        />
      )}
    </ul>
  );
};
export default Product;
