import React from "react";
import MainLayout from "../layout/MainLayout";
import TopRankGame from "../components/MainHome/TopRankGame";
import RecommendGame from "../components/MainHome/RecommendGame";
import SaleMain from "../components/MainHome/SaleMain";

import styles from "./Page.module.css";
const Main = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <RecommendGame />
        <TopRankGame />
        <SaleMain />
      </div>
    </MainLayout>
  );
};

export default Main;
