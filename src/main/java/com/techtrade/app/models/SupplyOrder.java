package com.techtrade.app.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;

@Entity
public class SupplyOrder {

    @Column(name = "ARRIVED")
    private boolean _arrived;

    @Column(name = "DATE_ARRIVED")
    private Date _dateArrived;

    @Column(name = "DATE_CREATED")
    private Date _dateCreated;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private long _id;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "_supplyOrder")
    private Invoice _invoice;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "_supplyOrder")
    private List<ProductOrder> _productOrders;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SUPPLIER_ID")
    private Supplier _supplier;

    public SupplyOrder() {
	_productOrders = new ArrayList<ProductOrder>();
    }

    public Date getDateArrived() {
	return _dateArrived;
    }

    public Date getDateCreated() {
	return _dateCreated;
    }

    public long getId() {
	return _id;
    }

    public Invoice getInvoice() {
	return _invoice;
    }

    public List<ProductOrder> getProductOrders() {
	return _productOrders;
    }

    public Supplier getSupplier() {
	return _supplier;
    }

    public boolean isArrived() {
	return _arrived;
    }

    @PrePersist
    protected void onCreate() {
	_dateCreated = new Date();
    }

    public void setArrived(boolean arrived) {
	_arrived = arrived;
    }

    public void setDateArrived(Date dateArrived) {
	_dateArrived = dateArrived;
    }

    public void setDateCreated(Date dateCreated) {
	_dateCreated = dateCreated;
    }

    public void setId(long id) {
	_id = id;
    }

    public void setInvoice(Invoice invoice) {
	_invoice = invoice;
    }

    public void setProductOrders(List<ProductOrder> productOrders) {
	_productOrders = productOrders;
    }

    public void setSupplier(Supplier supplier) {
	_supplier = supplier;
    }
    
    public void appendProductOrder(ProductOrder order) {
	_productOrders.add(order);
    }

}
