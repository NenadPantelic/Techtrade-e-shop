package com.techtrade.app.dto.request;

public class BasketRequest {
    
    private Long _productID;
    private int _quantity;
    
    public BasketRequest() {}
    public BasketRequest(Long prodId, int q) {
	_productID = prodId;
	_quantity = q;
	
    }
    public Long getProductID() {
        return _productID;
    }
    public void setProductID(Long productID) {
        _productID = productID;
    }
    public int getQuantity() {
        return _quantity;
    }
    public void setQuantity(int quantity) {
        _quantity = quantity;
    }
    
    

}
