package com.e107.backend.geChu.service;

import com.e107.backend.geChu.domain.entity.Game;
import com.e107.backend.geChu.domain.repository.GameRepository;
import com.e107.backend.geChu.dto.response.GameDetailRespDto;
import com.e107.backend.geChu.dto.response.GameListRespDto;
import com.e107.backend.global.common.CommonException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class GameServiceImpl implements GameService {
    private final GameRepository gameRepository;

    @Override
    public GameDetailRespDto findGameByAppId(Long gameId) {
        Game game = gameRepository.findByAppId(gameId);
        if (game == null) {
            throw new CommonException(2, "Game객체가 존재하지 않습니다.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
        return GameDetailRespDto.of(game);
    }


    @Override
    public List<GameListRespDto> findAllGame(Pageable pageable) {
        return gameRepository.findAll(pageable).stream().map(GameListRespDto::of).collect(Collectors.toList());
    }
}



