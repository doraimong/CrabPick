package com.e107.backend.geChu.domain.repository;

import com.e107.backend.geChu.domain.entity.Friend;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FriendRepository extends JpaRepository<Friend, Long> {
    List<Friend> findByMemberId(Long memberId);
}
