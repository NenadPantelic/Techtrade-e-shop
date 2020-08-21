package com.techtrade.app.controllers;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.techtrade.app.authorization.UserRole;
import com.techtrade.app.dto.request.LoginRequest;
import com.techtrade.app.dto.request.UserRequest;
import com.techtrade.app.dto.response.AbstractResponse;
import com.techtrade.app.dto.response.LogoutResponse;
import com.techtrade.app.dto.response.UserResponse;
import com.techtrade.app.models.UserType;
import com.techtrade.app.services.ProductService;
import com.techtrade.app.services.UserService;

@RestController
@CrossOrigin(origins = "*")

public class UserController {

    @Autowired
    UserService _userService;

    private UserService getUserService() {
	return _userService;
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN })
    @PostMapping("/users/")
    public UserResponse registerUser(@RequestBody UserRequest request) {
	return getUserService().registerUser(request);

    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN })
    @GetMapping("/users/")
    public List<AbstractResponse> getUsers() throws ParseException {

	return getUserService().getAllUsers();
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN })
    @GetMapping("/users/{id}/")
    public AbstractResponse getUser(@PathVariable("id") long id) throws ParseException {
	return getUserService().getUser(id);
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN })
    @DeleteMapping("/users/{id}/")
    public void deleteUser(@PathVariable("id") long id) {

	getUserService().deleteUser(id);
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN })
    @PutMapping("/users/{id}/")
    public AbstractResponse updateUser(@PathVariable("id") long id, @RequestBody UserRequest userReq)
	    throws IllegalArgumentException, IllegalAccessException, ParseException {

	return getUserService().updateUser(id, userReq);

    }

    @PostMapping("/login")
    public AbstractResponse loginUser(@RequestBody LoginRequest login) throws Exception {
	return getUserService().login(login);
    }

    @PostMapping("/logout")
    public LogoutResponse logoutUser() {
	return getUserService().logout();
    }
}
