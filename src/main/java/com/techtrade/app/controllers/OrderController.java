package com.techtrade.app.controllers;

import java.io.ByteArrayInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.itextpdf.text.DocumentException;
import com.techtrade.app.authorization.UserRole;
import com.techtrade.app.dto.request.SupplyOrderRequest;
import com.techtrade.app.dto.response.AbstractResponse;
import com.techtrade.app.dto.response.ProductOrderResponse;
import com.techtrade.app.dto.response.SupplyOrderResponse;
import com.techtrade.app.models.UserType;
import com.techtrade.app.services.OrderService;

@RestController
public class OrderController {

    @Autowired
    private OrderService _orderService;

    private OrderService getOrderService() {
	return _orderService;
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.MANAGER })
    @GetMapping("/product_orders/")
    public ArrayList<ProductOrderResponse> getAllProductOrders(@RequestParam("status") String status)
	    throws ParseException {
	return getOrderService().getAllProductOrders(status);
    }

    /* orders endpoints */
    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.MANAGER })
    @PostMapping("/orders/")
    public SupplyOrderResponse makeOrder(@RequestBody SupplyOrderRequest orders) throws ParseException {
	return getOrderService().makeCompleteOrder(orders);
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.MANAGER })
    @GetMapping("/orders/")
    public ArrayList<AbstractResponse> getOrders(@RequestParam("arrived") boolean arrived) throws ParseException {
	return getOrderService().getOrders(arrived);
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.MANAGER })
    @GetMapping("/orders/{id}/")
    public AbstractResponse makeOrder(@PathVariable("id") long id) throws ParseException {
	return getOrderService().getOrder(id);
    }

    /* invoices endpoints */
    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.MANAGER })
    @GetMapping("/orders/{id}/invoice")
    public AbstractResponse makeInvoice(@PathVariable("id") long id)
	    throws FileNotFoundException, DocumentException, ParseException {
	return getOrderService().createInvoice(id);
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.MANAGER })
    @GetMapping("/invoices/")
    public List<AbstractResponse> getInvoices() throws ParseException {
	return getOrderService().getInvoices();
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.MANAGER })
    @GetMapping("/invoices/{id}/")
    public AbstractResponse getInvoice(@PathVariable("id") long id) throws ParseException {
	return getOrderService().getInvoice(id);
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.MANAGER })
    @GetMapping(value = "/invoices/{id}/pdf", produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<InputStreamResource> getBillPDF(@PathVariable("id") long id) throws IOException {
	ByteArrayInputStream bis = getOrderService().getInvoicePDF(id);

	HttpHeaders headers = new HttpHeaders();
	headers.add("Content-Disposition", "inline; filename=invoice_report.pdf");

	return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
		.body(new InputStreamResource(bis));

    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.MANAGER })
    @DeleteMapping("/invoices/")
    public void deleteAllInvoices() {
	getOrderService().deleteAllInvoces();
    }

}
