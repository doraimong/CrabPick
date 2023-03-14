package com.e107.backend.geChu.controller;

import com.e107.backend.geChu.dto.request.MemberAddReqDto;
import com.e107.backend.geChu.dto.response.CommentRespDto;
import com.e107.backend.geChu.dto.response.MemberRespDto;
import com.e107.backend.geChu.dto.response.SteamLibraryRespDto;
import com.e107.backend.geChu.service.MemberService;
import com.e107.backend.geChu.service.MemberServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberServiceImpl;

    @GetMapping
    public ResponseEntity<List<MemberRespDto>> getAllMember() {
        List<MemberRespDto> list = memberServiceImpl.findAllMember();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/{memberId}")
    public ResponseEntity<MemberRespDto> getMember(@PathVariable Long memberId) {
        return new ResponseEntity<>(memberServiceImpl.findMemberById(memberId), HttpStatus.OK);
    }

    @GetMapping("/review/{memberId}")
    public ResponseEntity<List<CommentRespDto>> getReview(@PathVariable Long memberId) {
        return new ResponseEntity<>(memberServiceImpl.findAllReview(memberId), HttpStatus.OK);
    }

    @GetMapping("/game/{memberId}")
    public ResponseEntity<List<SteamLibraryRespDto>> getGame(@PathVariable Long memberId) {
        return new ResponseEntity<>(memberServiceImpl.findAllGame(memberId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> addMember(@RequestBody MemberAddReqDto dto) {
        memberServiceImpl.saveMember(dto.toEntity());
        return new ResponseEntity<>("ZZ", HttpStatus.OK);
    }
}
