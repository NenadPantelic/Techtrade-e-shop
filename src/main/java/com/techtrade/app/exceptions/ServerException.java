package com.techtrade.app.exceptions;

import org.springframework.http.HttpStatus;

public class ServerException extends RuntimeException {

    /**
     * 
     */
    private static final long serialVersionUID = 1L;
    private String _message;
    private ExceptionType _exceptionType;

    public ServerException(String message, ExceptionType type) {
	_message = message;
	_exceptionType = type;
    }

    @Override
    public String getMessage() {
	return _message;
    }

    public ExceptionType getExceptionType() {
	return _exceptionType;
    }

    public HttpStatus getResponseCode() {
	switch (getExceptionType()) {

	case INVALID_TOKEN:
	case INVALID_LOGIN_CREDENTIALS:INVALID_ROLE:
	    return HttpStatus.UNAUTHORIZED;

	case UNEXISTING_RESOURCE:
	    return HttpStatus.NOT_FOUND;
	    
	case INVALID_VALUE:
	    return HttpStatus.BAD_REQUEST;
	    
	case INTERNAL_ERROR:
	    return HttpStatus.INTERNAL_SERVER_ERROR;

	default:
	    return HttpStatus.BAD_REQUEST;

	}
    }

}
