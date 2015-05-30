package com.ylian.zzt.platform.rest;

import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

/**
 * @author Jacky
 */
public class ExtRestApplication extends Application {

	@Override
	public Set<Class<?>> getClasses() {
		Set<Class<?>> classes = new HashSet<Class<?>>();
		addExceptionMappers(classes);
		addInterceptors(classes);
		return classes;
	}

	private void addInterceptors(Set<Class<?>> classes) {
		classes.add(ExcludeNullJacksonProvider.class);
	}

	private void addExceptionMappers(Set<Class<?>> classes) {
		classes.add(CustomeExceptionMapper.class);
	}

}
