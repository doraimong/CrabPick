package com.e107.backend.geChu.controller;

import com.e107.backend.geChu.dto.request.MyGameReqDto;
import com.e107.backend.geChu.dto.response.*;
import com.e107.backend.geChu.service.CommentService;
import com.e107.backend.geChu.service.GameService;
import com.e107.backend.geChu.service.SellerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/game")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class GameController {

    private final GameService gameService;
    private final CommentService commentService;
    private final SellerService sellerService;


    @GetMapping
    public ResponseEntity<List<GameListRespDto>> getGameList(Pageable pageable) {
     return new ResponseEntity<>(gameService.findAllGame(pageable), HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<List<GameListRespDto>> getGameByName(@PathVariable String name) {
        return new ResponseEntity<>(gameService.findGameByName(name), HttpStatus.OK);
    }

    @GetMapping("/top")
    public ResponseEntity<List<TopSellerRespDto>> getTopGameList() {
        return new ResponseEntity<>(sellerService.findAllTopSeller(), HttpStatus.OK);
    }

    @GetMapping("/discount")
    public ResponseEntity<List<DiscountRespDto>> getDiscountList() {
        return new ResponseEntity<>(sellerService.findAllDiscount(), HttpStatus.OK);
    }

    @GetMapping("/{gameId}")
    public ResponseEntity<GameDetailRespDto> getGame(@PathVariable Long gameId) {
        GameDetailRespDto dto = gameService.findGameByAppId(gameId);
        List<CommentRespDto> l = commentService.findCommentByGameId(gameId);
        dto.setComments(l);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/recommend/{gameId}")
    public ResponseEntity<List<GameListRespDto>> getRecommendGameList(@PathVariable Long gameId) {
        return new ResponseEntity<>(gameService.findRecommendByGame(gameId), HttpStatus.OK);
    }

    @GetMapping("/recommend/user/{userId}")
    public ResponseEntity<List<GameListRespDto>> getUserRecommendList(@PathVariable Long userId, @RequestBody List<MyGameReqDto> dto) {
        gameService.findRecommendByUser(userId, dto);
        return null;
    }

}
