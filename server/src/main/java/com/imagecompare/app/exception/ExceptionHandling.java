package com.imagecompare.app.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionHandling {
	
	@ExceptionHandler(TooManyRequestsException.class)
	public ResponseEntity<String> handleTooManyRequestsException(TooManyRequestsException e){
		return new ResponseEntity<String>("{\"status\":\"Could not compare: "+ e.getMessage() +"\"}", HttpStatus.TOO_MANY_REQUESTS);
	}
}
