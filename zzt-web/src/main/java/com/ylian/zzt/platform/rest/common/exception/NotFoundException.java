package com.ylian.zzt.platform.rest.common.exception;

public class NotFoundException extends BaseException {

	private static final long serialVersionUID = -5773928964933680777L;

	public NotFoundException(String message) {
		super(message, 404);
	}
}
