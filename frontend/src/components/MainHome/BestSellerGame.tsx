import React, { useState, useEffect } from "react";
import axios from "axios";
import BestSellerCarousel from "./BestSellerCarousel";

import footballmanager from "../../asset/DUMMY/footballmanager.jpg";
import battlegrounds from "../../asset/DUMMY/battlegrounds.jpg";
import hogwarts from "../../asset/DUMMY/hogwarts.jpg";

const BestSellerGame = () => {
  const [bestSellerGames, setBestSellerGames] = useState([]);

  useEffect(() => {
    fetch("http://j8e107.p.ssafy.io:8080/api/game/top")
      .then((response) => response.json())
      .then((data) => {
        setBestSellerGames(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ paddingBottom: "50px" }}>
      <h2>Best Seller GAMES</h2>
      <div style={{ width: "70%", margin: "0 auto" }}>
        <BestSellerCarousel games={bestSellerGames} />
      </div>
    </div>
  );
};

export default BestSellerGame;
