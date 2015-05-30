package com.ylian.zzt.platform.rest.common.exception;


/**
 * 未授权的异常，一般没有权限的时候抛出此异常。
 * 
 * @author simon
 * @version 1.0
 */
public class UnauthorizedException extends BaseException {

	private static final long serialVersionUID = -4758424011196947803L;

	public UnauthorizedException(String messsage) {
		super(messsage, 401);
	}

}
