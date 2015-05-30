package com.ylian.zzt.platform.controller.user;

import com.ylian.zzt.biz.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.Map;

@Path("/user/")
@Component
public class UserCtrl {
    @Autowired
    private UserService userService;
    @GET
    @Path("v1/test/{id}")
    @Produces("application/json")
    public Response test(@PathParam("id") String id){
        userService.addUser();

        Map map = new HashMap();
        map.put("result", "aaa");
        return Response.ok(map).build();
    }
}
