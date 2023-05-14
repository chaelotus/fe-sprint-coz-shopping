import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <div className="wrapper">
      <div className="contentWrapper">
        <Header className="header" />
        <div className="main">main-page</div>
      </div>

      <Footer></Footer>
    </div>
  );
};
export default MainPage;
