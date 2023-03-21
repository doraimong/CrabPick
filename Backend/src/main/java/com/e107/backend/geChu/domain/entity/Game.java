package com.e107.backend.geChu.domain.entity;

import lombok.*;
import org.hibernate.annotations.Comment;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Game {
    @Id
    @GeneratedValue
    private Long id;

    @Comment("게임이름")
    private String name;
    @Comment("게임 아이디")
    private Long appId;

    @Comment("연령제한")
    private Long ageLimit;

    @Comment("개발사")
    private String developer;

    @Comment("장르")
    private String genre;

    @Comment("출시일")
    private LocalDate releaseDate;

    @Comment("평균 플레이시간")
    private float avgPlaytime;

    @Comment("분위기")
    private String mood;

    @Comment("워드클라우드 정보")
    private String wordCloud;

    @Comment("스팀 링크")
    private String steamLink;

    @Comment("리뷰 링크")
    private String reviewLink;

    @Comment("이미지 링크")
    private String imgUrl;
    @Comment("트레일러 링크")
    private String trailer_url;
}
