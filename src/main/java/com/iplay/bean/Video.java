package com.iplay.bean;

import java.util.Date;

public class Video {
    private Integer videoId;

    private String videoUserId;

    private Integer videoViewCount;

    private String videoTitle;

    private Date videoUptime;

    private String videoUserName;

    private String videoUrl;

    private String videoPosterUrl;

    public Integer getVideoId() {
        return videoId;
    }

    public void setVideoId(Integer videoId) {
        this.videoId = videoId;
    }

    public String getVideoUserId() {
        return videoUserId;
    }

    public void setVideoUserId(String videoUserId) {
        this.videoUserId = videoUserId == null ? null : videoUserId.trim();
    }

    public Integer getVideoViewCount() {
        return videoViewCount;
    }

    public void setVideoViewCount(Integer videoViewCount) {
        this.videoViewCount = videoViewCount;
    }

    public String getVideoTitle() {
        return videoTitle;
    }

    public void setVideoTitle(String videoTitle) {
        this.videoTitle = videoTitle == null ? null : videoTitle.trim();
    }

    public Date getVideoUptime() {
        return videoUptime;
    }

    public void setVideoUptime(Date videoUptime) {
        this.videoUptime = videoUptime;
    }

    public String getVideoUserName() {
        return videoUserName;
    }

    public void setVideoUserName(String videoUserName) {
        this.videoUserName = videoUserName == null ? null : videoUserName.trim();
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl == null ? null : videoUrl.trim();
    }

    public String getVideoPosterUrl() {
        return videoPosterUrl;
    }

    public void setVideoPosterUrl(String videoPosterUrl) {
        this.videoPosterUrl = videoPosterUrl == null ? null : videoPosterUrl.trim();
    }
}