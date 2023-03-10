package com.e107.backend.geChu.dto.response;

import com.e107.backend.geChu.domain.entity.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class MemberRespDto {

    private Long id;
    private String name;
    private String email;
    private String steamToken;
    private String steamNickname;
    private List<String> friends;
    private List<BookmarkRespDto> bookmarks = new ArrayList<>();
    private List<SteamLibraryRespDto> steamLibraries = new ArrayList<>();


    public static MemberRespDto of(Member m) {
        return MemberRespDto.builder()
                .id(m.getId())
                .name(m.getName())
                .email(m.getEmail())
                .steamToken(m.getSteamToken())
                .steamNickname(m.getSteamNickname())
                .friends(m.getFriends())
                .build();

    }
}
