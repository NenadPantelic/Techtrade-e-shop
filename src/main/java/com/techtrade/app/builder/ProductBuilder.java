package com.techtrade.app.builder;

import java.util.Date;
import java.util.Map;

import com.techtrade.app.models.Producer;
import com.techtrade.app.models.Product;
import com.techtrade.app.models.ProductType;

public class ProductBuilder {

    /*
     * private String _name; private ProductType _productType; private Producer
     * _producer; private double _price; private String _productURL; private
     * HashMap<String, String> _properties;
     */
    private Product _product;

    public ProductBuilder() {
	_product = new Product();
    }

    /*
     * 
     * public ProductBuilder(Product product) { _product = product; }
     */
    private Product getProduct() {
	return _product;
    }

    public ProductBuilder setName(String name) {
	getProduct().setName(name);
	return this;
    }

    public ProductBuilder setProducer(Producer producer) {
	getProduct().setProducer(producer);
	return this;
    }

    public ProductBuilder setProductType(ProductType productType) {
	getProduct().setProductType(productType);
	return this;
    }

    public ProductBuilder setPrice(double price) {
	int tmpPrice = (int) ((price * 1.2) * 100);
	getProduct().setPrice(tmpPrice / 100.);
	getProduct().setVendorPrice(price);
	return this;

    }

    public ProductBuilder setProductURL(String URL) {
	getProduct().setProductURL(URL);
	return this;
    }

    public ProductBuilder setProductQuantity(int quantity) {
	getProduct().setQuantity(quantity);
	return this;
    }

    public static String convertMapToString(Map<String, String> props) {
	StringBuilder sb = new StringBuilder();
	for (String key : props.keySet()) {
	    sb.append(key + ":" + props.get(key) + ",");
	}
	return sb.deleteCharAt(sb.length() - 1).toString();
    }
    /*
    public ProductBuilder setProperties(Map<String, String> props) {
	getProduct().setProperties(convertMapToString(props));
	return this;
    }
    */
    
    public ProductBuilder setProperties(String props) {
	getProduct().setProperties(props);
	return this;
    }
    
    public ProductBuilder setWarranty(int period) {
	getProduct().setWarranty(period);
	return this;

    }

    public ProductBuilder setVendorPrice(Double vendorPrice) {
	getProduct().setVendorPrice(vendorPrice);
	return this;
    }

    public ProductBuilder setAvailablityStatus() {
	getProduct().setAvailableForSale(true);
	return this;
    }
    public Product build() {
	return getProduct();
    }

}
