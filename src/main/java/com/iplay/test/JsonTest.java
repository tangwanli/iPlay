package com.iplay.test;

import com.iplay.bean.Msg;
import com.iplay.bean.User;
import com.iplay.dao.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class JsonTest {
    @Autowired
    UserMapper userMapper;

    @RequestMapping(value = "/json", method = RequestMethod.GET)
    @ResponseBody
    public Msg returnJson() {
        List<User> users = userMapper.selectByExample(null);
        return Msg.success().add("Users",users);
    }

//    @RequestMapping(value = "/alltype", method = RequestMethod.GET)
//    @ResponseBody
//    public Map<String, Object> getAlltype() {
//		/*FoodtypeExample example=new FoodtypeExample();
//	    Criteria criteria=example.createCriteria();
//		criteria.andFoodtypeNameIsNotNull();*/
//        Map<String, Object> modelmap = new HashMap<String, Object>();
//        List<Foodtype> foodtypes = foodTypeService.getAlltype();
//        modelmap.put("Types", foodtypes);
//        return modelmap;
//    }
//
//    @RequestMapping(value = "/xxx", method = RequestMethod.GET)
//    @ResponseBody
//    public Map<String, Object> getAlltype1() {
//        userService.getUserId("Hey");
//        Map<String, Object> modelmap = null;
//        return modelmap;
//    }
}

