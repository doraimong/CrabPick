package com.e107.backend.MapTest;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;


@RunWith(SpringRunner.class)
@SpringBootTest
@Slf4j
public class MapTest {

    @Test
    public void mapping() throws IOException {
        Map<Integer, Double> data = new HashMap<>();
        data.put(2310, 512.0811);
        data.put(548430, 302.0521);
        data.put(204100, 206.7812);
        data.put(2320, 188.3766);
        data.put(601150, 107.1798);

        Map<Integer, Map<String, Object>> playtime = new HashMap<>();
        Map<String, Object> innerMap = new HashMap<>();
        innerMap.put("data", data);
        innerMap.put("playtime", 5);
        playtime.put(1234, innerMap);

        System.out.println(playtime);
    }

}
