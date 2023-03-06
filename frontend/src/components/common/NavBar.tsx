import React from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";
const MenuBar = () => {
  return (
    <div>
      <div>
        <h1>상단 내비바</h1>
      </div>
      <div className={styles.NavBar}>
        <Link to="/">홈으로</Link>
        <Link to="/gamebti">GameBTI</Link>
        <Link to="/signin">로그인</Link>
        <Link to="/mypage/:nickName">마이페이지</Link>
      </div>
      <hr />
    </div>
  );
};

export default MenuBar;
