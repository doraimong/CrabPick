package com.e107.backend.geChu.domain.repository;

import com.e107.backend.geChu.domain.entity.Member;
import com.e107.backend.geChu.dto.response.CommentRespDto;
import com.e107.backend.geChu.dto.response.GameOwnedMemberRespDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {
    @Query(value = "select new com.e107.backend.geChu.dto.response.CommentRespDto(a.game.id, a.member.id, a.content, a.createdAt, b.myScore) " +
            "from Member m left join  m.comments a left join  m.steamLibraries b on a.game.id = b.gameId where m.id = :memberId order by a.game.id")
    List<CommentRespDto> findAllComment(@Param("memberId") Long memberId);

    @Query("select new com.e107.backend.geChu.dto.response.GameOwnedMemberRespDto(f.id, f.name, f.member.id, s.member.name, s.gameId)" +
            " from Member m join m.friends f join m.steamLibraries s where s.gameId = :gameId and m.id = :memberId")
    List<GameOwnedMemberRespDto> findOwnedFriend(@Param("memberId") Long memberId, @Param("gameId") Long gameId);


}