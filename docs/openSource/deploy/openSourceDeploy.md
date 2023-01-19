# 开源版宝塔部署

## 前言

自TDUCK开源以来，收到许许多多微信社群朋友的反馈，其中关心最多的莫非就是部署的相关问题，对于初学者或者行业小白来说，非常希望能够简化部署方式。为了满足伙伴们的需求，现在我们推出简化部署教程；能够支持一键运行，初学者也可以快速体验TDUCK带来的信息收集能力。若有收获，请点 [⭐️star>> >](https://gitee.com/TDuckApp/tduck-platform)

<iframe height=498 width=710 src="https://player.bilibili.com/player.html?bvid=BV1gS4y1Y7bw"/>



## 获取部署文件

扫码关注公众号，回复“部署文件”，注意事项：部署之前需要先安装JDK8

<img src="https://oss.tduckcloud.com/wps77.jpg" alt="填鸭表单官方公众号" style="width:150px;"/>

## 部署文件释义
application-custom.yml 为外置启动文件

tduck-api.jar 为主安装文件

无微信登录tduk-api.jar 为关闭微信登录的jar

tduck-v3.sql 为数据库文件

---
# 安装基础环境

### MySql安装

使用宝塔面板的应用商店，搜索mysql，并点击安装

![img](https://oss.tduckcloud.com/wps78.jpg)

选择数据库版本，一定一定一定要选择5.7！

![img](https://oss.tduckcloud.com/wps79.jpg)

等待任务处理完成即可

![img](https://oss.tduckcloud.com/wps80.jpg)

可以将mysql设置为首页显示，方便后期寻找

![img](https://oss.tduckcloud.com/wps81.jpg)

### Java环境安装

步骤同上，安装完java一键部署后，安装一个tomcat8（需要使用到自带的jdk）![img](https://oss.tduckcloud.com/wps82.jpg)

## 开始部署

### 导入数据库

目前只支持mysql5.7及以上版本，创建数据名为 tduck

![img](https://oss.tduckcloud.com/wps83.jpg)

公众号回复“部署文件”下载 tduck-v3.sql 文件 并且导入创建的数据中

![img](https://oss.tduckcloud.com/wps84.jpg)

进入宝塔，数据库选择导入

![img](https://oss.tduckcloud.com/wps85.jpg)

### 下载项目jar文件

公众号回复“部署文件”下载项目jar包文件 tduck-api.jar 到本地

![img](https://oss.tduckcloud.com/wps86.jpg)

### 上传jar包

打开文件管理，选择一个路径， 将上述步骤下载的jar文件上传到目录下

![img](https://oss.tduckcloud.com/wps87.jpg)

## 启动项目

### 方式一

使用启动参数启动项目

创建java项目，“项目jar路径”选择上传的jar文件，项目名称改成“tduck-api”，指定8999端口（确保安全组、防火墙已经开启且没有被占用），复制启动命令：

/www/wwwroot/tduck-api.jar --server.port=8999  --spring.datasource.url=jdbc:mysql://localhost:3306/tduck --spring.datasource.username=root --spring.datasource.password=root

将启动命令填入“项目执行命令”框，选择root用户

![img](https://oss.tduckcloud.com/wps88.jpg)

避坑事项：

![img](https://oss.tduckcloud.com/wps89.jpg)

· 很多伙伴填错了数据库账号、用户名、密码

· 如果数据库是同一台机器，数据库连接信息使用localhost即可

· 启动用户请使用 root 用户，避免有些机器不能启动问题

· 注意参数之中的空格和-- 非常重要！！！

### 方式二

使用配置文件启动项目

下载 application-custom.yml 配置文件

把下载的jar包和配置文件放在同一个目录下，如图

![img](https://oss.tduckcloud.com/wps90.jpg)修改为自己的配置，主要修改位置为数据库以及文件存储配置

![img](https://oss.tduckcloud.com/wps91.jpg)

![img](https://oss.tduckcloud.com/wps92.jpg)

### 运行项目

创建java项目，“项目执行命令”中运行如下命令启动项目

java -Dfile.encoding=UTF-8 -jar tduck-api.jar --spring.profiles.active=custom

出现如下提示代表启动完成

![img](https://oss.tduckcloud.com/wps93.jpg)

· 使用此方式适用于需要自行配置第三方参数的伙伴，否则推荐第一种方式

### 访问项目

浏览器地址栏输入http://localhost:8999/

默认账号密码：test@tduckapp.com/12345678

![img](https://oss.tduckcloud.com/wps94.jpg)

关于更新：

为了后续进行更合理地维护工作，旧版本V2暂停维护，V2和V3非兼容性更新，建议重新部署。

后续将定期更新V3需求，如果有二开需求的建议您从V2版本fork开发。

若遇到问题，欢迎来[TDUCK社群](https://tduckcloud.com)反馈，若有收获，就点个[star](https://gitee.com/TDuckApp/tduck-platform)吧



------



· TDUCK填鸭表单基于Apache2.0开源协议，可免费学习或企业内使用

· 项目发展离不开各位的支持；拒绝白嫖，人人有责！若有收获，请点 [star >](https://gitee.com/TDuckApp/tduck-platform)！



------



· 如果您也有兴趣参与项目，请加入社群联系作者！

· 如果您是企业或有更高阶功能的使用需求，可以了解[PRO版本](https://pro.tduckapp.com)！

![img](https://oss.tduckcloud.com/wps95.jpg) 
