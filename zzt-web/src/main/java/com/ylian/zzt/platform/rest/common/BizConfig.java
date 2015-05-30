/**
 * created since 2012-5-24 上午11:08:40
 */
package com.ylian.zzt.platform.rest.common;

import org.apache.commons.lang.math.NumberUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

/**
 * @author Jacky
 */
@Configuration("bizConfig")
@ImportResource("classpath:META-INF/spring/properties-config.xml")
public class BizConfig {

    private
    @Value("#{community['img.url']}")
    String imgURL;

    private
    @Value("#{community['img.mall.url']}")
    String imgMallURL;

    private
    @Value("#{community['voice.url']}")
    String voiceURL;

    private
    @Value("#{community['ads.url']}")
    String adsURL;

    private
    @Value("#{community['page.size']}")
    String pageSize;

    private
    @Value("#{community['bill.page.size']}")
    String billPageSize;

    private
    @Value("#{community['upyun.image.bucket']}")
    String upyunImageBucket;

    private
    @Value("#{community['upyun.mall.image.bucket']}")
    String upyunMallImageBucket;

    private
    @Value("#{community['upyun.ads.bucket']}")
    String upyunAdsBucket;

    private
    @Value("#{community['upyun.shopimage.bucket']}")
    String upyunShopImageBucket;

    private
    @Value("#{community['upyun.voice.bucket']}")
    String upyunVoiceBucket;

    private
    @Value("#{community['upyun.username']}")
    String upyunUsername;

    private
    @Value("#{community['upyun.password']}")
    String upyunPassword;

    private
    @Value("#{community['img.local.path']}")
    String imgLocalPath;

    private
    @Value("#{community['jpush.master.secret']}")
    String jpushMasterSecret;

    private
    @Value("#{community['jpush.app.key']}")
    String jpushAppKey;

    private
    @Value("#{community['jpush.property.master.secret']}")
    String jpushPropertyMasterSecret;

    private
    @Value("#{community['jpush.property.app.key']}")
    String jpushPropertyAppKey;

    private
    @Value("#{community['jpush.enviroment']}")
    String jpushEnviroment;

    private
    @Value("#{community['solr.url']}")
    String solrUrl;

    private
    @Value("#{community['solr.base.server.url']}")
    String solrBaseUrl;

    private
    @Value("#{community['communitygw.base.server.url']}")
    String communitygwBaseServerUrl;

    private
    @Value("#{community['pm25.appkey']}")
    String pm25Appkey;

    private
    @Value("#{community['sms.send.url']}")
    String smsSendUrl;

    private
    @Value("#{community['sms.send.key']}")
    String smsSendKey;

    private
    @Value("#{community['sms.send.maxTimes']}")
    String smsSendMaxTimes;


    public String getSolrBaseUrl() {
        return solrBaseUrl;
    }

    public void setSolrBaseUrl(String solrBaseUrl) {
        this.solrBaseUrl = solrBaseUrl;
    }

    public int getSmsSendMaxTimes() {
        return NumberUtils.toInt(this.smsSendMaxTimes, 5);
    }

    public String getJpushEnviroment() {
        return jpushEnviroment;
    }

    public String getVoiceURL() {
        return voiceURL;
    }

    public String getUpyunVoiceBucket() {
        return upyunVoiceBucket;
    }

    public String getImgLocalPath() {
        return imgLocalPath;
    }

    public String getUpyunImageBucket() {
        return upyunImageBucket;
    }

    public String getUpyunUsername() {
        return upyunUsername;
    }

    public String getUpyunPassword() {
        return upyunPassword;
    }

    public String getJpushMasterSecret() {
        return jpushMasterSecret;
    }

    public String getJpushAppKey() {
        return jpushAppKey;
    }

    public Integer getBillPageSize() {
        int size = NumberUtils.toInt(this.billPageSize);
        if (size <= 0)
            return 10;
        else
            return size;
    }

    public Integer getPageSize() {
        int size = NumberUtils.toInt(pageSize);
        if (size <= 0)
            return 15;
        else
            return size;
    }

    public String getImgURL() {
        return imgURL;
    }

    public String getSolrUrl() {
        return solrUrl;
    }

    public String getPm25Appkey() {
        return pm25Appkey;
    }

    public String getSmsSendUrl() {
        return smsSendUrl;
    }

    public String getSmsSendKey() {
        return smsSendKey;
    }

    public String getUpyunShopImageBucket() {
        return upyunShopImageBucket;
    }

    public String getJpushPropertyMasterSecret() {
        return jpushPropertyMasterSecret;
    }

    public String getJpushPropertyAppKey() {
        return jpushPropertyAppKey;
    }

    public String getImgMallURL() {
        return imgMallURL;
    }

    public String getUpyunMallImageBucket() {
        return upyunMallImageBucket;
    }

    public String getUpyunAdsBucket(){
        return upyunAdsBucket;
    }

    public String getAdsURL(){
        return adsURL;
    }

    public String getCommunitygwBaseServerUrl() {
        return communitygwBaseServerUrl;
    }
}
