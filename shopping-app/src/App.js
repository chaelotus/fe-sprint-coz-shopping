import React from "react";
import "./App.css";
import MainPage from "./page/MainPage";
import ProductPage from "./page/ProductPage";
import BookmarkPage from "./page/BookmarkPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./page/Header";
import Footer from "./page/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/productlist" element={<ProductPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
