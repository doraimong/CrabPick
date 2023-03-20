import React from "react";
import styles from "./Detail.module.css";

const Detail = () => {
  return (
    <div className={styles.detail}>
      <div>
        <h1>게임 제목</h1>
      </div>
      <div id="게임소개" className={styles.gameDetail}>
        <div id="게임이미지" className={styles.gameImage}>
          <div id="큰이미지" className={styles.bigImage}></div>
          <div id="작은이미지들" className={styles.smallImages}>
            <div id="첫번째작은이미지" className={styles.smallImage}>
              1
            </div>
            <div id="두번째작은이미지" className={styles.smallImage}>
              2
            </div>
            <div id="세번째작은이미지" className={styles.smallImage}>
              3
            </div>
            <div id="네번째작은이미지" className={styles.smallImage}>
              4
            </div>
            <div id="다섯번째작은이미지" className={styles.smallImage}>
              5
            </div>
          </div>
        </div>
        <div id="세부정보" className={styles.detailInfo}>
          <p>장르</p>
          <p>제작사</p>
          <p>연령제한</p>
          <p>출시일</p>
          <p>평가 비율</p>
          <div id="평가비율">
            <meter
              min="0"
              max="100"
              low={30}
              high={70}
              value="75"
              id="평가비율바"
              className={styles.rateBar}
            ></meter>
          </div>
          <div id="스팀링크"></div>
          <div id="좋아요"></div>
        </div>
      </div>
      <h2>비슷한 게임들</h2>
      <div id="비슷한게임들" className={styles.simmilarGames}>
        <div id="첫번째비슷한게임" className={styles.simmilarGame}></div>
        <div id="두번째비슷한게임" className={styles.simmilarGame}></div>
        <div id="세번째비슷한게임" className={styles.simmilarGame}></div>
        <div id="네번째비슷한게임" className={styles.simmilarGame}></div>
      </div>
      <div id="평점">
        <div id="" className={styles.evaluate}>
          <div>평점</div>
          <div className={styles.average}>평균 별점</div>
        </div>
        <div>★★★★☆</div>
      </div>
      <div id="코멘트란">
        <div>
          <h2>코멘트</h2>
        </div>
        <div id="코멘트">
          <div>첫 코멘트</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
