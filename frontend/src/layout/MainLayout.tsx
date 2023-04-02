import React from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
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
  useEffect(() => {
    //로그인 했거나 or 로그인 안하고 단순 메인 화면 접속시 -> node.js 에 userinfo 데이터 요청 -> 데이터 있으면 바로 spring에 요청 보내기
    axios
      .get("http://localhost:4000/auth/userinfo")
      .then((response) => {
        console.log("메인 화면 응답" + JSON.stringify(response.data)); // 반환 데이터 전부 출력해보기
        console.log("디테일 정보1 : " + response.data._json.steamid); // steamid : ex >76561199486116083
        console.log("디테일 정보2 : " + response.data.displayName); // steam displayname ex> pjh6947
        console.log("디테일 정보3 : " + response.data.key); // steam key ex>21680047922CC0CA013B6EFEC720919A

        //우리 사이트 회원이 로그인 요청 spring에 매번 보내기(혹시 리덕스 같은거 쓰면 리덕스 내 user 정보가 있으면 안보내는 방식으로 만들어도 될듯)
        //그 후 then or catch를 통해 로그인 성공 or 실패에 따른 분기
        // 1. 로그인 성공 -> 메인 화면으로 이동
        axios
          .post("http://localhost:8080/api/authenticate", {
            username: response.data.key,
            password: response.data._json.steamid,
          })
          .then((res) => {
            console.log("로그인 성공", res.data);
          })
          .catch((err) => {
            console.log("로그인 실패", err);
            // 논의를 해봐야할듯?
            // 2. 로그인 실패 -> 회원이 아니니 가입하겠냐는 모달? 띄우고 버튼 클릭해서 spring에서 단번에 회원가입 처리 후 메인 화면으로 이동

            //....

            // 2-3. 다시 로그인 시도
          });

        // 회원 가입 시작
        //- 회원 가입 준비물 userDto
        // let userDto = {
        //   username: response.data.key,
        //   password: response.data._json.steamid,
        //   nickname: "hihi",
        // };
        // 회원 가입 요청
        // axios
        //   .post("http://localhost:8080/api/signup", userDto)
        //   .then((res) => {
        //     console.log("회원가입 성공", res.data);
        //   })
        //   .catch((err) => {
        //     console.log("회원가입 실패", err);
        //   });
        // 회원 가입 끝
      })
      .catch((error) => {
        console.log("메인 화면 오류" + error);
      });
  }, []);
  return (
    <div className={styles.bgcolor}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
