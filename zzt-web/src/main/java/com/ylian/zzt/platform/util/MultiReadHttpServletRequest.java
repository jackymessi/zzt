/**
 * created since 2012-9-4 下午5:16:06
 */
package com.ylian.zzt.platform.util;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.io.*;

/**
 * @author Jacky
 */
public class MultiReadHttpServletRequest extends HttpServletRequestWrapper {

	private final static Logger log = LoggerFactory.getLogger(MultiReadHttpServletRequest.class);

	private byte[] body;

	public MultiReadHttpServletRequest(HttpServletRequest httpServletRequest) {
		super(httpServletRequest);
		// Read the request body and save it as a byte array
		try {
			InputStream is = super.getInputStream();
			body = IOUtils.toByteArray(is);
		} catch (IOException e) {
			log.error("error happened:", e);
		}
	}

	@Override
	public ServletInputStream getInputStream() throws IOException {
		return new ServletInputStreamImpl(new ByteArrayInputStream(body));
	}

	@Override
	public BufferedReader getReader() throws IOException {
		String enc = getCharacterEncoding();
		if (enc == null)
			enc = "UTF-8";
		return new BufferedReader(new InputStreamReader(getInputStream(), enc));
	}

	private class ServletInputStreamImpl extends ServletInputStream {

		private InputStream is;

		public ServletInputStreamImpl(InputStream is) {
			this.is = is;
		}

		public int read() throws IOException {
			return is.read();
		}

		public boolean markSupported() {
			return false;
		}

		public synchronized void mark(int i) {
			throw new RuntimeException(new IOException("mark/reset not supported"));
		}

		public synchronized void reset() throws IOException {
			throw new IOException("mark/reset not supported");
		}
	}
}
