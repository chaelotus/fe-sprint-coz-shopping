import React, { useRef, useEffect } from "react";
import { MdStar, MdClose } from "react-icons/md";
import { createPortal } from "react-dom";

import "./Modal.css";
const Modal = ({ imgUrl, imgName, onClose }) => {
  const outside = useRef();
  const stophandler = (e) => {
    e.stopPropagation();
  };
  const el = document.getElementById("modal");
  return (
    <div ref={outside} onClick={onClose} className="modal-background">
      {createPortal(
        <div onClick={stophandler}>
          <img className="modal-Image" src={imgUrl} alt="Modal Image" />
          <div className="modal-productInfo">
            <MdStar className="modalStarIcon" />
            <div className="modal-ImageName">{imgName}</div>
          </div>
          <MdClose className="closeIcon" onClick={onClose} />
        </div>,
        el
      )}
    </div>
  );
};
export default Modal;
