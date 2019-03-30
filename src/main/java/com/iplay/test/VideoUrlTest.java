package com.iplay.test;

import com.qiniu.util.Auth;
import org.junit.Test;

import java.io.UnsupportedEncodingException;

import static java.net.URLEncoder.encode;


public class VideoUrlTest {
    @Test
    public static void main(String[] args) throws UnsupportedEncodingException {
        String fileName = "AntMan2.mp4";
        String domainOfBucket = "http://pp4665x66.bkt.clouddn.com";
        String encodedFileName = encode(fileName, "utf-8");
        String publicUrl = String.format("%s/%s", domainOfBucket, encodedFileName);
        String accessKey = "1AkEJ34HwNKA6oRflx6yeO6okys3NYHF4qilLY5N";
        String secretKey = "3LUPBwL7hTdw193ppcU_wysJ1-QpwHfJ91Fa0JpZ";
        Auth auth = Auth.create(accessKey, secretKey);
        long expireInSeconds = 3600;//1小时，可以自定义链接过期时间
        String finalUrl = auth.privateDownloadUrl(publicUrl, expireInSeconds);
        String info="avinfo";

        //返回avinfo 数据
        System.out.println(auth.privateDownloadUrl("http://pp4665x66.bkt.clouddn.com/v2/tune/loganalyze/topcounturl"));
        //返回avinfo 数据
        System.out.println(auth.privateDownloadUrl("http://pp4665x66.bkt.clouddn.com/AntMan2.mp4?avinfo"));
        //返回视频截帧图片URL
        System.out.println(auth.privateDownloadUrl("http://pp4665x66.bkt.clouddn.com/AntMan2.mp4?vframe/jpg/offset/10"));
        //返回视频下载URL
        System.out.println(finalUrl);
    }
}
