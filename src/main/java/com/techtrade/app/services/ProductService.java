package com.techtrade.app.services;

import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.apache.solr.client.solrj.SolrServerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.techtrade.app.DAO.ProducerRepository;
import com.techtrade.app.DAO.ProductOrderRepository;
import com.techtrade.app.DAO.ProductRepository;
import com.techtrade.app.DAO.ProductTypeRepository;
import com.techtrade.app.DAO.SoldProductRepository;
import com.techtrade.app.builder.ProductBuilder;
import com.techtrade.app.dto.request.AutomaticDiscountRequest;
import com.techtrade.app.dto.request.DiscountRequest;
import com.techtrade.app.dto.request.ProductRequest;
import com.techtrade.app.dto.request.ProductSubstituteRequest;
import com.techtrade.app.dto.response.AutomaticDiscountResponse;
import com.techtrade.app.dto.response.ChartModelResponse;
import com.techtrade.app.dto.response.ProductResponse;
import com.techtrade.app.dto.response.TableModelResponse;
import com.techtrade.app.exceptions.ExceptionChecker;
import com.techtrade.app.exceptions.ExceptionType;
import com.techtrade.app.exceptions.ServerException;
import com.techtrade.app.models.Producer;
import com.techtrade.app.models.Product;
import com.techtrade.app.models.ProductOrder;
import com.techtrade.app.models.ProductType;
import com.techtrade.app.models.SoldProduct;
import com.techtrade.app.utils.ChartDataComparator;
import com.techtrade.app.utils.HelperUtils;
import com.techtrade.app.utils.ImageStorage;

@Service
public class ProductService {

    @Autowired
    private ProductRepository _productRepo;

    @Autowired
    private ProducerRepository _producerRepo;

    @Autowired
    private ProductTypeRepository _productTypeRepo;

    @Autowired
    private ProductOrderRepository _productOrderRepo;

    @Autowired
    private SoldProductRepository _soldProductRepo;

    @Autowired
    private SolrService _solrService;

    /*
     * TODO refactor services to follow the interface-implementation structure
     */

    /* discount operation constants */
    private final byte DISCOUNT_LIMIT = 15;
    private final byte DAY_OFFSET = 30;
    private final byte DISCOUNT = 5;

    public SolrService getSolrService() {
	return _solrService;
    }

    private ProductOrderRepository getProductOrderRepo() {
	return _productOrderRepo;
    }

    private ProducerRepository getProducerRepo() {
	return _producerRepo;
    }

    private ProductRepository getProductRepo() {
	return _productRepo;
    }

    private ProductTypeRepository getProductTypeRepo() {
	return _productTypeRepo;
    }

    public void setProductRepo(ProductRepository productRepo) {
	_productRepo = productRepo;
    }

    public SoldProductRepository getSoldProductRepo() {
	return _soldProductRepo;
    }

    @Transactional
    public ProductResponse addProduct(ProductRequest request) throws SolrServerException, IOException {

	ProductBuilder builder = new ProductBuilder();
	Producer producer = getProducerRepo().findById(request.getProducerID()).get();
	ProductType type = getProductTypeRepo().findById(request.getProductTypeID()).get();
	Product product = builder.setName(request.getName()).setPrice(request.getPrice())
		.setVendorPrice(request.getVendorPrice()).setProducer(producer).setProductType(type)
		.setProductURL(request.getProductURL()).setProperties(request.getProperties())
		.setWarranty(request.getWarranty()).setProductQuantity(request.getQuantity()).setAvailablityStatus()
		.build();
	// producer.addProduct(product);
	ExceptionChecker.checkProduct(product);
	MultipartFile image = request.getImage();
	if (image != null) {
	    try {
		product.setImagePath(ImageStorage.storeFile(image));
	    } catch (Exception ex) {
		System.out.println(ex);
	    }
	}
	getProductRepo().save(product);
	getSolrService().createIndexedData(product.getId(), product.getName(), product.getProducer().getName(),
		product.getProductType().getName());
	return new ProductResponse(product);

    }

    public Set<ProductResponse> getProducts() {
	Set<ProductResponse> allProducts = new HashSet<ProductResponse>();
	List<Product> products = getProductRepo().findBy_availableForSale(true);// findAll().iterator();
	for (Product p : products) {
	    if (p.isAvailableForSale()) {
		allProducts.add(new ProductResponse(p));
	    }
	}

	return allProducts;
    }

    public ProductResponse getProduct(long id) {
	Product product = getProductRepo().findById(id).get();
	ExceptionChecker.checkProductAvailability(product);
	return new ProductResponse(product);

    }

    public void deleteAllProducts() {
	getProductRepo().deleteAll();
    }

    @Transactional
    public ProductResponse updateProduct(long id, ProductRequest request) {
	Product targetProduct = getProductRepo().findById(id).get();
	ExceptionChecker.checkProductAvailability(targetProduct);

	String name = request.getName();
	Double price = request.getPrice();
	Long producerID = request.getProducerID();
	Long productTypeID = request.getProductTypeID();
	String productURL = request.getProductURL();
	String properties = request.getProperties();
	Integer warranty = request.getWarranty();
	Integer quantity = request.getQuantity();
	Double vPrice = request.getVendorPrice();

	double oldPrice = targetProduct.getPrice();
	double oldVendorPrice = targetProduct.getVendorPrice();
	if (name != null)
	    targetProduct.setName(name);

	/*
	 * price is being updated in two ways: 1) update of product price - has priority
	 * in situations where both of prices are being updated 2) update of vendor
	 * price - price is then 20% greater than this value So first check vendor
	 * price, and if it is updated, update both of the prices Check if new data is
	 * different than old one, for update priority sake
	 */

	if (vPrice != null && oldVendorPrice != vPrice) {

	    targetProduct.setVendorPrice(vPrice);
	    targetProduct.setPrice(vPrice * 1.2);
	}

	if (price != null && oldPrice != price) {

	    targetProduct.setPrice(price);
	}

	if (producerID != null) {
	    Producer p = getProducerRepo().findById(producerID).get();
	    targetProduct.setProducer(p);
	}

	if (productTypeID != null) {
	    ProductType type = getProductTypeRepo().findById(productTypeID).get();
	    targetProduct.setProductType(type);
	}

	if (productURL != null) {

	    targetProduct.setProductURL(productURL);
	}

	if (properties != null) {
	    targetProduct.setProperties(properties);
	}
	if (warranty != null) {
	    targetProduct.setWarranty(warranty);
	}

	if (quantity != null) {
	    targetProduct.setQuantity(quantity);
	}
	ExceptionChecker.checkProduct(targetProduct);
	/*
	 * usage of reflection - disturb data hiding principle
	 * 
	 * Method[] methods = ProductRequest.class.getMethods();
	 * 
	 * 
	 * for (Method method : methods) { String mName = method.getName(); if
	 * (mName.startsWith("get") && !mName.equalsIgnoreCase("getClass")) { Object
	 * value = ""; try { value = method.invoke(request); } catch
	 * (IllegalAccessException | IllegalArgumentException |
	 * InvocationTargetException | NullPointerException e) { //e.printStackTrace();
	 * continue; } //System.out.println(mName + " Value: " + value); String
	 * fieldName = mName.substring(3); fieldName =
	 * fieldName.replaceFirst(fieldName.substring(0,1), "_" +
	 * fieldName.substring(0,1).toLowerCase()); PropertyAccessor myAccessor =
	 * PropertyAccessorFactory.forDirectFieldAccess(targetProduct);
	 * if(fieldName.equals("_producerID")) value =
	 * getProducerRepo().findById(request.getProducerID()).get();
	 * if(fieldName.equals("_productTypeID")) value =
	 * getProductTypeRepo().findById(request.getProductTypeID()).get();
	 * 
	 * myAccessor.setPropertyValue(fieldName, value);
	 * 
	 * } }
	 */
	/*
	 * Field[] fields = ProductRequest.class.getDeclaredFields(); for (Field field :
	 * fields) {
	 * System.out.println(BeanUtils.getPropertyDescriptor(ProductRequest.class,
	 * field.getName())); }
	 */
	getProductRepo().save(targetProduct);
	return new ProductResponse(targetProduct);

    }

    public boolean deleteProduct(long id) {
	Product product = getProductRepo().findById(id).get();
	product.setAvailableForSale(false);
	getProductRepo().save(product);
	return true;
    }

    public boolean orderProduct(long id) {
	Product product = getProductRepo().findById(id).get();
	ExceptionChecker.checkProductAvailability(product);

	if (product.getQuantity() > 0) {
	    throw new ServerException("There are some	pieces of this product in our warehouse.",
		    ExceptionType.INVALID_VALUE);
	}

	ProductOrder prOrder = new ProductOrder(product);
	getProductOrderRepo().save(prOrder);
	return true;

    }

    public void setNewPrice(Product product, double discountCoeff) {
	int newPrice = (int) (product.getPrice() * (1 - discountCoeff / 100) * 100);
	product.setPrice(newPrice / 100.);
	getProductRepo().save(product);
    }

    public boolean makeDiscount(DiscountRequest request) {

	double coeff = request.getDiscountCoefficient();
	ExceptionChecker.checkBounds("discount", coeff, 1, 100);
	Long producerID = request.getProducer();
	Long productTypeID = request.getProductType();
	ProductType type = null;
	Producer producer = null;
	List<Product> targetProducts = new ArrayList<Product>();

	if (productTypeID != null) {
	    type = getProductTypeRepo().findById(productTypeID).get();
	    targetProducts.addAll(getProductRepo().findBy_productType(type));
	}
	if (producerID != null) {
	    producer = getProducerRepo().findById(producerID).get();
	    targetProducts.addAll(getProductRepo().findBy_producer(producer));

	}
	boolean nonEmptyFlag = false;
	for (Product p : targetProducts) {
	    nonEmptyFlag = true;
	    if (p.isAvailableForSale()) {
		setNewPrice(p, coeff);
	    }
	}
	return nonEmptyFlag;

    }

    public boolean discountOnProduct(long id, double discountCoeff) {
	Product product = getProductRepo().findById(id).get();
	ExceptionChecker.checkProductAvailability(product);
	ExceptionChecker.checkBounds("discount", discountCoeff, 1, 100);
	setNewPrice(product, discountCoeff);
	return true;
    }

    public void updateProductQuantity(Product pr, int q) {
	pr.setQuantity(pr.getQuantity() + q);
	getProductRepo().save(pr);
    }

    public boolean productSubstitution(ProductSubstituteRequest prodSub) {

	return false;

    }

    /* second, minute, hour, day of month, month, day(s) of week */
    /* every day at 2am */
    @Scheduled(cron = "0 0 2 * * ?")
    public void determineDiscoutableProducts() {

	Date today = new Date();
	long deltaDays;
	Iterator<Product> allProductsIter = getProductRepo().findAll().iterator();
	while (allProductsIter.hasNext()) {

	    Product p = allProductsIter.next();
	    p.setLatestDiscountCheckDate(new Date());
	    /*
	     * skip if it is not available for sale, discount is over limit or it is already
	     * planned to be discounted
	     */
	    if (!p.isAvailableForSale() || p.getDiscount() >= DISCOUNT_LIMIT || p.isToBeDiscounted())
		continue;

	    /* if it is sold at least once */
	    if (p.getLatestSoldDate() != null) {
		deltaDays = HelperUtils.getDeltaDays(today, p.getLatestSoldDate());
	    } else {
		deltaDays = HelperUtils.getDeltaDays(today, p.getDateInserted());
	    }
	    if (deltaDays >= DAY_OFFSET) {
		/* 5% discount */
		// p.setPrice(p.getPrice() * (100 - DISCOUNT) / 100);
		p.setToBeDiscounted(true);
	    }
	    getProductRepo().save(p);
	}
    }

    public List<AutomaticDiscountResponse> getDiscountableProducts() throws ParseException {
	return HelperUtils.getDiscountRespList(getProductRepo().findBy_toBeDiscounted(true));

    }

    public void makeAutomaticDiscount(AutomaticDiscountRequest request) {

	List<Product> products;
	if (request.isAll()) {
	    products = getProductRepo().findBy_toBeDiscounted(true);
	} else {

	    products = getProductRepo().findProductsByIds(request.getProducts());
	}
	for (Product p : products) {

	    p.setDiscount((byte) (p.getDiscount() + DISCOUNT));
	    p.setPrice(HelperUtils.getDiscountPrice(p.getPrice(), DISCOUNT));
	    p.setLatestDiscountDate(new Date());
	    p.setToBeDiscounted(false);
	    getProductRepo().save(p);
	}
    }

    public List<ChartModelResponse> getProductStatistics(long id) {

	List<ChartModelResponse> data = new ArrayList<ChartModelResponse>();
	Product product = getProductRepo().findById(id).get();
	if (!product.isAvailableForSale()) {
	    throw new ServerException("You can not get statistics for this product.",
		    ExceptionType.UNEXISTING_RESOURCE);
	}
	Iterator<SoldProduct> soldProductsIter = getSoldProductRepo().findBy_product(product).iterator();
	SoldProduct soldProduct;
	DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
	String date;
	int quantity;
	while (soldProductsIter.hasNext()) {

	    soldProduct = soldProductsIter.next();
	    date = dateFormat.format(soldProduct.getBill().getDate());
	    quantity = soldProduct.getQuantity();
	    data.add(new ChartModelResponse(date, quantity));

	}

	data.sort(new ChartDataComparator());
	return data;
    }

    public List<TableModelResponse> getGeneralStatustics(int threshold) throws ParseException {

	List<TableModelResponse> data = new ArrayList<TableModelResponse>();

	int quantity;
	Date insDate, lsDate;
	for (Product p : getProductRepo().findAll()) {
	    if (!p.isAvailableForSale())
		continue;
	    quantity = getSoldProductRepo().findBy_product(p).size();
	    /* refactor this to use jpa query instead of looping */
	    if (quantity <= threshold) {
		insDate = p.getDateInserted();
		lsDate = p.getLatestSoldDate();
		data.add(new TableModelResponse(p.getId(), p.getName(), insDate, lsDate, quantity));
	    }

	}

	return data;
    }

    public List<ProductResponse> filterProducts(Long producerID, Long productType) {

	List<Product> products = new ArrayList<Product>();
	List<ProductResponse> productsResponses = new ArrayList<ProductResponse>();
	if (producerID != null && productType != null) {
	    products = getProductRepo().findProductsByProducerAndProductType(producerID, productType);
	} else if (producerID != null) {
	    products = getProductRepo().findBy_producer(getProducerRepo().findById(producerID).get());
	} else if (productType != null) {
	    products = getProductRepo().findBy_productType(getProductTypeRepo().findById(productType).get());
	}

	for (Product p : products) {
	    if (p.isAvailableForSale()) {
		productsResponses.add(new ProductResponse(p));
	    }
	}
	return productsResponses;

    }

}
