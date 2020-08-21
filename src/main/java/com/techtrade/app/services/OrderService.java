package com.techtrade.app.services;

import java.io.ByteArrayInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itextpdf.text.DocumentException;
import com.techtrade.app.DAO.InvoiceRepository;
import com.techtrade.app.DAO.ProductOrderRepository;
import com.techtrade.app.DAO.SupplierRepository;
import com.techtrade.app.DAO.SupplyOrderRepository;
import com.techtrade.app.dto.request.OrderRequest;
import com.techtrade.app.dto.request.SupplyOrderRequest;
import com.techtrade.app.dto.response.AbstractResponse;
import com.techtrade.app.dto.response.ProductOrderResponse;
import com.techtrade.app.dto.response.ResponseFactory;
import com.techtrade.app.dto.response.SupplyOrderResponse;
import com.techtrade.app.exceptions.ExceptionType;
import com.techtrade.app.exceptions.ServerException;
import com.techtrade.app.models.Invoice;
import com.techtrade.app.models.OrderState;
import com.techtrade.app.models.ProductOrder;
import com.techtrade.app.models.Supplier;
import com.techtrade.app.models.SupplyOrder;
import com.techtrade.app.utils.EmailServiceUtils;
import com.techtrade.app.utils.HelperUtils;
import com.techtrade.app.utils.PDFCreator;

@Service
public class OrderService {

    @Autowired
    private EmailServiceUtils _emailService;

    @Autowired
    private InvoiceRepository _invoiceRepo;

    @Autowired
    ProductOrderRepository _productOrderRepo;

    @Autowired
    private ProductService _productService;

    @Autowired
    SupplierRepository _supplierRepo;

    @Autowired
    SupplyOrderRepository _supplyOrderRepo;

    @Autowired
    private UserService _userService;

    private final String INVOICE_NAME_PREFIX = "resources/invoices/INVOICE_";

    private ProductOrderRepository getProductOrderRepo() {
	return _productOrderRepo;
    }

    private ProductService getProductService() {
	return _productService;
    }

    private SupplierRepository getSupplierRepo() {
	return _supplierRepo;
    }

    private SupplyOrderRepository getSupplyOrderRepo() {
	return _supplyOrderRepo;
    }

    private UserService getUserService() {
	return _userService;
    }

    public AbstractResponse createInvoice(long id) throws FileNotFoundException, DocumentException, ParseException {
	SupplyOrder supOrd = getSupplyOrderRepo().findById(id).get();

	for (ProductOrder order : supOrd.getProductOrders()) {
	    getProductService().updateProductQuantity(order.getProduct(), order.getQuantity());
	    order.setOrderState(OrderState.COMPLETED);
	}

	supOrd.setDateArrived(new Date());
	supOrd.setArrived(true);
	getSupplyOrderRepo().save(supOrd);

	Invoice invoice = new Invoice();
	invoice.setSupplyOrder(supOrd);
	PDFCreator creator = new PDFCreator();
	getInvoiceRepo().save(invoice);
	invoice.setFilePath(INVOICE_NAME_PREFIX + invoice.getId() + ".pdf");
	getInvoiceRepo().save(invoice);
	String user = getUserService().currentUserName();
	creator.createPDF(creator.prepareDataForInsertion(invoice), "INVOICE_" + Long.toString(invoice.getId()), user);
	return (ResponseFactory.produceResponse(invoice));

    }

    public void deleteAllInvoces() {
	getInvoiceRepo().deleteAll();

    }

    public ArrayList<ProductOrderResponse> getAllProductOrders(String status) throws ParseException {
	HashMap<String, OrderState> statuses = new HashMap<String, OrderState>() {
	    /**
	     * 
	     */
	    private static final long serialVersionUID = 1L;

	    {
		put("inactive", OrderState.INACTIVE);
		put("ordered", OrderState.ORDERED);
		put("completed", OrderState.COMPLETED);
	    }

	};

	Iterable<ProductOrder> productOrders = getProductOrderRepo().findAll();
	if (statuses.containsKey(status)) {
	    productOrders = getProductOrderRepo().findBy_orderState(statuses.get(status));

	}
	Iterator<ProductOrder> orderIter = productOrders.iterator();
	ArrayList<ProductOrderResponse> orderList = new ArrayList<ProductOrderResponse>();
	while (orderIter.hasNext()) {
	    orderList.add((ProductOrderResponse) ResponseFactory.produceResponse(orderIter.next()));
	}
	return orderList;
    }

    private EmailServiceUtils getEmailService() {
	return _emailService;
    }

    public AbstractResponse getInvoice(long id) throws ParseException {
	return ResponseFactory.produceResponse(getInvoiceRepo().findById(id).get());
    }

    public ByteArrayInputStream getInvoicePDF(long id) throws IOException {
	return HelperUtils.getPDF(getInvoiceRepo().findById(id).get().getFilePath());

    }

    private InvoiceRepository getInvoiceRepo() {
	return _invoiceRepo;
    }

    public List<AbstractResponse> getInvoices() throws ParseException {
	Iterator<Invoice> invoiceIter = getInvoiceRepo().findAll().iterator();
	List<AbstractResponse> invoiceList = new ArrayList<AbstractResponse>();
	while (invoiceIter.hasNext()) {
	    invoiceList.add(ResponseFactory.produceResponse(invoiceIter.next()));
	}
	return invoiceList;
    }

    public AbstractResponse getOrder(long id) throws ParseException {

	SupplyOrder supOrd = getSupplyOrderRepo().findById(id).get();
	return ResponseFactory.produceResponse(supOrd);
    }

    public ArrayList<AbstractResponse> getOrders(boolean arrived) throws ParseException {

	Iterator<SupplyOrder> ordersIter = getSupplyOrderRepo().findBy_arrived(arrived).iterator();
	ArrayList<AbstractResponse> orderResponseList = new ArrayList<AbstractResponse>();
	while (ordersIter.hasNext()) {
	    orderResponseList.add(ResponseFactory.produceResponse(ordersIter.next()));
	}
	return orderResponseList;
    }

    public SupplyOrderResponse makeCompleteOrder(SupplyOrderRequest orders) throws ParseException {

	SupplyOrder supplyOrder = new SupplyOrder();
	Supplier s = getSupplierRepo().findById(orders.getSupplierID()).get();
	supplyOrder.setSupplier(s);
	List<OrderRequest> ordersList = orders.getOrders();
	if (ordersList.isEmpty()) {
	    throw new ServerException("Order must contain products.", ExceptionType.INVALID_VALUE);
	}
	ArrayList<ProductOrder> orderList = new ArrayList<ProductOrder>();
	for (OrderRequest order : ordersList) {
	    ProductOrder prOrder = getProductOrderRepo().findById(order.getOrderID()).get();
	    if (prOrder.getOrderState() != OrderState.INACTIVE)
		throw new ServerException("Order with id = " + prOrder.getId() + " is already processed.",
			ExceptionType.INVALID_VALUE);
	    if (order.getQuantity() <= 0) {
		throw new ServerException("Order [id = " + order.getOrderID() + "] error. Quantity must be greater than 0.", ExceptionType.INVALID_VALUE);
	    }
	    prOrder.setQuantity(order.getQuantity());
	    orderList.add(prOrder);
	}

	/*
	 * just for data integrity purpose, if status of order was changed in the
	 * previous loop, and If some error happened there, some orders would be set to
	 * false status, but the operation needs to be atomic - everything or nothing
	 */

	getSupplyOrderRepo().save(supplyOrder);
	for (ProductOrder prOrder : orderList) {

	    prOrder.setSupplyOrder(supplyOrder);
	    supplyOrder.appendProductOrder(prOrder);
	    prOrder.setOrderState(OrderState.ORDERED);
	    getProductOrderRepo().save(prOrder);

	}
	getEmailService().sendAnEmail(orderList, supplyOrder);
	return (SupplyOrderResponse) ResponseFactory.produceResponse(supplyOrder);
    }

}
