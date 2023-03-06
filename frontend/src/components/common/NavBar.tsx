import React from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";
const MenuBar = () => {
  return (
    <div>
      <div className={styles.NavBar}>
        여긴 상단 내비게이션 바 입니다.
        <Link to="/">홈으로</Link>
        <Link to="/signin">로그인</Link>
        <Link to="/mypage/:nickName">마이페이지</Link>
        <Link to="/gamebti">GameBTI</Link>
      </div>
      <hr />
    </div>
  );
};

export default MenuBar;
