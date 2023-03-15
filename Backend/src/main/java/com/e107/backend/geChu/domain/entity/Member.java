package com.e107.backend.geChu.domain.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {
    @Id
    @GeneratedValue
    private Long id;

    @org.hibernate.annotations.Comment("유저 이름")
    private String name;

    @Email
    @org.hibernate.annotations.Comment("유저 이메일")
    private String email;

    @org.hibernate.annotations.Comment("스팀 토큰")
    private String steamToken;

    @org.hibernate.annotations.Comment("스팀 닉네임")
    private String steamNickname;

    @org.hibernate.annotations.Comment("스팀 친구목록")
    @ElementCollection(fetch = FetchType.LAZY)
    @Builder.Default
    private Set<MyFriend> friends = new HashSet<>();

    @Builder.Default
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Bookmark> bookmarks = new ArrayList<>();

    @Builder.Default
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Comment> comments = new ArrayList<>();

    @Builder.Default
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<SteamLibrary> steamLibraries = new ArrayList<>();
}


