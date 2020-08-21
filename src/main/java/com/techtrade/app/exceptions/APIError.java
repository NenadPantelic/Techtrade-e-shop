package com.techtrade.app.exceptions;

public class APIError {

    private String _message;

    public APIError(String message) {
	_message = message;
    }

    public String getMessage() {
	return _message;
    }

    public void setMessage(String message) {
	_message = message;
    }

}
