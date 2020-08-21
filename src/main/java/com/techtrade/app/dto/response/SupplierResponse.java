package com.techtrade.app.dto.response;

import com.techtrade.app.models.Supplier;

public class SupplierResponse extends AbstractResponse {

    private String _email;
    private long _id;

    private String _name;

    public SupplierResponse(Supplier s) {
	_name = s.getName();
	_email = s.getEmail();
	_id = s.getId();
    }

    public String getEmail() {
	return _email;
    }

    public long getId() {
	return _id;
    }

    public String getName() {
	return _name;
    }

    public void setEmail(String email) {
	_email = email;
    }

    public void setId(long id) {
	_id = id;
    }

    public void setName(String name) {
	_name = name;
    }
}
