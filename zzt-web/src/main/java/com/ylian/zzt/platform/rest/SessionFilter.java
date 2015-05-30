package com.ylian.zzt.platform.rest;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class SessionFilter implements Filter {

    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws IOException,
            ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) resp;
        String url = request.getRequestURL().toString();
        // 只要请求的是index.html所需要的资源一律不检查，其他都检查session中user是否存在,
        boolean b = url.contains("login.html") || url.contains("login") || url.contains(".png") || url.contains(".jpg")
                || url.contains(".js") || url.contains(".css") || url.contains(".gif") || url.contains("/app");
        if (!b) {
            if (request.getSession().getAttribute("SESSION_USER") == null) {
                String ajax = request.getHeader("x-Requested-with");
                if (ajax != null && ajax.equals("XMLHttpRequest")) {
                    // ajax请求 session超时处理
                    response.setHeader("sessionInvalid", "timeout");
                } else {
                    // 普通http请求 session超时处理
                    response.sendRedirect(request.getContextPath() + "/login.html");
                }
            } else {
                chain.doFilter(req, resp);
            }
        } else {
            chain.doFilter(req, resp);
        }
    }

    public void init(FilterConfig arg0) throws ServletException {
        // TODO Auto-generated method stub

    }
}
