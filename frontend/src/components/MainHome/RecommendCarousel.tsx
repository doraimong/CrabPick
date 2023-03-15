import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import styles from "./RecommendCarousel.module.css";

interface Image {
  id: number;
  src: string;
}

interface MyCarouselProps {
  images: Image[];
  autoplay?: boolean;
}

const RecommendCarousel: React.FC<MyCarouselProps> = ({
  images,
  autoplay = true,
}) => {
  const prevButton = (
    <button className={styles.prevButton}>
      <LeftOutlined />
    </button>
  );
  const nextButton = (
    <button className={styles.nextButton}>
      <RightOutlined />
    </button>
  );
  return (
    <div className={styles.recommendCarousel}>
      <Carousel
        // autoplay={autoplay}
        dots={true}
        prevArrow={prevButton}
        nextArrow={nextButton}
      >
        {images.map((image: Image) => (
          <div key={image.id} className={styles.carouselContent}>
            <div>
              <img src={image.src} alt={`Slide ${image.id}`} />
            </div>
            <div>
              <h1>제목{image.id}</h1>
              <p>내용: 놀ㅇㄹㅇ러이나러ㅏㄴ이러ㅣ</p>
              <p>장르: ㄴㅇㄹㄴㅇㄹㅇㄴㄹ</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RecommendCarousel;
