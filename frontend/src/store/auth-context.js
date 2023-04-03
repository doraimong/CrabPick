import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  userNickname: "",
  userId: 0,
  isLoggedIn: false,
  login: (token, userSequence, userId) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = sessionStorage.getItem("token");
  const initialUserNickname = sessionStorage.getItem("userNickname");
  const initialUserId = sessionStorage.getItem("userId");

  const [token, setToken] = useState(initialToken);
  const [userNickname, setUserNickname] = useState(initialUserNickname);
  const [userId, setUserId] = useState(initialUserId);

  // 로그인 여부 (토큰 여부)
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    // setUserSequence(userSequence);
    // setUserId(userId);

    sessionStorage.setItem("token", token);
    // sessionStorage.setItem("userSequence", userSequence);
    // sessionStorage.setItem("userId", userId);
  };

  const logoutHandler = () => {
    setToken(null);
    // setUserSequence("");
    // setUserId(0);

    sessionStorage.removeItem("token");
    // sessionStorage.removeItem("userSequence");
    // sessionStorage.removeItem("userId");
  };

  const contextValue = {
    token: token,
    userNickname: userNickname,
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
