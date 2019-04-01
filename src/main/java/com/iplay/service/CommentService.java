package com.iplay.service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.iplay.bean.Comment;
import com.iplay.bean.CommentExample;
import com.iplay.dao.CommentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CommentService {
    @Autowired
    CommentMapper commentMapper;

    //删除一条评论
    public boolean delete(Integer cid) {
        if (commentMapper.deleteByPrimaryKey(cid) == 1) {
            return true;
        } else {
            return false;
        }
    }

    //增加一条评论
    //传人参数 video_id context userId
    public boolean add(Comment comment) {
        if (commentMapper.insertSelective(comment)==1) {
            return true;
        } else {
            return false;
        }
    }
   //根据video_id 获取评论
     public PageInfo<Comment> getCommentById(Integer vid,Integer pageNum){
        PageHelper.startPage(pageNum,7);
        CommentExample example=new CommentExample();
        example.setOrderByClause("publish_time"+" DESC");
        CommentExample.Criteria criteria=example.createCriteria();
        criteria.andVideoIdEqualTo(vid);
        List<Comment> comments = commentMapper.selectByExample(example);
        //获取分页信息对象
        PageInfo<Comment> pageInfo = new PageInfo<>(comments);
        System.out.println("总记录数" + pageInfo.getTotal());//总记录数
        System.out.println("数据" + pageInfo.getList());//数据的list集合
        System.out.println("总页数" + pageInfo.getPages());//总页数
        System.out.println("每页记录数" + pageInfo.getSize());//每页记录数
        return pageInfo;
    }

    //查询所有评论
    public PageInfo<Comment> getAllComment(Integer pageNum){
        PageHelper.startPage(pageNum,12);
        List<Comment> comments = commentMapper.selectByExample(null);
        //获取分页信息对象
        PageInfo<Comment> pageInfo = new PageInfo<>(comments);

        return pageInfo;
    }

}
