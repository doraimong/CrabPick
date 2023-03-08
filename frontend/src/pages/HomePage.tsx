import React from "react";
import MainLayout from "../layout/MainLayout";
import Home from "../components/MainHome/Home";
import TopRankGame from "../components/MainHome/TopRankGame";
const Main = () => {
  return (
    <MainLayout>
      <Home />
      <TopRankGame />
    </MainLayout>
  );
};

export default Main;
