import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./RecommendCarousel.module.css";

interface Props {
  games: {
    url: string;
    title: string;
    id: number;
    genre: string;
    etc: string;
  }[];
}

const Carousel: React.FC<Props> = ({ games }) => {
  const navigate = useNavigate();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
  };

  const goToDetail = () => {};
  return (
    <Slider {...settings}>
      {games.map((game, index) => (
        <div className={styles.centerimg} key={index}>
          <div onClick={goToDetail}>
            <img src={game.url} alt="" />
            <h3 style={{ textAlign: "center", marginTop: "0" }}>
              {game.title}
            </h3>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
