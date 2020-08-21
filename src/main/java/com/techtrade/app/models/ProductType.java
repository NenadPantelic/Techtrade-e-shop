package com.techtrade.app.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class ProductType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private long _id;

    @Column(name = "NAME", unique = true, nullable = false)
    private String _name;

    public ProductType(String name) {
	_name = name;
    }

    public ProductType() {

    }

    public long getId() {
	return _id;
    }

    public void setId(long id) {
	_id = id;
    }

    public String getName() {
	return _name;
    }

    public void setName(String name) {
	_name = name;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "_productType")
    private List<Product> _products;

    public List<Product> getProducts() {
	return _products;
    }

    public void setProducts(List<Product> products) {
	_products = products;
    }

}
