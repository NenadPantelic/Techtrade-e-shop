package com.techtrade.app.dto.request;

public class OrderRequest {
    
    private Long _orderID;
    private Integer _quantity = 20;
    //private Long _supplierID;
    public Long getOrderID() {
        return _orderID;
    }
    public void setOrderID(Long orderID) {
        _orderID = orderID;
    }
    public Integer getQuantity() {
        return _quantity;
    }
    public void setQuantity(Integer quantity) {
        _quantity = quantity;
    }
   
    
    
    

}
