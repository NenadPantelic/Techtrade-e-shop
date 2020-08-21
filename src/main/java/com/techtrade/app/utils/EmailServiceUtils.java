package com.techtrade.app.utils;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import com.techtrade.app.DAO.SupplyOrderRepository;
import com.techtrade.app.models.ProductOrder;
import com.techtrade.app.models.Supplier;
import com.techtrade.app.models.SupplyOrder;

@Component
public class EmailServiceUtils {

    @Autowired
    private JavaMailSender _emailSender;

    @Autowired
    private SupplyOrderRepository _supplyOrderRepo;

    private JavaMailSender getEmailSender() {
	return _emailSender;
    }

    private SupplyOrderRepository getProductOrderRepo() {
	return _supplyOrderRepo;
    }

    public String makeHeader(Supplier supplier) {

	return "-------" + makeSubject(supplier).toUpperCase() + "-------\n";

    }

    public String makeSubject(Supplier supplier) {
	int noOfOrders = getProductOrderRepo().findBy_supplier(supplier).size();
	return "SUPPLY ORDER NO " + noOfOrders;

    }

    public String prepareTextForEmail(List<ProductOrder> items, SupplyOrder so) {
	StringBuilder sb = new StringBuilder();
	sb.append(makeHeader(so.getSupplier()));
	sb.append("ORDER FROM: " + so.getSupplier().getName() + "\n");
	sb.append("ORDER LIST:\n");
	for (ProductOrder item : items) {
	    sb.append("ITEM: " + item.getProduct().getName() + ", QUANTITY = " + item.getQuantity() + "\n");
	}
	sb.append("DATE: " + so.getDateCreated());
	return sb.toString();

    }

    public void sendAnEmail(List<ProductOrder> items, SupplyOrder so) {

	SimpleMailMessage message = new SimpleMailMessage();
	message.setTo(so.getSupplier().getEmail());
	message.setSubject(makeSubject(so.getSupplier()));
	message.setText(prepareTextForEmail(items, so));
	getEmailSender().send(message);

    }

}
