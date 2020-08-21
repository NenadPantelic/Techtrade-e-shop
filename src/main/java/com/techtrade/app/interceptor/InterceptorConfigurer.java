package com.techtrade.app.interceptor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@ComponentScan(basePackages = { "com.techtrade.app.*" })
public class InterceptorConfigurer implements WebMvcConfigurer {

    @Bean
    public AuthInterceptor buildInterceptor() {
	return new AuthInterceptor();
    }
    
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
	registry.addInterceptor(buildInterceptor()).addPathPatterns("/**").excludePathPatterns("/login", "/products/discount/determine");

    }
    
    
    

}
