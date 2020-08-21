package com.techtrade.app.dto.request;

import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

public class ProductRequest {

    private MultipartFile _image;
    private String _name;
    private Double _price;
    private Long _producerID;

    private Long _productTypeID;

    private String _productURL;
    // private Map<String, String> _properties;
    private String properties;
    private Integer _quantity;
    private Double _vendorPrice;
    private Integer _warranty;

    public MultipartFile getImage() {
	return _image;
    }

    public String getName() {
	return _name;
    }

    public Double getPrice() {
	return _price;
    }

    public Long getProducerID() {
	return _producerID;
    }

    public Long getProductTypeID() {
	return _productTypeID;
    }

    public String getProductURL() {
	return _productURL;
    }

    public Integer getQuantity() {
	return _quantity;
    }

    public Double getVendorPrice() {
	return _vendorPrice;
    }

    public Integer getWarranty() {
	return _warranty;
    }

    public void setImage(MultipartFile image) {
	_image = image;
    }

    public void setName(String name) {
	_name = name;
    }

    public void setPrice(double price) {
	_price = price;
    }

    public void setProducer(long producerID) {
	_producerID = producerID;
    }

    public void setProducerID(long producerID) {
	_producerID = producerID;
    }

    public void setProductType(long productTypeID) {
	_productTypeID = productTypeID;
    }

    public void setProductTypeID(long productTypeID) {
	_productTypeID = productTypeID;
    }

    public void setProductURL(String productURL) {
	_productURL = productURL;
    }
    /*
     * public void setProperties(Map<String, String> properties) { _properties =
     * properties; }
     */

    public void setQuantity(Integer quantity) {
	_quantity = quantity;
    }

    public String getProperties() {
	return properties;
    }

    public void setProperties(String properties) {
	this.properties = properties;
    }

    public void setVendorPrice(Double vendorPrice) {
	_vendorPrice = vendorPrice;
    }

    public void setWarranty(int warranty) {
	_warranty = warranty;
    }

}
