package com.techtrade.app.dto.response;

import com.techtrade.app.models.OrderState;
import com.techtrade.app.models.ProductOrder;

public class ProductOrderResponse extends AbstractResponse {

    private long _orderID;
    private long _productID;
    private String _productName;

    private OrderState _status;

    public ProductOrderResponse() {
    }

    public ProductOrderResponse(ProductOrder order) {
	_orderID = order.getId();
	_productName = order.getProduct().getName();
	_productID = order.getProduct().getId();
	_status = order.getOrderState();
    }

    public long getOrderID() {
	return _orderID;
    }

    public long getProductID() {
	return _productID;
    }

    public String getProductName() {
	return _productName;
    }

    public OrderState getStatus() {
	return _status;
    }

    public void setOrderID(long orderID) {
	_orderID = orderID;
    }

    public void setProductID(long productID) {
	_productID = productID;
    }

    public void setProductName(String productName) {
	_productName = productName;
    }

    public void setStatus(OrderState status) {
	_status = status;
    }

}
