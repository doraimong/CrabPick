package com.e107.backend.geChu.dto.response;

import com.e107.backend.geChu.domain.entity.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

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

    @Builder.Default
    private List<FriendRespDto> friends = new ArrayList<>();
    @Builder.Default
    private List<BookmarkRespDto> bookmarks = new ArrayList<>();


    public static MemberRespDto of(Member m) {
        return MemberRespDto.builder()
                .id(m.getId())
                .name(m.getName())
                .email(m.getEmail())
                .steamToken(m.getSteamToken())
                .steamNickname(m.getSteamNickname())
                .bookmarks(m.getBookmarks().stream()
                        .map(bookmark -> BookmarkRespDto.builder()
                                .id(bookmark.getId())
                                .gameId(bookmark.getGame().getId())
                                .build())
                                .collect(Collectors.toList()))
                .build();
    }

    public void setFriend(List<FriendRespDto> friends) {
        this.friends = friends;
    }
}