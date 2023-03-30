package com.e107.backend.geChu.controller;

import com.e107.backend.geChu.dto.request.MemberAddReqDto;
import com.e107.backend.geChu.domain.repository.MemberRepository;
import com.e107.backend.geChu.dto.response.MemberRespDto;
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

    private final MemberServiceImpl memberServiceImpl;

    @GetMapping
    public ResponseEntity<List<MemberRespDto>> getMember() {
        List<MemberRespDto> list = memberServiceImpl.findAllMember();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> addMember(@RequestBody MemberAddReqDto dto) {
        memberServiceImpl.saveMember(dto.toEntity());
        return new ResponseEntity<>("ZZ", HttpStatus.OK);
    }
}
