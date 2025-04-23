package com.green.security_exam.config;

import com.green.security_exam.jwt.JwtConfirmFilter;
import com.green.security_exam.jwt.JwtUtil;
import com.green.security_exam.jwt.LoginFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.CorsDsl;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

// 객체 생성 + 해당 클래스에 설정 내용이 들어있음을 알려 줌
@Configuration
// 해당 클래스가 security 설정을 컨트롤할 수 있도록 세팅하는 어노테이션
@EnableWebSecurity
//
@EnableMethodSecurity(prePostEnabled = true, securedEnabled = true)
@RequiredArgsConstructor
public class SecurityConfig {
  private final JwtUtil jwtUtil;

  //실제 시큐리티의 인증 & 인가에 대한 설정 코드를 작성하는 메서드
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http, AuthenticationConfiguration authConfig) throws Exception{
    //AuthenticationManager : spring security 에서 로그인 검증을 진행하는 객체
    AuthenticationManager authenticationManager = authConfig.getAuthenticationManager();
    //() -> {} : 람다

    http.cors(Customizer.withDefaults()) //아래 설정한 cors 내용을 사용하겠다.
        .csrf(csrf -> csrf.disable())
        //예전 session 방식 사용 X
        //form 로그인 방식 disable
        .formLogin(form -> form.disable())
        //http basic 인증 방식 disable
        .httpBasic(basic -> basic.disable())
        //세션을 STATELESS(세션에 정보 유지X)로 지정
        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

        //인증 및 인가에 대한 접근 설정
        .authorizeHttpRequests(auth ->
                //모두 허가
                //auth.anyRequest().permitAll()
                //인증 된 경우만 접근 가능
            auth.requestMatchers("/test2").authenticated()
                    .requestMatchers("/test3").hasRole("ADMIN")
                    .anyRequest().permitAll()
        );

    //모든 요청에서 토큰을 검증하는 JwtConfirmFilter 클래스를 SecurityFilterChain에 추가
    //JwtConfirmFilter 클래스는 LoginFilter가 진행되기 전에 실행되도록 설정 함
    http.addFilterBefore(new JwtConfirmFilter(jwtUtil), LoginFilter.class);

    //원래 로그인 요청을 받는 UsernamePasswordAuthenticationFilter 대신
    //우리가 커스터마이징한 LoginFilter 를 사용하도록 필터 교체!
    http.addFilterAt(new LoginFilter(authenticationManager, jwtUtil), UsernamePasswordAuthenticationFilter.class);

    return http.build();
  }

  //CORS 설정
  @Bean
  public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowCredentials(true);
    //리액트에서 스프링으로 접근 허용
    config.addAllowedOrigin("http://localhost:5173");
    //모든 헤더 정보 허용
    config.addAllowedHeader("*");
    //get, post, delete, put 등의 요청 메서드 허용
    config.addAllowedMethod("*");

    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", config);
    return source;
  }

  //비밀번호 암호화 기능을 제공하는 객체 생성 메서드
  @Bean
  public PasswordEncoder getPasswordEncoder(){
    return new BCryptPasswordEncoder();
  }
}
