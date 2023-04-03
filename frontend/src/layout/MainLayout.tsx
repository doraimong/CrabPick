import React from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

import { useContext } from "react";
import AuthContext from "../store/auth-context";
//내가 추가한 부분
import axios from "axios";
import { useEffect } from "react";
//
import styles from "./Layout.module.css";
import { log } from "console";
interface Props {
  children: JSX.Element | JSX.Element[];
}

const MainLayout = ({ children }: Props) => {
  const authCtx = useContext(AuthContext);
  // useEffect(() => {
  //로그인 했거나 or 로그인 안하고 단순 메인 화면 접속시 -> node.js 에 userinfo 데이터 요청 -> 데이터 있으면 바로 spring에 요청 보내기
  axios.get("http://localhost:4000/auth/userinfo").then((response) => {
    console.log("메인 화면 응답" + JSON.stringify(response.data)); // 반환 데이터 전부 출력해보기
    console.log("디테일 정보1 : " + response.data._json.steamid); // steamid : ex >76561199486116083
    console.log("디테일 정보2 : " + response.data.displayName); // steam displayname ex> pjh6947
    console.log("디테일 정보3 : " + response.data.key); // steam key ex>21680047922CC0CA013B6EFEC720919A

    axios
      .post("http://localhost:8080/api/authenticate", {
        username: response.data._json.steamid,
        password: response.data._json.primaryclanid,
      })
      .then((res) => {
        // console.log(res.data);
        // authCtx.token = res.data.token;
        // authCtx.userId = response.data._json.steamid;
        authCtx.login(
          res.data.token,
          response.data._json.steamid,
          response.data.displayName,
          response.data._json.avatarfull
        );
        // authCtx.userSequence = res.data.user_id;
        // authCtx.userId = response.data._json.steamid;
        // authCtx.userNickname = response.data.displayName;
        // authCtx.avatarfull = response.data._json.avatarfull;
      })
      .catch((err) => {
        // 처음 방문한 손님이니까 우리 유저 db에 없음
        // 모달 띄워서 확인 누르면 회원가입 진행하도록
        // 모달 컴포넌트 만들기
        console.log(err);
      });
  });
  // }, []);
  return (
    <div className={styles.bgcolor}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
