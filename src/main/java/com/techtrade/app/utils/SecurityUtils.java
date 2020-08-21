package com.techtrade.app.utils;

import java.util.UUID;
import java.util.concurrent.TimeUnit;

import org.mindrot.jbcrypt.BCrypt;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.techtrade.app.interceptor.AuthInterceptor;

public class SecurityUtils {
    
    
    private static final int SALT_CONSTANT = 10;
    
    public static String generateToken() {

	return UUID.randomUUID().toString();

    }
    
    
    public static String encryptPassword(String password) {
	
	return BCrypt.hashpw(password, BCrypt.gensalt(SALT_CONSTANT));
    }
    
    /*token stays in cache for 120minutes at most*/
    private static Cache<String, Long> cache = Caffeine.newBuilder()
	    .expireAfterWrite(120, TimeUnit.MINUTES)
	    .maximumSize(200)
	    .build();
    
    public static Long getUserIdFromCache(String token) {

	return cache.getIfPresent(token);
    }
    
    public static void insertDataInCache(String token, long id) {
	cache.put(token, id);
    }

    public static boolean isTokenValid(String token) {
	//System.out.println(token);
	return token != null && getUserIdFromCache(token) != null;

    }
    
    public static boolean checkPasswordMatching(String dbPwd, String logPwd) {
	
	return BCrypt.checkpw(logPwd , dbPwd);
    }
   
    public static boolean removeToken() {
	String token = AuthInterceptor.context.get().getToken();
	cache.invalidate(token);
	return true;
    }
}
