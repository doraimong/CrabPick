package com.e107.backend.geChu.dto.response;

import com.e107.backend.geChu.domain.entity.Comment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@Builder
public class CommentRespDto {

    private Long gameId;
    private Long memberId;
    private String content;
    private LocalDateTime createdAt;
    private Long myScore;

    public static CommentRespDto of(Comment c) {
        return CommentRespDto.builder()
                .gameId(c.getGame().getId())
                .memberId(c.getMember().getId())
                .content(c.getContent())
                .createdAt(c.getCreatedAt())
                .build();
    }
}
