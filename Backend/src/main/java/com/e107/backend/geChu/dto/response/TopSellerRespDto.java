package com.e107.backend.geChu.dto.response;

import com.e107.backend.geChu.domain.entity.TopSeller;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class TopSellerRespDto {

    private Long gameId;
    private String name;
    private Long discountPercent;
    private Long originalPrice;
    private Long finalPrice;
    private String imageLink;

    public static TopSellerRespDto of(TopSeller t){
        return TopSellerRespDto.builder()
                .gameId(t.getGameId())
                .name(t.getName())
                .discountPercent(t.getDiscountPercent())
                .originalPrice(t.getOriginalPrice())
                .finalPrice(t.getFinalPrice())
                .imageLink(t.getImageLink())
                .build();
    }
}
