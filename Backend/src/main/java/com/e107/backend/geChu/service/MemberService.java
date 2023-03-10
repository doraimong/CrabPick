package com.e107.backend.geChu.service;

import com.e107.backend.geChu.domain.entity.Member;
import com.e107.backend.geChu.dto.response.MemberRespDto;

import java.util.List;

public interface MemberService {
    void saveMember(Member member);
    List<MemberRespDto> findAllMember();
}
