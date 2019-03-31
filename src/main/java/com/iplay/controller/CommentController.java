package com.iplay.controller;

import com.github.pagehelper.PageInfo;
import com.iplay.bean.Comment;
import com.iplay.bean.Msg;
import com.iplay.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CommentController {
    @Autowired
    CommentService commentService;

    //删除评论
    @RequestMapping(value = "/deleteComment",method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public Msg delete(String commentIds) {
         String[] CommentIds= commentIds.split("%");
        for (int i = 0; i <CommentIds.length ; i++) {
            if(!commentService.delete(Integer.valueOf(CommentIds[i])))
                return  Msg.fail();
        }
        return Msg.success();
    }

    //增加一条评论
    @RequestMapping(value = "/subCommit",method = RequestMethod.POST)
    @ResponseBody
    //传人参数 video_id context userId
    public boolean add(Comment comment) {
        if (commentService.add(comment)) {
            return true;
        } else {
            return false;
        }
    }

    //根据video_id 获取评论 分页
    @RequestMapping(value = "/getCommentByVideoId",method = RequestMethod.POST)
    @ResponseBody
    public PageInfo<Comment> getCommentById(Integer videoId, Integer pageNum){
       PageInfo pageInfo= commentService.getCommentById(videoId,pageNum);
        return pageInfo;
    }
    //获取所有评论 分页
    @RequestMapping(value = "/getAllComment",method = RequestMethod.POST)
    @ResponseBody
    public PageInfo<Comment> getAllComment( Integer pageNum){
        PageInfo pageInfo= commentService.getAllComment(pageNum);
        return pageInfo;
    }


}
