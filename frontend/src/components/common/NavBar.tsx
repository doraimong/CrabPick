import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DropdownTrigger from "./DropDown";
import logo from "../../asset/logo.png";

import styles from "./NavBar.module.css";
const MenuBar = () => {
  const navigate = useNavigate();

  const [dropSearch, setDropSearch] = useState<Boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");

  const home = () => {
    navigate("/");
  };

  const searchInputHandler = (e: any) => {
    setSearchInput(e.target.value);
  };

  const searchHandler = (e: any) => {
    navigate("/search", { state: searchInput });
  };

  const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate("/search", { state: searchInput });
    }
  };

  useEffect(() => {
    if (searchInput !== "") {
      setDropSearch(true);
    } else {
      setDropSearch(false);
    }
  }, [searchInput]);

  // 프로필 사진
  const defaultImg =
    "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/01/22/j0CUgPfqy6Fn637784817551514147.jpg";

  // 로그인 버튼 클릭
  // 로그인 기능 없을 때 임시

  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.navLogo}>
          <img src={logo} alt="" onClick={home} className={styles.logo} />
        </div>
        <div className={styles.links}>
          <Link to="/game-news">게임 뉴스</Link>
        </div>
        {/* 검색 */}
        <div className={styles.search}>
          <input
            type="text"
            onChange={searchInputHandler}
            onKeyDown={pressEnter}
          />
          <input type="button" value="검색" onClick={searchHandler}></input>
          <div className={styles.dropDown}>{dropSearch ? <DropdownTrigger /> : null}</div>
        </div>
        {/* <Link to="/mypage/:nickName">마이페이지</Link> */}

        {/* 로그인X -> 로그인 링크 /  로그인 O -> 프로필 사진 */}
        {/* {login? <img>프로필 사진</img> : <Link to="/signin">로그인</Link> } */}
        <div className={styles.links}>
          <Link to="/signin">로그인</Link>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
