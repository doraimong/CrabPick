package com.e107.backend.geChu.domain.repository;

import com.e107.backend.geChu.domain.entity.Member;
import com.e107.backend.geChu.domain.entity.SteamLibrary;
import com.e107.backend.geChu.dto.response.CommentRespDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SteamLibraryRepository extends JpaRepository<SteamLibrary, Long> {
//    @Query(value = "select new com.e107.backend.geChu.dto.response.GameOwnedMemberRespDto(a.game.id, a.member.id, a.content, a.createdAt, b.myScore) " +
//            "from SteamLibrary a left join Member.friends b on a.member.friends.id = b.id where m.id = :memberId order by a.game.id")
//    List<CommentRespDto> findAllComment(@Param("memberId") Long memberId);
}
