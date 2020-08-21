package com.techtrade.app.utils;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

import com.techtrade.app.dto.response.AutomaticDiscountResponse;
import com.techtrade.app.dto.response.ProductOrderResponse;
import com.techtrade.app.dto.response.ProductResponse;
import com.techtrade.app.dto.response.ResponseFactory;
import com.techtrade.app.interceptor.AuthInterceptor;
import com.techtrade.app.models.Product;
import com.techtrade.app.models.ProductOrder;
import com.techtrade.app.models.UserType;

public class HelperUtils {

    
    private static final DateFormat DATE_FORMAT = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
	
	
    public static List<ProductResponse> getProductRespList(List<Product> products) throws ParseException {
    
	ArrayList<ProductResponse> discountableProducts = new ArrayList<ProductResponse>();
	for (Product p : products) {
	    discountableProducts.add((ProductResponse) ResponseFactory.produceResponse(p));

	}
	return discountableProducts;

    }
    
    public static List<AutomaticDiscountResponse> getDiscountRespList(List<Product> products) throws ParseException {
	    
	ArrayList<AutomaticDiscountResponse> discountableProducts = new ArrayList<AutomaticDiscountResponse>();
	for (Product p : products) {
	    discountableProducts.add(new AutomaticDiscountResponse(p));

	}
	return discountableProducts;

    }
    
    

    public static double getDiscountPrice(double price, byte discount) {
	return price * (100 - discount) / 100;
    }

    public static long getDeltaDays(Date date1, Date date2) {

	long diffInMillies, diff;

	diffInMillies = Math.abs(date2.getTime() - date1.getTime());
	diff = TimeUnit.DAYS.convert(diffInMillies, TimeUnit.MILLISECONDS);
	return diff;

    }

    public static String getUserFromContext() {
	return AuthInterceptor.context.get().getFullName();
    }

    public static boolean containsRole(UserType[] roles, UserType role) {
	for (UserType ut : roles) {
	    if (ut == role)
		return true;
	}
	return false;
    }

    public static List<ProductOrderResponse> getProductOrderResponseList(List<ProductOrder> orders)
	    throws ParseException {
	List<ProductOrderResponse> prOrders = new ArrayList<ProductOrderResponse>();
	for (ProductOrder order : orders) {
	    prOrders.add((ProductOrderResponse) ResponseFactory.produceResponse(order));
	}
	return prOrders;
    }

    /* file utils */

    public static ByteArrayInputStream getPDF(String filePath) throws IOException {
	Path path = Paths.get(filePath);
	byte[] fileContent = Files.readAllBytes(path);
	ByteArrayInputStream bis = new ByteArrayInputStream(fileContent);
	return bis;
    }

    public static void deletePDFFile(String path) {
	File file = new File(path);

	if (file.delete()) {
	    System.out.println("File deleted successfully");
	} else {
	    System.out.println("Failed to delete the file");
	}
    }
    
    public static String formatDate(Date date) throws ParseException {
	return DATE_FORMAT.format(date);
    }
}
