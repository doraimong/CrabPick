package com.e107.backend.geChu.dto.request;

import com.e107.backend.geChu.domain.entity.Member;
import com.e107.backend.geChu.domain.entity.MyFriend;
import lombok.*;

import java.util.HashSet;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class MemberAddReqDto {

    private String name;
    private String email;
    private String steamToken;
    private String steamNickname;
    private HashSet<MyFriend> friends;

    public Member toEntity() {
        return Member.builder()
                .name(this.name)
                .email(this.email)
                .steamToken(this.steamToken)
                .steamNickname(this.steamNickname)
                .friends(this.friends).build();
    }
}
