import React from "react";
import { useParams } from "react-router-dom";
import DetailLayout from "../layout/DetailLayout";
import Detail from "../components/detail/Detail";

import styles from "./Page.module.css";
const DetailPage = () => {
  return (
    <DetailLayout>
      <div className={styles.page}>
        <Detail />
      </div>
    </DetailLayout>
  );
};

export default DetailPage;
