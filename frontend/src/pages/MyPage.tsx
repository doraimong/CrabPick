import React from "react";
import MyPageLayout from "../layout/MyPageLayout";
import Profile from "../components/auth/Profile";
import styles from "./Page.module.css";

const MyPage = () => {
  return (
    <MyPageLayout>
      <div className={styles.page}>
        <Profile />
      </div>
    </MyPageLayout>
  );
};

export default MyPage;
