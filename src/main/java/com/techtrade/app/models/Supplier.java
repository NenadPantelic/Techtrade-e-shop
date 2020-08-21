package com.techtrade.app.models;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

@Entity
public class Supplier {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private long _id;

    @Column(name = "NAME", unique = true, nullable = false)
    private String _name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "_supplier")
    private Set<SupplyOrder> _supplyOrder;

    @Size(min = 8)
    //@Column(name = "EMAIL", unique = true, nullable = false)
    @Column(name = "EMAIL", nullable = false)
    @Email(message = "Email must be valid.")
    private String _email;

    public Set<SupplyOrder> getSupplyOrder() {
	return _supplyOrder;
    }

    public void setSupplyOrder(Set<SupplyOrder> supplyOrder) {
	_supplyOrder = supplyOrder;
    }

    public Supplier() {
    }

    public Supplier(String name, String email) {
	_name = name;
	_email = email;
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
    
    public String getEmail() {
	return _email;
    }
    
    public void setEmail(String email) {
	_email = email;
    }

}
