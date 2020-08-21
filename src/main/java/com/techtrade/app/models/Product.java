package com.techtrade.app.models;

import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.URL;

@Entity
public class Product {

    @Column(name = "AVAILABLE_FOR_SALE")
    private boolean _availableForSale = true;

    @Column(name = "DATE_INSERTED", nullable = true)
    private Date _dateInserted;

    @Column(name = "PRICE_DISCOUNT_")
    private byte _discount;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "_product", orphanRemoval = true)
    private List<DiscountPermission> _discPermissions;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private long _id;

    @Column(name = "IMAGE_PATH")
    private String _imagePath;

    @Column(name = "LATEST_DISCOUNT_CHECK_DATE")
    private Date _latestDiscountCheckDate;
    
    @Column(name = "LATEST_DISCOUNT_DATE")
    private Date _latestDiscountDate;

    @Column(name = "LATEST_SOLD_DATE")
    private Date _latestSoldDate;

    @Size(min = 1, max = 60)
    @Column(name = "NAME", unique = true, nullable = false)
    private String _name;

    @Column(name = "PRICE", nullable = false)
    private double _price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PRODUCER_ID")
    private Producer _producer;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "_product")
    private Set<ProductOrder> _productOrder;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PRODUCT_TYPE_ID")
    private ProductType _productType;

    @Column(name = "PRODUCT_URL")
    @URL
    private String _productURL;

    @Column(name = "PROPERTIES")
    private String _properties;

    @Column(name = "QUANTITY", nullable = false)
    private int _quantity;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "_product")
    private Set<SoldProduct> _soldProduct;

    @Column(name = "TO_BE_DISCOUNTED")
    private boolean _toBeDiscounted = false;

    @Column(name = "VENDOR_PRICE")
    private Double _vendorPrice = 0.0;

    @Column(name = "WARRANTY")
    private int _warranty;

    public Date getDateInserted() {
        return _dateInserted;
    }

    public byte getDiscount() {
	return _discount;
    }

    public List<DiscountPermission> getDiscPermissions() {
	return _discPermissions;
    }

    public long getId() {
	return _id;
    }

    public String getImagePath() {
	return _imagePath;
    }

    public Date getLatestDiscountCheckDate() {
	return _latestDiscountCheckDate;
    }

    public Date getLatestDiscountDate() {
	return _latestDiscountDate;
    }

    public Date getLatestSoldDate() {
	return _latestSoldDate;
    }

    public String getName() {
	return _name;
    }

    public double getPrice() {
	return _price;
    }

    public Producer getProducer() {
	return _producer;
    }

    public Set<ProductOrder> getProductOrder() {
	return _productOrder;
    }

    public ProductType getProductType() {
	return _productType;
    }

    public String getProductURL() {
	return _productURL;
    }

    public String getProperties() {
	return _properties;
    }

    public int getQuantity() {
	return _quantity;
    }

    public Set<SoldProduct> getSoldProduct() {
	return _soldProduct;
    }

    public double getVendorPrice() {
	return _vendorPrice;
    }

    public int getWarranty() {
	return _warranty;
    }

    public boolean isAvailableForSale() {
	return _availableForSale;
    }

    public boolean isToBeDiscounted() {
	return _toBeDiscounted;
    }

    @PrePersist
    protected void onCreate() {
	//_latestSoldDate = new Date();
	_dateInserted = new Date();
    }

    public void setAvailableForSale(boolean availableForSale) {
	_availableForSale = availableForSale;
    }

    public void setDateInserted(Date dateInserted) {
        _dateInserted = dateInserted;
    }

    public void setDiscount(byte discount) {
	_discount = discount;
    }

    public void setDiscPermissions(List<DiscountPermission> discPermissions) {
	_discPermissions = discPermissions;
    }

    public void setId(long id) {
	_id = id;
    }

    public void setImagePath(String imagePath) {
	_imagePath = imagePath;
    }

    public void setLatestDiscountCheckDate(Date latestDiscountCheckDate) {
	_latestDiscountCheckDate = latestDiscountCheckDate;
    }

    public void setLatestDiscountDate(Date latestDiscountDate) {
	_latestDiscountDate = latestDiscountDate;
    }

    public void setLatestSoldDate(Date latestSoldDate) {
	_latestSoldDate = latestSoldDate;
    }

    public void setName(String name) {
	_name = name;
    }

    public void setPrice(double price) {
	_price = price;
    }

    public void setProducer(Producer producer) {
	_producer = producer;
    }

    public void setProductOrder(Set<ProductOrder> productOrder) {
	_productOrder = productOrder;
    }

    public void setProductType(ProductType productType) {
	_productType = productType;
    }

    public void setProductURL(String productUrl) {
	_productURL = productUrl;
    }

    public void setProperties(String properties) {
	_properties = properties;
    }

    public void setQuantity(int quantity) {
	_quantity = quantity;
    }

    public void setSoldProduct(Set<SoldProduct> soldProduct) {
	_soldProduct = soldProduct;
    }

    public void setToBeDiscounted(boolean toBeDiscounted) {
	_toBeDiscounted = toBeDiscounted;
    }

    public void setVendorPrice(double vendorPrice) {
	_vendorPrice = vendorPrice;
    }

    public void setWarranty(int warranty) {
	_warranty = warranty;
    }
}
