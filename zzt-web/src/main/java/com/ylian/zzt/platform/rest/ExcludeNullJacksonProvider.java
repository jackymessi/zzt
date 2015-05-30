package com.ylian.zzt.platform.rest;

import org.codehaus.jackson.jaxrs.JacksonJsonProvider;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.annotate.JsonSerialize.Inclusion;
import org.jboss.resteasy.annotations.providers.NoJackson;
import org.jboss.resteasy.util.FindAnnotation;

import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.ext.Provider;
import java.lang.annotation.Annotation;
import java.lang.reflect.Type;

/**
 * @author Jacky
 */
@Provider
@Consumes({ "application/*+json", "text/json" })
@Produces({ "application/*+json", "text/json" })
public class ExcludeNullJacksonProvider extends JacksonJsonProvider {

	@Override
	public boolean isReadable(Class<?> aClass, Type type, Annotation[] annotations, MediaType mediaType) {
		if (FindAnnotation.findAnnotation(aClass, annotations, NoJackson.class) != null)
			return false;
		return super.isReadable(aClass, type, annotations, mediaType);
	}

	@Override
	public boolean isWriteable(Class<?> aClass, Type type, Annotation[] annotations, MediaType mediaType) {
		if (FindAnnotation.findAnnotation(aClass, annotations, NoJackson.class) != null)
			return false;
		return super.isWriteable(aClass, type, annotations, mediaType);
	}

	public ExcludeNullJacksonProvider(ObjectMapper mapper){
		super(mapper);
		mapper.getSerializationConfig().setSerializationInclusion(Inclusion.NON_NULL);
	}

	public ExcludeNullJacksonProvider() {
		super();
		ObjectMapper mapper = new ObjectMapper();
		mapper.getSerializationConfig().setSerializationInclusion(Inclusion.NON_NULL);
		super.setMapper(mapper);
	}

	// public ExcludeNullJacksonProvider(ObjectMapper mapper) {
	// super(mapper);
	// mapper.getSerializationConfig().setSerializationInclusion(Inclusion.NON_NULL);
	// }

}
