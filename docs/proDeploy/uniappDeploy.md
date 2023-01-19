# TDUCK'Uniapp部署文档

## 拉取代码

会提示你输入账号密码

```java
git clone https://请输入私服地址/tduck/tduck-uniapp.git
```

## 接口地址修改

打开小程序前端源码
[tduck-uniapp](https://git.tduckcloud.com/tduck/tduck-uniapp/src/branch/master)/[common](https://git.tduckcloud.com/tduck/tduck-uniapp/src/branch/master/common)/**config.js 文件**

```bash
const config = {
	// Pc网页项目地址
	webBaseUrl: 'https://pro.tduckcloud.com'
}

// 设置接口请求地址
config.baseUrl = 'https://pro.tduckcloud.com/tduck-api';

```

## 配置微信小程序相关信息

INSERT INTO `sys_env_config` (`id`, `env_key`, `env_value`, `update_time`, `create_time`) VALUES (19, 'wxMaEnvConfig', '{\"appid\": \"获取小程序的appid\", \"secret\": \"获取小程序的秘钥\"}', '2022-06-23 10:13:58', '2022-06-23 10:14:50');
:::danger
小程序必须审核并发布，审核成功并发布的小程序才能正常调用二维码生成接口！！
:::

## Uniapp打包微信小程序

### 预准备：注册微信小程序

首先进入微信公众平台，注册自己的微信小程序，完成个人信息配置，做好准备工作。
其次是准备好自己的uniapp工程文件，打开自己的x-builder，准备打包！

### 打包发布

1️⃣ 获取微信小程序id：
首先，登录微信公众平台，查看自己微信小程序的id号并复制：
![image.png](https://oss.tduckcloud.com/1665737031464-ef4d1b3f-ea87-4436-9310-fe2c72b05b7a.png)
2️⃣ 填写自己的小程序id：
打开uniapp自己的工程文件，选择 manifest.json文件->微信小程序配置，黏贴自己的小程序id：
![image.png](https://oss.tduckcloud.com/1665737043939-5615cd17-0484-4147-8ea7-f171d34f0f54.png)

3️⃣ 发布：
选中 发行->小程序-微信
![image.png](https://oss.tduckcloud.com/1665737092165-6369b215-804b-4c45-a382-bd78a9372437.png)
之后出现下面的弹窗，此时微信小程序名称随便填不影响，真正名称在于你自己在公众平台设置的那个，之后点击发行即可：
![image.png](https://oss.tduckcloud.com/1665737097313-f1abcd5e-e94b-4c9a-80ec-9a7d80b9a6dc.png)
接下来，x-builder会自动调开微信开发者工具(没有的朋友先安装)，我们选中右上角的上传按钮：
![image.png](https://oss.tduckcloud.com/1665737105707-7a3811da-833b-4047-a33d-d304a425e542.png)

之后，弹出的框中，版本号默认是1.0.0(我这个是已经发布的)，大家不要修改默认值；备注随便写一写，可以写有关提交日期等信息，方便以后备查，都填好后点击上传：
![image.png](https://oss.tduckcloud.com/1665737117668-c760dafe-657a-4ec9-8f3a-b4bbc384c47a.png)

4️⃣ 公众平台提交审核：
最后一步，登录微信公众平台，选择版本管理，会发现上一步自己提交的版本，之后点击提交审核即可，如果是首发可以尝试来一个加速审核，能节省一些时间。
![image.png](https://oss.tduckcloud.com/1665737130309-4ba5673b-ca33-4cdf-9c39-ab47fa71b312.png)

### 配置域名

:::tips
发布自己的小程序之前，务必先配置一下域名，这样小程序才能使用网络功能，不配置域名，任何互联网的访问功能(api访问)都会失败。
:::
首先登陆微信公众平台，选择开发管理->开发设置->服务器域名，配置自己的合法域名。
![image.png](https://oss.tduckcloud.com/1665750029171-c2dea348-7124-45e3-ad1a-210227a74cca.png)
![image.png](https://oss.tduckcloud.com/1665750053101-9b10367c-8061-481e-b556-3859c270b354.png)
这里要注意，ip地址是不可以的，必须是域名，因而没有域名的请先注册域名，而后备案，之后用域名进行配置。

版权声明：本文为CSDN博主「跳探戈的小龙虾」[http://t.csdn.cn/rVetn](http://t.csdn.cn/rVetn)

