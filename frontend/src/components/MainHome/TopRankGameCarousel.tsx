import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import nextArrow from "../../asset/nextarrow.png";

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
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "green" }}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
const Carousel: React.FC<Props> = ({ games }) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500, //페이지 넘김 속도
    autoplay: true, // 자동 전환
    autoplaySpeed: 5000, // -5초
    cssEase: "linear",
    slidesToShow: 1, // 한 캐러셀에 보여질 컨텐츠 수
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {games.map((game, index) => (
        <div
          key={index}
          className={styles.carousel}
          onClick={() => navigate(`/detail/${game.id}`)}
        >
          <img src={game.url} alt={`Slide ${index}`} className={styles.image} />
          <div>
            <h1>{game.title}</h1>
            <h4>{game.genre}</h4>
            <h4>{game.etc}</h4>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
