package com.iplay.controller;

import com.iplay.bean.Msg;
import com.iplay.bean.User;
import com.iplay.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {
    @Autowired
    UserService userService;
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    @ResponseBody
    public Msg login(User user) {
        if (userService.checkUser(user))
            return Msg.success().add("userId", userService.getUserId(user.getUserName()));
        else
            return Msg.fail().add("login faild", "用户名秘密不正确");
    }


}