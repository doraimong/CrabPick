package com.e107.backend.geChu.service;

import com.e107.backend.geChu.domain.entity.Member;
import com.e107.backend.geChu.dto.response.CommentRespDto;
import com.e107.backend.geChu.dto.response.GameOwnedMemberRespDto;
import com.e107.backend.geChu.dto.response.MemberRespDto;
import com.e107.backend.geChu.dto.response.SteamLibraryRespDto;

import java.util.List;

public interface MemberService {
    void saveMember(Member member);
    List<MemberRespDto> findAllMember();
    MemberRespDto findMemberById(Long memberId);
    List<CommentRespDto> findAllReview(Long memberId);
    List<SteamLibraryRespDto> findAllGame(Long memberId);
    List<GameOwnedMemberRespDto> findGameOwnerById(Long memberId, Long gameId);
}
