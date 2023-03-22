import React from "react";
import SaleCarousel from "./SaleCarousel";
import { useNavigate } from "react-router-dom";

import footballmanager from "../../asset/DUMMY/footballmanager.jpg";
import battlegrounds from "../../asset/DUMMY/battlegrounds.jpg";
import hogwarts from "../../asset/DUMMY/hogwarts.jpg";
import styles from "./SaleCarousel.module.css";
const SaleMain = () => {
  const navigate = useNavigate();
  const salegames = [
    {
      url: footballmanager,
      title: "Football Manager 2023",
      id: 1,
      genre: "시뮬레이션, 스포츠",
      etc: "SEGA",
      // description: ["Football Manager 2023", "시뮬레이션, 스포츠", "SEGA"],
    },
    {
      url: battlegrounds,
      title: "PUBG: BATTLEGROUNDS",
      id: 2,
      genre: "액션, 어드벤처, 무료, 대규모 멀티플레이어",
      etc: "KRAFTON, Inc.",
      // description: {
      //   title: "PUBG: BATTLEGROUNDS",
      //   genre: "액션, 어드벤처, 무료, 대규모 멀티플레이어",

      //   etc: "KRAFTON, Inc.",
      // },
    },
    {
      url: hogwarts,
      title: "호그와트 레거시",
      id: 3,
      genre: "액션, 어드벤처, RPG",
      etc: "Avalanche Software",
      // description: [
      //   "호그와트 레거시",
      //   "액션, 어드벤처, RPG",
      //   "Avalanche Software",
      // ],
    },
  ];

  const goToSaleInfo = () => {
    navigate("/sale-info");
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h2>세일 정보</h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            // cursor: "pointer",
          }}
          onClick={goToSaleInfo}
        >
          <span className={styles.spantag}>더 보러 가기</span>
        </div>
      </div>
      <div style={{ marginBottom: "100px" }}>
        <SaleCarousel salegames={salegames} />
      </div>
    </div>
  );
};

export default SaleMain;
