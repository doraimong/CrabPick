import React from "react";
import MyPageLayout from "../layout/MyPageLayout";
import Profile from "../components/auth/Profile";

const MyPage = () => {
  return (
    <MyPageLayout>
      <Profile />
    </MyPageLayout>
  );
};

export default MyPage;
