import React from "react";
import SaleCarousel from "./SaleCarousel";

import footballmanager from "../../asset/DUMMY/footballmanager.jpg";
import battlegrounds from "../../asset/DUMMY/battlegrounds.jpg";
import hogwarts from "../../asset/DUMMY/hogwarts.jpg";
const SaleMain = () => {
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
  return (
    <div>
      <h2>세일 정보</h2>
      <div>
        <SaleCarousel salegames={salegames} />
      </div>
    </div>
  );
};

export default SaleMain;
