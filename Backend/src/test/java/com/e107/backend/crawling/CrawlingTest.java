package com.e107.backend.crawling;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import java.io.IOException;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
@RequiredArgsConstructor
public class CrawlingTest {

    @Test
    public void crawling() throws IOException {
        String url = "https://www.gamemeca.com/news.php?p=1";
        Document doc = Jsoup.connect(url).get();
        Elements elem = doc.select("ul[class=\"list_news\"] li");
        for(Element e: elem){
            Elements s = e.select("strong[class=\"tit_thumb_h\"]");
            Elements s1 = e.select("strong[class=\"tit_thumb\"]");
            if(s.hasText()) {
                System.out.println(s.text());
                System.out.println(e.select("a img").attr("src"));
                System.out.println(s.select("a").attr("href"));
            }
            if(s1.hasText()) {
                System.out.println(s1.text());
                System.out.println(e.select("a img").attr("src"));
                System.out.println(s1.select("a").attr("href"));
            }
        }

    }
}
