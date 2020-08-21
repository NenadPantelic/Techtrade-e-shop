package com.techtrade.app.models;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;

@Entity
public class Bill {

    @Column(name = "CASHIER", nullable = true)
    private String _cashier;

    @Column(name = "DATE")
    private Date _date;

    @Column(name = "FILE_PATH")
    private String _filePath;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private long _id;

    @Column(name = "PRICE")
    private double _price;

    @OneToMany(mappedBy = "_bill", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<SoldProduct> _soldProducts;

    public Bill() {
	_soldProducts = new HashSet<SoldProduct>();
    }

    public String getCashier() {
	return _cashier;
    }

    public Date getDate() {
	return _date;
    }

    public String getFilePath() {
	return _filePath;
    }

    public long getId() {
	return _id;
    }

    public double getPrice() {
	return _price;
    }

    public Set<SoldProduct> getSoldProducts() {
	return _soldProducts;
    }

    @PrePersist
    protected void onCreate() {
	_date = new Date();
    }

    public void setCashier(String cashier) {
	_cashier = cashier;
    }

    public void setDate(Date date) {
	_date = date;
    }

    public void setFilePath(String filePath) {
	_filePath = filePath;
    }

    public void setId(long id) {
	_id = id;
    }

    public void setPrice(double price) {
	_price = price;
    }

    public void setSoldProducts(Set<SoldProduct> soldProducts) {
	_soldProducts = soldProducts;
    }

}
