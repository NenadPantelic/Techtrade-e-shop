package com.techtrade.app.authorization;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

import com.techtrade.app.exceptions.ExceptionType;
import com.techtrade.app.exceptions.ServerException;
import com.techtrade.app.interceptor.AuthInterceptor;
import com.techtrade.app.utils.HelperUtils;

@Aspect
@Component
public class RoleAspect {

    private final String message = "You are not authorized to access this URL/resource!";

    @Before(value = "@annotation(userRole)")
    public void authCheck(JoinPoint joinPoint, UserRole userRole) {

	if (!HelperUtils.containsRole(userRole.roles(), AuthInterceptor.context.get().getRole())) {
	    throw new ServerException(message, ExceptionType.INVALID_ROLE);
	}

    }
}
