package com.ylian.zzt.platform.rest.common.exception;

public class InvalidArgumentException extends BaseException {

	private static final long serialVersionUID = -6794535088240500027L;

	public InvalidArgumentException(String message) {
		super(message, 400);
	}
}
