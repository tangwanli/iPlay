package com.iplay.bean;

import java.util.Date;

public class Video {
    private Integer videoId;

    private String videoUrl;

    private String videoUserId;

    private Integer videoPosterUrl;

    private Integer videoViewCount;

    private String videoTitle;

    private Date videoTime;

    private String videoUserName;

    public Integer getVideoId() {
        return videoId;
    }

    public void setVideoId(Integer videoId) {
        this.videoId = videoId;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl == null ? null : videoUrl.trim();
    }

    public String getVideoUserId() {
        return videoUserId;
    }

    public void setVideoUserId(String videoUserId) {
        this.videoUserId = videoUserId == null ? null : videoUserId.trim();
    }

    public Integer getVideoPosterUrl() {
        return videoPosterUrl;
    }

    public void setVideoPosterUrl(Integer videoPosterUrl) {
        this.videoPosterUrl = videoPosterUrl;
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

    public Date getVideoTime() {
        return videoTime;
    }

    public void setVideoTime(Date videoTime) {
        this.videoTime = videoTime;
    }

    public String getVideoUserName() {
        return videoUserName;
    }

    public void setVideoUserName(String videoUserName) {
        this.videoUserName = videoUserName == null ? null : videoUserName.trim();
    }
}