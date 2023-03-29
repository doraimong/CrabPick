import React from "react";
import DetailLayout from "../layout/DetailLayout";
import Detail from "../components/detail/Detail";

import styles from "./Page.module.css";
import SearchLayout from "../layout/SearchLayout";
import SearchResult from "../components/search/SearchResult";
import { useLocation } from "react-router-dom";

import image from "../asset/ddd.png";

const SearchPage = () => {
  const { state } = useLocation();
  console.log(state.filteredGameList);
  if (state.filteredGameList.length !== 0) {
    console.log("있다");
  } else {
    console.log("없다");
  }
  return (
    <SearchLayout>
      <div className={styles.SearchPage}>
        {state.filteredGameList.length !== 0 ? (
          state.filteredGameList.map((game: any, i: number) => (
            <SearchResult key={i} game={game} />
          ))
        ) : (
          <div className={styles.NoResult}>
            <div>
              {/* <img src="https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2017/03/Deja_Vudreamstime_xl_17731626.jpg"></img> */}
              <img src={image} alt="" />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h2>검색 결과가 없습니다</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </SearchLayout>
  );
};

export default SearchPage;
