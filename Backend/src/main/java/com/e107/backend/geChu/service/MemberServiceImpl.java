package com.e107.backend.geChu.service;

import com.e107.backend.geChu.domain.entity.Member;
import com.e107.backend.geChu.domain.repository.MemberRepository;
import com.e107.backend.geChu.dto.response.MemberRespDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
            log.info("{}", m);
            respList.add(CardInfoRespDto.builder()
                    .cardId(p.getId())
                    .cardNo(p.getCardNo().substring(0, 4))
                    .name(p.getName())
                    .validDate(p.getValidDate())
                    .build());


        }
        return null;
    }
}
