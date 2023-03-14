package com.e107.backend.geChu.domain.repository;

import com.e107.backend.geChu.domain.entity.Member;
import com.e107.backend.geChu.dto.response.CommentRespDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {
    @Query(value = "select new com.e107.backend.geChu.dto.response.CommentRespDto(a.game.id, a.member.id, a.content, a.createdAt, b.myScore) " +
            "from Member m left join  m.comments a left join  m.steamLibraries b on a.game.id = b.gameId where m.id = :memberId order by a.game.id")
    List<CommentRespDto> findAllComment(@Param("memberId") Long memberId);

}