package com.e107.backend.geChu.dto.response;

import com.e107.backend.geChu.domain.entity.Game;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@AllArgsConstructor
@Builder
public class GameDetailRespDto {

    private Long id;
    private Long ageLimit;
    private String developer;
    private String genre;
    private LocalDate release;
    private float avgPlaytime;
    private String mood;
    private String wordCloud;
    private String steamLink;
    private String reviewLink;
    private String imgUrl;
    private String trailer_url;
    private List<CommentRespDto> comments;
    private List<GameOwnedMemberRespDto> ownedMembers;
//    private List<>

    public static GameDetailRespDto of(Game g) {
        return GameDetailRespDto.builder()
                .id(g.getId())
                .genre(g.getGenre())
                .release(g.getRelease())
                .avgPlaytime(g.getAvgPlaytime())
                .mood(g.getMood())
                .ageLimit(g.getAgeLimit())
                .developer(g.getDeveloper())
                .reviewLink(g.getReviewLink())
                .wordCloud(g.getWordCloud())
                .trailer_url(g.getTrailer_url())
                .imgUrl(g.getImgUrl())
                .build();
    }

    public void setComments(List<CommentRespDto> list) {
        this.comments = list;
    }
    public void setOwnedMembers(List<GameOwnedMemberRespDto> list) {
        this.ownedMembers = list;
    }
}
