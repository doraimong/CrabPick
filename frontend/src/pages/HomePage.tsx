import React from "react";
import MainLayout from "../layout/MainLayout";
import Home from "../components/MainHome/Home";
import TopRankGame from "../components/MainHome/TopRankGame";
import RecommendGame from "../components/MainHome/RecommendGame";
const Main = () => {
  return (
    <MainLayout>
      <Home />
      <RecommendGame />
      <TopRankGame />
    </MainLayout>
  );
};

export default Main;
