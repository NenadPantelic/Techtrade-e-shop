package com.techtrade.app.dto.response;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

import com.techtrade.app.models.SupplyOrder;
import com.techtrade.app.utils.HelperUtils;

public class SupplyOrderResponse extends AbstractResponse {

    private String _arrivalDate;
    private boolean _arrived;
    private Long _id;
    private String _orderDate;
    private List<ProductOrderResponse> _products;
    private String _supplier;

    public SupplyOrderResponse() {
    }

    public SupplyOrderResponse(SupplyOrder order) throws ParseException {
	_id = order.getId();
	_arrived = order.isArrived();
	_orderDate = HelperUtils.formatDate(order.getDateCreated());
	_arrivalDate = HelperUtils.formatDate(order.getDateArrived());
	_supplier = order.getSupplier().getName();
	_products = HelperUtils.getProductOrderResponseList(order.getProductOrders());
    }

    public String getArrivalDate() {
	return _arrivalDate;
    }

    public Long getId() {
	return _id;
    }

    public String getOrderDate() {
	return _orderDate;
    }

    public List<ProductOrderResponse> getProducts() {
	return _products;
    }

    public String getSupplier() {
	return _supplier;
    }

    public boolean isArrived() {
	return _arrived;
    }

    public void setArrivalDate(String arrivalDate) {
	_arrivalDate = arrivalDate;
    }

    public void setArrived(boolean arrived) {
	_arrived = arrived;
    }

    public void setId(Long id) {
	_id = id;
    }

    public void setOrderDate(String orderDate) {
	_orderDate = orderDate;
    }

    public void setProducts(List<ProductOrderResponse> products) {
	_products = products;
    }

    public void setSupplier(String supplier) {
	_supplier = supplier;
    }

}
