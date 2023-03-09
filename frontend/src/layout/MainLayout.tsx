import React from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

import styles from "./Layout.module.css";
interface Props {
  children: JSX.Element | JSX.Element[];
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className={styles.bgcolor}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
