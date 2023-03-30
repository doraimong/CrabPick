import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from "./RecommendCarousel.module.css";
import styles from "./SaleCarousel.module.css";

interface Props {
  salegames: {
    url: string;
    title: string;
    id: number;
    genre: string;
    etc: string;
  }[];
}

const Carousel: React.FC<Props> = ({ salegames }) => {
  const navigate = useNavigate();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
  };

  const handleClick = (id: number) => {
    navigate(`/detail/${id}`);
    window.scrollTo(0, 0);
  };
  return (
    <Slider {...settings}>
      {salegames.map((game, index) => (
        <div className={classes.centerimg} key={index}>
          <div onClick={() => handleClick(game.id)}>
            <img src={game.url} alt="" />
            {/* <h3 style={{ textAlign: "center", marginTop: "0" }}>
              {game.title}
            </h3> */}
            <div className={styles.discount_block}>
              <div className={styles.discount_pct}>-33%</div>
              <div className={styles.discount_prices}>
                <div
                  className={`${styles.discount_original_price} ${styles.cancelled_price}`}
                >
                  ￦ 41,000
                </div>
                <div className={styles.discount_final_price}>￦ 27,470</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
