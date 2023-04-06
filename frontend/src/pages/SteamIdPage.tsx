import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../store/auth-context";

const SteamIdPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const steamid = searchParams.get("steamid");

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/auth/userinfo/${steamid}`)
      .then((response) => {
        if (response.data.data) {
          console.log(response.data.data);
          console.log(response.data.data.id);
          console.log(response.data.data._json.personaname);
          console.log(response.data.data.id);
          // authCtx.userId = response.data.data.id;
          // authCtx.userNickname = response.data.data.displayName;
          // authCtx.avatarfull = response.data.data.avatarfull;
          // console.log(authCtx.userId, authCtx.userNickname, authCtx.avatarfull);
          authCtx.login(
            response.data.data.id,
            response.data.data._json.personaname,
            response.data.data.avatarfull
          );
        } else {
          console.log("밑에는 두번째 보내는 겁니다.");
        }

        navigate("/");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <span>로그인 중입니다...{steamid}</span>
    </div>
  );
};

export default SteamIdPage;
