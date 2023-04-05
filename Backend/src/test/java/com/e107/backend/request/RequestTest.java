package com.e107.backend.request;

import com.e107.backend.geChu.domain.entity.TopSeller;
import com.e107.backend.geChu.domain.repository.TopSellerRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.Comment;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.transaction.Transactional;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class RequestTest {

    @Autowired
    private TopSellerRepository topSellerRepository;
    @Test
    @Transactional
    @Rollback(false)
    public void getSteamApi() throws ParseException {
        String url = "https://store.steampowered.com/api/featuredcategories/?l=koreana";
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders header = new HttpHeaders();
        HttpEntity<?> entity = new HttpEntity<>(header);

        UriComponents uri = UriComponentsBuilder.fromHttpUrl(url).build();
        ResponseEntity<?> resultMap = restTemplate.exchange(uri.toString(), HttpMethod.GET, entity, String.class);
        org.json.JSONObject jo = new org.json.JSONObject(resultMap.getBody().toString());
        org.json.JSONObject jo2 = (org.json.JSONObject)jo.get("top_sellers");
        org.json.JSONArray jo3 = (org.json.JSONArray)jo2.get("items");
        topSellerRepository.deleteAllInBatch();
        for (Object j:jo3) {
            System.out.println(((org.json.JSONObject) j).get("name"));
            System.out.println(((org.json.JSONObject) j).get("id"));
            System.out.println(((org.json.JSONObject) j).get("discounted"));
            System.out.println(((org.json.JSONObject) j).get("discount_percent"));
            System.out.println(((org.json.JSONObject) j).get("original_price"));
            System.out.println(((org.json.JSONObject) j).get("final_price"));
            System.out.println(((org.json.JSONObject) j).get("currency"));
            System.out.println(((org.json.JSONObject) j).get("large_capsule_image"));
            System.out.println(((org.json.JSONObject) j).get("small_capsule_image"));
            System.out.println(((org.json.JSONObject) j).get("header_image"));
            if(topSellerRepository.existsByGameId(Long.parseLong(((org.json.JSONObject) j).get("id").toString()))){
                continue;
            }
            topSellerRepository.save(TopSeller.builder()
                    .gameId(Long.parseLong(((org.json.JSONObject) j).get("id").toString()))
                    .name(((org.json.JSONObject) j).get("name").toString())
                    .discountPercent(Long.parseLong(((org.json.JSONObject) j).get("discount_percent").toString()))
                    .originalPrice(Long.parseLong(((org.json.JSONObject) j).get("original_price").toString()) / 100)
                    .finalPrice(Long.parseLong(((org.json.JSONObject) j).get("final_price").toString()) / 100)
                    .imageLink(((org.json.JSONObject) j).get("large_capsule_image").toString())
                    .build());
        }
    }

    @Test
    @Transactional
    @Rollback(false)
    public void getUpdate() throws ParseException {
        String url = "https://store.steampowered.com/api/featuredcategories/?l=koreana";
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders header = new HttpHeaders();
        HttpEntity<?> entity = new HttpEntity<>(header);

        UriComponents uri = UriComponentsBuilder.fromHttpUrl(url).build();
        ResponseEntity<?> resultMap = restTemplate.exchange(uri.toString(), HttpMethod.GET, entity, String.class);
        org.json.JSONObject jo = new org.json.JSONObject(resultMap.getBody().toString());
        org.json.JSONObject jo2 = (org.json.JSONObject) jo.get("specials");
        org.json.JSONArray jo3 = (org.json.JSONArray) jo2.get("items");
        topSellerRepository.deleteAllInBatch();
        for (Object j : jo3) {
            System.out.println(((org.json.JSONObject) j).get("name"));
            System.out.println(((org.json.JSONObject) j).get("id"));
            System.out.println(((org.json.JSONObject) j).get("discounted"));
            System.out.println(((org.json.JSONObject) j).get("discount_percent"));
            System.out.println(((org.json.JSONObject) j).get("original_price"));
            System.out.println(((org.json.JSONObject) j).get("final_price"));
            System.out.println(((org.json.JSONObject) j).get("currency"));
            System.out.println(((org.json.JSONObject) j).get("large_capsule_image"));
            System.out.println(((org.json.JSONObject) j).get("small_capsule_image"));
            System.out.println(((org.json.JSONObject) j).get("header_image"));
        }
    }

    @Test
    public void getGameApp() throws ParseException {
        String url = "https://store.steampowered.com/api/appdetails?appids=1983089";
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders header = new HttpHeaders();
        HttpEntity<?> entity = new HttpEntity<>(header);

        UriComponents uri = UriComponentsBuilder.fromHttpUrl(url).build();
        ResponseEntity<?> resultMap = restTemplate.exchange(uri.toString(), HttpMethod.GET, entity, String.class);
        org.json.JSONObject jo = new org.json.JSONObject(resultMap.getBody().toString());
        org.json.JSONObject jo2 = (org.json.JSONObject) jo.get("1983089");
        org.json.JSONObject jo3 = (org.json.JSONObject) jo2.get("data");
        String jo4 = jo3.get("type").toString();
        System.out.println(jo4);
    }
}
