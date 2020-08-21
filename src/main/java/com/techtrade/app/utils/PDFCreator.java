package com.techtrade.app.utils;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.techtrade.app.models.Bill;
import com.techtrade.app.models.Invoice;
import com.techtrade.app.models.Product;
import com.techtrade.app.models.ProductOrder;
import com.techtrade.app.models.SoldProduct;
import com.techtrade.app.models.SupplyOrder;

public class PDFCreator {

    private double _price = 0.0;
    private int _quantity = 0;

    private void addRows(PdfPTable table, List<Map<String, String>> data) {
	for (Map<String, String> value : data) {
	    table.addCell(value.get("ID"));
	    table.addCell(value.get("Name"));
	    table.addCell(value.get("Quantity"));
	    table.addCell(value.get("Price"));
	    table.addCell(value.get("Total price"));
	}
    }

    private void addTableHeader(PdfPTable table) {
	Stream.of("ID proizvoda", "Ime", "Kolicina", "Jedinicna cena", "Cena").forEach(columnTitle -> {
	    PdfPCell header = new PdfPCell();
	    header.setBackgroundColor(BaseColor.GREEN);
	    header.setBorderWidth(2);
	    header.setPhrase(new Phrase(columnTitle));
	    table.addCell(header);
	});
    }

    public void createPDF(List<Map<String, String>> data, String name, String author)
	    throws DocumentException, FileNotFoundException, ParseException {
	Document document = new Document();
	String path = "resources/";
	if (name.split("_")[0].equals("BILL"))
	    path += "bills/";
	else
	    path += "invoices/";

	FileOutputStream out = new FileOutputStream(path + name + ".pdf");
	PdfWriter.getInstance(document, out);
	document.open();

	PdfPTable table = new PdfPTable(5);
	addTableHeader(table);
	addRows(table, data);

	Font font = FontFactory.getFont(FontFactory.COURIER, 12, BaseColor.BLACK);
	Paragraph title = new Paragraph("-----" + name.toUpperCase() + "-----\n", font);
	Paragraph price = new Paragraph("Cena: " + getPrice());
	Paragraph quantity = new Paragraph("Ukupna kolicina: " + getQuantity());
	Paragraph user = new Paragraph("Kasir:" + HelperUtils.getUserFromContext());
	Paragraph date = new Paragraph("Datum: " + new Date());

	document.addLanguage("Serbian");
	document.addTitle(name.toUpperCase());
	document.addAuthor(author);
	document.addCreationDate();

	document.add(title);
	document.add(Chunk.NEWLINE);
	document.add(Chunk.NEWLINE);
	document.add(table);
	document.add(Chunk.NEWLINE);
	document.add(Chunk.NEWLINE);
	document.add(quantity);
	document.add(price);
	document.add(user);
	document.add(date);

	document.close();

    }

    private double getPrice() {
	return _price;
    }

    private int getQuantity() {
	return _quantity;
    }

    public Map<String, String> makeDataMap(long id, Product p, int quantity, PDFType type) {

	Map<String, String> map = new HashMap<String, String>();
	map.put("ID", Long.toString(id));
	map.put("Name", p.getName());
	map.put("Quantity", Integer.toString(quantity));
	double price = 0.0;
	if (type == PDFType.BILL) {
	    price = p.getPrice();

	} else if (type == PDFType.INVOICE) {
	    price = p.getVendorPrice();

	}
	map.put("Price", Double.toString(price));
	map.put("Total price", Double.toString(price * quantity));
	return map;
    }

    public List<Map<String, String>> prepareDataForInsertion(Bill bill) {
	_price = 0.0;
	_quantity = 0;
	List<Map<String, String>> data = new ArrayList<Map<String, String>>();
	for (SoldProduct soldProduct : bill.getSoldProducts()) {
	    Product product = soldProduct.getProduct();

	    int q = soldProduct.getQuantity();
	    _quantity += q;
	    _price += q * product.getPrice();
	    data.add(makeDataMap(soldProduct.getId(), product, q, PDFType.BILL));

	}
	return data;
    }

    public List<Map<String, String>> prepareDataForInsertion(Invoice invoice) {
	SupplyOrder order = invoice.getSupplyOrder();
	_price = 0.0;
	_quantity = 0;

	List<Map<String, String>> data = new ArrayList<Map<String, String>>();
	for (ProductOrder productOrder : order.getProductOrders()) {
	    Product product = productOrder.getProduct();
	    int q = productOrder.getQuantity();
	    _quantity += q;
	    _price += q * product.getVendorPrice();
	    data.add(makeDataMap(product.getId(), product, q, PDFType.INVOICE));

	}
	return data;
    }

    private void setPrice(double price) {
	_price = price;
    }

    private void setQuantity(int quantity) {
	_quantity = quantity;
    }

    public enum PDFType {
	BILL, INVOICE
    }
}
