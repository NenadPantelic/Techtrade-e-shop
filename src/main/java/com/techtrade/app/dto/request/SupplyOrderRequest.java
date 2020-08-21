package com.techtrade.app.dto.request;

import java.util.List;

public class SupplyOrderRequest {

    private List<OrderRequest> _orders;
    private Long _supplierID;
    
    
    public Long getSupplierID() {
        return _supplierID;
    }
    public void setSupplierID(Long supplierID) {
        _supplierID = supplierID;
    }
    public List<OrderRequest> getOrders() {
        return _orders;
    }
    public void setOrders(List<OrderRequest> orders) {
        _orders = orders;
    }
    
}
