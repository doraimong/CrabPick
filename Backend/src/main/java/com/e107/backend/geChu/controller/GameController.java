package com.e107.backend.geChu.controller;

import com.e107.backend.geChu.dto.response.*;
import com.e107.backend.geChu.service.CommentService;
import com.e107.backend.geChu.service.GameService;
import com.e107.backend.geChu.service.TopSellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/game")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class GameController {

    private final GameService gameService;
    private final CommentService commentService;
    private final TopSellerService topSellerService;


    @GetMapping
    public ResponseEntity<List<GameListRespDto>> getGameList(Pageable pageable) {
     return new ResponseEntity<>(gameService.findAllGame(pageable), HttpStatus.OK);

    }

    @GetMapping("/top")
    public ResponseEntity<List<TopSellerRespDto>> getTopGameList() {
        return new ResponseEntity<>(topSellerService.findAllTopSeller(), HttpStatus.OK);
    }

    @GetMapping("/{gameId}")
    public ResponseEntity<GameDetailRespDto> getGame(@PathVariable Long gameId) {
        GameDetailRespDto dto = gameService.findGameByAppId(gameId);
        List<CommentRespDto> l = commentService.findCommentByGameId(gameId);
        dto.setComments(l);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

}
