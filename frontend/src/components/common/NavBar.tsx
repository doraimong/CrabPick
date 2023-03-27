import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DropdownTrigger from "./DropDown";
import logo from "../../asset/logo.png";
import styles from "./NavBar.module.css";
import axios from "axios";
const MenuBar = () => {
  const navigate = useNavigate();

  const [dropSearch, setDropSearch] = useState<Boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [gameList, setGameList] = useState<any>([
    // {
    //   id: 1,
    //   name: "name",
    //   imgUrl: "imgurl",
    //   genre: "genre",
    // },
    // {
    //   id: 2,
    //   name: "name2",
    //   imgUrl: "imgurl2",
    //   genre: "genre2",
    // },
    // {
    //   id: 3,
    //   name: "name3",
    //   imgUrl: "imgurl3",
    //   genre: "genre3",
    // },
  ]);
  const [filteredGameList, setFilteredGameList] = useState<any>();

  // 전체 게임 목록 가져오기
  useEffect(() => {
    async function getGameList() {
      const response = await axios
        .get("http://j8e107.p.ssafy.io:8080/api/game")
        .then((res) => {
          setGameList(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getGameList();
  }, []);

  // home으로 이동
  const home = () => {
    navigate("/");
  };

  // 검색창에 쓴 값 저장하기
  const searchInputHandler = (e: any) => {
    setSearchInput(e.target.value);
  };
  // 검색하기
  const searchHandler = (e: any) => {
    setDropSearch(false);
    navigate("/search", { state: { searchInput : searchInput, filteredGameList: filteredGameList } });
  };
  // Enter로 검색하기
  const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
    setDropSearch(false);
    navigate("/search", { state: { searchInput : searchInput, filteredGameList: filteredGameList } });
    }
  };
  // 검색창을 이용중인지 확인하여 dropdown 하기
  const getFocus = () => {
    setDropSearch(true);
  };
  const loseFocus = () => {
    setDropSearch(false);
  };

  // 검색창에 쓴 값으로 게임리스트 필터링 하기
  useEffect(() => {
    const filteredGame = gameList.filter((itemList: any) => {
      return itemList.name.toUpperCase().includes(searchInput.toUpperCase());
    });
    setFilteredGameList(filteredGame);
  }, [searchInput]);

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
            onFocus={getFocus}
            onBlur={loseFocus}
            value={searchInput}
          />
          <input type="button" value="검색" onClick={searchHandler}></input>
          <div className={styles.dropDown}>
            {dropSearch && searchInput !== "" ? (
              <DropdownTrigger filteredGameList={filteredGameList} />
            ) : null}
          </div>
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
