import React, { useEffect, useState } from "react";

import styles from "./Page.module.css";
import { useLocation } from "react-router-dom";

import image from "../asset/ddd.png";
import axios from "axios";

const OwnedGame = () => {
  return <h3 className={styles.SearchInput}>검색 </h3>;
};

export default OwnedGame;
