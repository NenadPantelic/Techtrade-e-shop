package com.techtrade.app.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class SoldProduct {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BILL_ID")
    private Bill _bill;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private long _id;

    /*these two fields are set to be referential type becuase of migration to null value 
     * for existing table rows*/
    @Column(name = "IS_RETURNED", nullable = true)
    private boolean _isReturned = false;

    @Column(name = "PRICE")
    private double _price = 0.0;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PRODUCT_ID")
    private Product _product;

    @Column(name = "QUANTITY")
    private int _quantity;

    public Bill getBill() {
	return _bill;
    }

    public long getId() {
	return _id;
    }

    public double getPrice() {
	return _price;
    }

    public Product getProduct() {
	return _product;
    }

    public int getQuantity() {
	return _quantity;
    }

    public boolean isReturned() {
	return _isReturned;
    }

    public void setBill(Bill bill) {
	_bill = bill;
    }

    public void setId(long id) {
	_id = id;
    }

    public void setPrice(double price) {
	_price = price;
    }

    public void setProduct(Product product) {
	_product = product;
    }

    public void setQuantity(int quantity) {
	_quantity = quantity;
    }

    public void setReturned(boolean isReturned) {
	_isReturned = isReturned;
    }

}
