import React from "react";
import MainLayout from "../layout/MainLayout";
import Home from "../components/MainHome/Home";
import TopRankGame from "../components/MainHome/TopRankGame";
import RecommendGame from "../components/MainHome/RecommendGame";

import styles from "./Page.module.css";
const Main = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <Home />
        <RecommendGame />
        <TopRankGame />
      </div>
    </MainLayout>
  );
};

export default Main;
