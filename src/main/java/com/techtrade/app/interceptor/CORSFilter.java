package com.techtrade.app.interceptor;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CORSFilter extends CorsFilter {

    public CORSFilter(CorsConfigurationSource source) {
        super((CorsConfigurationSource) source);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
	System.out.println(request.getHeader("token"));
	
        response.setHeader("Access-Control-Allow-Headers",
                "Access-Control-Allow-Origin, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, auth-token,token, Access-Control-Request-Headers");
        //response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, HEAD, DELETE, OPTIONS");
        response.setHeader("Access-Control-Request-Headers", "token, content-type");
        response.setHeader("Access-Control-Max-Age", "3600");
        //response.setHeader("Access-Control-Allow-Headers", "token, content-type, accept, xsrf-token");
        //response.addHeader("Access-Control-Expose-Headers", "xsrf-token");
        if (response.getHeader("Access-Control-Allow-Origin") == null)
            response.addHeader("Access-Control-Allow-Origin", "*");
        filterChain.doFilter(request, response);
    }

}
