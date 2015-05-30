package com.ylian.zzt.platform.controller.front;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Map;

/**
 * Author: Jacky
 * Date: 2015/5/30
 * Note:
 */
@Controller
@RequestMapping("/hello")
public class HelloCtrl {

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public ModelAndView hello(){
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("aaa", "hello");
        return new ModelAndView("test", map);
    }
}
