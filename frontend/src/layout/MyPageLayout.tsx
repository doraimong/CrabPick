import React from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MyPageLayout = ({ children }: Props) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MyPageLayout;
