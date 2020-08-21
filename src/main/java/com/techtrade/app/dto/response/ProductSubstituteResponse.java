package com.techtrade.app.dto.response;

public class ProductSubstituteResponse {

    private BillResponse _billResp;
    private double _moneyToReturn;

    public ProductSubstituteResponse(BillResponse billResp, double price) {
	_billResp = billResp;
	_moneyToReturn = price; 
    }
    
    public ProductSubstituteResponse() {}

    public BillResponse getBillResp() {
	return _billResp;
    }

    public void setBillResp(BillResponse billResp) {
	_billResp = billResp;
    }

    public double getMoneyToReturn() {
        return _moneyToReturn;
    }

    public void setMoneyToReturn(double moneyToReturn) {
        _moneyToReturn = moneyToReturn;
    }


}
