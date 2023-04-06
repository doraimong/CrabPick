import React, { useState, useEffect, useContext } from "react";
import BestSellerCarousel from "./BestSellerCarousel";
import AuthContext from "../../store/auth-context";
import axios from "axios";

const RecommandGame = () => {
  const [recommandGames, setRecommandGames] = useState([]);
  const [userGames, setUserGames] = useState<any>([]);

  const authCtx = useContext(AuthContext);

  const steamId = "76561197960434622";
  // const steamId = "authCtx.memberId";
  useEffect(() => {
    axios
      .get(`https://j8e107.p.ssafy.io/api/member/${steamId}/game`)
      .then((res: any) => {
        console.log("res.data", res.data.games);
        // res.data.games.map((game: any) => {
        //   const playData = {"id": game.appid, "playTime": game.playtime_forever};
        //   setUserGames([...userGames, playData]);
      })
      .catch((err: any) => {
        // console.log("err", err);
      });
  }, []);

  // useEffect(() => {
  //   axios({
  //     method: "post", // [요청 타입]
  //     url: `https://j8e107.p.ssafy.io/api/game/recommend/user/76561198358343891`
  //       // `https://j8e107.p.ssafy.io/api/game/recommend/user/${authCtx.userId}`
  //     data: JSON.stringify(userGames), // [요청 데이터]
  //     headers: {
  //         "Content-Type" : "application/json; charset=utf-8"
  //     }, // [요청 헤더]
  //     //responseType: "json" // [응답 데이터 : stream , json]
  // })
  // .then(function(response) {
  //     console.log("");
  //     console.log("RESPONSE : " + JSON.stringify(response.data));
  //     console.log("");
  // })
  //   axios
  //     .post(
  //       `https://j8e107.p.ssafy.io/api/game/recommend/user/76561198358343891`
  //       // `https://j8e107.p.ssafy.io/api/game/recommend/user/${authCtx.userId}`
  //     )
  //     .then((response: any) => {
  //       setRecommandGames(response.data);
  //     })
  //     .catch((error: any) => console.log(error));
  // }, [userGames  ]);
  // console.log("recommandGames", recommandGames);

  return (
    <div style={{ paddingBottom: "50px" }}>
      {/* <h2>Recommand GAMES</h2>
      <div style={{ width: "70%", margin: "0 auto" }}>
        <RecommandCarousel games={recommandGames} />
      </div> */}
    </div>
  );
};

export default RecommandGame;
