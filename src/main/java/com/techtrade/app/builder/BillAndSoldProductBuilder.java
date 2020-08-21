package com.techtrade.app.builder;

import com.techtrade.app.models.Bill;
import com.techtrade.app.models.Product;
import com.techtrade.app.models.SoldProduct;

public class BillAndSoldProductBuilder {
    
    public static SoldProduct buildSoldProduct(Product product, int quantity, Bill bill) {
	SoldProduct soldProduct = new SoldProduct();
	soldProduct.setProduct(product);
	soldProduct.setQuantity(quantity);
	soldProduct.setBill(bill);
	soldProduct.setPrice(product.getPrice());
	return soldProduct;

    }

}
