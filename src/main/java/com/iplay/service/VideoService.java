package com.iplay.service;

import com.iplay.bean.Video;
import com.iplay.dao.VideoMapper;
import com.qiniu.common.Zone;
import com.qiniu.storage.BucketManager;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.model.FileInfo;
import com.qiniu.util.Auth;
import com.qiniu.util.StringMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static java.net.URLEncoder.encode;

@Service
@PropertySource("classpath:token.properties")
public class VideoService {
    @Value("${accessKey}")
    private String accessKey;
    @Value("${secretKey}")
    private String secretKey;
    @Value("${videobucket}")
    private String bucket;
    @Value("${domainOfBucket}")
    private String domainOfBucket;
    @Autowired
    VideoMapper videoMapper;


    //获取七牛云获取Videos List
    public List<Video> getAllVideoInfoFromServer() {
        List<Video> videos = new ArrayList<>();
        Configuration cfg = new Configuration(Zone.zone0());
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Auth auth = Auth.create(accessKey, secretKey);
        BucketManager bucketManager = new BucketManager(auth, cfg);
        //文件名前缀
        String prefix = "";
        //每次迭代的长度限制，最大1000，推荐值 1000
        int limit = 1000;
        //指定目录分隔符，列出所有公共前缀（模拟列出目录效果）。缺省值为空字符串
        String delimiter = "";
        //列举空间文件列表
        BucketManager.FileListIterator fileListIterator = bucketManager.createFileListIterator(bucket, prefix, limit, delimiter);
        while (fileListIterator.hasNext()) {
            //处理获取的file list结果
            int i = 0;
            FileInfo[] items = fileListIterator.next();
            for (FileInfo item : items) {
                Video video = new Video();
                video.setVideoTitle(item.key);
                java.util.Date date = new Date(item.putTime);
                //video.setVideoTime(date);
            }
        }

        return videos;
    }

    // 根据文件名获取视频URL
    public String getFinalUrl(String filename) throws UnsupportedEncodingException {
        String encodedFileName = encode(filename + ".mp4", "utf-8");
        String publicUrl = String.format("%s/%s", domainOfBucket, encodedFileName);
        long expireInSeconds = 3600;//1小时，可以自定义链接过期时间
        String finalUrl = getAuth().privateDownloadUrl(publicUrl, expireInSeconds);
        return finalUrl;
    }
    // 获取上传Token
    public String getVideoUpToken() {

        System.out.println(accessKey + secretKey + bucket);
        Auth auth = Auth.create(accessKey, secretKey);
        StringMap putPolicy = new StringMap();
        putPolicy.put("returnBody", "{\"key\":\"$(key)\",\"hash\":\"$(etag)\",\"bucket\":\"$(bucket)\",\"fsize\":$(fsize)}");
        long expireSeconds = 3600;
        String UpToken = auth.uploadToken(bucket, null, expireSeconds, putPolicy,false);
        System.out.println(UpToken);
        return UpToken;

    }
    // 获取Auth
    public Auth getAuth() {
        Auth auth = Auth.create(accessKey, secretKey);
        return auth;

    }
    // 向数据库插入一条视频记录
    public boolean insertVideo(Video video) {
     if(videoMapper.insertSelective(video)==1)
         return true;
     else
         return false;

    }
    // 向数据库删除一条视频记录
    public boolean deleteVideo(int id) {
        if(videoMapper.deleteByPrimaryKey(id)==1)
            return true;
        else
            return false;

    }
    // 向数据库查询所有视频
    public List<Video> getAllVideo() {
        List<Video> videos=videoMapper.selectByExample(null);
            return videos;

    }
    // 修改点击量
    public boolean addViewCount(Video video) {
       Video svideo= videoMapper.selectByPrimaryKey(video.getVideoId());
       Integer count=svideo.getVideoViewCount();
       svideo.setVideoViewCount(count+1);
       if(videoMapper.updateByPrimaryKeySelective(svideo)==1)
           return  true;
       else
           return false;

    }
    // 修改视频信息
    public boolean updateVideo(Video video) {
        if(videoMapper.updateByPrimaryKey(video)==1)
            return  true;
        else
            return false;

    }

    //返回视频截帧图片URL
    public String getVideoImageUrl(String videoName) {
       String VideoImageurl= getAuth().privateDownloadUrl("http://pp4665x66.bkt.clouddn.com/"+videoName+"?vframe/jpg/offset/10");
        return VideoImageurl;

    }
}
