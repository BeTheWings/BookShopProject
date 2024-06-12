package com.example.wanted.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity // 스프링 Security 지원을 가능하게 함
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //springsecurity의 header정보를 disable한다.
        http.csrf().disable();
        http.authorizeRequests()
                // image 폴더를 login 없이 허용
                .antMatchers("/images/**").permitAll()
                // css 폴더를 login 없이 허용
                .antMatchers("/css/**").permitAll()
                //api로 시작하는 것은 인증 x
                .antMatchers("/info/**").permitAll()
                // 어떤 요청이든 '인증'
                .anyRequest().authenticated();
                // 로그인 기능 허용
        http.formLogin()
            .loginPage("/customer/login")
            .defaultSuccessUrl("/")
            .failureUrl("/customer/login?error")
            .permitAll();// 로그아웃 기능 허용
        http.logout()
                .logoutRequestMatcher(new AntPathRequestMatcher("/api/logout"))
                .logoutSuccessUrl("/")
                .invalidateHttpSession(true);
    }
}