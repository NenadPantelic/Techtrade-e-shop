package com.techtrade.app.controllers;

import java.io.ByteArrayInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.ParseException;
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
import org.springframework.web.bind.annotation.RestController;

import com.itextpdf.text.DocumentException;
import com.techtrade.app.authorization.UserRole;
import com.techtrade.app.dto.request.BasketRequest;
import com.techtrade.app.dto.request.ProductSubstituteRequest;
import com.techtrade.app.dto.response.AbstractResponse;
import com.techtrade.app.dto.response.BillResponse;
import com.techtrade.app.dto.response.ProductSubstituteResponse;
import com.techtrade.app.models.UserType;
import com.techtrade.app.services.ShoppingService;

@RestController
public class ShoppingController {

    @Autowired
    ShoppingService _shoppingService;

    private ShoppingService getShoppingService() {
	return _shoppingService;
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.WORKER, UserType.MANAGER })
    @PostMapping("/buy")
    public BillResponse buy(@RequestBody List<BasketRequest> shoppingCart)
	    throws FileNotFoundException, DocumentException, ParseException {

	return getShoppingService().sellProducts(shoppingCart);
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.WORKER })
    @GetMapping("/bills/")
    public List<AbstractResponse> getBills() throws ParseException {
	return getShoppingService().getBills();
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.WORKER })
    @GetMapping("/bills/{id}/")
    public AbstractResponse getBill(@PathVariable("id") long id) throws ParseException {
	return getShoppingService().getBill(id);
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN })
    @DeleteMapping("/bills/{id}/")
    public void deleteBills(@PathVariable("id") long id) {
	getShoppingService().deleteBill(id);
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.WORKER })
    @GetMapping(value = "/bills/{id}/pdf", produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<InputStreamResource> getBillPDF(@PathVariable("id") long id) throws IOException {
	ByteArrayInputStream bis = getShoppingService().getBillPDF(id);

	HttpHeaders headers = new HttpHeaders();
	headers.add("Content-Disposition", "inline; filename=bill_report.pdf");

	return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
		.body(new InputStreamResource(bis));

    }

    /* helper endpont */
    @UserRole(roles = { UserType.OWNER, UserType.ADMIN })
    @DeleteMapping("/soldproducts/")
    public void deleteSoldProducts() {
	getShoppingService().deleteAllSoldProducts();
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.WORKER })
    @PostMapping("/soldproducts/substitute/")
    public ProductSubstituteResponse productChange(@RequestBody ProductSubstituteRequest request)
	    throws FileNotFoundException, DocumentException, ParseException {
	return getShoppingService().changeProduct(request);

    }

}
