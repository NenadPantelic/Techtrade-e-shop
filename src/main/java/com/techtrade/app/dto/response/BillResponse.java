package com.techtrade.app.dto.response;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.techtrade.app.models.Bill;
import com.techtrade.app.models.SoldProduct;
import com.techtrade.app.utils.HelperUtils;

public class BillResponse extends AbstractResponse {

    private String _cashier;
    // private String _filePath;
    private long _id;
    private double _price;
    private String _saleDate;
    private List<SoldProductResponse> _soldProducts;

    public BillResponse(Bill bill) throws ParseException {
	_id = bill.getId();
	_price = bill.getPrice();
	_soldProducts = new ArrayList<SoldProductResponse>();
	for (SoldProduct product : bill.getSoldProducts()) {
	    _soldProducts.add(ResponseFactory.productSoldProducResponse(product));
	}
	_saleDate = HelperUtils.formatDate(bill.getDate());
	_cashier = bill.getCashier();

    }

    public String getCashier() {
        return _cashier;
    }

    public long getId() {
	return _id;
    }

    public double getPrice() {
	return _price;
    }

    public String getSaleDate() {
        return _saleDate;
    }

    public List<SoldProductResponse> getSoldProducts() {
	return _soldProducts;
    }

    public void setCashier(String cashier) {
        _cashier = cashier;
    }

    public void setId(long id) {
	_id = id;
    }

    public void setPrice(double price) {
	_price = price;
    }

    public void setSaleDate(String saleDate) {
        _saleDate = saleDate;
    }

    public void setSoldProducts(List<SoldProductResponse> soldProducts) {
	_soldProducts = soldProducts;
    }

}
