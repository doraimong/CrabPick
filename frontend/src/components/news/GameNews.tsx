import React, { Component } from "react";
import axios from "axios";
import styles from "./GameNews.module.css";

interface NewsItem {
  id: number;
  subject: string;
  url: string;
  img: string;
  date: string;
  sitename: string;
}

interface State {
  news: NewsItem[];
  visibleNews: number;
}

class GameNewsList extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      news: [
        {
          id: 1,
          subject: "게임 뉴스 1",
          url: "https://news.com/1",
          img: "https://file.thisisgame.com/upload/nboard/news/2023/03/22/s_20230322170436_6223.jpg",
          date: "2023-03-23 16:23",
          sitename: "디스이즈게임",
        },
        {
          id: 1,
          subject: "게임 뉴스 1",
          url: "https://news.com/1",
          img: "https://file.thisisgame.com/upload/nboard/news/2023/03/22/s_20230322170436_6223.jpg",
          date: "2023-03-23 16:23",
          sitename: "디스이즈게임",
        },
        {
          id: 1,
          subject: "게임 뉴스 1",
          url: "https://news.com/1",
          img: "https://file.thisisgame.com/upload/nboard/news/2023/03/22/s_20230322170436_6223.jpg",
          date: "2023-03-23 16:23",
          sitename: "디스이즈게임",
        },
        {
          id: 1,
          subject: "게임 뉴스 1",
          url: "https://news.com/1",
          img: "https://file.thisisgame.com/upload/nboard/news/2023/03/22/s_20230322170436_6223.jpg",
          date: "2023-03-23 16:23",
          sitename: "디스이즈게임",
        },
        {
          id: 1,
          subject: "게임 뉴스 1",
          url: "https://news.com/1",
          img: "https://file.thisisgame.com/upload/nboard/news/2023/03/22/s_20230322170436_6223.jpg",
          date: "2023-03-23 16:23",
          sitename: "디스이즈게임",
        },
        {
          id: 1,
          subject: "게임 뉴스 1",
          url: "https://news.com/1",
          img: "https://file.thisisgame.com/upload/nboard/news/2023/03/22/s_20230322170436_6223.jpg",
          date: "2023-03-23 16:23",
          sitename: "디스이즈게임",
        },
        {
          id: 1,
          subject: "게임 뉴스 1",
          url: "https://news.com/1",
          img: "https://file.thisisgame.com/upload/nboard/news/2023/03/22/s_20230322170436_6223.jpg",
          date: "2023-03-23 16:23",
          sitename: "디스이즈게임",
        },
        {
          id: 1,
          subject: "게임 뉴스 1",
          url: "https://news.com/1",
          img: "https://file.thisisgame.com/upload/nboard/news/2023/03/22/s_20230322170436_6223.jpg",
          date: "2023-03-23 16:23",
          sitename: "디스이즈게임",
        },
        {
          id: 1,
          subject: "게임 뉴스 1",
          url: "https://news.com/1",
          img: "https://file.thisisgame.com/upload/nboard/news/2023/03/22/s_20230322170436_6223.jpg",
          date: "2023-03-23 16:23",
          sitename: "디스이즈게임",
        },
        {
          id: 1,
          subject: "게임 뉴스 1",
          url: "https://news.com/1",
          img: "https://file.thisisgame.com/upload/nboard/news/2023/03/22/s_20230322170436_6223.jpg",
          date: "2023-03-23 16:23",
          sitename: "디스이즈게임",
        },
        {
          id: 1,
          subject: "게임 뉴스 1",
          url: "https://news.com/1",
          img: "https://file.thisisgame.com/upload/nboard/news/2023/03/22/s_20230322170436_6223.jpg",
          date: "2023-03-23 16:23",
          sitename: "디스이즈게임",
        },
        {
          id: 1,
          subject: "게임 뉴스 1",
          url: "https://news.com/1",
          img: "https://file.thisisgame.com/upload/nboard/news/2023/03/22/s_20230322170436_6223.jpg",
          date: "2023-03-23 16:23",
          sitename: "디스이즈게임",
        },
        {
          id: 1,
          subject: "게임 뉴스 1",
          url: "https://news.com/1",
          img: "https://file.thisisgame.com/upload/nboard/news/2023/03/22/s_20230322170436_6223.jpg",
          date: "2023-03-23 16:23",
          sitename: "디스이즈게임",
        },
        {
          id: 1,
          subject: "게임 뉴스 1",
          url: "https://news.com/1",
          img: "https://file.thisisgame.com/upload/nboard/news/2023/03/22/s_20230322170436_6223.jpg",
          date: "2023-03-23 16:23",
          sitename: "디스이즈게임",
        },
        {
          id: 1,
          subject: "게임 뉴스 1",
          url: "https://news.com/1",
          img: "https://file.thisisgame.com/upload/nboard/news/2023/03/22/s_20230322170436_6223.jpg",
          date: "2023-03-23 16:23",
          sitename: "디스이즈게임",
        },
        {
          id: 1,
          subject: "게임 뉴스 1",
          url: "https://news.com/1",
          img: "https://file.thisisgame.com/upload/nboard/news/2023/03/22/s_20230322170436_6223.jpg",
          date: "2023-03-23 16:23",
          sitename: "디스이즈게임",
        },
        {
          id: 1,
          subject: "게임 뉴스 1",
          url: "https://news.com/1",
          img: "https://file.thisisgame.com/upload/nboard/news/2023/03/22/s_20230322170436_6223.jpg",
          date: "2023-03-23 16:23",
          sitename: "디스이즈게임",
        },
      ],
      visibleNews: 10,
    };
  }

  // componentDidMount(): void {
  //   axios
  //     .get(`http://j8e107.p.ssafy.io:8080/api/news`)
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({ news: response.data });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  loadMore = (): void => {
    this.setState((prevState) => ({
      visibleNews: prevState.visibleNews + 10,
    }));
  };

  render() {
    const { news, visibleNews } = this.state;

    return (
      <div style={{ minHeight: "60vh" }}>
        <h3>게임 뉴스들을 한 눈에 모아보세요</h3>
        {/* <hr /> */}
        <div className={styles.newslist}>
          <ul className={styles.newsul}>
            {news.slice(0, visibleNews).map((item) => (
              <li key={item.id} className={styles.newsli}>
                <a href={item.url} target="_blank" className={styles.newsa}>
                  <div className={styles.article}>
                    <div className={styles.article_left}>
                      <img src={item.img} alt="" />
                      <div>
                        <h3>{item.subject}</h3>
                      </div>
                    </div>
                    <div className={styles.article_right}>
                      <div>{item.sitename}</div>
                      <div className={styles.date}>{item.date}</div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.morebutton}>
            {visibleNews < news.length && (
              <button onClick={this.loadMore}>더보기</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default GameNewsList;
