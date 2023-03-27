package com.e107.backend.global;

import com.e107.backend.geChu.service.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.LocalTime;

@Component // component 스캔을 가능하게 한다.
@RequiredArgsConstructor
public class Scheduler {

    private final NewsService newsService;
    @Scheduled(fixedRate = 60000 * 5) // 메소드 호출이 종료되는 시간에서 5분 이후 재 호출
    public void doFixedRateJob() throws IOException {
        System.out.println("fixedRate");
        System.out.println("news update job start : " + LocalTime.now());
        newsService.updateNews();
        System.out.println("news update job end : " + LocalTime.now());

    }
}
