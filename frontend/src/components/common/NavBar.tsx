import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../asset/logo.png";

import styles from "./NavBar.module.css";
const MenuBar = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };
  return (
    <div className={styles.navBar}>
      <img src={logo} alt="" onClick={home} className={styles.logo} />
      <div className={styles.links}>
        <Link to="/mypage/:nickName">마이페이지</Link>

        <Link to="/gamebti">GameBTI</Link>

        {/* 로그인X -> 로그인 링크 /  로그인 O -> 프로필 사진 */}
        <Link to="/signin">로그인</Link>
      </div>
    </div>
  );
};

export default MenuBar;
