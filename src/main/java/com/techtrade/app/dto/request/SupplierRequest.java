package com.techtrade.app.dto.request;

import javax.validation.constraints.Email;

public class SupplierRequest {

    private String _name;

    @Email(message = "Invalid email.")
    private String _email;

    public String getName() {
	return _name;
    }

    public void setName(String name) {
	_name = name;
    }

    public String getEmail() {
	return _email;
    }

    public void setEmail(String email) {
	_email = email;
    }

}
