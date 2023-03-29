import React, { useEffect, useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Main from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import MyPage from "./pages/MyPage";
// import GamebtiPage from "./pages/GamebtiPage";
import GameNewsPage from "./pages/GameNewsPage";
// import SaleInfoPage from "./pages/SaleInfoPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";

import AuthContext from "./store/auth-context";
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* 내비게이션 가드 설정 */}
      {!authCtx.isLoggedIn && <Route path="/signin" element={<SignInPage />} />}

      {authCtx.isLoggedIn && (
        <Route path="/mypage/:userId" element={<MyPage />} />
      )}

      <Route path="/game-news" element={<GameNewsPage />} />
      <Route path="/search" element={<SearchPage />} />
      {/* <Route path="/sale-info" element={<SaleInfoPage />} /> */}
      <Route path="/detail/:gameId" element={<DetailPage />} />
    </Routes>
  );
}
export default App;
