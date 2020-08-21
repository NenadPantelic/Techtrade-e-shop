package com.techtrade.app.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Producer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private long _id;

    @Column(name = "NAME", unique = true, nullable = false)
    private String _name;
    

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "_producer", orphanRemoval=true)
    private Set<Product> _products;

    
    public Producer(String name) {
	_name = name;
    }

    public Producer() {

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

    public Set<Product> getProducts() {
	return _products;
    }

    public void setProducts(Set<Product> products) {	
	_products = products;
    }
    
    public void addProduct(Product product) {
	if(getProducts() == null) setProducts(new HashSet<Product>());
	_products.add(product);
	
    }

}
