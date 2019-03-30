package com.iplay.test;

import com.qiniu.cdn.CdnManager;
import com.qiniu.cdn.CdnResult;
import com.qiniu.common.QiniuException;
import com.qiniu.util.Auth;
import org.junit.Test;

import java.util.Arrays;
import java.util.*;

public class VideoLogTest {
    @Test
    public static void main(String[] args) throws  QiniuException{
        String accessKey = "1AkEJ34HwNKA6oRflx6yeO6okys3NYHF4qilLY5N";
        String secretKey = "3LUPBwL7hTdw193ppcU_wysJ1-QpwHfJ91Fa0JpZ";
        Auth auth = Auth.create(accessKey, secretKey);
        CdnManager c = new CdnManager(auth);
        //域名列表
        String[] domains = new String[]{
                "pp4665x66.bkt.clouddn.com"
        };
        //具体日期
        String logDate = "2019-03-29";
        try
        {
            CdnResult.LogListResult logListResult = c.getCdnLogList(domains, logDate);
            //处理得到的结果数据
            CdnResult.LogData[] logData=logListResult.data.get(domains[0]);
            //String passBackParams = getMapToString(logListResult.data.get(domains[0]));
            System.out.println(logData[0].url);
        } catch (QiniuException e) {
            System.err.println(e.response.toString());
        }
    }

    public static String getMapToString(Map<String,Object> map){
        Set<String> keySet = map.keySet();
        //将set集合转换为数组
        String[] keyArray = keySet.toArray(new String[keySet.size()]);
        //给数组排序(升序)
        Arrays.sort(keyArray);
        //因为String拼接效率会很低的，所以转用StringBuilder
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < keyArray.length; i++) {
            // 参数值为空，则不参与签名 这个方法trim()是去空格
            if ((String.valueOf(map.get(keyArray[i]))).trim().length() > 0) {
                sb.append(keyArray[i]).append(":").append(String.valueOf(map.get(keyArray[i])).trim());
            }
            if(i != keyArray.length-1){
                sb.append(",");
            }
        }
        return sb.toString();
    }


}
