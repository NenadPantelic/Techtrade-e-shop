package com.techtrade.app.dto.response;

import java.util.HashMap;

import com.techtrade.app.models.Product;

public class ProductResponse extends AbstractResponse {

    private long _id;

    private String _imagePath;

    private String _name;

    private double _price;
    private String _producer;
    private String _productType;
    private String _productURL;
    private String _properties;
    private int _quantity;
    private int _warranty;
    private double _vendorPrice;
    
    
    public double getVendorPrice() {
        return _vendorPrice;
    }

    public void setVendorPrice(double vendorPrice) {
        _vendorPrice = vendorPrice;
    }

    public ProductResponse(Product product) {
	_id = product.getId();
	_name = product.getName();
	_price = product.getPrice();
	_producer = product.getProducer().getName();
	_productType = product.getProductType().getName();
	_productURL = product.getProductURL();
	_properties = product.getProperties();
	_warranty = product.getWarranty();
	_quantity = product.getQuantity();
	_imagePath = product.getImagePath();
	_vendorPrice = product.getVendorPrice();

    }

    public long getId() {
	return _id;
    }

    public String getImagePath() {
	return _imagePath;
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

    public String getProductURL() {
	return _productURL;
    }

    public String getProperties() {
	return _properties;
    }

    public int getQuantity() {
	return _quantity;
    }

    public int getWarranty() {
	return _warranty;
    }

    public HashMap<String, String> makePropertyJSON(String properties) {
	HashMap<String, String> map = new HashMap<String, String>();
	String props[] = properties.split(",");
	for (String kvp : props) {
	    String kvPair[] = kvp.split(":");
	    map.put(kvPair[0], kvPair[1]);
	}
	return map;

    }

    public void setId(long id) {
	_id = id;
    }

    public void setImagePath(String imagePath) {
	_imagePath = imagePath;
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

    public void setProductURL(String productURL) {
	_productURL = productURL;
    }

    public void setProperties(String properties) {
	_properties = properties;
    }

    public void setQuantity(int quantity) {
	_quantity = quantity;
    }

    public void setWarranty(int warranty) {
	_warranty = warranty;
    }
}
