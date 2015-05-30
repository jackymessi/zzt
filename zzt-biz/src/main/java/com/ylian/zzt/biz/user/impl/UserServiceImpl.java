package com.ylian.zzt.biz.user.impl;

import com.ylian.zzt.biz.BaseService;
import com.ylian.zzt.biz.user.UserService;
import com.ylian.zzt.dal.mapper.user.UserMapper;
import com.ylian.zzt.dal.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl extends BaseService implements UserService{
    @Autowired
    private UserMapper userMapper;

    @Override
    public void addUser() {
        User user = new User();
        user.setAccount("user");
        user.setPassword("aaa");
        user.setEnterpriseId(0L);
        user.setName("jacky");
        user.setStatus(0);
        user.setTelephone("11111");
    }
}
