import React from "react";
import styles from "./SearchResult.module.css";

const SearchResult = (game: any, i: number) => {
  return (
    <div className={styles.SearchResult}>
      <div className={styles.SearchGame}>
        <p>{game.game.name}</p>
        <img src={game.game.imgUrl} alt="이미지 없음" />
      </div>
    </div>
  );
};

export default SearchResult;
