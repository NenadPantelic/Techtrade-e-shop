package com.techtrade.app.services;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techtrade.app.DAO.UserRepository;
import com.techtrade.app.builder.UserBuilder;
import com.techtrade.app.dto.request.LoginRequest;
import com.techtrade.app.dto.request.UserRequest;
import com.techtrade.app.dto.response.AbstractResponse;
import com.techtrade.app.dto.response.LoginResponse;
import com.techtrade.app.dto.response.LogoutResponse;
import com.techtrade.app.dto.response.ResponseFactory;
import com.techtrade.app.dto.response.UserResponse;
import com.techtrade.app.exceptions.ExceptionType;
import com.techtrade.app.exceptions.ServerException;
import com.techtrade.app.interceptor.AuthInterceptor;
import com.techtrade.app.models.User;
import com.techtrade.app.models.UserType;
import com.techtrade.app.utils.SecurityUtils;

@Service
public class UserService {

    @Autowired
    private UserRepository _userRepo;

    public UserRepository getUserRepo() {

	return _userRepo;
    }

    @Transactional
    public UserResponse registerUser(UserRequest request) {
	UserBuilder builder = new UserBuilder();
	User user = builder.setUsername(request.getUsername()).setEmail(request.getEmail())
		.setFirstName(request.getFirstName()).setLastName(request.getLastName()).setRole(request.getRole())
		.setPassword(request.getPassword()).build();

	return new UserResponse(getUserRepo().save(user));

    }

    public List<AbstractResponse> getAllUsers() throws ParseException {
	Iterator<User> usersIter = getUserRepo().findAll().iterator();
	List<AbstractResponse> usersList = new ArrayList<AbstractResponse>();
	while (usersIter.hasNext()) {
	    usersList.add(ResponseFactory.produceResponse(usersIter.next()));
	}

	return usersList;
    }

    public AbstractResponse getUser(long id) throws ParseException {
	User user = getUserRepo().findById(id).get();
	return ResponseFactory.produceResponse(user);
    }

    public void deleteUser(long id) {
	getUserRepo().deleteById(id);
    }

    public UserType getUserRoleByUsername(String username) {

	return getUserRepo().findBy_username(username).getRole();
    }

    /* here comes the logic to determine user role */
    public boolean isSuperUser(long id) {

	UserType role = getUserRepo().findById(AuthInterceptor.context.get().getUserID()).get().getRole();
	return role == UserType.ADMIN || role == UserType.OWNER;
    }

    @Transactional
    public AbstractResponse updateUser(long id, UserRequest user)
	    throws IllegalArgumentException, IllegalAccessException, ParseException {

	User targetUser = getUserRepo().findById(id).get();
	String firstName = user.getFirstName();
	if (firstName != null)
	    targetUser.setFirstName(firstName);

	String lastName = user.getLastName();
	if (lastName != null)
	    targetUser.setLastName(lastName);

	String username = user.getUsername();
	if (username != null)
	    targetUser.setUsername(username);

	String email = user.getEmail();
	if (email != null)
	    targetUser.setEmail(email);

	String password = user.getPassword();
	if (password != null)
	    targetUser.setPassword(password);

	if (isSuperUser(id)) {
	    UserType role = user.getRole();
	    if (role != null)
		targetUser.setRole(role);
	}

	getUserRepo().save(targetUser);
	return ResponseFactory.produceResponse(targetUser);
    }

    public String currentUserName() {
	User user = getUserRepo().findById(AuthInterceptor.context.get().getUserID()).get();
	return user.getFirstName() + " " + user.getLastName();
    }

    public LoginResponse login(LoginRequest logRequest) throws Exception {
	String username = logRequest.getUsername();
	String password = logRequest.getPassword();
	LoginResponse response = null;
	User user = getUserRepo().findBy_username(username);
	if (user == null || !SecurityUtils.checkPasswordMatching(user.getPassword(), password)) {
	    throw new ServerException("Invalid login credentials.", ExceptionType.INVALID_LOGIN_CREDENTIALS);
	} else {
	    String token = SecurityUtils.generateToken();
	    UserType role = getUserRoleByUsername(username);
	    response = new LoginResponse(token, username, role);
	    // User user = getUserRepo().findBy_username(username);
	    long id = user.getId();
	    String fullName = user.getFirstName() + " " + user.getLastName();
	    SecurityUtils.insertDataInCache(token, id);
	    /* moze i bez ovoga - svakako preHandle regulise i ovaj slucaj */
	    if (!AuthInterceptor.isContextInitialized())
		AuthInterceptor.setupContext(token, id, role, fullName);
	    // AuthInterceptor.setupContext(token, id, role);
	}
	System.out.println(AuthInterceptor.context.get().getToken());

	return response;

    }

    public LogoutResponse logout() {
	boolean status = false;
	if (SecurityUtils.removeToken()) {
	    status = true;
	}
	return new LogoutResponse(status);
    }

}
