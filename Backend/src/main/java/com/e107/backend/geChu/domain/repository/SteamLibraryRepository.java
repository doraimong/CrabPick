package com.e107.backend.geChu.domain.repository;

import com.e107.backend.geChu.domain.entity.SteamLibrary;
import com.e107.backend.geChu.dto.response.GameOwnedMemberRespDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface SteamLibraryRepository extends JpaRepository<SteamLibrary, Long> {


}
