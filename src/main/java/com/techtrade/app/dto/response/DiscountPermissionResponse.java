package com.techtrade.app.dto.response;

public class DiscountPermissionResponse {
    
    private String _product;
    private Double _newPrice;
    private Byte _discountLevel;
    
    public DiscountPermissionResponse() {}
    public DiscountPermissionResponse(String product, double newPrice, byte discountLevel) {
	
	_product = product;
	_newPrice = newPrice;
	_discountLevel = discountLevel;
    }
    public String getProduct() {
        return _product;
    }
    public void setProduct(String product) {
        _product = product;
    }
    public Double getNewPrice() {
        return _newPrice;
    }
    public void setNewPrice(Double newPrice) {
        _newPrice = newPrice;
    }
    public Byte getDiscountLevel() {
        return _discountLevel;
    }
    public void setDiscountLevel(Byte discountLevel) {
        _discountLevel = discountLevel;
    }
    
    

}
