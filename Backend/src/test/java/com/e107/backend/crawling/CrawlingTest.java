package com.e107.backend.crawling;

import com.e107.backend.geChu.domain.entity.News;
import com.e107.backend.geChu.domain.repository.NewsRepository;
import com.e107.backend.geChu.service.NewsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.io.IOException;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class CrawlingTest {
    @Autowired
    private NewsRepository newsRepository;
    @Test
    @Transactional
    @Rollback(false)
    public void crawling() throws IOException {
        String url = "https://www.gamemeca.com/news.php?p=1";
        Document doc = Jsoup.connect(url).get();
        Elements elem = doc.select("ul[class=\"list_news\"] li");
        int i = 0;
        for(Element e: elem){

            Elements s = e.select("strong[class=\"tit_thumb_h\"]");
            Elements s1 = e.select("strong[class=\"tit_thumb\"]");
            if(s.hasText()) {
                News news = newsRepository.findById(i + 1L).orElseThrow();
                String subject = s.text();
                System.out.println(subject);
                String imageLink = e.select("a img").attr("src");
                System.out.println(imageLink);
                String link = "https://www.gamemeca.com" + s.select("a").attr("href");
                System.out.println(link);
                String date = e.select("div[class=\"day_news\"]").text();
                System.out.println(date);
                news.setAttribute(subject, link, imageLink, date);
            }
            if(s1.hasText()) {
                News news = newsRepository.findById(i + 1L).orElseThrow();
                String subject = s1.text();
                System.out.println(subject);
                String imageLink = e.select("a img").attr("src");
                System.out.println(imageLink);
                String link = "https://www.gamemeca.com" + s1.select("a").attr("href");
                System.out.println(link);
                String date = e.select("div[class=\"day_news\"]").text();
                System.out.println(date);
                news.setAttribute(subject, link, imageLink, date);
            }
            i++;
        }

    }
}
