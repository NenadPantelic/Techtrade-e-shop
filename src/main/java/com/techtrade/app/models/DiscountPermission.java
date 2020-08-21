package com.techtrade.app.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class DiscountPermission {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private long _id;
    
    @Column(name = "ALLOWED")
    private boolean _allowed;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PRODUCT_ID")
    private Product _product;

    public long getId() {
        return _id;
    }

    public void setId(long id) {
        _id = id;
    }

    public boolean isAllowed() {
        return _allowed;
    }

    public void setAllowed(boolean allowed) {
        _allowed = allowed;
    }

    public Product getProduct() {
        return _product;
    }

    public void setProduct(Product product) {
        _product = product;
    }
}
