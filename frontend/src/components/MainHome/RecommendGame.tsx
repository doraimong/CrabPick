import React from "react";

interface Game {
  name: string;
  genre: string;
  url: string;
}
const DUMMY_GAME = [
  {
    name: "추천게임1",
  },
];
const RecommendGame = () => {
  return <div>여기는 유저한테 추천해주는 컴포넌트 입니다.</div>;
};
