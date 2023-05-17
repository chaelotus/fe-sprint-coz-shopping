import React, { useState } from "react";
import { MdStar } from "react-icons/md";
import Modal from "./Modal";
import "./Product.css";
//
const Product = ({ productData, getBookmarkItem }) => {
  const [imgClicked, setImageClicked] = useState(false);
  const [imageTarget, setImageTarget] = useState("");
  const [imageName, setImageName] = useState("");

  let bookmarkArray = [...getBookmarkItem];

  const onClickBookmark = (item) => {
    // 기존에 있으면 localStorage에서 제거
    if (bookmarkArray.filter((list) => list.id === item.id).length > 0) {
      bookmarkArray = bookmarkArray.filter((list) => list.id !== item.id);
    } else bookmarkArray.push(item);
    localStorage.setItem("bookmark", JSON.stringify(bookmarkArray));
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
                      bookmarkArray.filter((list) => list.id === item.id)
                        .length > 0
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
                      bookmarkArray.filter((list) => list.id === item.id)
                        .length > 0
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
                      bookmarkArray.filter((list) => list.id === item.id)
                        .length > 0
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
                      bookmarkArray.filter((list) => list.id === item.id)
                        .length > 0
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
      {/* {bookmarkToggle && } */}
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
