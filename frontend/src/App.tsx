import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Main from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import MyPage from "./pages/MyPage";
import GamebtiPage from "./pages/GamebtiPage";
import GameNewsPage from "./pages/GameNewsPage";
// import SaleInfoPage from "./pages/SaleInfoPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/mypage/:nickname" element={<MyPage />} />
      <Route path="/gamebti" element={<GamebtiPage />} />
      <Route path="/game-news" element={<GameNewsPage />} />
      <Route path="/search" element={<SearchPage />} />
      {/* <Route path="/sale-info" element={<SaleInfoPage />} /> */}
      <Route path="/detail/:gameId" element={<DetailPage />} />
    </Routes>
  );
}
export default App;