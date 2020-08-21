package com.techtrade.app.dto.response;

import java.text.ParseException;
import java.util.Date;

import com.techtrade.app.models.Product;
import com.techtrade.app.utils.HelperUtils;

public class AutomaticDiscountResponse {

    private byte _discount;

    private long _id;

    private String _latestActivityDate;

    private String _name;

    private double _price;

    private String _producer;

    private String _productType;

    private int _quantity;

    private int _warranty;

    public AutomaticDiscountResponse() {
    }

    public AutomaticDiscountResponse(Product product) throws ParseException {
	_id = product.getId();
	_name = product.getName();
	_price = product.getPrice();
	_producer = product.getProducer().getName();
	_productType = product.getProductType().getName();
	_warranty = product.getWarranty();
	_quantity = product.getQuantity();
	_discount = product.getDiscount();
	Date date = (product.getLatestSoldDate() != null) ? product.getLatestSoldDate() : product.getDateInserted();
	_latestActivityDate = HelperUtils.formatDate(date);

    }

    public byte getDiscount() {
	return _discount;
    }

    public long getId() {
	return _id;
    }

    public String getLatestActivityDate() {
	return _latestActivityDate;
    }

    public String getName() {
	return _name;
    }

    public double getPrice() {
	return _price;
    }

    public String getProducer() {
	return _producer;
    }

    public String getProductType() {
	return _productType;
    }

    public int getQuantity() {
	return _quantity;
    }

    public int getWarranty() {
	return _warranty;
    }

    public void setDiscount(byte discount) {
	_discount = discount;
    }

    public void setId(long id) {
	_id = id;
    }

    public void setLatestActivityDate(String latestActivityDate) {
	_latestActivityDate = latestActivityDate;
    }

    public void setName(String name) {
	_name = name;
    }

    public void setPrice(double price) {
	_price = price;
    }

    public void setProducer(String producer) {
	_producer = producer;
    }

    public void setProductType(String productType) {
	_productType = productType;
    }

    public void setQuantity(int quantity) {
	_quantity = quantity;
    }

    public void setWarranty(int warranty) {
	_warranty = warranty;
    }

}
