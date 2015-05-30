package com.ylian.zzt.platform.rest.common.exception;

public class BaseException extends RuntimeException {

	private static final long serialVersionUID = -348300862844404306L;
	private String message;
	private int httpCode;

	public BaseException(String message, int httpCode) {
		this.message = message;
		this.httpCode = httpCode;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getHttpCode() {
		return httpCode;
	}

	public void setHttpCode(int httpCode) {
		this.httpCode = httpCode;
	}

}
