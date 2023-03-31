import React, { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
import styles from "./SignInForm.module.css";
import axios from "axios";
import steamlogo from "../../asset/steamlogo.png";
import loginbuttonlogo from "../../asset/loginbuttonlogo.png";
const SignInForm = () => {
  const [login, setLogin] = useState<Boolean>(false);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const loginHandler = () => {
    // event.preventDefault();

    // authCtx.login("sdfsdf334232", 412, 2);
    // navigate("/");

    axios.get("http://localhost:4000/auth/userinfo").then((response) => {
      console.log("리스폰스", response);

      // window.location.href = response.data;
      // axios.get("http://localhost:4000/auth/userinfo").then((res) => {
      //   console.log(res.data);
      //   window.location.href = res.data;
      // });
    });
  };

  return (
    <div className={styles.form}>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10%" }}
      >
        <img src={steamlogo} style={{ width: "10%", height: "auto" }} alt="" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.loginButton} onClick={loginHandler}>
          <img
            src={loginbuttonlogo}
            style={{
              width: "7%",
              height: "auto",
              marginRight: "10px",
            }}
            alt=""
          />
          {/* <span> SteamLogin</span> */}
          <h2>Steam Login</h2>
        </div>
      </div>
      <div className={styles.logindescription}>
        <span style={{ textAlign: "center" }}>
          CRABPICK에 로그인하면 추가 기능에 액세스할 수 있습니다. <br />
          <br /> 더 나은 서비스를 제공하기 위해 Steam Web API에서 귀하의 계정에
          대한 공개 정보 (steamid, 프로필 이름, 아바타 및 게임 목록
          포함)를가져옵니다. <br />
          <br />
          이 웹사이트는 Valve Corporation 또는 Steam과 관련이 없습니다. <br />
          <br />
          언제든지 계정과 모든 데이터를 삭제할 수 있습니다. 로그인한 세션을 활성
          상태로 유지하기 위해 쿠키를 사용합니다. <br />
          <br /> 로그인 버튼을 클릭하면 https://steamcommunity.com 으로 리디렉션
          되며 이미 Steam 커뮤니티에 로그인한 경우 해당 페이지에서 비밀번호를
          입력하지 않고 "로그인"을 클릭하기만 하면 됩니다. CRABPICK은 사용자
          이름이나 비밀번호를 얻지 않습니다.
        </span>
      </div>
    </div>
  );
};

export default SignInForm;
