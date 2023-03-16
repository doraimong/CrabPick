import React from "react";
import styles from "./Detail.module.css";

const Detail = () => {
  return (
    <div className={styles.detail}>
      <h1>게임 제목</h1>
      <div id="게임 소개" className={styles.gameDetail}>
        <div id="게임 이미지" className={styles.gameImage}>
          <div id="큰 이미지" className={styles.bigImage}></div>
          <div id="작은 이미지들" className={styles.smallImages}>
            <div id="첫 번째 작은 이미지" className={styles.smallImage}>1</div>
            <div id="두 번째 작은 이미지" className={styles.smallImage}>2</div>
            <div id="세 번째 작은 이미지" className={styles.smallImage}>3</div>
            <div id="네 번째 작은 이미지" className={styles.smallImage}>4</div>
            <div id="다섯 번째 작은 이미지" className={styles.smallImage}>5</div>
          </div>
        </div>
        <div id="세부 정보">
          <p>장르</p>
          <p>제작사</p>
          <p>연령제한</p>
          <p>출시일</p>
          <p>평가 비율</p>
          <div id="평가 비율"></div>
          <div id="스팀 링크"></div>
          <div id="좋아요"></div>
        </div>
      </div>
      <h2>비슷한 게임들</h2>
      <div id="비슷한 게임들" className={styles.simmilarGames}>
        <div id="첫 번째 비슷한 게임" className={styles.simmilarGame}></div>
        <div id="두 번째 비슷한 게임" className={styles.simmilarGame}></div>
        <div id="세 번째 비슷한 게임" className={styles.simmilarGame}></div>
        <div id="네 번째 비슷한 게임" className={styles.simmilarGame}></div>
      </div>
      <h2>코멘트</h2>
      <div id="코멘트"></div>
    </div>
  );
};

export default Detail;
