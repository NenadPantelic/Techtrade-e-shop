package com.techtrade.app.exceptions;

import com.techtrade.app.models.Product;

public class ExceptionChecker {

    
    public static void checkProduct(Product product) {
	if(product.getWarranty() <= 0) throw new ServerException("Warranty value must be greater than 0.",ExceptionType.INVALID_VALUE);
	if(product.getPrice() <= 0) throw new ServerException("Price value must be greater than 0.",ExceptionType.INVALID_VALUE);
	if(product.getQuantity() <= 0) throw new ServerException("Quantity value must be greater than 0.",ExceptionType.INVALID_VALUE);
	
    }
    
    public static void checkBounds(String argName, double value, double lowerBound, double upperBound) {
	if(!(lowerBound <= value && value  <= upperBound)) throw new ServerException(argName + " must be in range: [" + lowerBound + "," + upperBound + "]", ExceptionType.INVALID_VALUE);
    }
    
    public static void checkProductAvailability(Product p) {
	if(!p.isAvailableForSale()) {
	    throw new ServerException("Product with id = " + p.getId() + " is retired from sale list. It cannot be used", ExceptionType.INVALID_VALUE);
	}
    }
}
