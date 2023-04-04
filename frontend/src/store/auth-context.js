import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  userNickname: "",
  userId: 0,
  userSequence: 0,
  avatarfull: "",
  loccountrycode: "",
  isLoggedIn: false,
  login: (token, userId, userNickname, avatarfull) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = sessionStorage.getItem("token");
  const initialUserNickname = sessionStorage.getItem("userNickname");
  const initialUserSequence = sessionStorage.getItem("userSequence");
  const initialAvatarfull = sessionStorage.getItem("avatarfull");
  // const initialLoccountrycode = sessionStorage.getItem("loccountrycode");
  const initialUserId = sessionStorage.getItem("userId");

  const [token, setToken] = useState(initialToken);
  const [userNickname, setUserNickname] = useState(initialUserNickname);
  const [userSequence, setUserSequence] = useState(initialUserSequence);
  const [avatarfull, setAvatarfull] = useState(initialAvatarfull);
  // const [loccountrycode, setLoccountrycode] = useState(initialLoccountrycode);
  const [userId, setUserId] = useState(initialUserId);

  // 로그인 여부 (토큰 여부)
  const userIsLoggedIn = !!token;
  const loginHandler = (token, userId, userNickname, avatarfull) => {
    setToken(token);
    // setUserSequence(userSequence);
    setUserId(userId);
    setUserNickname(userNickname);
    setAvatarfull(avatarfull);
    sessionStorage.setItem("token", token);
    // sessionStorage.setItem("userSequence", userSequence);
    sessionStorage.setItem("userId", userId);
    sessionStorage.setItem("userNickname", userNickname);
    sessionStorage.setItem("avatarfull", avatarfull);
  };

  const logoutHandler = () => {
    setToken(null);
    setUserSequence(0);
    setUserId(0);
    setUserNickname("");
    setAvatarfull("");

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userSequence");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userNickname");
    sessionStorage.removeItem("avatarfull");
  };

  const contextValue = {
    token: token,
    userNickname: userNickname,
    userSequence: userSequence,
    avatarfull: avatarfull,
    // loccountrycode: loccountrycode,
    userId: userId,
    isLoggedIn: userIsLoggedIn,

    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
