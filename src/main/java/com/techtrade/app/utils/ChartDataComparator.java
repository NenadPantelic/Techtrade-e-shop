package com.techtrade.app.utils;

import java.util.Comparator;

import com.techtrade.app.dto.response.ChartModelResponse;

public class ChartDataComparator implements Comparator<ChartModelResponse> {
    @Override
    public int compare(ChartModelResponse a, ChartModelResponse b) {
	return a.getLabel().compareToIgnoreCase(b.getLabel());
    }
}
