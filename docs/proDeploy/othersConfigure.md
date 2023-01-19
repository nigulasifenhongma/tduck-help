# 邮件/短信/公众号配置

目前系统内使用的消息类型为 邮件，微信公众号，短信。根据具体使用情况配置

## 邮件配置

邮件支持所有支持stmp协议的邮箱，如腾讯企业邮，qq邮箱，网易，163，outlook等
配置如下，授权码非密码，如何获取授权可以自行查阅使用的邮箱平台
![image.png](https://oss.tduckcloud.com/1642731972052-41705975-6a9e-4cc5-a4ab-e169e236f8c5.png)

## 短信配置

短信目前支持阿里云，腾讯云等。需要去获取对应的短信平台配置参数，以及申请短信签名，模板等。
申请模板内容格式如下，主要注意不同动态参数要保持一致，否则会导致参数传递失败，如{} ${code}这种.

### 腾讯云
![image.png](https://oss.tduckcloud.com/1642732407275-6565b69f-d987-48c6-ae60-ddd85c4e44e9.png)
### 阿里云
![image.png](https://oss.tduckcloud.com/1642732509592-2c9d693a-2dc0-4e4e-9103-c433e6189fa8.png)

### 配置短信配置
![image.png](https://oss.tduckcloud.com/1642732154747-a69076c1-5724-49dd-995d-39c9034a838c.png)

![image.png](https://oss.tduckcloud.com/1642732628451-86c015cf-fe90-44db-9ed7-b321b01bd680.png)
![image.png](https://oss.tduckcloud.com/1667525031559-f9fa26fa-6ec4-4391-bdf7-3bcb3726f3f5.png)

::: danger 注意：修改第三方模板Id为你申请的模板Id，模板code和内容此处仅供查看，无实际意义。
:::

## 微信公众号配置

1.进入tduck后台，系统管理-系统配置-微信公众号
2.appId，AppSecret去微信公众号平台获取，其他参数为自己生成即可，需要按照指定长度
3.菜单位置：公众号 设置与开发-基本配置

![image.png](https://oss.tduckcloud.com/1642732908621-614bb804-431e-4150-8351-26c79173b733.png)

请注意：复制参数时不能有空格

![image.png](https://oss.tduckcloud.com/1642733041144-4f89986c-1f51-467c-b537-4c47caffbc18.png)
![image.png](https://oss.tduckcloud.com/1642732998830-24e4ab03-017a-4b81-b230-4fb413ac6306.png)


4.配置参数之后去微信开启服务器配置并启用，服务器地址(URL)为后端项目接口

> 格式要求：你的域名[/tduck-api/wx/mp/portal/]你的appId

> 例如： https://pro.tduckapp.com/tduck-api/wx/mp/portal/wx0d6a2a9fd1a0edab

![image.png](https://oss.tduckcloud.com/1642733110840-8bcd2336-9e5f-4c3f-aee9-c48b7b7ca74c.png)

5.接下来设置业务域名以及js分享域名；此处不配置会影响分享样式

![image.png](https://oss.tduckcloud.com/1666532814377-d3a5a87d-7d69-4b2a-b4c9-6fbf493fb1f6.png)

6.接下来申请模板消息，首先需要在微信公众号后台-模板消息申请一样格式模板，参数需要保持大概一致

![image.png](https://oss.tduckcloud.com/1642733327439-7473f1f8-150c-4f8a-8cfc-b29b180d2f48.png)

模板仅供参数，`.DATA`内为参数，会被赋值替换为需要的信息

**注意**: 修改第三方模板Id为你申请的模板Id，模板code不要修改，内容此处仅供查看，无实际意义。

7.配置模板到系统

![image.png](https://oss.tduckcloud.com/1642733391511-cb6b2354-408e-487c-8d96-6bae8b2c6e3d.png)

:::danger
**扫码订阅后没有收到通知？**
1.检查订阅是否成功
2.确认是否“保存设置”
3.取消关注公众号，通过扫码重新关注公众号
:::


