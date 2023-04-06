package com.e107.backend.geChu.service;

import com.e107.backend.geChu.domain.entity.Friend;
import com.e107.backend.geChu.domain.entity.Game;
import com.e107.backend.geChu.domain.entity.Member;
import com.e107.backend.geChu.domain.entity.SteamLibrary;
import com.e107.backend.geChu.domain.repository.FriendRepository;
import com.e107.backend.geChu.domain.repository.GameRepository;
import com.e107.backend.geChu.domain.repository.MemberRepository;
import com.e107.backend.geChu.domain.repository.SteamLibraryRepository;
import com.e107.backend.geChu.dto.response.*;
import com.e107.backend.global.common.CommonException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;
    private final GameRepository gameRepository;
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
    public List<OwnedGameResp> findOwnedGame(Long memberId) {
        String id = "76561198086809301";
        String url = "https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=F9AE0237066E8658B587ACC489C13AF9&steamid="
                + id + "&format=json&include_played_free_games=1";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders header = new HttpHeaders();
        HttpEntity<?> entity = new HttpEntity<>(header);
        UriComponents uri = UriComponentsBuilder.fromHttpUrl(url).build();
        ResponseEntity<?> resultMap = restTemplate.exchange(uri.toString(), HttpMethod.GET, entity, String.class);
        org.json.JSONObject jo = new org.json.JSONObject(resultMap.getBody().toString());
        org.json.JSONObject jo2 = (org.json.JSONObject) jo.get("response");
        org.json.JSONArray jo3 = (org.json.JSONArray) jo2.get("games");
        for (Object j : jo3) {
            Game game = gameRepository.findByAppId(Long.parseLong(((org.json.JSONObject) j).get("appid").toString()));
            Long playtime = Long.parseLong(((org.json.JSONObject) j).get("playtime_forever").toString()) / 60;
            if (game == null) {
                throw new CommonException(2, "게임이 존재하지 않습니다.", HttpStatus.INTERNAL_SERVER_ERROR);
            }
            OwnedGameResp.of(game.getAppId(),game.getName(),playtime);
            System.out.println(Long.parseLong(((org.json.JSONObject) j).get("playtime_forever").toString()) / 60);

        }
        return null;
    }
}
