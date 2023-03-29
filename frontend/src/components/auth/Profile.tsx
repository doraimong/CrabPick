import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import styles from "./Profile.module.css";
const Profile = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/");
  };
  return (
    <div className={styles.profile}>
      <div
        style={{
          marginTop: "3%",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>MyPage</h1>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "end",
            cursor: "pointer",
            margin: "0",
          }}
          onClick={logoutHandler}
        >
          <span>로그아웃</span>
        </div>
      </div>
      <hr />
      <div style={{ display: "flex", marginTop: "30px" }}>
        <img
          src="https://avatars.cloudflare.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"
          alt=""
          style={{ marginRight: "30px" }}
        />
        <div>
          <h2>닉네임</h2>
          <p>한 줄 소개~~~ 뭐 잡다한거~~~</p>
          <p>수정하러가기~</p>
        </div>
      </div>
      <div>
        <div style={{ marginTop: "5%" }}>
          <h2>보유중인 게임 목록</h2>
          <div>
            <p>게임목록들 나오기~~~ 캐러셀이든 뭐든</p>
          </div>
        </div>
        <div style={{ marginTop: "5%" }}>
          <h2>찜 한 게임</h2>
          <p>찜 한 게임 목록들 나오기~~~</p>
        </div>
        <div style={{ marginTop: "5%" }}>
          <h2>나의 코멘트 모아보기</h2>
          <p>리스트 형식으로 쭈루루룩~~~</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
