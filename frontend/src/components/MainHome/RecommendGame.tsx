import React from "react";

interface Game {
  name: string;
  genre: string;
  url: string;
}
const DUMMY_GAME = [
  {
    name: "추천게임1",
    genre: "장르1",
    url: "url1",
  },
  {
    name: "추천게임2",
    genre: "장르2",
    url: "url2",
  },
  {
    name: "추천게임3",
    genre: "장르3",
    url: "url3",
  },
];
const RecommendGame = () => {
  return (
    <div
      style={{
        border: "5px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h1>유저한테 추천해줄 게임 나타내는 컴포넌트</h1>
      {DUMMY_GAME.map((item: Game, index: number) => (
        <div key={index}>
          <h1>이름: {item.name}</h1>
          <p>장르: {item.genre}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendGame;
