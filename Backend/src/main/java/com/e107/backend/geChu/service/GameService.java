package com.e107.backend.geChu.service;

import com.e107.backend.geChu.dto.request.MyGameReqDto;
import com.e107.backend.geChu.dto.response.GameDetailRespDto;
import com.e107.backend.geChu.dto.response.GameListRespDto;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;

public interface GameService {

    GameDetailRespDto findGameByAppId(Long gameId);
    List<GameListRespDto> findAllGame(Pageable pageable);
    Map<Integer, List<GameListRespDto>> findGameByName(String name, Pageable pageable);
    List<GameListRespDto> findRecommendByGame(Long gameId);

    List<GameListRespDto> findRecommendByUser(Long userId,List<MyGameReqDto> dto);

    int calcPlaytimeFactor(int playtime);

    double log2(float x);
}
