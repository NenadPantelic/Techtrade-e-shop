package com.techtrade.app.exceptions;

import java.io.IOException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.NoSuchElementException;

import javax.persistence.EntityNotFoundException;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import org.springframework.web.util.NestedServletException;

@ControllerAdvice
public class ServerExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler({ ConstraintViolationException.class })
    protected ResponseEntity<APIError> handle(ConstraintViolationException ex, WebRequest request) {

	StringBuilder sb = new StringBuilder();
	for (ConstraintViolation<?> violation : ex.getConstraintViolations()) {
	    sb.append(violation.getPropertyPath().toString().substring(1) + ": " + violation.getMessage());
	}

	APIError error = new APIError(sb.toString());
	return new ResponseEntity<APIError>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NestedServletException.class)
    protected ResponseEntity<APIError> handle(NestedServletException ex, WebRequest request) {
	Throwable exception = ex.getCause();
	APIError error = new APIError(exception.getMessage());
	return new ResponseEntity<APIError>(error, HttpStatus.NOT_ACCEPTABLE);
    }

    @ExceptionHandler(org.hibernate.exception.ConstraintViolationException.class)
    protected ResponseEntity<APIError> handle(org.hibernate.exception.ConstraintViolationException ex,
	    WebRequest request) {
	Throwable exception = ex.getCause();
	APIError error = new APIError("Null or duplicate values cannot be inserted in database.");
	System.out.println(exception.getMessage());
	return new ResponseEntity<APIError>(error, HttpStatus.NOT_ACCEPTABLE);
    }

    @ExceptionHandler(ServerException.class)
    protected ResponseEntity<APIError> handle(ServerException ex, WebRequest request) {

	APIError error = new APIError(ex.getMessage());
	return new ResponseEntity<APIError>(error, ex.getResponseCode());
    }

    @ExceptionHandler(NoSuchElementException.class)
    protected ResponseEntity<APIError> handle(NoSuchElementException ex, WebRequest request) {

	APIError error = new APIError(ex.getMessage());
	return new ResponseEntity<APIError>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(EntityNotFoundException.class)
    protected ResponseEntity<APIError> handle(EntityNotFoundException ex, WebRequest request) {

	APIError error = new APIError(ex.getMessage());
	return new ResponseEntity<APIError>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(SQLIntegrityConstraintViolationException.class)
    protected ResponseEntity<APIError> handle(SQLIntegrityConstraintViolationException ex, WebRequest request) {

	APIError error = new APIError(ex.getMessage());
	return new ResponseEntity<APIError>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NullPointerException.class)
    protected ResponseEntity<APIError> handle(NullPointerException ex, WebRequest request) {

	APIError error = new APIError(ex.getMessage());
	return new ResponseEntity<APIError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(IOException.class)
    protected ResponseEntity<APIError> handle(IOException ex, WebRequest request) {

	APIError error = new APIError(ex.getMessage());// "PDF file cannot be found."
	return new ResponseEntity<APIError>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
     * @ExceptionHandler(Exception.class) protected ResponseEntity<APIError>
     * handle(Exception ex, WebRequest request) {
     * 
     * APIError error = new APIError(ex.getMessage()); return new
     * ResponseEntity<APIError>(error, HttpStatus.INTERNAL_SERVER_ERROR); }
     */

}
