package com.iplay.test;

import com.qiniu.common.Zone;
import com.qiniu.storage.BucketManager;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.model.FileInfo;
import com.qiniu.util.Auth;
import org.junit.Test;

public class videoListTest {
    @Test
    public static void main(String[] args) {
        //构造一个带指定Zone对象的配置类
        Configuration cfg = new Configuration(Zone.zone0());
//...其他参数参考类注释

        String accessKey = "1AkEJ34HwNKA6oRflx6yeO6okys3NYHF4qilLY5N";
        String secretKey = "3LUPBwL7hTdw193ppcU_wysJ1-QpwHfJ91Fa0JpZ";

        String bucket = "iplay";

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
            FileInfo[] items = fileListIterator.next();
            for (FileInfo item : items) {
                System.out.println("文件名 "+item.key);
                System.out.println("文件hash "+item.hash);
                System.out.println("文件大小 "+item.fsize);
                System.out.println("文件的minmeType "+item.mimeType);
                System.out.println("文件的上传时间" +item.putTime);
                System.out.println(item.endUser);
            }
        }

    }
}
