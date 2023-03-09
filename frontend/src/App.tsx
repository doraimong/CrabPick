import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Main from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import MyPage from "./pages/MyPage";
import GamebtiPage from "./pages/GamebtiPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/mypage/:nickname" element={<MyPage />} />
      <Route path="/gamebti" element={<GamebtiPage />} />
    </Routes>
  );
}

export default App;
