# 前言
:::info
自TDUCK开源以来，收到许许多多微信社群朋友的反馈，其中关心最多的莫非就是部署的相关问题，对于初学者或者行业小白来说，非常希望能够简化部署方式。为了满足伙伴们的需求，现在我们推出简化部署教程；**能够支持一键运行**，初学者也可以快速体验TDUCK带来的信息收集能力。**若有收获，请点 **[**star >**](https://gitee.com/TDuckApp/tduck-platform)！
:::
[点击查看【bilibili】](https://player.bilibili.com/player.html?bvid=BV1gS4y1Y7bw)
## 部署文件
扫码关注公众号，回复“部署文件”，**注意事项：部署之前需要先安装JDK8**
![qrcode_for_gh_9978e65775fa_258.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/639882/1650684937805-abac75b0-4f7e-47f1-acbb-938c49c36705.jpeg)
## 文件说明
```java
application-custom.yml=外置启动文件
tduck-api.jar=主安装文件
无微信登录tduk-api.jar=关闭微信登录的jar
tduck-v3.sql=数据库文件
```



---

## 基础环境
### MySql安装
使用宝塔面板的应用商店，搜索mysql，并点击安装
![image.png](https://cdn.nlark.com/yuque/0/2022/png/639882/1649423530709-74dd1a7d-8bb0-4416-9fa5-f290e07be15e.png)
:::danger
选择数据库版本，**一定一定一定要选择5.7！**
:::
![image.png](https://cdn.nlark.com/yuque/0/2022/png/639882/1649423593061-66ea46c3-f2b6-44c2-9a6d-cb08f926a9eb.png)
等待任务处理完成即可
![image.png](https://cdn.nlark.com/yuque/0/2022/png/639882/1649423646830-365eedf8-0ac2-42e6-af2b-28c7042827b0.png)
可以将mysql设置为首页显示，方便后期寻找
![image.png](https://cdn.nlark.com/yuque/0/2022/png/639882/1649423756842-cd588311-4ccc-4136-aa76-b08970a8255b.png)
### Java环境安装
步骤同上，安装完java一键部署后，安装一个tomcat8（需要使用到自带的jdk）![image.png](https://cdn.nlark.com/yuque/0/2022/png/639882/1649424084542-12c38eb6-5871-4ee2-8f7d-0a084de830f7.png)
## 开始部署
### 导入数据库
目前只支持mysql5.7及以上版本，创建数据名为 tduck
![image.png](https://cdn.nlark.com/yuque/0/2022/png/639882/1650683373838-da455b0d-f20e-48c2-bf04-b3204480ceb4.png)
公众号回复“部署文件”下载 tduck-v3.sql 文件 并且导入创建的数据中
![image.png](https://cdn.nlark.com/yuque/0/2022/png/639882/1650765906291-a85ced8f-c12a-4528-b438-0221cdedfdc8.png)
进入宝塔，数据库选择导入
![image.png](https://cdn.nlark.com/yuque/0/2022/png/639882/1650683409892-aaa0e361-a203-4bd8-b760-2e2d73d2ec4b.png)
### 下载项目jar文件
公众号回复“部署文件”下载项目jar包文件  tduck-api.jar 到本地
![image.png](https://cdn.nlark.com/yuque/0/2022/png/639882/1650765878514-0f81d8c9-b6e2-478a-92cc-737d41d38844.png)
### 上传jar包
打开文件管理，选择一个路径， 将上述步骤下载的jar文件上传到目录下
![image.png](https://cdn.nlark.com/yuque/0/2022/png/639882/1650683792916-d7901ef4-fec7-4569-b39b-90c6b16271fa.png)
## 启动项目
### 方式一
使用启动参数启动项目
创建java项目，“项目jar路径”选择上传的jar文件，项目名称改成“tduck-api”，指定8999端口（确保安全组、防火墙已经开启且没有被占用），复制启动命令：
```java
/www/wwwroot/tduck-api.jar --server.port=8999  --spring.datasource.url=jdbc:mysql://localhost:3306/tduck --spring.datasource.username=root --spring.datasource.password=root

```
将启动命令填入“项目执行命令”框，选择root用户
![image.png](https://cdn.nlark.com/yuque/0/2022/png/639882/1650683655887-e2602dc6-b28a-4cd8-b4d5-1d7a114505b6.png)
**避坑事项：**
![adb620f9d14d8ad4e54d247d3ddb0b5.png](https://cdn.nlark.com/yuque/0/2022/png/639882/1653223763600-c70087d7-71d4-40f3-a647-e71c4fd2cca8.png)
:::danger

- 很多伙伴填错了数据库账号、用户名、密码
- 如果数据库是同一台机器，数据库连接信息使用localhost即可
- 启动用户请使用 root 用户，避免有些机器不能启动问题
- 注意参数之中的空格和--    非常重要！！！
  :::

### 方式二
使用配置文件启动项目
下载 application-custom.yml 配置文件
把下载的jar包和配置文件放在同一个目录下，如图
![](https://cdn.nlark.com/yuque/0/2022/png/694911/1645087445895-5027e342-b16d-44e0-9e97-aba8e8459fd7.png)
修改为自己的配置，主要修改位置为**数据库**以及**文件存储**配置
![](https://cdn.nlark.com/yuque/0/2022/png/694911/1645087330153-0c063df7-b320-4174-ae79-db34fea286d1.png)
![](https://cdn.nlark.com/yuque/0/2022/png/694911/1645088227631-62bfc162-dce5-48d7-9704-c41e7ef6f211.png)
### 运行项目
创建java项目，“项目执行命令”中运行如下命令启动项目
java -Dfile.encoding=UTF-8 -jar tduck-api.jar --spring.profiles.active=custom
出现如下提示代表启动完成
![](https://cdn.nlark.com/yuque/0/2022/png/694911/1645087603336-182393f7-e10e-4989-9b6d-c9b0eea0fd44.png)

- 使用此方式适用于需要自行配置第三方参数的伙伴，否则推荐第一种方式

### 访问项目
浏览器地址栏输入[http://localhost:8999/](http://localhost:8999/)
默认账号密码：test@tduckapp.com/12345678
![](https://cdn.nlark.com/yuque/0/2022/png/694911/1645088252839-26782ccc-367a-4514-bfc0-61c35969cf2a.png)
:::info
**关于更新：**
为了后续进行更合理地维护工作，旧版本V2暂停维护，V2和V3非兼容性更新，建议重新部署。
后续将定期更新V3需求，如果有二开需求的建议您从V2版本fork开发。
若遇到问题，欢迎来[TDUCK社群](https://tduckcloud.com)反馈，若有收获，就点个[star](https://gitee.com/TDuckApp/tduck-platform)吧
:::

---

- [x] TDUCK填鸭表单基于Apache2.0开源协议，可免费学习或企业内使用
- [x] 项目发展离不开各位的支持；**拒绝白嫖，人人有责！**若有收获，请点 [**star >**](https://gitee.com/TDuckApp/tduck-platform)！

---

- [x] 如果您也有兴趣参与项目，请加入社群联系作者！
- [x] 如果您是企业或有更高阶功能的使用需求，可以了解[PRO版本](https://pro.tduckapp.com)！

![加入群聊二维码.png](https://cdn.nlark.com/yuque/0/2022/png/639882/1650767285614-a5530428-3ee4-44b6-b0bf-0f9a7e588db5.png)


<el-button>默认按钮</el-button>
<br/><br/>
<el-button>默认按钮</el-button>
<br/><br/>
<el-button type="primary">主要按钮</el-button>
<br/><br/>
<el-button type="success">成功按钮</el-button>
<br/><br/>
<el-button type="info">信息按钮</el-button>
