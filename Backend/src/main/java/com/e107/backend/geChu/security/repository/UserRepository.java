package com.e107.backend.geChu.security.repository;

import com.e107.backend.geChu.security.entity.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
   //!! @EntityGraph은 쿼리가 수행 될때 Lazy조회가 아닌 Eager 조회로 authorities정보를 같이 가져오게 된다.
   @EntityGraph(attributePaths = "authorities")
   Optional<User> findOneWithAuthoritiesByUsername(String username);
}
