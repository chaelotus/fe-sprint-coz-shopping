import "./Header.css";
import { useState, useRef, useEffect } from "react";
import { MdStarOutline, MdOutlineCardGiftcard } from "react-icons/md";
const Header = () => {
  const [isClick, SetIsClick] = useState(false);
  const outsideRef = useRef();

  useEffect(() => {
    const outsideClick = (e) => {
      if (isClick && !outsideRef.current.contains(e.target)) {
        SetIsClick(false);
      }
    };
    document.addEventListener("mousedown", outsideClick);
    return () => {
      document.removeEventListener("mousedown", outsideClick);
    };
  }, [isClick]);

  const clickMenuIcon = () => {
    SetIsClick(true);
  };
  return (
    <header className="header">
      <div className="header-column">
        <div className="header-mainTitle">
          <img className="header-logoImg" src={require("../img/logo.png")} />
          <div className="header-title">COZ Shopping</div>
        </div>
      </div>
      <div className="header-column">
        <img
          onClick={clickMenuIcon}
          className="header-menuIcon"
          src={require("../img/menu-icon.png")}
        />
        {isClick && (
          <section className="dropDown" ref={outsideRef}>
            <div>ooo님, 안녕하세요!</div>
            <div>
              <MdOutlineCardGiftcard className="dropDown-Icon" />
              <span>상품리스트 페이지</span>
            </div>
            <div>
              <MdStarOutline className="dropDown-Icon" />
              <span>북마크 페이지</span>
            </div>
          </section>
        )}
      </div>
    </header>
  );
};
export default Header;
