package com.techtrade.app.dto.request;


import com.techtrade.app.models.UserType;

public class UserRequest {
    
    private String _firstName; 
    private String _lastName;
    private String _username;
    private String _email;
    private String _password;
    private UserType _role;
    
  
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
    public void setPassword(String password) {
        _password = password;
    }
    public void setRole(UserType role) {
        _role = role;
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
    public String getPassword() {
        return _password;
    }
    public UserType getRole() {
        return _role;
    }
    
    
    

}
