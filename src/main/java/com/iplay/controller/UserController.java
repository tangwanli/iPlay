package com.iplay.controller;

import com.github.pagehelper.PageInfo;
import com.iplay.bean.Msg;
import com.iplay.bean.User;
import com.iplay.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
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
        if (userService.checkUser(user)){
            int userId=userService.getUserId(user.getUserName());
            return Msg.success().add("userId",userId)
                    .add("userRole",userService.getUserbyID(userId).getUserRole());}
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
    //删除用户
    @RequestMapping(value = "/deleteUsers",method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public Msg register(String userIds) {
        String[] UserIds= userIds.split("%");
        for (int i = 0; i <UserIds.length; i++) {
            if(!userService.deleteUser(Integer.valueOf(UserIds[i])))
                return  Msg.fail();
        }
        return Msg.success();
    }
    //查询所有用户 分页
    @RequestMapping(value = "/getAlluser",method = RequestMethod.POST)
    @ResponseBody
    public PageInfo<User> getAllUser(Integer pageNum) {
       PageInfo pageInfo=userService.getAllUser(pageNum);
        return pageInfo;
    }


    //查询单个用户
    @RequestMapping(value = "/getUserById",method = RequestMethod.POST)
    @ResponseBody
    public Msg getuser(Integer id) {
        return Msg.success().add("User",userService.getUserbyID(id));
    }
    //修改用户
    @RequestMapping(value = "/updateUser",method = RequestMethod.POST)
    @ResponseBody
    public Msg update( User user) {
        if(userService.update(user))
            return Msg.success();
        else
            return Msg.fail();
    }

}