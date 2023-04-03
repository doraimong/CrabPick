package com.e107.backend.geChu.security.service;

import com.e107.backend.geChu.security.dto.UserDto;
import com.e107.backend.geChu.security.entity.Authority;
import com.e107.backend.geChu.security.entity.User;
import com.e107.backend.geChu.security.exception.DuplicateMemberException;
import com.e107.backend.geChu.security.exception.NotFoundMemberException;
import com.e107.backend.geChu.security.repository.UserRepository;
import com.e107.backend.geChu.security.util.SecurityUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
//!! 회원가입, 유저정보 조회 등의 서비스를 담당
@Service
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    //!! 주입 받음
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    //!! 회원가입
    @Transactional
    public UserDto signup(UserDto userDto) {
        logger.debug("-signup(UserDto userDto)");
        if (userRepository.findOneWithAuthoritiesByUsername(userDto.getUsername()).orElse(null) != null) {
            throw new DuplicateMemberException("이미 가입되어 있는 유저입니다.");
        }

        Authority authority = Authority.builder()
                .authorityName("ROLE_USER")
                .build();

        User user = User.builder()
                .username(userDto.getUsername())
                .password(passwordEncoder.encode(userDto.getPassword()))
                .nickname(userDto.getNickname())
                .authorities(Collections.singleton(authority))
                .activated(true)
                .build();

        return UserDto.from(userRepository.save(user));
    }


    ////////////////////////////권한 정보를 가져오는 2개 메소드[두 메소드의 허용 권한 다르게 함]////////////////////////////
    //!! username을 받아서 해당 객체, 권한 정보를 가져옴
    @Transactional(readOnly = true)
    public UserDto getUserWithAuthorities(String username) {
        logger.debug("-getUserWithAuthorities(String username)");
        return UserDto.from(userRepository.findOneWithAuthoritiesByUsername(username).orElse(null));
    }

    //!! 현재 Security Context에 저장되어 있는 username에 해당하는 유저, 권한 정보를 가져옴
    @Transactional(readOnly = true)
    public UserDto getMyUserWithAuthorities() {
        logger.debug("-getMyUserWithAuthorities()");
        return UserDto.from(
                SecurityUtil.getCurrentUsername()
                        .flatMap(userRepository::findOneWithAuthoritiesByUsername)
                        .orElseThrow(() -> new NotFoundMemberException("Member not found"))
        );
    }
}
