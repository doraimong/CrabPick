import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchResult.module.css";

const SearchResult = (game: any, i: number) => {
  // // string을 parse 하기 위한 과정
  // const a = game.game.imgUrl;
  // const b = a.replaceAll("'", '"');
  // const c = JSON.parse(b);
  // // game의 첫번째 path_thumbnail
  // const url = c[0].path_thumbnail;

  const url = `https://cdn.cloudflare.steamstatic.com/steam/apps/${game.game.appId}/header.jpg?`

  // 클릭 시 Detail 페이지로 이동
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/detail/${game.game.appId}`);
  };

  return (
    <div className={styles.SearchResult} onClick={goToDetail}>
      <div className={styles.SearchGame}>
        <p>{game.game.name}</p>
        <br />
        <img src={url} alt="이미지 없음" />
      </div>
    </div>
  );
};

export default SearchResult;
