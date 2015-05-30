package com.ylian.zzt.platform.rest.common.exception;

public class GeneralFailureException extends BaseException {

    private static final long serialVersionUID = -2437698886297343630L;

    public GeneralFailureException(String message) {
        super(message, 500);
    }
}
