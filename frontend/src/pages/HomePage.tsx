import React from "react";
import MainLayout from "../layout/MainLayout";
import TopRankGame from "../components/MainHome/TopRankGame";
import RecommendGame from "../components/MainHome/RecommendGame";

import styles from "./Page.module.css";
const Main = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <RecommendGame />
        <TopRankGame />
      </div>
    </MainLayout>
  );
};

export default Main;
