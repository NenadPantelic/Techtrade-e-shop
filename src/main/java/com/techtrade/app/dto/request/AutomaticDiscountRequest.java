package com.techtrade.app.dto.request;

import java.util.List;

public class AutomaticDiscountRequest {

    private List<Long> _products;
    private boolean _all;

    public List<Long> getProducts() {
	return _products;
    }

    public void setProducts(List<Long> products) {
	_products = products;
    }

    public boolean isAll() {
	return _all;
    }

    public void setAll(boolean all) {
	_all = all;
    }

}
