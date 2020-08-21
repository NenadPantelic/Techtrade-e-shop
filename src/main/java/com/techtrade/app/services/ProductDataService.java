package com.techtrade.app.services;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techtrade.app.DAO.ProducerRepository;
import com.techtrade.app.DAO.ProductTypeRepository;
import com.techtrade.app.DAO.SupplierRepository;
import com.techtrade.app.dto.request.ProducerRequest;
import com.techtrade.app.dto.request.ProductTypeRequest;
import com.techtrade.app.dto.request.SupplierRequest;
import com.techtrade.app.dto.response.AbstractResponse;
import com.techtrade.app.dto.response.ProducerResponse;
import com.techtrade.app.dto.response.ProductTypeResponse;
import com.techtrade.app.dto.response.ResponseFactory;
import com.techtrade.app.dto.response.SupplierResponse;
import com.techtrade.app.models.Producer;
import com.techtrade.app.models.ProductType;
import com.techtrade.app.models.Supplier;

@Service
public class ProductDataService {

    @Autowired
    private ProducerRepository _producerRepo;

    @Autowired
    private ProductTypeRepository _productTypeRepo;

    @Autowired
    private SupplierRepository _supplierRepo;

    private SupplierRepository getSupplierRepo() {
	return _supplierRepo;
    }

    public ProducerRepository getProducerRepo() {
	return _producerRepo;
    }

    public ProductTypeRepository getProductTypeRepo() {
	return _productTypeRepo;
    }

    /* producers region */
    public void addProducer(ProducerRequest request) {
	Producer producer = new Producer(request.getName());
	getProducerRepo().save(producer);
    }

    public Set<AbstractResponse> getAllProducers() throws ParseException {
	Iterator<Producer> iter = getProducerRepo().findAll().iterator();
	Set<AbstractResponse> producers = new HashSet<AbstractResponse>();
	while (iter.hasNext()) {
	    producers.add(ResponseFactory.produceResponse(iter.next()));
	}
	return producers;
    }

    public ProducerResponse getProducer(long id) {

	return ResponseFactory.produceProducerResponse(getProducerRepo().findById(id).get());

    }

    public void deleteProducer(long id) {
	getProducerRepo().deleteById(id);
    }

    public void initProducers() {

	String names[] = { "Sony", "Hamma", "Huawei", "Logitech", "Genius", "Kingston", "SAMSUNG" };
	for (String val : names) {

	    Producer p = new Producer(val);
	    getProducerRepo().save(p);
	}
    }

    public Producer getObjectById(long id) {
	Producer producer = getProducerRepo().findById(id).get();
	return producer;
    }

    /* product types region */
    @Transactional
    public void addProductType(ProductTypeRequest request) {
	ProductType productType = new ProductType(request.getName());
	// productType.setName();
	getProductTypeRepo().save(productType);
    }

    public List<AbstractResponse> getAllProductTypes() throws ParseException {
	Iterator<ProductType> ptIter = getProductTypeRepo().findAll().iterator();
	List<AbstractResponse> productTypes = new ArrayList<AbstractResponse>();
	while (ptIter.hasNext()) {
	    productTypes.add(ResponseFactory.produceResponse(ptIter.next()));
	}
	return productTypes;
    }

    public AbstractResponse getProductType(long id) throws ParseException {
	return ResponseFactory.produceResponse(getProductTypeRepo().findById(id).get());
    }

    public void deleteProductType(long id) {
	getProductTypeRepo().deleteById(id);
    }

    @Transactional
    public boolean addSupplier(SupplierRequest request) {
	Supplier sup = new Supplier(request.getName(), request.getEmail());
	getSupplierRepo().save(sup);
	return true;
    }

    public AbstractResponse getSupplier(long id) throws ParseException {
	return ResponseFactory.produceResponse(getSupplierRepo().findById(id).get());
    }

    public List<SupplierResponse> getAllSuppliers() throws ParseException {
	List<SupplierResponse> suppliers = new ArrayList<SupplierResponse>();
	Iterator<Supplier> supplierIter = getSupplierRepo().findAll().iterator();
	while (supplierIter.hasNext()) {
	    suppliers.add((SupplierResponse) ResponseFactory.produceResponse(supplierIter.next()));
	}
	return suppliers;

    }

    public void deleteSupplier(long id) {
	getSupplierRepo().deleteById(id);
    }

    public void initProductTypes() {

	String names[] = { "KEYBOARD", "MOUSE", "PRINTER", "SCANNER", "PROJECTOR", "DISPLAY", "EXTERNAL_DRIVES",
		"HEADPHONES", "SPEAKERS", "MEMORY", "CABLE", "ADAPTER", "MICROPHONE", "CAMERA", "FLASH_MEMORY",
		"GRAPHICS CARD", "SOUND CARD", "NETWORK CARD", "RAM MEMORY", "MOTHERBOARD", "CPU" };

	for (String val : names) {

	    ProductType p = new ProductType(val);
	    getProductTypeRepo().save(p);
	}
    }

    public void initSuppliers() {
	String supplierEmail = "564.2015@fink.rs";
	String names[] = { "EMMI SHOP", "GIGATRON", "WIN-WIN" };
	for (String val : names) {
	    Supplier s = new Supplier(val, supplierEmail);
	    getSupplierRepo().save(s);
	}
    }

}
