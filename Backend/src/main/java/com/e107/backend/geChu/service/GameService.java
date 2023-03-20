package com.e107.backend.geChu.service;

import com.e107.backend.geChu.dto.response.GameDetailRespDto;
import com.e107.backend.geChu.dto.response.GameListRespDto;

import java.util.List;

public interface GameService {
    GameDetailRespDto findGameById(Long gameId);

    List<GameListRespDto> findAllGame();
}
