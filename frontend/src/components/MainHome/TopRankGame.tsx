import React from "react";

interface Game {
  id: number;
  name: string;
  genre: string;
  img: string;
}

const DUMMY_TOPGAME: Game[] = [
  {
    id: 1,
    name: "게임1",
    genre: "공포",
    img: "url 들어가기",
  },
  {
    id: 2,
    name: "게임2",
    genre: "SF",
    img: "url 들어가기",
  },
  {
    id: 3,
    name: "게임3",
    genre: "sdfdf",
    img: "url 들어가기",
  },
  {
    id: 4,
    name: "게임4",
    genre: "sdfsdf",
    img: "url 들어가기",
  },
];
const TopRankGame = () => {
  return (
    <div style={{ border: "5px solid black", padding: "10px" }}>
      <h1>이 컴포넌트는 가장인기있는 게임 나타내기</h1>
      {DUMMY_TOPGAME.map((item: Game, index: number) => (
        <div key={index}>
          <h3>이름: {item.name}</h3>
          <p>장르: {item.genre}</p>
          {/* <hr /> */}
        </div>
      ))}
    </div>
  );
};

export default TopRankGame;
