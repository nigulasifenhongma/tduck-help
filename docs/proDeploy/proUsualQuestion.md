# 常见问题

## 1.ES部署docker部署教程

如果填写报错或者数据查看页报错，一定是ES没配置，**求求别再问了，先自己研究一下**<br />[https://www.cnblogs.com/pigll/p/13684134.html](https://www.cnblogs.com/pigll/p/13684134.html)<br />如果出现启动问题， -e ES_JAVA_OPTS="-Xms64m -Xmx128m" \这一行可以删掉<br />使用用docker 一定要做好文件读写映射<br />ES 9200端口有反馈可用，就直接运行后端

另外也可以参照：

elasticsearch的部署文档参照：[https://www.cnblogs.com/fangxinxin/p/15743634.html](https://www.cnblogs.com/fangxinxin/p/15743634.html)<br />[https://www.jianshu.com/p/d73fe0f8a8a2](https://www.jianshu.com/p/d73fe0f8a8a2)<br />[https://blog.csdn.net/weixin_45551608/article/details/122256961](https://blog.csdn.net/weixin_45551608/article/details/122256961)


## 2.为什么我表单提交不了？为什么查询报错？

百度一分钟，群里吹逼两小时。<br />这个首先检查ES是否正常运行，是否有配置es<br />![d89cbeb35daba276637461ccbd3c6b8.png](https://oss.tduckcloud.com/1642642741484-4d53b69d-9083-40ab-90e6-7f75456c99e1.png)


## 3.ES在哪里改配置？

![d3929d7818939b2634ecbd05a0f4ffb.png](https://oss.tduckcloud.com/1642572381434-a893db3d-baf8-4db4-b1ca-0aee904e2fca.png)


## 4.访问前端，请求出现502？

一般为nginx未配置正确，请检查Ng的配置，文档地址：[pro部署](./index.md)


##  5.doc/tduck-pro.sql 里的默认用户密码是啥？

admin/12345678


## 6.sys_notice没有这张表/数据库文件怎么执行？

![4fd8e96c6826e9c1dba66d657ec1856.png](https://oss.tduckcloud.com/1642571966349-4b84fc31-65e2-4a27-9783-34ef8f47411e.png)


## 7.文件已经能存到阿里云的oss上，在前台点击查看文件的时候，系统提示404，请问这个问题有没有谁遇到过？

一定是域名配置有问题，请检查第三方参数与域名设置


## 8.执行maven时候报错？

initializationError(com.tduck.cloud.activiti.service.impl.ActivitiExpressionTest): Invalid test class 'com.tduck.cloud.activiti.service.impl.ActivitiExpressionTest':(..)<br />  test(com.tduck.cloud.api.web.controller.system.ElasticsearchTest): Elasticsearch exception [type=resource_already_exists_exception, reason=index [test001/TqWgcRKvT0G_yN0is1Cylw] already exists]; nested exception is [test001/TqWgcRKvT0G_yN0is1Cylw] ElasticsearchStatusException[Elasticsearch exception [type=resource_already_exists_exception, reason=index [test001/TqWgcRKvT0G_yN0is1Cylw] already exists]]<br />![image.png](https://oss.tduckcloud.com/1642561569011-5c1f715a-e79e-4d00-8717-dfbdb77c072e.png)<br />跳过单元测试即可


## 9.点击文件的时候，先跳转这个网址，后面再报404错误？

OSS域名没有配置域名的时候是不是没带https://


## 10.本地文件存储如何配置？

![10dd410131513be3bf58716a6c23fca.png](https://oss.tduckcloud.com/1642561642893-117fb5e9-a4ba-43db-8062-27e34722d9b7.png)


## 11.短信如何配置？

以阿里云为例，首先到阿里云申请短信之后，需要将模板code填入tduck短信配置

![1642571759(1).png](https://oss.tduckcloud.com/1642571762026-d4663513-9b24-4182-b407-f137c5c52c46.png)<br />再填入appkey、secret等参数即可


## 12.在部署的时候vue端只能部署在ROOT目录下吗？

不是！可以自己改的，如图

![6bfdb49e88f0860e888b32529a186d3.png](https://oss.tduckcloud.com/1642572209140-2cb5fd31-7d94-44a4-9f6f-3012c25e1b68.png)


## 13.数据库连接报错 什么url 密码不对 ？

首先检查指定的是哪个配置文件，然后检查密码和数据库地址是否正确

![e147e6dd7d6cbae942c604c3a30af6b.png](https://oss.tduckcloud.com/1642572296113-60c5e5b2-ea4f-4bc6-932a-c915111aa17c.png)


## 14.找不到act开头的表，act_xxx等？

如果碰到提示activiti相关表找不到。可以参考该链接 [https://blog.csdn.net/chen649053473/article/details/104793352](https://blog.csdn.net/chen649053473/article/details/104793352)<br />启动会自动创建表，如果没有就按链接改参数，并重启就会自动创建表



## 15.支持什么邮箱，exchange支持吗，腾讯邮箱支持吗？

邮箱是通过_SMTP 协议发送的，支持该协议的所有邮箱都支持_


## 16.配置了微信参数但是微信订阅二维码没有显示？

首检查微信参数配置是否正确，公众号IP白名单是否配置<br />[邮件/短信/公众号配置](https://www.yuque.com/tduck/home/mg3mqq?view=doc_embed)

> **一定要记住：重启后端项目！**

![c02e7907c51aaf763360914cb4440f3.png](https://oss.tduckcloud.com/1642670794116-9fbc40f6-e4ac-42e3-bf23-acdb71ab3159.png)


## 17.配置了OCR但是提示：未配置映射规则，无法使用？

需要在OCR组件中设置具体的规则

![7f91caebc522677cad8ec71f09dfad5.png](https://oss.tduckcloud.com/1642670903040-08439376-dcb3-49a7-9073-978e5c14adde.png)

![1eb9ee90086ad7fe045cf729b5bc9fc.png](https://oss.tduckcloud.com/1642670910110-428c1c7d-3ef0-4bb1-849d-9cbcf158a48a.png)


## 18.逻辑显示怎么使用？

![8071c0e554af723a2c76538c99b87f1.png](https://oss.tduckcloud.com/1643166330948-3a9279c0-7fc9-44cb-8a1b-c9afe71018a0.png)



## 19.表单数据查询报错，ElasticSeach错误 [type=illegal_argument_exception, reason=request [/c99bddd398da4e818ff006d930b023fa/_search] contains unrecognized parameter: [ccs_minimize_roundtrips]]; nested exception is ？

Springboot版本和Es的版本不匹配，换新版本的Es。

**es版本建议使用 7.14 /7.16.2，部分版本与Springboot不兼容**

![image.png](https://oss.tduckcloud.com/1643183534740-55f216e6-d0fe-40c0-8174-831515d72925.png)


## 20.外观预览/表单发布后访问出现500错误

![c1e2ed21a45ccaa4b9fb9af8e2ca1d9.png](https://oss.tduckcloud.com/1646100438743-6d0e22ca-04b4-4a27-952a-bd30d0d8a118.png)

检查NG的配置，注意空格等格式问题，建议直接复制官方提供的ng配置


## 21.为什么流程图显示乱码？

![8ef1fe09920631faca2e7c781265019.jpg](https://oss.tduckcloud.com/1647225682368-98323369-8dc3-47c8-93b0-f1c13b312c1e-20230119094837501.jpeg)


## 22.进入表单设置报错

微信参数没有进行配置，需要在系统配置中填入参数，如果没有微信公众号则随机填写

![image.png](https://oss.tduckcloud.com/1649511673773-8cec2b4f-0734-40f9-9502-e12a6efd29da-20230119094842557.png)


## 23.表单外观页面404

如果下图中表单外观页面出现404等不能正常显示的问题时，在Nginx配置文件中，增加如下配置

![9d0b8b237db6ea2c6eff80057ee8d97.png](https://oss.tduckcloud.com/1654594237970-b3a80fdc-3f57-4ea9-97bf-c9768188b9e6-20230119094846809.png)

## 24.进入数据列表报错

如果部署后进入下面页面提示错误，则需要检查ES配置是否正常

![image.png](https://oss.tduckcloud.com/1649512411586-160f6449-1438-4f06-8271-0308f3929251-20230119094850361.png)

## 25.正常编译但启动报错，启动报错不知道什么问题

检查打包的日志，是否含有非正常的jar导致启动失败，执行mvn clean后重新打包

![727acd5d9a08b7e2cc2ea704386f933.png](https://oss.tduckcloud.com/1653362290298-ae9fbbf5-4468-4fe0-b792-b446761d916f-20230119094855313.png)


## 26.webSocket 连接报错

检查nginx文件，复制官方的文件后（如下）

![image.png](https://oss.tduckcloud.com/1655438045642-ee6cba73-d321-4bfb-b9da-0fcb83b8de55-20230119094900550.png)


## 27.表单中的中文出?????，中文全是问号，怎么办？

![image.png](https://oss.tduckcloud.com/1658717441785-7e78cdb8-32ad-40f6-afa5-9aef3cb12937-20230119094904393.jpeg)

参考如下链接，此类问题大部分是基础环境配置问题，数据库编码问题，需要自行解决


## 28.只能导出10000条数据？

es默认导出限制为10000，需要参考如下设置解决

elasticsearch默认输出最多一万条

查询第10001条数据开始就会报错：Result window is too large, from + size must be less than or equal to<br />但是很多时候10000数据不能满足项目的需求，所以我们就要解除这个限制。

参数设置：

下面我们通过Elasticsearch的API设置最大的读取行。

![image.png](https://oss.tduckcloud.com/1662080295103-9b2827b1-7a24-4918-9047-30c4e90f01d5-20230119094909003.png)<br />注：Elasticsearch支持的最大值是2^31-1，也就是2147483647。

验证：<br />下面我们来查看一下是否设置成功：<br />![image.png](https://oss.tduckcloud.com/1662080303514-4831e7ee-9669-43bd-9d83-32d36fc18b7b-20230119094912332.png)



### 29.文件大小限制不生效，上传报错：413 Request Entity Too Large

宝塔的nginx配置文件需要增加如下配置 client_max_body_size 200m;  （大小随便调）<br />![企业微信截图_67d96ba6-4859-4cad-b801-48ce284c72ec.png](https://oss.tduckcloud.com/1665894009338-7c149a35-dd02-4f96-b6a9-dc668b606d66-20230119094916594.png)

## 30.安装证书后，访问报错：后端连接异常

安装证书后不能请求后；前端项目nginx配置文件中listen443端口就好了，**删掉http2 **保存文件<br />![image.png](https://oss.tduckcloud.com/1666423643271-462cbdbe-0895-4e23-abe7-40a25ea2d8e4-20230119094922189.png)
