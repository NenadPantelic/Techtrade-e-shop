package com.techtrade.app.interceptor;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;

import com.techtrade.app.DAO.UserRepository;
import com.techtrade.app.exceptions.ExceptionType;
import com.techtrade.app.exceptions.ServerException;
import com.techtrade.app.models.User;
import com.techtrade.app.models.UserType;
import com.techtrade.app.utils.SecurityUtils;

public class AuthInterceptor implements HandlerInterceptor {

    @Autowired
    private UserRepository _userRepo;

    public static final ThreadLocal<RequestContext> context = new ThreadLocal<>();
    private static final String TOKEN_STR = "token";

    public UserRepository getUserRepo() {
	return _userRepo;
    }

    public void setUserRepo(UserRepository userRepo) {
	_userRepo = userRepo;
    }

    public String getTokenFromHeader(HttpServletRequest request) {
	return request.getHeader(TOKEN_STR);
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
	    throws Exception {

	if (request.getMethod().equals("OPTIONS")) {// || NON_AUTH_URLS.contains(request.getRequestURI())) {
	    return true;
	}
	String token = getTokenFromHeader(request);

	if (!SecurityUtils.isTokenValid(token)) {
	    throw new ServerException("You're not authenticated or token is invalid.", ExceptionType.INVALID_TOKEN);
	} else {

	    if (!isContextInitialized()) {
		long userID = SecurityUtils.getUserIdFromCache(token);
		User user = getUserRepo().findById(userID).get();
		UserType role = user.getRole();
		String name = user.getFirstName() + " " + user.getLastName();
		setupContext(token, userID, role, name);
	    }
	}
	return true;
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
	    Exception ex) {
	context.remove();
    }

    public static boolean isContextInitialized() {
	return context.get() != null;
    }

    public static void setupContext(String token, long userID, UserType role, String fullName) {

	context.set(new RequestContext(token, userID, role, fullName));
    }
}
