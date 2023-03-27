import React from "react";
import DetailLayout from "../layout/DetailLayout";
import Detail from "../components/detail/Detail";

import styles from "./Page.module.css";
import SearchLayout from "../layout/SearchLayout";
import SearchResult from "../components/search/SearchResult";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const { state } = useLocation();

  return (
    <SearchLayout>
      <div className={styles.SearchPage}>
        {state.filteredGameList ? (
          state.filteredGameList.map((game: any, i: number) => (
            <SearchResult key={i} game={game} />
          ))
        ) : (
          <><br></br>검색 결과가 없습니다</>
        )}
      </div>
    </SearchLayout>
  );
};

export default SearchPage;
