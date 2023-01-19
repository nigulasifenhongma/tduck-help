# 文件存储配置

## 前言

文件存储支持多种方式，如使用第三方Oss进行文件存储，则去对应平台获取相关参数即可，推荐使用七牛云，友链地址：https://s.qiniu.com/ZBBBje

## 方式一：推荐 ｜ 使用七牛云存储

以七牛云为例，先进入[七牛云](https://s.qiniu.com/ZBBBje)个人中心获取秘钥信息
![image.png](https://oss.tduckcloud.com/1649922836175-a31bc5f8-0df5-4d48-83bd-f2ca4cff162b.png)
创建一个对象存储空间，空间名称就是 bucketName![image.png](https://oss.tduckcloud.com/1649922868147-b6ab4103-f3eb-437c-8af9-e3dd943eed01.png)
绑定一个用户访问文件的域名
![image.png](https://oss.tduckcloud.com/1649922917269-0fd5ba4c-a99e-4c33-93c1-1e8adc32e5e8.png)
生成配置如下图所示：**请注意：填写访问域名时需要加上https/http！**
![image.png](https://oss.tduckcloud.com/1642731101633-7a23f340-f7c3-4dc8-8e61-b6cff7bfa949.png)

---


## 方式二：使用后端项目为文件提供访问服务

进入tdcuk后台-系统管理-系统配置中找到文件存储
1.选择类型为“本地”，自定义一个存储路径
2.如下所示，注意替换ip为你的ip，端口需要开放，例如：http://192.168.1.2:8998/tduck-api/u
3.注意要**重启后端项目**
![image.png](https://oss.tduckcloud.com/1666502715914-4f4a7ebb-2b9b-4e24-8135-1ac4b85ad48d.png)

---

## 

## 方式三：使用nginx配置为上传目录提供访问

**注意：前提条件，已经安装完成nginx并可以正常使用（很多人直接忽略这一步！）**

1.宝塔面板中，在前端项目的配置文件中，增加如下参数； alias  /application/static/upload/;   可以替换成你设置的文件上传的路径

```
location /file {
    alias  /application/static/upload/;
}

```

#### ![image.png](https://oss.tduckcloud.com/1666503085249-bce67999-704c-4779-9500-695b32f9d63d.png)

2.进入Tduck后台，选择“本地”，把上述步骤定义的文件路径填写好
3.系统设置中，访问域名要按照此格式填写： **http://前端项目访问地址/file**，需要添加/file才能正常访问
⚠️ 域名必须要可以直接打开tduck后台页面，域名+端口号的记得加上端口号！
![1649922324(1).png](https://oss.tduckcloud.com/1649922329241-849c5196-cbbb-44c2-8bec-4922a6f212d3.png)
如果图片不能回显，检查是否有宝塔自带的默认参数，删掉他，再重新访问！
![image.png](https://oss.tduckcloud.com/1655821686519-56548a75-0246-4da9-92d0-985f5a0293cd.png)
