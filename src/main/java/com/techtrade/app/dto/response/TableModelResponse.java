package com.techtrade.app.dto.response;

import java.text.ParseException;
import java.util.Date;

import com.techtrade.app.utils.HelperUtils;

public class TableModelResponse {

    private Long _id;

    public Long getId() {
	return _id;
    }

    public void setId(Long id) {
	_id = id;
    }

    private String _name;
    private String _dateInserted;
    private String _latestSoldDate;
    private Integer _quantity;

    public TableModelResponse() {
    }

    public TableModelResponse(long id, String name, Date insertionDate, Date lsDate, int quantity)
	    throws ParseException {

	_id = id;
	_name = name;
	_quantity = quantity;

	_dateInserted = "nepoznat";
	_latestSoldDate = "nepoznat";

	// DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
	if (insertionDate != null) {
	    _dateInserted = HelperUtils.formatDate(insertionDate);
	}
	if (lsDate != null) {
	    _latestSoldDate = HelperUtils.formatDate(lsDate);
	}
    }

    public String getName() {
	return _name;
    }

    public void setName(String name) {
	_name = name;
    }

    public String getDateInserted() {
	return _dateInserted;
    }

    public void setDateInserted(String dateInserted) {
	_dateInserted = dateInserted;
    }

    public String getLatestSoldDate() {
	return _latestSoldDate;
    }

    public void setLatestSoldDate(String latestSoldDate) {
	_latestSoldDate = latestSoldDate;
    }

    public Integer getQuantity() {
	return _quantity;
    }

    public void setQuantity(Integer quantity) {
	_quantity = quantity;
    }

}
