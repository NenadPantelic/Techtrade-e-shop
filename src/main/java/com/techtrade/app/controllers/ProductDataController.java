package com.techtrade.app.controllers;

import java.text.ParseException;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.techtrade.app.authorization.UserRole;
import com.techtrade.app.dto.request.ProducerRequest;
import com.techtrade.app.dto.request.ProductTypeRequest;
import com.techtrade.app.dto.request.SupplierRequest;
import com.techtrade.app.dto.response.AbstractResponse;
import com.techtrade.app.dto.response.ProducerResponse;
import com.techtrade.app.dto.response.ProductTypeResponse;
import com.techtrade.app.dto.response.SupplierResponse;
import com.techtrade.app.models.ProductType;
import com.techtrade.app.models.UserType;
import com.techtrade.app.services.ProductDataService;

@RestController
public class ProductDataController {

    @Autowired
    private ProductDataService _productDataService;

    private ProductDataService getProductDataService() {
	return _productDataService;
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN })
    @PostMapping("/producers/")
    public boolean addProducer(@RequestBody ProducerRequest request) {
	getProductDataService().addProducer(request);
	return true;
    }

    @GetMapping("/producers/")
    public Set<AbstractResponse> getProducers() throws ParseException {
	return getProductDataService().getAllProducers();
    }

    @GetMapping("/producers/{id}")
    public ProducerResponse getProducer(@PathVariable("id") long id) {
	return getProductDataService().getProducer(id);
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN })
    @DeleteMapping("/producers/{id}")
    public void deleteProduct(@PathVariable("id") long id) {
	getProductDataService().deleteProducer(id);
    }

    /* product type */
    @UserRole(roles = { UserType.OWNER, UserType.ADMIN })
    @PostMapping("/product_types/")
    public boolean addProductType(@RequestBody ProductTypeRequest request) {
	getProductDataService().addProductType(request);
	return true;
    }

    @GetMapping("/product_types/")
    public List<AbstractResponse> getProductTypes() throws ParseException {
	return getProductDataService().getAllProductTypes();
    }

    @GetMapping("/product_types/{id}")
    public AbstractResponse getProductType(@PathVariable("id") long id) throws ParseException {
	return getProductDataService().getProductType(id);
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN })
    @DeleteMapping("/product_types/{id}")
    public void deleteProductType(@PathVariable("id") long id) {
	getProductDataService().deleteProductType(id);
    }

    /* suppliers */
    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.MANAGER })
    @PostMapping("/suppliers/")
    public boolean addSupplier(@RequestBody SupplierRequest request) {
	return getProductDataService().addSupplier(request);

    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.MANAGER })
    @GetMapping("/suppliers/")
    public List<SupplierResponse> getSuppliers() throws ParseException {
	return getProductDataService().getAllSuppliers();
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.MANAGER })
    @GetMapping("/suppliers/{id}/")
    public AbstractResponse getSupplier(@PathVariable("id") long id) throws ParseException {
	return getProductDataService().getSupplier(id);
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.MANAGER })
    @DeleteMapping("/suppliers/{id}/")
    public void deleteSupplier(@PathVariable("id") long id) {
	getProductDataService().deleteSupplier(id);
    }

    /* helper endpoint for init */
    @UserRole(roles = { UserType.OWNER, UserType.ADMIN })
    @PostMapping("/init_data")
    public void initData() {
	getProductDataService().initProducers();
	getProductDataService().initProductTypes();
	getProductDataService().initSuppliers();
    }
}
