import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./RecommendCarousel.module.css";

interface Props {
  images: { url: string; description: string[] }[];
}

const Carousel: React.FC<Props> = ({ images }) => {
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
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.carousel}>
            <img src={image.url} alt={`Slide ${index}`} />
            <ul>
              {image.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
