package com.techtrade.app.services;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itextpdf.text.DocumentException;
import com.techtrade.app.DAO.BillRepository;
import com.techtrade.app.DAO.ProductRepository;
import com.techtrade.app.DAO.SoldProductRepository;
import com.techtrade.app.builder.BillAndSoldProductBuilder;
import com.techtrade.app.dto.request.BasketRequest;
import com.techtrade.app.dto.request.ProductSubstituteRequest;
import com.techtrade.app.dto.response.AbstractResponse;
import com.techtrade.app.dto.response.BillResponse;
import com.techtrade.app.dto.response.ProductSubstituteResponse;
import com.techtrade.app.dto.response.ResponseFactory;
import com.techtrade.app.exceptions.ExceptionChecker;
import com.techtrade.app.exceptions.ExceptionType;
import com.techtrade.app.exceptions.ServerException;
import com.techtrade.app.models.Bill;
import com.techtrade.app.models.Product;
import com.techtrade.app.models.SoldProduct;
import com.techtrade.app.utils.HelperUtils;
import com.techtrade.app.utils.PDFCreator;

@Service
public class ShoppingService {

    private final  String BILL_NAME_PREFIX = "resources/bills/BILL_";

    @Autowired
    private BillRepository _billRepo;

    @Autowired
    private ProductRepository _productRepo;

    @Autowired
    private SoldProductRepository _soldProductRepo;

    @Autowired
    private UserService _userService;

    public Bill addSoldProduct(Bill bill, SoldProduct product) {
	bill.getSoldProducts().add(product);
	return bill;
    }

    public ProductSubstituteResponse changeProduct(ProductSubstituteRequest request)
	    throws FileNotFoundException, DocumentException, ParseException {

	Set<SoldProduct> soldProds = getBillRepo().findById(request.getBillId()).get().getSoldProducts();
	SoldProduct soldProduct = soldProds.stream().filter(x -> request.getOldProduct().equals(x.getId())).findFirst()
		.get();
	if (soldProduct.isReturned()) {
	    throw new ServerException("This product is already returned back.", ExceptionType.INVALID_VALUE);
	}

	soldProduct.setReturned(true);
	Product p = soldProduct.getProduct();
	double price = soldProduct.getPrice();
	p.setQuantity(p.getQuantity() + 1);
	getProductRepo().save(p);
	getSoldProductRepo().save(soldProduct);

	BillResponse billResp = sellProducts(
		new ArrayList<BasketRequest>(Arrays.asList(new BasketRequest(request.getNewProduct(), 1))));

	return new ProductSubstituteResponse(billResp, price);

    }

    public Bill commit(List<SoldProduct> productsForSale, List<Product> products, Bill bill) {
	Product p;
	for (int i = 0; i < productsForSale.size(); i++) {
	    getSoldProductRepo().save(productsForSale.get(i));
	    getProductRepo().save(products.get(i));
	    bill = addSoldProduct(bill, productsForSale.get(i));
	}
	return bill;
    }

    public void deleteAllSoldProducts() {
	getSoldProductRepo().deleteAll();
    }

    public void deleteBill(long id) {
	Bill bill = getBillRepo().findById(id).get();
	String path = bill.getFilePath();
	getBillRepo().delete(bill);
	HelperUtils.deletePDFFile(path);
    }

    public void deleteBills() {
	getBillRepo().deleteAll();
    }

    public AbstractResponse getBill(long id) throws ParseException {
	return ResponseFactory.produceResponse(getBillRepo().findById(id).get());
    }

    public ByteArrayInputStream getBillPDF(long id) throws IOException {
	return HelperUtils.getPDF(getBillRepo().findById(id).get().getFilePath());
    }

    private BillRepository getBillRepo() {
	return _billRepo;
    }

    public List<AbstractResponse> getBills() throws ParseException {
	Iterator<Bill> billIterator = getBillRepo().findAll().iterator();
	List<AbstractResponse> bills = new ArrayList<AbstractResponse>();
	while (billIterator.hasNext()) {
	    bills.add(ResponseFactory.produceResponse(billIterator.next()));
	}
	return bills;

    }

    public String getFilePath(long id) {
	return getBillRepo().findById(id).get().getFilePath();
    }

    private ProductRepository getProductRepo() {
	return _productRepo;
    }

    private SoldProductRepository getSoldProductRepo() {
	return _soldProductRepo;
    }

    private UserService getUserService() {
	return _userService;
    }

    public BillResponse sellProducts(List<BasketRequest> basket)
	    throws FileNotFoundException, DocumentException, ParseException {

	Bill bill = new Bill();
	getBillRepo().save(bill);
	double price = 0.0;
	List<SoldProduct> productsForSale = new ArrayList<SoldProduct>();
	List<Product> products = new ArrayList<Product>();

	for (BasketRequest basketRequest : basket) {
	    Product product = getProductRepo().findById(basketRequest.getProductID()).get();
	    ExceptionChecker.checkProductAvailability(product);

	    int quantity = basketRequest.getQuantity();
	    if (product.getQuantity() - quantity < 0) {
		getBillRepo().delete(bill);
		throw new ServerException("Item id = " + product.getId()
			+ " has no enough quantity for this shopping! Max quanntity for this item is "
			+ product.getQuantity() + ".", ExceptionType.INVALID_VALUE);

	    }
	    SoldProduct soldProduct = BillAndSoldProductBuilder.buildSoldProduct(product, quantity, bill);
	    // getSoldProductRepo().save(soldProduct);
	    productsForSale.add(soldProduct);
	    price += quantity * product.getPrice();
	    // bill = addSoldProduct(bill, soldProduct);
	    product.setQuantity(product.getQuantity() - quantity);
	    product.setLatestSoldDate(new Date());
	    // getProductRepo().save(product);
	    products.add(product);
	}
	bill = commit(productsForSale, products, bill);
	bill.setCashier(HelperUtils.getUserFromContext());
	bill.setPrice(price);
	String user = getUserService().currentUserName();
	bill.setFilePath(BILL_NAME_PREFIX + bill.getId() + ".pdf");
	getBillRepo().save(bill);
	PDFCreator creator = new PDFCreator();
	creator.createPDF(creator.prepareDataForInsertion(bill), "BILL_" + Long.toString(bill.getId()), user);
	return (BillResponse) ResponseFactory.produceResponse(bill);
    }

    public List<Long> soldpr() {
	List<Long> ids = new ArrayList<Long>();
	Iterator<SoldProduct> s = getSoldProductRepo().findAll().iterator();
	while (s.hasNext()) {
	    ids.add(s.next().getId());
	}
	return ids;
    }
    
    
   

}
