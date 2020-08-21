package com.techtrade.app.dto.response;

import com.techtrade.app.models.SoldProduct;

public class SoldProductResponse extends AbstractResponse {

    // private long _billId;
    private long _id;
    private boolean _isReturned;
    private double _price;
    private String _product;
    private int _quantity;

    public SoldProductResponse(SoldProduct sp) {
	_id = sp.getId();
	_product = sp.getProduct().getName();
	_quantity = sp.getQuantity();
	// _billId = sp.getBill().getId();
	_price = sp.getProduct().getPrice();
	_isReturned = sp.isReturned();
    }

    /*
     * public long getBillId() { return _billId; }
     */
    public long getId() {
	return _id;
    }

    public double getPrice() {
	return _price;
    }

    public String getProduct() {
	return _product;
    }

    public int getQuantity() {
	return _quantity;
    }

    public boolean isReturned() {
	return _isReturned;
    }

    /*
     * public void setBillId(long billId) { _billId = billId; }
     */
    public void setId(long id) {
	_id = id;
    }

    public void setPrice(double price) {
	_price = price;
    }

    public void setProduct(String product) {
	_product = product;
    }

    public void setQuantity(int quantity) {
	_quantity = quantity;
    }

    public void setReturned(boolean isReturned) {
	_isReturned = isReturned;
    }
}
