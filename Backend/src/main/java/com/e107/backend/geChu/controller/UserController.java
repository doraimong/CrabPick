package com.e107.backend.geChu.controller;

import com.e107.backend.geChu.dto.request.AddMemberReqDto;
import com.e107.backend.geChu.domain.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final MemberRepository memberRepository;

    @GetMapping
    public ResponseEntity<String> getMember() {

        return new ResponseEntity<>("OK", HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> addMember(@RequestBody AddMemberReqDto dto) {
        memberRepository.save(dto.toEntity());
        return new ResponseEntity<>("ZZ", HttpStatus.OK);
    }
}
