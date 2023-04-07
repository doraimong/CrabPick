import React from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

import styles from "./Layout.module.css";
interface Props {
  children: JSX.Element | JSX.Element[];
}

const MyPageLayout = ({ children }: Props) => {
  return (
    <div>
      <NavBar />
      <div className={styles.bgcolor}>{children}</div>
      <Footer />
    </div>
  );
};

export default MyPageLayout;
