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

    //用户登陆
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
    //检查用户名是否存在
    @RequestMapping(value = "/checkUserName",method = RequestMethod.POST)
    @ResponseBody
    public Msg checkUserName(String userName) {
        if (userService.unexistUsername(userName))
            return Msg.success().add("success","该昵称可以注册。");
        else
            return Msg.fail().add("failed", "用户名已存在。");
    }
    //用户注册
    @RequestMapping(value = "/register",method = RequestMethod.POST)
    @ResponseBody
    public Msg register(User user) {
        if (userService.unexistUsername(user.getUserName()))

        {
            if (userService.insertUser(user))

            return Msg.success().add("注册成功", user.getUserName());
             else
                 return  Msg.fail().add("failed","注册失败");
        }

        else

            return Msg.fail().add("failed", "用户名已存在。");

    }


}