import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import logo from "../../asset/logo.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.div}>
        <div className={styles.leftDiv}>
          <div className={styles.footerLink}>
            <Link to="/">메인페이지</Link>
            <hr />
            <Link to="/">게임 검색</Link>
            <hr />
            <Link to="/">마이페이지</Link>
          </div>
          <hr />
          <div>
            <h3 className={styles.adminHtag}>개발자들</h3>
            <div className={styles.admin}>
              <p>강동훈: 포지션</p>
              <hr />
              <p>박종현: 포지션</p>
              <hr />
              <p>배우찬: 포지션</p>
              <hr />
              <p>이승한: 포지션</p>
              <hr />
              <p>조용재: 포지션</p>
              <hr />
              <p>최홍준: 포지션</p>
            </div>
          </div>
        </div>
        <div className={styles.rightDiv}>
          <img src={logo} alt="" className={styles.logoImg} />
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright 2023. CrabPICK All right reserved.
      </div>
    </div>
  );
};

export default Footer;
