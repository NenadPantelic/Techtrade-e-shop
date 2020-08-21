package com.techtrade.app.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private long _id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SUPPLY_ORDER_ID")
    private SupplyOrder _supplyOrder;

    @Column(name = "FILE_PATH")
    private String _filePath;

    public String getFilePath() {
	return _filePath;
    }

    public void setFilePath(String filePath) {
	_filePath = filePath;
    }

    public long getId() {
	return _id;
    }

    public void setId(long id) {
	_id = id;
    }

    public SupplyOrder getSupplyOrder() {
	return _supplyOrder;
    }

    public void setSupplyOrder(SupplyOrder supplyOrder) {
	_supplyOrder = supplyOrder;
    }

}
