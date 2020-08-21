package com.techtrade.app.builder;

import org.mindrot.jbcrypt.BCrypt;

import com.techtrade.app.dto.response.UserResponse;
import com.techtrade.app.models.User;
import com.techtrade.app.models.UserType;
import com.techtrade.app.services.UserService;
import com.techtrade.app.utils.SecurityUtils;

/**
 * @author nenadsi
 *
 */
public class UserBuilder {

    private User _user;

    
    public User getUser() {
	return _user;
    }
    

    /* for create */
    public UserBuilder() {
	_user = new User();
    }

    /* for update */
    public UserBuilder(User user) {
	_user = user;
    }

    public UserBuilder setFirstName(String firstName) {
	getUser().setFirstName(firstName);
	return this;
    }

    public UserBuilder setLastName(String lastName) {
	getUser().setLastName(lastName);
	return this;
    }

    public UserBuilder setUsername(String username) {
	getUser().setUsername(username);
	return this;
    }

    public UserBuilder setEmail(String email) {
	getUser().setEmail(email);
	return this;
    }

    public UserBuilder setPassword(String password) {
	String newPassword = SecurityUtils.encryptPassword(password);
	getUser().setPassword(newPassword);
	return this;
    }

    public UserBuilder setRole(UserType role) {
	if (role == null) {
	    role = UserType.WORKER;
	}
	getUser().setRole(role);
	return this;
    }

    public User build() {
	return getUser();

    }
}
