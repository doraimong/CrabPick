package com.e107.backend.geChu.memberJwt.controller.dto;

import com.e107.backend.geChu.memberJwt.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberResponseDto {
    private String email;

    //!! of ->
    public static MemberResponseDto of(Member member) {
        return new MemberResponseDto(member.getEmail());
    }
}
