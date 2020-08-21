package com.techtrade.app.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.hibernate.annotations.ColumnDefault;

@Entity
public class ProductOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private long _id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PRODUCT_ID")

    private Product _product;

    @Column(name = "QUANTITY")
    @ColumnDefault("20")
    private int _quantity;

    @Column(name = "ACTIVE")
    //@ColumnDefault("true")
    @Enumerated(EnumType.STRING)
    private OrderState _orderState = OrderState.INACTIVE;
    
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SUPPLY_ORDER_ID")
    private SupplyOrder _supplyOrder;
    
    public SupplyOrder getSupplyOrder() {
        return _supplyOrder;
    }

    public void setSupplyOrder(SupplyOrder supplyOrder) {
        _supplyOrder = supplyOrder;
    }

    public OrderState getOrderState() {
	return _orderState;
    }

    public void setOrderState(OrderState state) {
	_orderState = state;
    }

    public int getQuantity() {
	return _quantity;
    }

    public void setQuantity(int quantity) {
	_quantity = quantity;
    }

    public ProductOrder() {
    }

    public ProductOrder(Product product) {
	_product = product;
    }

    public long getId() {
	return _id;
    }

    public void setId(long id) {
	_id = id;
    }

    public Product getProduct() {
	return _product;
    }

    public void setProduct(Product product) {
	_product = product;
    }

}
