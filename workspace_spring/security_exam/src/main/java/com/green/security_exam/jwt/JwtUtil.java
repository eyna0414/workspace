package com.green.security_exam.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Date;


@Component
public class JwtUtil {
  private SecretKey secretKey;

  //application,properties 파일에 문자열로 정의된 시크릿 키를 진짜 시크릿 키로 변환
  public JwtUtil(@Value("${spring.jwt.secret}")String secret) {
    secretKey = new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), Jwts.SIG.HS512.key().build().getAlgorithm());
  }

  // 공통 Claims 추출 메서드. tokten의 payload를 추출한다.
  private Claims parseClaims(String token) {
    return Jwts.parser()
            .verifyWith(secretKey)
            .build()
            .parseSignedClaims(token)
            .getPayload();
  }

  //token 의 subject 추출메서드. subject 를 추출하면 유저이름(이메일)을 나온다.
  public String getUsername(String token) {
    return parseClaims(token).getSubject();
  }

  //token 의 권한 정보 추출
  public String getRole(String token) {
    return parseClaims(token).get("role", String.class);
  }

  //token 의 만료시간이 지났으면 true, 만료가 되지 않았으면 false 를 리턴
  public Boolean isExpired(String token) {
    try{
      return parseClaims(token).getExpiration().before(new Date());
    }catch (ExpiredJwtException e){
      return true;
    }
  }

  /**
   * 토큰 생성 메서드
   * @param username 회원아이디
   * @param role 권한
   * @param expirationTime 만료날짜및시간 1000 -> 1초
   * @return 위 정보가 담긴 토큰을 리턴
   */
  public String createJwt(String username, String role, long expirationTime, String clientType) {
    return Jwts.builder()
            .signWith(secretKey, Jwts.SIG.HS512)    //암호화 방식지정. 비밀키 & HS512 알고리즘으로 토큰 암호화 진행
            .header()
              .add("typ", "JWT")      // 기본값이긴 하지만 명시적으로 지정 가능
              .add("alg", "HS512")    // 일반적으로 자동으로 처리되지만 명시 가능
            .and()
              //토근의 식별자 보통 id
              .subject(username)      //첫 번째 매개변수 유저이름(회원아이디)
              .claim("role", role)    //두 번째 매개변수 권한
            .issuedAt(new Date(System.currentTimeMillis()))                      //토큰 발행 시간
            //.expiration(new Date(System.currentTimeMillis() + expirationTime))   //토큰 만료 시간
            // 웹일때만 토큰 만료 시간
            .expiration(clientType.equals("web") ? new Date(System.currentTimeMillis() + expirationTime) : null)
            .compact();

  }

}