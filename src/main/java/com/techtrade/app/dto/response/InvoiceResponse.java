package com.techtrade.app.dto.response;

import java.util.ArrayList;
import java.util.List;

import com.techtrade.app.models.Invoice;
import com.techtrade.app.models.ProductOrder;

public class InvoiceResponse extends AbstractResponse{

    private long _id;
    private List<String> _orderedProducts;
    private String _supplier;
    //private String _filePath;
    /*
    public String getFilePath() {
        return _filePath;
    }

    public void setFilePath(String filePath) {
        _filePath = filePath;
    }
*/
    public String getSupplier() {
        return _supplier;
    }

    public void setSupplier(String supplier) {
        _supplier = supplier;
    }

    public InvoiceResponse() {
    }

    public InvoiceResponse(Invoice invoice) {
	_id = invoice.getId();
	_orderedProducts = new ArrayList<String>();
	for (ProductOrder order : invoice.getSupplyOrder().getProductOrders()) {
	    _orderedProducts.add(order.getProduct().getName());
	}
	_supplier = invoice.getSupplyOrder().getSupplier().getName();
	//_filePath = invoice.getFilePath();
    }

    public long getId() {
	return _id;
    }

    public void setId(long id) {
	_id = id;
    }

    public List<String> getOrderedProducts() {
	return _orderedProducts;
    }

    public void setOrderedProducts(List<String> orderedProducts) {
	_orderedProducts = orderedProducts;
    }

}
