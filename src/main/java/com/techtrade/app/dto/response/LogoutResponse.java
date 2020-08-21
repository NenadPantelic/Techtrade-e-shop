package com.techtrade.app.dto.response;

public class LogoutResponse {

    private boolean _status;

    public boolean isStatus() {
        return _status;
    }

    public void setStatus(boolean status) {
        _status = status;
    }
    
    public LogoutResponse() {}
    public LogoutResponse(boolean status) {_status = status;}
}
