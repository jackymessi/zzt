package com.ylian.zzt.platform.rest;

import com.ylian.zzt.platform.rest.common.exception.BaseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.BadRequestException;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;
import java.util.HashMap;
import java.util.Map;

@Provider
public class CustomeExceptionMapper implements ExceptionMapper<RuntimeException> {

	private static Logger log = LoggerFactory.getLogger(CustomeExceptionMapper.class);

	public Response toResponse(RuntimeException exception) {

        Map result = new HashMap();
        result.put("success", false);

		if (exception instanceof BaseException) {
			BaseException e = (BaseException) exception;
			log.info("响应代码：{},响应包体:{}", e.getHttpCode(), e.getMessage());
            result.put("message", e.getMessage());
            return Response.ok(result).build();
        }

		if (exception instanceof BadRequestException) {
			log.info("响应代码：{},响应包体:{}", Status.BAD_REQUEST.getStatusCode(), "参数不合法！");
            result.put("message", "参数不合法！");
            return Response.ok(result).build();
        }

		if (exception instanceof NotFoundException) {
			log.info("响应代码：{},响应包体:{}", Status.NOT_FOUND.getStatusCode(), "没有找到相应的方法或路径！");
            result.put("message", "服务器有问题，请稍后重试！");
            return Response.ok(result).build();
        }

		log.error("exception occured:", exception);
        result.put("message", "服务器有问题，请稍后重试！");
        return Response.ok(result).build();
    }


}
