import React from "react";
import { MdStar, MdClose } from "react-icons/md";
import reactDOM, { createPortal } from "react-dom";
import "./Modal.css";
const Modal = ({ imgUrl, imgName }) => {
  console.log(imgUrl.target);
  const el = document.getElementById("modal");
  return (
    <div className="modal-background">
      {createPortal(
        <div>
          <img className="modal-Image" src={imgUrl}></img>
          <div className="modal-productInfo">
            <MdStar className="modalStarIcon" />
            <div className="modal-ImageName">{imgName}</div>
          </div>
          <MdClose className="closeIcon" />
        </div>,
        el
      )}
    </div>
  );
};
export default Modal;
