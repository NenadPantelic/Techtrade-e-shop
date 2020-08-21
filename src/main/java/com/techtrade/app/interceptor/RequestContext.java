package com.techtrade.app.interceptor;

import com.techtrade.app.models.UserType;

public class RequestContext {

    private UserType _role;
    private String _token;
    private long _userID;
    private String _fullName;

    public RequestContext(String token, long userID, UserType role, String fullName) {
	_token = token;
	_userID = userID;
	_role = role;
	_fullName = fullName;

    }

    public UserType getRole() {
	return _role;
    }

    public String getToken() {
	return _token;
    }

    public long getUserID() {
	return _userID;
    }

    public void setRole(UserType role) {
	_role = role;
    }

    public void setToken(String token) {
	_token = token;
    }

    public void setUserID(long userID) {
	_userID = userID;
    }

    public String getFullName() {
        return _fullName;
    }

    public void setFullName(String fullName) {
        _fullName = fullName;
    }

}
