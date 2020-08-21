package com.techtrade.app.dto.request;

import com.techtrade.app.models.Producer;
import com.techtrade.app.models.ProductType;

public class DiscountRequest {

    private Long _productType;
    private Long _producer;
    private double _discountCoefficient;

    public Long getProducer() {
	return _producer;
    }

    public void setProducer(Long producerID) {
	_producer = producerID;
    }

    public Long getProductType() {
	return _productType;
    }

    public void setProductType(Long typeID) {
	_productType = typeID;
    }

    public double getDiscountCoefficient() {
	return _discountCoefficient;
    }

    public void setDiscountCoefficient(double discountCoefficent) {
	_discountCoefficient = discountCoefficent;
    }

}
