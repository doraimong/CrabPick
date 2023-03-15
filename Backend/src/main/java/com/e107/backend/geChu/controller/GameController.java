package com.e107.backend.geChu.controller;

import com.e107.backend.geChu.dto.response.CommentRespDto;
import com.e107.backend.geChu.dto.response.GameDetailRespDto;
import com.e107.backend.geChu.dto.response.GameOwnedMemberRespDto;
import com.e107.backend.geChu.service.CommentService;
import com.e107.backend.geChu.service.GameService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/game")
@RequiredArgsConstructor
public class GameController {

    private final GameService gameService;
    private final CommentService commentService;

    @GetMapping("/{gameId}")
    public ResponseEntity<GameDetailRespDto> getGame(@PathVariable Long gameId) {
        GameDetailRespDto dto = gameService.findGameById(gameId);
        List<CommentRespDto> l = commentService.findCommentByGameId(gameId);
        dto.setComments(l);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

}
