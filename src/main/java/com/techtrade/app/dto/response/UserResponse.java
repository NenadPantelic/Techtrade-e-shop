package com.techtrade.app.dto.response;

import com.techtrade.app.models.User;
import com.techtrade.app.models.UserType;

public class UserResponse extends AbstractResponse{
    
    private long _id;
    private String _firstName; 
    private String _lastName;
    private String _username;
    private String _email;
    //private String _password;
    private UserType _role;
    
  
    public UserResponse(User user) {
	
	_id = user.getId();
	_firstName = user.getFirstName();
	_lastName = user.getLastName();
	_username = user.getUsername();
	//_password = user.getPassword();
	_email = user.getEmail();
	_role = user.getRole();
    }
    
    public void setId(long id) {
	_id = id;
    }
    public void setFirstName(String firstName) {
        _firstName = firstName;
    }
    public void setLastName(String lastName) {
        _lastName = lastName;
    }
    public void setUsername(String username) {
        _username = username;
    }
    public void setEmail(String email) {
        _email = email;
    }
    /*
    public void setPassword(String password) {
        _password = password;
    }
    */
    public void setRole(UserType role) {
        _role = role;
    }

    public long getId() {
	return _id;
    }
    public String getFirstName() {
        return _firstName;
    }
    public String getLastName() {
        return _lastName;
    }
    public String getUsername() {
        return _username;
    }
    public String getEmail() {
        return _email;
    }
    /*
    public String getPassword() {
        return _password;
    }
    */
    public UserType getRole() {
        return _role;
    }
    
    
    

    
    
    

}
