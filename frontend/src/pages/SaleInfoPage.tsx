import React from "react";
import MainLayout from "../layout/MainLayout";
import SaleInfo from "../components/saleInfo/SaleInfo";

import styles from "./Page.module.css";
const SaleInfoPage = () => {
  return (
    <MainLayout>
      <div className={styles.page}>
        <SaleInfo />
      </div>
    </MainLayout>
  );
};

export default SaleInfoPage;
