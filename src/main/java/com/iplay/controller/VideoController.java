package com.iplay.controller;

import com.iplay.bean.Msg;
import com.iplay.bean.Video;
import com.iplay.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.UnsupportedEncodingException;
import java.util.List;

@Controller
public class VideoController {
    @Autowired
    VideoService videoService;


     //查询所有视频信息
    @RequestMapping(value = "/getAllVideoInfo", method = RequestMethod.POST)
    @ResponseBody
    public Msg getAllVideoURl() throws UnsupportedEncodingException {
        //从数据获取视频信息
        List<Video> videos = videoService.getAllVideo();
        //遍历授权视频URL
        for (int i = 0; i < videos.size(); i++) {
            videos.get(i).setVideoUrl(videoService.getFinalUrl(videos.get(i).getVideoTitle()));
        }
        //遍历授权视频截帧URL
        for (int i = 0; i < videos.size(); i++) {
            videos.get(i).setVideoPosterUrl(videoService.getVideoImageUrl(videos.get(i).getVideoTitle()));
        }
        return Msg.success().add("Video", videos);
    }

    //搜索视频信息
    @RequestMapping(value = "/searchVideos", method = RequestMethod.POST)
    @ResponseBody
    public Msg searchVideoURl(String videoName) throws UnsupportedEncodingException {
        //从数据获取视频信息
        List<Video> videos = videoService.getVideo(videoName);
        //遍历授权视频URL
        for (int i = 0; i < videos.size(); i++) {
            videos.get(i).setVideoUrl(videoService.getFinalUrl(videos.get(i).getVideoTitle()));
        }
        //遍历授权视频截帧URL
        for (int i = 0; i < videos.size(); i++) {
            videos.get(i).setVideoPosterUrl(videoService.getVideoImageUrl(videos.get(i).getVideoTitle()));
        }
        return Msg.success().add("Video", videos);
    }

    //文件上传
    // 获取参数:  视频名字 上传者Id 上传者名字

    @RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
    @ResponseBody
    public Msg upLoadVideo(Video video)   {
        //video.setVideoPosterUrl(videoService.getVideoImageUrl(video.getVideoTitle()));
       // video.setVideoUrl(videoService.getFinalUrl(video.getVideoTitle()));
       if(videoService.insertVideo(video))
       return Msg.success().add("Token",videoService.getVideoUpToken());
        else
            return  Msg.fail().add("failed","服务器错误，拒绝提供token");
    }
    //增加视频点击量
    @RequestMapping(value = "/addVideoViewCount", method = RequestMethod.POST)
    @ResponseBody
    public Msg addCount(Video video) {
       if(videoService.addViewCount(video))
           return  Msg.success();
       else
           return  Msg.fail();


    }
    //删除视频
    @RequestMapping(value = "/deleteVideo", method = RequestMethod.POST)
    @ResponseBody
    @Transactional
    public Msg deleteVideo(String videoIds) {
        String[] VideoIds= videoIds.split("%");
        for (int i = 0; i <VideoIds.length ; i++) {
            if(!videoService.deleteVideo(Integer.valueOf(VideoIds[i])))
                return  Msg.fail();
        }
        return Msg.success();


    }
    //修改视频信息
    //接受参数：视频名字
    @RequestMapping(value = "/updateVideo", method = RequestMethod.POST)
    @ResponseBody
    public Msg updateVideo(Video video) {
        if(videoService.updateVideo(video))
            return  Msg.success();
        else
            return  Msg.fail();


    }
}