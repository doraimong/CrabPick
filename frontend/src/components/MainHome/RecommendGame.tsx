import React from "react";
import RecommendCarousel from "./RecommendCarousel";
// interface Game {
//   name: string;
//   genre: string;
//   url: string;
// }

// const DUMMY_GAME = [
//   {
//     name: "추천게임1",
//     genre: "장르1",
//     url: "url1",
//   },
//   {
//     name: "추천게임2",
//     genre: "장르2",
//     url: "url2",
//   },
//   {
//     name: "추천게임3",
//     genre: "장르3",
//     url: "url3",
//   },
// ];

const images = [
  { id: 1, src: "https://via.placeholder.com/600x400?text=First+slide" },
  { id: 2, src: "https://via.placeholder.com/600x400?text=Second+slide" },
  { id: 3, src: "https://via.placeholder.com/600x400?text=Third+slide" },
];

const RecommendGame = () => {
  return (
    <div>
      <RecommendCarousel images={images} />
    </div>
  );
};

export default RecommendGame;
