package com.e107.backend.global;

import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalTime;

@Component // component 스캔을 가능하게 한다.
@RequiredArgsConstructor
public class Scheduler {

    @Scheduled(fixedRate = 60000) // 메소드 호출이 종료되는 시간에서 10000ms(10초) 이후 재 호출
    public void doFixedRateJob() {
        System.out.println("fixedRate");
        System.out.println("scheduling job start : " + LocalTime.now());
        System.out.println("scheduling job end : " + LocalTime.now());

    }
}
