import React, { useState } from "react";
import styles from "./SignInForm.module.css";
const SignInForm = () => {
  const [login, setLogin] = useState<Boolean>(false);

  const loginHandler = () => {};

  return (
    <div className={styles.form}>
      <h1>로그인 폼입니다.</h1>
      <button onClick={loginHandler}>로그인</button>
    </div>
  );
};

export default SignInForm;