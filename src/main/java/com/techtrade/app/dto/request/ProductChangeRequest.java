package com.techtrade.app.dto.request;

public class ProductChangeRequest {
    
    private Long _billId;
    private Long _newProduct;
    private Integer _quantity;
    private Long _oldProduct;
    public Long getOldProduct() {
        return _oldProduct;
    }
    public void setOldProduct(Long oldProduct) {
        _oldProduct = oldProduct;
    }
    public void setNewProduct(Long newProduct) {
        _newProduct = newProduct;
    }
    public Integer getQuantity() {
        return _quantity;
    }
    public void setQuantity(Integer quantity) {
        _quantity = quantity;
    }
   
    public Long getBillId() {
        return _billId;
    }
    public void setBillId(Long billId) {
        _billId = billId;
    }
    public Long getNewProduct() {
        return _newProduct;
    }
   
    

}
