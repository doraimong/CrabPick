package com.e107.backend.geChu.service;

import com.e107.backend.geChu.dto.response.GameDetailRespDto;
import com.e107.backend.geChu.dto.response.GameListRespDto;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface GameService {

    GameDetailRespDto findGameByAppId(Long gameId);
    List<GameListRespDto> findAllGame(Pageable pageable);


}
