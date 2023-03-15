import React from "react";
import { Carousel, Icon } from "antd";

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
  // const Arrow = { type };
  return (
    <div className={styles.recommendCarousel}>
      <Carousel
        // autoplay={autoplay}
        dots={true}
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
