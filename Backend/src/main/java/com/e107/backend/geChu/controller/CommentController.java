package com.e107.backend.geChu.controller;

import com.e107.backend.geChu.dto.request.CommentReqDto;
import com.e107.backend.geChu.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/comment")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CommentController {

    private final CommentService commentService;

    @PostMapping("/{memberId}/{gameId}")
    public ResponseEntity<String> addComment(@PathVariable Long memberId, @PathVariable Long gameId, @RequestBody CommentReqDto dto) {
        commentService.saveComment(memberId, gameId, dto.getContent());
        return new ResponseEntity<>("OK", HttpStatus.OK);
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<String> deleteComment(@PathVariable Long commentId) {
        commentService.deleteComment(commentId);
        return new ResponseEntity<>("OK", HttpStatus.OK);
    }


}
