package com.e107.backend.geChu.security.jwt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
// !! 유효한 자격증명을 제공하지 않고 접근하려 할떄 401 unauthorized에러를 리턴하는 클래스
@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
   private static final Logger logger = LoggerFactory.getLogger(JwtFilter.class);
   @Override
   public void commence(HttpServletRequest request,
                        HttpServletResponse response,
                        AuthenticationException authException) throws IOException {
      // 유효한 자격증명을 제공하지 않고 접근하려 할때 401
      response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
   }
}
