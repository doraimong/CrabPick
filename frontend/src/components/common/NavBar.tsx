import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../asset/logo.png";

import styles from "./NavBar.module.css";
const MenuBar = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState<Boolean>(false);
  const home = () => {
    navigate("/");
  };

  const defaultImg =
    "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/01/22/j0CUgPfqy6Fn637784817551514147.jpg";

  const loginHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setLogin(true);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.navLogo}>
        <img src={logo} alt="" onClick={home} className={styles.logo} />
      </div>
      <div className={styles.links}>
        <Link to="/game-news">게임 뉴스</Link>
      </div>
      <div className={styles.links}>
        <Link to="/sale-info">할인 정보</Link>
      </div>
      <div className={styles.links}>
        <Link to="/gamebti">GameBTI</Link>
      </div>
      <div className={styles.searchBox}>
        <input type="text" />
        <span></span>
      </div>
      {/* <Link to="/mypage/:nickName">마이페이지</Link> */}

      {/* 로그인X -> 로그인 링크 /  로그인 O -> 프로필 사진 */}
      {/* {login? <img>프로필 사진</img> : <Link to="/signin">로그인</Link> } */}
      {login ? (
        <div className={styles.navProfile}>
          <p>닉네임</p>
          <img src={defaultImg} alt="" />
        </div>
      ) : (
        <a className={styles.linkSignIn} onClick={loginHandler} href="/">
          로그인
        </a>
      )}
    </div>
  );
};

export default MenuBar;
