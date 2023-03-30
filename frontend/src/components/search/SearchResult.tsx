import React from "react";
import styles from "./SearchResult.module.css";

const SearchResult = (game: any, i: number) => {
  return (
    <div className={styles.SearchResult}>
      <div className={styles.SearchGame}>
        <p>{game.game.name}</p>
        <br />
        <img src={game.game.imgUrl[0].path_thumbnail} alt="이미지 없음" />
      </div>
    </div>
  );
};

export default SearchResult;