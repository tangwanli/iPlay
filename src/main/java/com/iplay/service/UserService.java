package com.iplay.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.iplay.bean.User;
import com.iplay.bean.UserExample;
import com.iplay.dao.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService {
    @Autowired
    UserMapper userMapper;

    //验证用户是否存在
    public boolean checkUser(User user) {
        UserExample example = new UserExample();
        UserExample.Criteria criteria = example.createCriteria();
        criteria.andUserNameEqualTo(user.getUserName()).andUserPasswordEqualTo(user.getUserPassword());
        List<User> users = userMapper.selectByExample(example);
        if (users.isEmpty())
            return false;
        else
            return true;
    }

    //插入一条用户数据
    public boolean insertUser(User user) {
        if (userMapper.insertSelective(user) == 1)
            return true;
        else
            return false;

    }

    //根据用户名查用户信息
    public int getUserId(String username) {
        UserExample example = new UserExample();
        UserExample.Criteria criteria = example.createCriteria();
        criteria.andUserNameEqualTo(username);
        List<User> users = userMapper.selectByExample(example);
        return users.get(0).getUserId();

    }


    //修改一条用户数据
    public boolean update(User user) {
        System.out.println(user.toString());
        if (userMapper.updateByPrimaryKeySelective(user) == 1
                ) {
            return true;
        } else {
            return false;
        }
    }

    //查询所有用户信息 分页
    public PageInfo<User> getAllUser(Integer pageNum) {
        PageHelper.startPage(pageNum,12);
        List<User> users = userMapper.selectByExample(null);
        //获取分页信息对象
        PageInfo<User> pageInfo = new PageInfo<>(users);
        return pageInfo;
    }


    //通过Id查询单个用户信息
    public User getUserbyID(int userId) {
        User user = userMapper.selectByPrimaryKey(userId);
        return user;
    }


    //删除一条用户信息
    public boolean deleteUser(int userId) {
        if (userMapper.deleteByPrimaryKey(userId) == 1) {
            return true;
        } else {
            return false;
        }
    }

    //检查用户名是否存在
    public boolean unexistUsername(String name) {
        UserExample example = new UserExample();
        UserExample.Criteria criteria = example.createCriteria();
        criteria.andUserNameEqualTo(name);
        List<User> users = userMapper.selectByExample(example);
        if (users.isEmpty()) {
            return true;
        } else {
            return false;
        }

    }
}

