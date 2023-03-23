package com.e107.backend.geChu.dto.response;

import com.e107.backend.geChu.domain.entity.Game;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.hibernate.annotations.Comment;

import java.time.LocalDate;
import java.util.List;

@Getter
@AllArgsConstructor
@Builder
public class GameDetailRespDto {

    private Long id;
    private Long appId;
    private Long ageLimit;
    private String developer;
    private String genre;
    private String release;
    private float avgPlaytime;
    private String mood;
    private String wordCloud;
    private String steamLink;
    private String reviewLink;
    private String imgUrl;
    private String trailer_url;
    private List<CommentRespDto> comments;
    private List<GameOwnedMemberRespDto> ownedMembers;

    public static GameDetailRespDto of(Game g) {
        return GameDetailRespDto.builder()
                .id(g.getId())
                .genre(g.getGenre())
                .appId(g.getAppId())
                .release(g.getReleaseDate())
                .avgPlaytime(g.getAvgPlaytime())
                .mood(g.getMood())
                .ageLimit(g.getAgeLimit())
                .developer(g.getDevelopers())
                .reviewLink(g.getReviewLink())
                .wordCloud(g.getWordCloud())
                .trailer_url(g.getTrailerLink())
                .imgUrl(g.getImageLink())
                .build();
    }

    public void setComments(List<CommentRespDto> list) {
        this.comments = list;
    }
    public void setOwnedMembers(List<GameOwnedMemberRespDto> list) {
        this.ownedMembers = list;
    }
}
