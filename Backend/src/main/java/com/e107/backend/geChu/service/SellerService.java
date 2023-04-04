package com.e107.backend.geChu.service;

import com.e107.backend.geChu.dto.response.TopSellerRespDto;

import java.util.List;

public interface SellerService {
    List<TopSellerRespDto> findAllTopSeller();

    void updateTopSeller();

    void updateDiscountSeller();

    boolean isGame(Long gameId);
}
