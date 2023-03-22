package com.e107.backend.geChu.dto.response;


import com.e107.backend.geChu.domain.entity.Game;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class GameListRespDto {
    Long id;
    String name;
    String imgUrl;
    String genre;

    public static GameListRespDto of(Game g) {
        return GameListRespDto.builder()
                .id(g.getId())
                .name(g.getName())
                .imgUrl(g.getImageLink())
                .genre(g.getGenre())
                .build();
    }
}
