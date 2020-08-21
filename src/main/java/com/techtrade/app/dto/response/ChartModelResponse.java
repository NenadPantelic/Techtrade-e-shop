package com.techtrade.app.dto.response;


public class ChartModelResponse {

    private String _label;
    private Integer _value;

    public ChartModelResponse() {
    }

    public ChartModelResponse(String x, int y) {
	_label = x;
	_value = y;
    }

    public String getLabel() {
	return _label;
    }

    public void setLabel(String x) {
	_label = x;
    }

    public Integer getValue() {
	return _value;
    }

    public void setValue(Integer y) {
	_value = y;
    }

}
