package com.techtrade.app.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private long _id;

    @Size(min = 8)
    @Column(name = "EMAIL", unique = true, nullable = false)
    @Email(message = "Email must be valid.")
    private String _email;

    @Column(name = "FIRSTNAME", nullable = false)
    private String _firstName;

    @Column(name = "LASTNAME", nullable = false)
    private String _lastName;

    @Column(name = "PASSWORD", nullable = false)
    private String _password;

    @Column(name = "ROLE")
    @Enumerated(EnumType.ORDINAL)
    private UserType _role;
    
    @Size(min = 8, max = 60)
    @Column(name = "USERNAME", unique = true, nullable = false)
    private String _username;

    public String getEmail() {
	return _email;
    }

    public String getFirstName() {
	return _firstName;
    }

    public long getId() {
	return _id;
    }

    public String getLastName() {
	return _lastName;
    }

    public String getPassword() {
	return _password;
    }

    public UserType getRole() {
	return _role;
    }

    public String getUsername() {
	return _username;
    }

    public void setEmail(String email) {
	_email = email;
    }

    public void setFirstName(String firstName) {
	_firstName = firstName;
    }

    public void setId(long id) {
	_id = id;
    }

    public void setLastName(String lastName) {
	_lastName = lastName;
    }

    public void setPassword(String password) {
	_password = password;
    }

    public void setRole(UserType role) {
	_role = role;
    }

    public void setUsername(String username) {
	_username = username;
    }

}
