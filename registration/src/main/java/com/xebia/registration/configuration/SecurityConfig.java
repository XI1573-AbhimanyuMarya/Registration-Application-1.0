/*
package com.xebia.registration.configuration;

import com.auth0.spring.security.api.JwtWebSecurityConfigurer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Value(value = "${auth0.apiAudience}")
    private String apiAudience;
    @Value(value = "${auth0.issuer}")
    private String isuer;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        JwtWebSecurityConfigurer.forRS256(apiAudience,isuer)
                .configure(http)
                .authorizeRequests()
                .antMatchers(HttpMethod.POST,"/api/form").permitAll()
                .antMatchers(HttpMethod.GET,"/api/form").hasAuthority("view:registrations")
                .antMatchers(HttpMethod.GET,"/api/form/**").hasAuthority("view:registration")
                .anyRequest().authenticated();
    }
}
*/
