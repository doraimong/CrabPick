package com.e107.backend.geChu.memberJwt.repository;

import com.e107.backend.geChu.memberJwt.entity.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
