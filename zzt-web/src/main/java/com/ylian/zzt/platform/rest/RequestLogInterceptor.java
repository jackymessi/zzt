package com.ylian.zzt.platform.rest;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.ext.Provider;
import java.io.IOException;

/**
 * 打印请求的日志
 */
@Provider
public class RequestLogInterceptor implements javax.ws.rs.container.ContainerRequestFilter {

	private static final Logger log = LoggerFactory.getLogger(RequestLogInterceptor.class);


	@Override
	public void filter(ContainerRequestContext requestContext) throws IOException {
		try {
			log.info("收到请求,方法为：{},URL为:{}", requestContext.getMethod(), requestContext.getUriInfo().getPath(true));

			if (StringUtils.equals(requestContext.getMethod(), "POST")
					|| StringUtils.equals(requestContext.getMethod(), "PUT")) {
				MediaType mediaType = requestContext.getMediaType();
				if (MediaType.APPLICATION_JSON_TYPE.isCompatible(mediaType)
						|| MediaType.TEXT_PLAIN_TYPE.isCompatible(mediaType)) {
					log.info("包体为：{}", IOUtils.toString(requestContext.getEntityStream()));
				}
			}
		} catch (IOException e) {
			log.error("", e);
		}
	}
}
