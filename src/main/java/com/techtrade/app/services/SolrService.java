package com.techtrade.app.services;

import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.impl.HttpSolrClient;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocument;
import org.apache.solr.common.SolrDocumentList;
import org.apache.solr.common.SolrInputDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techtrade.app.DAO.ProductRepository;
import com.techtrade.app.dto.response.AbstractResponse;
import com.techtrade.app.dto.response.ResponseFactory;
import com.techtrade.app.models.Product;

@Service
public class SolrService {

    private final String _urlString = "http://localhost:8983/solr/products";
    private final SolrClient _solr = new HttpSolrClient.Builder(_urlString).build();
    private final SolrQuery query = new SolrQuery();
    private final int NUM_OF_ROWS = 100;
    @Autowired
    private ProductRepository _productRepo;

    private ProductRepository getProductRepo() {
	return _productRepo;
    }

    public SolrQuery getSolrQuery() {
	return query;
    }

    public SolrClient getSolr() {
	return _solr;
    }

    public void addAndCommit(SolrInputDocument doc) throws SolrServerException, IOException {
	getSolr().add(doc);
	getSolr().commit();
    }

    public void createIndexedData(long id, String name, String producer, String productType)
	    throws SolrServerException, IOException {
	SolrInputDocument doc = new SolrInputDocument();
	doc.addField("id", id);
	doc.addField("name", name);
	doc.addField("producer", producer);
	doc.addField("productType", productType);
	// System.out.println(doc);
	addAndCommit(doc);

    }

    public void setSolrQuery(String query) {
	String queryString = "name:*" + query + "* OR producer:*" + query + "* OR productType:*" + query + "*";
	getSolrQuery().setQuery(queryString);
	getSolrQuery().setRows(NUM_OF_ROWS);
    }

    public List<AbstractResponse> searchProducts(String text) throws SolrServerException, IOException, ParseException {
	setSolrQuery(text);
	QueryResponse response = getSolr().query(getSolrQuery());
	SolrDocumentList list = response.getResults();
	List<AbstractResponse> products = new ArrayList<AbstractResponse>();
	getSolr().commit();
	for (SolrDocument doc : list) {
	    try {
		Product product = getProductRepo().findById(Long.parseLong(doc.getFieldValue("id").toString())).get();
		if (product.isAvailableForSale()) {
		    products.add(ResponseFactory.produceResponse(product));
		}
	    } catch (NoSuchElementException ex) { // solr database should be updated when delete
		continue;
	    }

	}

	return products;

    }

}
