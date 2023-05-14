import React from "react";
import "./App.css";
import MainPage from "./page/MainPage";
import ProductPage from "./page/ProductPage";
import BookmarkPage from "./page/BookmarkPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/productlist" element={<ProductPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
