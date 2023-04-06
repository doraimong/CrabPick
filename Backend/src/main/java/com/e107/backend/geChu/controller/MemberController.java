package com.e107.backend.geChu.controller;

import com.e107.backend.geChu.domain.entity.Friend;
import com.e107.backend.geChu.dto.request.MemberAddReqDto;
import com.e107.backend.geChu.dto.response.*;
import com.e107.backend.geChu.service.CommentService;
import com.e107.backend.geChu.service.GameService;
import com.e107.backend.geChu.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MemberController {

    private final MemberService memberService;
    private final GameService gameService;
    private final CommentService commentService;

    // ## 사용 안함
    @GetMapping
    public ResponseEntity<List<MemberRespDto>> getAllMember() {
        List<MemberRespDto> list = memberService.findAllMember();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

//## userservice에서 옮기기
    @GetMapping("/{memberId}")
    public ResponseEntity<MemberRespDto> getMember(@PathVariable Long memberId) {
        MemberRespDto dto = memberService.findMemberById(memberId);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }
    
    @GetMapping("/comment/{memberId}")
    public ResponseEntity<List<CommentRespDto>> getComment(@PathVariable Long memberId) {
        List<CommentRespDto> dto = commentService.findCommentByMemberId(memberId);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/{memberId}/review")
    public ResponseEntity<List<CommentRespDto>> getReview(@PathVariable Long memberId) {
        return new ResponseEntity<>(memberService.findAllReview(memberId), HttpStatus.OK);
    }

    @GetMapping("/{memberId}/game")
    public ResponseEntity<List<OwnedGameResp>> getOwnedGame(@PathVariable Long memberId) {
        return new ResponseEntity<>(memberService.findOwnedGame(memberId), HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity<String> addMember(@RequestBody MemberAddReqDto dto) {
        memberService.saveMember(dto.toEntity());
        return new ResponseEntity<>("ZZ", HttpStatus.OK);
    }
}
