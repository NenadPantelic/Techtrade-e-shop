package com.techtrade.app.controllers;

import java.io.IOException;
import java.text.ParseException;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.solr.client.solrj.SolrServerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.techtrade.app.authorization.UserRole;
import com.techtrade.app.dto.request.AutomaticDiscountRequest;
import com.techtrade.app.dto.request.DiscountRequest;
import com.techtrade.app.dto.request.ProductRequest;
import com.techtrade.app.dto.request.SearchRequest;
import com.techtrade.app.dto.response.AbstractResponse;
import com.techtrade.app.dto.response.AutomaticDiscountResponse;
import com.techtrade.app.dto.response.ChartModelResponse;
import com.techtrade.app.dto.response.ProductResponse;
import com.techtrade.app.dto.response.TableModelResponse;
import com.techtrade.app.models.UserType;
import com.techtrade.app.services.ProductService;
import com.techtrade.app.services.SolrService;

@RestController
@CrossOrigin(origins = "*")

public class ProductController {

    @Autowired
    private ProductService _productService;

    @Autowired
    private SolrService _solrService;

    private SolrService getSolrService() {
	return _solrService;
    }

    private ProductService getProductService() {
	return _productService;
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN })
    @PostMapping(value = "/products/") // , consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    // public ProductResponse addProduct(@RequestParam("productData") String
    // request, @RequestParam("image") MultipartFile image) throws
    // SolrServerException, IOException {
    public ProductResponse addProduct(@ModelAttribute ProductRequest request) throws SolrServerException, IOException {// , @RequestParam("image") MultipartFile
									       // image) throws SolrServerException,
									       // IOException {

	// ObjectMapper mapper = new ObjectMapper();
	// ProductRequest modelDTO = mapper.readValue(request, ProductRequest.class);
	return getProductService().addProduct(request);

    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.WORKER })
    @PostMapping("/products/search")
    public List<AbstractResponse> searchProducts(@RequestBody SearchRequest request)
	    throws SolrServerException, IOException, ParseException {
	return getSolrService().searchProducts(request.getText());
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.WORKER })
    @GetMapping("/products/search")
    public List<ProductResponse> filterProducts(@RequestParam("producer") long producerID,
	    @RequestParam("productType") long productType) throws SolrServerException, IOException, ParseException {
	return getProductService().filterProducts(producerID, productType);
    }

    @GetMapping("/products/")
    public Set<ProductResponse> getAllProducts() {
	return getProductService().getProducts();
    }

    @GetMapping("/products/{id}/")
    public ProductResponse getProduct(@PathVariable("id") long id) {
	return getProductService().getProduct(id);
    }

    /*
     * better -> use PATCH method, but with this way is easier for frontend team
     */

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.MANAGER })
    @PutMapping("/products/{id}/")
    public ProductResponse updateProduct(@PathVariable("id") long id, @RequestBody ProductRequest request) {
	return getProductService().updateProduct(id, request);
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN })
    @DeleteMapping("/products/{id}/")
    public boolean deleteProduct(@PathVariable("id") long id) {
	return getProductService().deleteProduct(id);
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.WORKER })
    @PostMapping("/products/{id}/order")
    public boolean orderProduct(@PathVariable("id") long id) {
	return getProductService().orderProduct(id);
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN })
    @PostMapping("/products/{id}/discount")
    public boolean discountOnProduct(@PathVariable("id") long id, @RequestBody Map<String, Double> discountObject) {
	return getProductService().discountOnProduct(id, discountObject.get("discountCoefficient"));
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.MANAGER })
    @PostMapping("/products/discount/")
    public boolean discount(@RequestBody DiscountRequest request) {
	return getProductService().makeDiscount(request);

    }

    @PostMapping("/products/discount/determine")
    public void determineDiscountableProducts() {
	getProductService().determineDiscoutableProducts();
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.MANAGER })
    @PostMapping("/products/discount/approve")
    public void approveDiscount(@RequestBody AutomaticDiscountRequest request) {
	getProductService().makeAutomaticDiscount(request);

    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN, UserType.MANAGER })
    @GetMapping("/products/discount/")
    public List<AutomaticDiscountResponse> getDiscountable() throws ParseException {
	return getProductService().getDiscountableProducts();

    }

    // @UserRole(roles = { UserType.OWNER, UserType.ADMIN })
    @GetMapping("/products/{id}/statistics")
    public List<ChartModelResponse> productStatistics(@PathVariable("id") long id) {
	return getProductService().getProductStatistics(id);
    }

    @UserRole(roles = { UserType.OWNER, UserType.ADMIN })
    @GetMapping("/products/statistics")
    public List<TableModelResponse> generalProductStatistics(@RequestParam("threshold") int threshold) throws ParseException {
	return getProductService().getGeneralStatustics(threshold);
    }

}
