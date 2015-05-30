package com.ylian.zzt.platform.util;

import org.jboss.resteasy.plugins.providers.multipart.InputPart;
import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * 处理multipart/form-data格式的表单，取表单的值等。
 */
public class MultipartFormUtils {

    private final static Logger log = LoggerFactory.getLogger(MultipartFormUtils.class);

    public static String getFormValue(MultipartFormDataInput input, String key) {
        Map<String, List<InputPart>> form = input.getFormDataMap();
        if (form.get(key) != null && form.get(key).size() > 0) {
            try {
                InputPart inputPart = form.get(key).get(0);
                inputPart.setMediaType(MediaType.valueOf("text/plain;charset=utf-8"));
                return inputPart.getBodyAsString();
            } catch (IOException e) {
                log.error("", e);
            }
        }
        return "";
    }

    public static List<String> getFormArrayValue(MultipartFormDataInput input, String key) {
        List<String> values = new ArrayList<String>();
        Map<String, List<InputPart>> form = input.getFormDataMap();
        if (form.get(key) != null && form.get(key).size() > 0) {

            try {
                for (InputPart inputPart : form.get(key)) {
                    inputPart.setMediaType(MediaType.valueOf("text/plain;charset=utf-8"));
                    values.add(inputPart.getBodyAsString());
                }
            } catch (IOException e) {
                log.error("", e);
            }
        }
        return values;
    }
}
