import React from "react";
import RecommendCarousel from "./RecommendCarousel";

const RecommendGame = () => {
  const images = [
    {
      url: "https://via.placeholder.com/150",
      description: ["Title 1", "Genre 1", "Director 1"],
    },
    {
      url: "https://via.placeholder.com/150",
      description: ["Title 2", "Genre 2", "Director 2"],
    },
    {
      url: "https://via.placeholder.com/150",
      description: ["Title 3", "Genre 3", "Director 3"],
    },
    {
      url: "https://via.placeholder.com/150",
      description: ["Title 4", "Genre 4", "Director 4"],
    },
    {
      url: "https://via.placeholder.com/150",
      description: ["Title 5", "Genre 5", "Director 5"],
    },
  ];

  return (
    <div>
      <h3>홍길동 님을 위한 게임을 추천해드릴께요</h3>
      <RecommendCarousel images={images} />
      <br />
    </div>
  );
};

export default RecommendGame;
