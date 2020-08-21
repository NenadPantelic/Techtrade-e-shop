package com.techtrade.app.dto.response;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.techtrade.app.models.Bill;
import com.techtrade.app.models.Invoice;
import com.techtrade.app.models.Producer;
import com.techtrade.app.models.Product;
import com.techtrade.app.models.ProductOrder;
import com.techtrade.app.models.ProductType;
import com.techtrade.app.models.SoldProduct;
import com.techtrade.app.models.Supplier;
import com.techtrade.app.models.SupplyOrder;
import com.techtrade.app.models.User;

public class ResponseFactory {

    public static InvoiceResponse produceInvoiceResponse(Invoice invoice) {
	return new InvoiceResponse(invoice);
    }

    public static SupplierResponse produceSupplierResponse(Supplier supplier) {
	return new SupplierResponse(supplier);
    }

    public static ProducerResponse produceProducerResponse(Producer producer) {
	return new ProducerResponse(producer);
    }

    public static ProductTypeResponse produceProductTypeResponse(ProductType type) {
	return new ProductTypeResponse(type);
    }

    public static SoldProductResponse productSoldProducResponse(SoldProduct sp) {
	return new SoldProductResponse(sp);
    }

    public static BillResponse productBillResponse(Bill bill) throws ParseException {
	return new BillResponse(bill);
    }

    public static AbstractResponse produceResponse(Object object) throws ParseException {
	
	if(object.getClass() == Bill.class) return new BillResponse((Bill) object);
	if(object.getClass() == SoldProduct.class) return new SoldProductResponse((SoldProduct) object);
	if(object.getClass() == ProductType.class) return new ProductTypeResponse((ProductType) object);
	if(object.getClass() == Producer.class) return new ProducerResponse((Producer) object);
	if(object.getClass() == Invoice.class) return new InvoiceResponse((Invoice) object);
	if(object.getClass() == Supplier.class) return new SupplierResponse((Supplier) object);
	if(object.getClass() == User.class) return new UserResponse((User) object);
	if(object.getClass() == ProductOrder.class) return new ProductOrderResponse((ProductOrder) object);
	if(object.getClass() == SupplyOrder.class) return new SupplyOrderResponse((SupplyOrder) object);
	if(object.getClass() == Product.class) return new ProductResponse((Product) object);
	
	return null;
    }

    
    
}
