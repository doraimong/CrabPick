package com.e107.backend.geChu.domain.entity;

import com.e107.backend.geChu.memberJwt.entity.Authority;
import lombok.*;
import org.hibernate.annotations.Comment;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.ArrayList;
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

//    @Comment("유저 이름")
//    private String name;
//
//    @Email
//    @Comment("유저 이메일")
//    private String email;
//
//    @Comment("스팀 토큰")
//    private String steamToken;

///////////////////////////////
    //!!personname 사용
    @Column(name = "username", length = 50, unique = true)
    private String username;

    //!!key 사용
    @Column(name = "password", length = 100)
    private String password;

    @Column(name = "activated")
    private boolean activated;

    @ManyToMany
    @JoinTable(
            name = "user_authority",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "authority_name")})
    private Set<Authority> authorities;
////////////////////////////////
    @Comment("스팀 닉네임")
    private String steamNickname;

    @Comment("스팀 친구목록")
    @ElementCollection(fetch = FetchType.LAZY)
    private List<String> friends;

    @Builder.Default
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Bookmark> bookmarks = new ArrayList<>();

    @Builder.Default
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<GameComment> gameComments = new ArrayList<>();

    @Builder.Default
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<SteamLibrary> steamLibraries = new ArrayList<>();

    @Builder.Default
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Rating> ratings = new ArrayList<>();


}
