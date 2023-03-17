package com.e107.backend.geChu.service;

import com.e107.backend.geChu.domain.entity.Friend;
import com.e107.backend.geChu.domain.entity.Member;
import com.e107.backend.geChu.domain.entity.SteamLibrary;
import com.e107.backend.geChu.domain.repository.FriendRepository;
import com.e107.backend.geChu.domain.repository.MemberRepository;
import com.e107.backend.geChu.domain.repository.SteamLibraryRepository;
import com.e107.backend.geChu.dto.response.*;
import com.e107.backend.global.common.CommonException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;
    private final FriendRepository friendRepository;
    private final SteamLibraryRepository steamLibraryRepository;

    @Override
    public void saveMember(Member member) {
        memberRepository.save(member);

    }

    @Override
    public List<MemberRespDto> findAllMember() {
        List<MemberRespDto> respList = new ArrayList<>();
        List<Member> list = memberRepository.findAll();
        for (Member m : list) {
            log.info("MEMBER_INFO=========================================================");
            respList.add(MemberRespDto.of(m));
        }
        return respList;
    }

    @Override
    public MemberRespDto findMemberById(Long memberId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new CommonException(2, "Member객체가 존재하지 않습니다.", HttpStatus.INTERNAL_SERVER_ERROR));
        MemberRespDto dto = MemberRespDto.of(member);
        List<Friend> flist = friendRepository.findByMemberId(memberId);
        List<FriendRespDto> respList = new ArrayList<>();
        for (Friend f : flist) {
            log.info("FRIEND_INFO=========================================================");
            respList.add(FriendRespDto.of(f));
        }
        dto.setFriend(respList);
        return dto;
    }

    @Override
    public List<CommentRespDto> findAllReview(Long memberId) {
        return memberRepository.findAllComment(memberId);
    }

    @Override
    public List<SteamLibraryRespDto> findAllGame(Long memberId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new CommonException(2, "Member객체가 존재하지 않습니다.", HttpStatus.INTERNAL_SERVER_ERROR));
        List<SteamLibraryRespDto> list = new ArrayList<>();
        for (SteamLibrary s : member.getSteamLibraries()) {
            list.add(SteamLibraryRespDto.of(s));
        }
        return list;
    }

    @Override
    public List<GameOwnedMemberRespDto> findGameOwnerById(Long memberId, Long gameId) {
//        return friendRepository.findOwnedFriend(memberId, gameId);
        return memberRepository.findOwnedFriend(memberId, gameId);
    }
}
