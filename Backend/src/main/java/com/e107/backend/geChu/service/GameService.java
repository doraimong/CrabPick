package com.e107.backend.geChu.service;

import com.e107.backend.geChu.dto.response.GameDetailRespDto;

public interface GameService {
    GameDetailRespDto findGameById(Long gameId);
}
