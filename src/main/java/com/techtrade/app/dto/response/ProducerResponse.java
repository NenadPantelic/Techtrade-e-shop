package com.techtrade.app.dto.response;

import com.techtrade.app.models.Producer;

public class ProducerResponse extends AbstractResponse{

    private String _name;
    private long _id;
    // private Set<String> _products;

    public ProducerResponse() {
    }

    public ProducerResponse(Producer producer) {
	_name = producer.getName();
	_id = producer.getId();
	/*
	 * _products = new HashSet<String>(); Iterator<Product> products =
	 * producer.getProducts().iterator(); while(products.hasNext())
	 * _products.add(products.next().getName());
	 */
    }

    public long getId() {
	return _id;
    }

    public void setId(long id) {
	_id = id;
    }

    public String getName() {
	return _name;
    }

    public void setName(String name) {
	_name = name;
    }

}
