package com.techtrade.app.dto.response;

import com.techtrade.app.models.ProductType;

public class ProductTypeResponse extends AbstractResponse{

    private long _id;
    private String _name;

    public ProductTypeResponse(ProductType type) {
	_id = type.getId();
	_name = type.getName();

    }

    public long getId() {
	return _id;
    }

    public String getName() {
	return _name;
    }

    public void setId(long id) {
	_id = id;
    }

    public void setName(String name) {
	_name = name;
    }

}
