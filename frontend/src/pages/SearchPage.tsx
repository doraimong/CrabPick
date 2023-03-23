import React from "react";
import DetailLayout from "../layout/DetailLayout";
import Detail from "../components/detail/Detail";

import styles from "./Page.module.css";
import SearchLayout from "../layout/SearchLayout";
import SearchResult from "../components/search/SearchResult";
import { useLocation } from "react-router-dom";


const SearchPage = (gameList: any) => {
  const { state } = useLocation();
  const filteredgame = gameList.gameList.filter((itemList:any) => {
    return itemList.name.toUpperCase().includes(state.toUpperCase())
  })
  return (
    <SearchLayout>
      <div className={styles.page}>
        검색 : {state}
        {filteredgame.map((game: any, i: number) => (
          <SearchResult key={i} game={game} />
        ))}
      </div>
    </SearchLayout>
  );
};

export default SearchPage;
