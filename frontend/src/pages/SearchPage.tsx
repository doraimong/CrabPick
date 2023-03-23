import React from "react";
import DetailLayout from "../layout/DetailLayout";
import Detail from "../components/detail/Detail";

import styles from "./Page.module.css";
import SearchLayout from "../layout/SearchLayout";
import SearchResult from "../components/search/SearchResult";
import { useLocation } from "react-router-dom";
const SearchPage = () => {
    const { state } = useLocation()
  return (
    <SearchLayout>
      <div className={styles.page}>
        검색 : {state}
        <SearchResult />
      </div>
    </SearchLayout>
  );
};

export default SearchPage;