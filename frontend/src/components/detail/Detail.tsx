import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styles from "./Detail.module.css";
import deleteImg from "../../asset/deleteImg.png";
import axios from "axios";
// import Comment from "./Comment";
const Detail = () => {
  // console.log("detail page");
  const { gameId } = useParams();

  console.log(gameId, "게임id params에서 받아옴");

  useEffect(() => {
    axios
      // .get(`http://j8e107.p.ssafy.io:8080/api/game/${gameId}`)
      .get(`http://j8e107.p.ssafy.io:8080/api/game/1433570`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [commentList, setCommentList] = useState<
    { id: number; nickname: string; content: string }[]
  >([]);
  const [nextCommentId, setNextCommentId] = useState(1);
  const submitComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const textarea = event.currentTarget.querySelector("textarea");
    if (textarea) {
      const commentText = textarea.value.trim();
      if (commentText) {
        setCommentList((prevList) => [
          ...prevList,
          { id: nextCommentId, nickname: "Guest", content: commentText },
        ]);
        setNextCommentId(nextCommentId + 1);
        textarea.value = "";
      }
    }
  };
  const deleteComment = (id: number) => {
    setCommentList((prevList) =>
      prevList.filter((comment) => comment.id !== id)
    );
  };

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
        <div style={{ width: "100%" }}>
          <h2>코멘트</h2>
          {/* <Comment /> */}
          <div>
            <form onSubmit={submitComment}>
              <textarea
                style={{
                  width: "100%",
                  resize: "none",
                  height: "100px",
                  fontSize: "16px",
                  // padding: "10px",
                  // border: "1px solid #ccc",
                  margin: "0",
                  padding: "0",
                  borderRadius: "4px",
                }}
              ></textarea>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <input
                  type="submit"
                  value="등록"
                  style={{
                    backgroundColor: "#4caf50",
                    color: "white",
                    padding: "10px",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </form>
          </div>
        </div>
        <div id="코멘트">
          {commentList.length === 0 ? (
            <div style={{ margin: "10px", textAlign: "center" }}>
              아직 댓글이 없습니다.
            </div>
          ) : (
            <div>
              <div style={{ margin: "10px" }}>댓글 {commentList.length}개</div>
              {commentList.map((comment, index) => (
                <div
                  key={index}
                  style={{
                    // border: "1px solid black",
                    borderBottom: "1px solid #ccc",
                    margin: "10px",
                    padding: "10px",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-all",
                  }}
                >
                  <div>{comment.nickname}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <span style={{ fontSize: "30px" }}>
                        {comment.content}
                      </span>
                    </div>
                    <div style={{ alignItems: "end", display: "flex" }}>
                      {/* 삭제 */}
                      <img
                        src={deleteImg}
                        style={{
                          background: "none",
                          width: "50px",
                          cursor: "pointer",
                        }}
                        alt=""
                        onClick={() => deleteComment(comment.id)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;