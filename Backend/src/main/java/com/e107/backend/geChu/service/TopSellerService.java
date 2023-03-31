package com.e107.backend.geChu.service;

import com.e107.backend.geChu.dto.response.TopSellerRespDto;

import java.util.List;

public interface TopSellerService {
    List<TopSellerRespDto> findAllTopSeller();

    void updateTopSeller();

    boolean isGame(Long gameId);
}
