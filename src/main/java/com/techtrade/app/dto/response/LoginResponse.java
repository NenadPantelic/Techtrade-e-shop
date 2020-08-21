package com.techtrade.app.dto.response;

import com.techtrade.app.models.UserType;

public class LoginResponse extends AbstractResponse{

    private String _token;
    private String _username;
    private UserType _role;

    public LoginResponse(String token, String username, UserType role) {
	_token = token;
	_username = username;
	_role = role;
    }
    public String getToken() {
	return _token;
    }

    public void setToken(String token) {
	_token = token;
    }

    public String getUsername() {
	return _username;
    }

    public void setUsername(String username) {
	_username = username;
    }

    public UserType getRole() {
	return _role;
    }

    public void setRole(UserType role) {
	_role = role;
    }

}
